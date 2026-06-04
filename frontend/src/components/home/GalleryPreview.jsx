import { FaEye } from "react-icons/fa";
import {photos} from "../../imageConfig/photos"; 


const images = [
  { src: photos.occassion, tag: "Occassion" },
  { src: photos.campus, tag: "Campus Life" },
  { src: photos.yoga, tag: "Yoga" },
  { src: photos.assembly, tag: "Assembly" },
  { src: photos.sports, tag: "sports" },
  { src: photos.award, tag: "award" },
  { src: photos.award2, tag: "award" },
  { src: photos.camp, tag: "camp" },
  { src: photos.speech, tag: "speech" },
  { src: photos.kabaddi, tag: "Kabaddi" },
  { src: photos.kusti, tag: "Kusti" },
  { src: photos.independence, tag: "15 August" },
];

function viewAllHandler(){

}

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Campus Gallery</h2>
            <p className="text-gray-600 mt-2">A glimpse into the vibrant daily life at Ismail School</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-md bg-white aspect-4/3">
              <img 
                src={img.src} 
                alt={img.tag} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
                <span className="bg-yellow-500 text-gray-900 font-semibold text-xs px-2.5 py-1 rounded w-max mb-2">
                  {img.tag}
                </span>
                <div className="flex items-center gap-2 text-white font-medium">
                  <FaEye /> <span>Expand Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;