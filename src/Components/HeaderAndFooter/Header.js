import { HeaderStyle } from "./HeaderAndFooterStyles";
import HeaderList from "./HeaderListContent";
import { useState ,useEffect, Fragment } from "react";
import { Avatar, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () =>{
    const [isCilcked, setClicked] = useState(false);
    const [windowsize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        const handleSize = () =>{
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize' ,handleSize)

        return ()=> window.removeEventListener('resize' , handleSize)
    })
    
    
    const btnClickHandler = () =>{
        setClicked((prev)=>!prev)
    }
    return <Fragment>

     <HeaderStyle>
        {/* logo */}
        <div className="headerLogo">
            <p className="logoName">Goge <span>Africa</span></p>
        </div>
        {/* header content===list */}
        <ul className="parent-ul">
            {windowsize >=900 ? <HeaderList /> : null}
            {/* {windowsize >= 600 ? <HeaderList orders='-80' direction='row' /> : null} */}
            {/* <li className="toggle-list" onClick={btnClickHandler}  >link list</li> */}
            {windowsize <= 900 ?<li className="toggle-list" onClick={btnClickHandler}  ><MenuIcon /></li> : null}
        </ul>
    </HeaderStyle>
            {isCilcked && windowsize <= 900 ? <HeaderList /> : null}
    </Fragment>

}

export default Header;