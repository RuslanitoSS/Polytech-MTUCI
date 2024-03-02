import "./HeaderTop.css";
import HeaderTopLeft from './HeaderTopLeft/HeaderTopLeft.jsx';
import HeaderTopRight from './HeaderTopRight/HeaderTopRight.jsx';

const HeaderTop = () => {  
    return (
        <div className="header-top">
        <div className="header-top-content wrapper">
            <HeaderTopLeft/>
            <HeaderTopRight/>
        </div>
        </div>

    )
}

export  default HeaderTop;