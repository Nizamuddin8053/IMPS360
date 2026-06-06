import Header from "./header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
 

  return (
    <div>
      {/* isLoggedIn={false} user = {"Nizam"} handleLogout={()=>{console.log("logout")}} */}
      <Header/>
      <AppRoutes/>
    </div>
  )
}

export default App;
