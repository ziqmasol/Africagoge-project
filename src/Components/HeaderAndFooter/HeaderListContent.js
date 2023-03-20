import Styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge } from "@mui/material";
import { ButtonStyle } from "../Utilies/ButtonStyle";
import { Link
 } from "react-router-dom";
const ListStyle = Styled.ul`
*{
    margin: 0;
    padding:0;
    box-sizing : border-box;
    list-style-type: none;
}

text-align:center;
color:white;
font-weight:400;
text-transform: capitalize;
transition: all in 4s indefinte;
color: #FF9801;
text-transform : capitalize;
font-weight: 800;
display:flex;
flex-direction: column;


li{
    list-style-type:none;
    padding:.5rem 0;
    /* display:inline-block; */
    /* width: 100px; */
    margin: 0 auto;

}

a{
    color:#FF9801;
    text-decoration:none;
}
li div {
    height: 5px;
    width: 50px;
    background : #FF9801;
    margin: auto;
    display:none;
}

li:hover .list-div{
    display: block;
}
li:active .list-div{
    display: block;
}
/* height: calc(50vh - 100px); */


@media screen and (min-width:900px){
    /* flex-basis: 800px; */
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding:0;
}




`


const HeaderList = ({background}) =>{
    return<ListStyle>
    <li>
        <Link to='/home'>
            Home

        </Link>
        <div className="list-div"></div>
    </li>
    <li>
        
        <Link to='/courses'>courses</Link>
    <div className="list-div"></div>

    </li>
    <li>
        <Link to='/blogs'>Blogs</Link>
    <div className="list-div"></div>

    </li>
    <li>
        <Link to='/'>About us
</Link>
    <div className="list-div"></div>

    </li>
    <li>
        <Link to='/contact_us'>Contact us</Link>
    <div className="list-div"></div>
    </li>
    
    <li className="btn btn-cartlogo">
        <Badge badgeContent={45} showZero>
        <ShoppingCartIcon />
        </Badge>
    </li>
    <li className="btn btn-login">
       <Link to='/contributor'> <ButtonStyle>Become a contributor</ButtonStyle> </Link></li>
    <li  className="btn btn-contributor"><Link to='/login'><ButtonStyle>Login</ButtonStyle></Link></li>
</ListStyle>
}

export default HeaderList;
// export {ListStyle};