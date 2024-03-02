import "./Header.css";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
    </header>
  );
};

export default Header;