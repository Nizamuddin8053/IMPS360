const Student = require("../models/Student");
const Counter = require("../models/Counter");
const User = require("../models/User");
const Parent = require("../models/Parent");
const mongoose = require("mongoose");
const CLASS_PROGRESSION = require("../utils/class_progression");


// register student

exports.registerStudent = async (req, res) => {

    try {

        const studentData = req.body;

        // validation

        if (!studentData.name || !studentData.class || !studentData.dob || !studentData.gender
            || !studentData.parentId || !studentData.userId || !studentData.address || !studentData.phone
        ) {
            return res.status(400).json({
                succuss: false,
                message: "all fields are required",
            })
        }


        // check parent and student created as user 
        const parent = await User.findOne(studentData.parentId);
        const user = await User.findOne(studentData.userId);

        if (!parent || !user) {
            return res.status(400).json({
                succuss: false,
                message: "first create student and parent",

            })
        }




        // create admission number first
        const counter = await Counter.findOneAndUpdate(
            { id: "admissionNo" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true },  // update or insert(if document exist then update)
        );

        // add admisson no in student data
        const generatedAdmissionNo = `IMPS${counter.seq}`;

        studentData.admissionNo = generatedAdmissionNo;

        // create new student
        const newStudent = new Student(studentData);
        await newStudent.save();

        return res.status(200).json({
            success: true,
            message: "student registered successfully",
            data: newStudent,
        })

    } catch (error) {
        cosole.log("error registering student", error)
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }

}


// get all students

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
            .populate("userId")   // join parent and user details also
            .populate("parentId")
            .sort({ class: 1, createdAt: -1 });  // sort by the class name and created opposite

        return res.status(200).json({
            success: true,
            message: "students fetched successfully",
            students
        });


    } catch (error) {

        console.log("error fetching all students", error);
        return res.status(500).json({
            success: false,
            message: "error while fetching all students",
            error: error.message
        })

    }
}


// get student by Id

