import TopBar from "./TopBar";
import Navbar from "./Navbar";
import NoticeTicker from "./NoticeTicker";

const Header = ({ isLoggedIn, user, handleLogout }) => {
  return (
    <>
      <TopBar />
      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
      {!isLoggedIn && <NoticeTicker />}
    </>
  );
};

export default Header;