import Header from "./header/Header";
import Footer from "./footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
 

  return (
    <div>
      {/* isLoggedIn={false} user = {"Nizam"} handleLogout={()=>{console.log("logout")}} */}
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App;