exports.getStudentById = async (req, res) => {
    try {

        const { userId } = req.body;

        // validataion
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required",
            })
        }


        const student = await Student.findOne({ userId })
            .populate("userId")    // merge all details of userId from user 
            .populate("parentId");


        // check student found or not        
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "student not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "student found successfully",
            student
        })

    } catch (error) {
        console.log("error while fetching student", error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}


// update student 

exports.updateStudent = async (req, res) => {
    try {
        const { userId } = req.params.id;
        const updateData = req.body;

        if (!updatedData || Object.keys(updateData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "provide student data"
            })
        }

        // delete if admissionNo provided we can't update admission no
        delete updateData.admissionNo;

        // nested address can't be updated make it flatten

        // make address flatten(why? for example update : {name: "nizam", address: {city:"Delhi"}})
        // now if we directly update data address contains street , pincode it will erase everything
        // it will only store city: Delhi in address 
        // now make updateData: {name: "Nizam", address: {city: "Delhi"}, "address.city": "Delhi"}
        // and remove address from updateData now updateData: {name: "Nizam", "address.city": "Delhi"}


        if (updateData.address) {
            for (const key in updateData.address) {
                updateData[`address.${key}`] = updateData.address[key];
            }
            delete updateData.address; // Remove the unflattened object
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            { userId: userId },
            { $set: updateData },
            { new: true, runValidators: true },
        ).populate("userId").populate("parentId");


        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: "student not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "student updated successfully",
            updatedStudent
        });

    } catch (error) {

        console.log("error while updating student", error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}


// always remember : Use an Object {} for methods starting with find...
// Methods like .find({userId: userId}), .findOne(), or .findOneAndDelete()

// findById...
// Methods like .findById(userId), .findByIdAndUpdate(), or .findByIdAndDelete()





// delete student

exports.deleteStudent = async (req, res) => {

    // create a session
    const session = await mongoose.startSession();
    // start transaction
    session.startTransaction();
    try {
        const studentUserId = req.params.id;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "provide userId"
            })
        }

        const student = await Student.findOneAndDelete(
            { userId: studentUserId }
        ).session(session);

        if (!student) {
            // revert all changes
            session.abortTransaction();
            // end session
            session.endSession();

            return res.status(404).json({
                success: false,
                message: "student not found"
            })
        }

        // also delete parent of student if only one student

        if (student.parentId) {

            // count other child of parent 
            const countSiblings = await Student.countDocuments({ parentId: student.parentId }).session(session);
            // means no sibling
            if (countSiblings === 0) {
                // get parent document 
                const parentDoc = await Parent.findById(student.parentId).session(session);

                if (parentDoc) {

                    if (parentDoc.userId) {
                        // delete parent from user
                        await User.findByIdAndDelete(parentDoc.userId).session(session);
                    }
                }
                // now delete parent from Parent
                await Parent.findByIdAndDelete(student.parentId).session(session);
            }
        }


        // now delete student from User table

        await User.findByIdAndDelete(studentUserId).session(session);

        // commit all changes
        await session.commitTransaction();
        session.endSession();

        // return success response
        return res.status(200).json({
            success: true,
            message: "student deleted successfully",
            student,
        })

    } catch (error) {

        // revert all transactions
        session.abortTransaction();
        session.endSession();

        console.log("error while deleting student", error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}




// promote student

exports.promoteStudent = async (req, res) => {

    try {
        const userId = req.params.id;
        // find student
        const student = await Student.findOne(
            { userId: userId }
        );

        if (!student) {
            return res.status(400).json({
                success: false,
                message: "student not registered"
            })
        }

        const currIdx = CLASS_PROGRESSION[student.class];

        if (currIdx === -1) {
            return res.status(400).json({
                success: false,
                message: `Current class '${student.class}' is not recognized in the system progression.`
            })
        }

        if (currIdx = CLASS_PROGRESSION.length - 1) {
            return res.status(400).json({
                success: false,
                message: "last class can't be promoted"
            })
        } else {
            student.class = CLASS_PROGRESSION[currIdx + 1];
        }
        await student.save();


        return res.status(200).json({
            success: true,
            message: `${student.name} is promoted to ${student.class}`,
            student
        })

    } catch (error) {

        console.log("error while promoting student", error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}


// promote entire class

exports.bulkPromoteClasses = async (req, res) => {
    try {
        // Iterate BACKWARDS through the sequence: 12th down to Nursery
        for (let i = CLASS_PROGRESSION.length - 1; i >= 0; i--) {
            const currentClass = CLASS_PROGRESSION[i];

            if (currentClass === "10TH") {
                // Graduate the senior class
                await Student.updateMany(
                    { class: "10TH" },
                    { $set: { class: "11TH" } }
                );
            } else {
                // Move current class to the next class in array sequence
                const nextClass = CLASS_PROGRESSION[i + 1];
                await Student.updateMany(
                    { class: currentClass },
                    { $set: { class: nextClass } }
                );

            }
        }

        return res.status(200).json({
            success: true,
            message: "All classes promoted successfully for the new academic year!"
        });

    } catch (error) {
        console.error("Bulk promotion failed:", error);
        return res.status(500).json({
            success: false,
            message: "Bulk promotion failed processing halfway through",
            error: error.message
        });
    }
};


// transfer student 



exports.transferStudent = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { userId } = req.params;
        const { transferType, targetClass, targetSection, remarks } = req.body;

        // 1. Validate transfer type
        if (!transferType || !["INTERNAL", "EXTERNAL"].includes(transferType.toUpperCase())) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid transferType: 'INTERNAL' or 'EXTERNAL'."
            });
        }

        // 2. Fetch the student document
        const student = await Student.findById(userId).session(session);
        if (!student) {
            await session.abortTransaction();
            session.endSession();
            return res.status(404).json({
                success: false,
                message: "Student record not found."
            });
        }

        // --- SCENARIO A: INTERNAL TRANSFER (Change Class/Section) ---
        if (transferType.toUpperCase() === "INTERNAL") {
            if (!targetClass || !targetSection) {
                return res.status(400).json({
                    success: false,
                    message: "Internal transfers require both targetClass and targetSection."
                });
            }

            // Validate that the target class exists in your sequence
            if (!CLASS_PROGRESSION.includes(targetClass)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid class name. Must be one of: ${CLASS_PROGRESSION.join(", ")}`
                });
            }

            // Validate section against schema constraints
            const allowedSections = ["A", "B", "C", "D"];
            if (!allowedSections.includes(targetSection.toUpperCase())) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid section. Choose from A, B, C, or D."
                });
            }

            // Update student credentials for the new classroom placement
            student.class = targetClass;
            student.section = targetSection.toUpperCase();
            
            // Append tracking logs to a history log if your schema tracks it
            // student.transferHistory.push({ from: student.class, to: targetClass, date: new Date(), remarks });
        }

        // --- SCENARIO B: EXTERNAL TRANSFER (Student Leaves the School) ---
        else if (transferType.toUpperCase() === "EXTERNAL") {
            // Update student operational standing to LEFT instead of hard-deleting
            student.status = "LEFT"; 

            // Safeguard: Deactivate the student's User login account instantly
            if (student.userId) {
                await User.findByIdAndUpdate(
                    student.userId, 
                    { isActive: false }
                ).session(session);
            }
        }

        // Save updated student records within the current transaction session
        await student.save({ session });

        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({
            success: true,
            message: `Student processed for ${transferType.toLowerCase()} transfer successfully.`,
            student
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error("Error during student transfer pipeline:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error occurred while processing transfer.",
            error: error.message
        });
    }
};

// getStudentsByClass

exports.getStudentsByClass = async (req, res) => {

    try {
        const { className } = req.body;

        if (!className) {
            return res.status(400).json({
                success: false,
                message: "please provide class"
            })
        }

        const students = await Student.find({ class: className })
            .populate("parentId", "fatherName motherName phone").sort({ admissionNo: 1 });

        if (students.length === 0) {
            return res.status(404).json({
                success: false,
                message: `students of class ${className} not added yet`,
            })
        }


        return res.status(200).json({
            success: true,
            message: `student of class ${className} fetched successfully`,
            students,
        })
    } catch (error) {
        console.log("errror while fetching students of a class");
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}

// regex tutorial 
// Other Regex OptionsMongoDB uses these single-character flags in the 
// $options string to modify search behavior

// :i (Case-Insensitive): Matches both uppercase and lowercase patterns.

// :m (Multiline): Alters the behavior of the ^ (start) and $ (end) anchors 
// so they match the start and end of each line rather than just the beginning/end
// of the whole string.

// :x (Extended): Ignores all unescaped whitespace characters in the regex pattern, 
// allowing you to format long or complex regex queries with line breaks and comments.


// s (Single-line/Dotall): Allows the dot . operator to match all characters, 
// including newline characters.u or

//  U (Unicode): Enables full UTF-8 matching for shorthand character classes
//   (e.g., \w, \b).How to use multiple optionsYou can combine these options into
// a single string.
// For example, { $regex: name, $options: "is" } enables both case 
// insensitivity and the dotall feature.



// searchStudents

exports.searchStudents = async (req, res) =>{
    try{

        const {name, className, admissionNo} = req.query;

        const query = {};

        if(name)
            query.name = {$regex: name, $options: "i"} // regular expression (i insensitive to handle case sensitivity)

        if(className)
            query.class = className
        if(admissionNo)
            query.admissionNo = admissionNo

        const students = await Student.find(query)
             .populate("parentId", "fatherName motherName phone")
             .sort({admissionNo: 1});

        if(students.length == 0){
            return res.status(404).json({
                success: false,
                message: "no student found",
            })
        }

        return res.status(200).json({
            success: true,
            noOfStudents: students.length,
            message: "students search successfull",
            students,
        })

    }catch(error){
        console.log("error while searching students", error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}
// updateStudentStatus

exports.updateStudentStatus = async (req, res)=>{

    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const userId = req.params.id;
        const {status} = req.body;

        if(!userId || !status){
            return res.status(400).json({
                success: false,
                message: "all fields are required",
            })
        }

        const allowedStatuses = ["ACTIVE", "PROMOTED", "DETAINED", "PASSED_OUT", "SUSPENDED", "LEFT"];

        if(!allowedStatuses.includes(status.toUpperCase())){
            return res.status(400).json({
                success: false,
                message: `invalid status! allowed statuses:  ${allowedStatuses.join(",")}`
            })
        }

        const targetStatus = status.toUpperCase();

        const student = await Student.findByIdAndUpdate(
            userId,
            {status: targetStatus},
            {new: true, runValidators: true}
        ).session(session);


        if(!student){
            session.abortTransaction();
            session.endSession();
            return res.status(404).json({
                success: false,
                message: "student not found"
            })
        }


        if(["PASSED_OUT", "SUSPENDED", "LEFT"].includes(targetStatus)){
            await User.findByIdAndUpdate(student.userId, {isActive: false}).session(session);
        }else if(targetStatus === "ACTIVE"){
            await User.findByIdAndUpdate(student.userId, {isActive: true}).session(session);
        }


        session.commitTransaction();
        session.endSession();

    }catch(error){

        session.abortTransaction();
        session.endSession();

        console.log("error while updating student status");
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}
