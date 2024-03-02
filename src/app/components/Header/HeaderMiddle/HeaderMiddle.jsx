import "./HeaderMiddle.css";
import HeaderMiddleLeft from "./HeaderMiddleLeft/HeaderMiddleLeft";
import HeaderMiddleRight from "./HeaderMiddleRight/HeaderMiddleRight";

const HeaderMiddle = () => {
  return (
    <div className="header-middle wrapper">
      <HeaderMiddleLeft />
      <a href="" className="header-middle--logo">
        BOARDRIDERS
      </a>
      <HeaderMiddleRight />
    </div>
  );
};

export default HeaderMiddle;
