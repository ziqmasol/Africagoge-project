import Styled from "styled-components";


const HeaderStyle = Styled.div`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style-type: none;

}

height:5rem;
background: #fff;
display: flex;
justify-content: space-between;
padding: 0 1.2rem;
box-shadow: 4px 0 8px 16px lightgrey;
align-items: center;
max-width: 1120px;
width:100vw;
margin:auto;
/* color: #FF9801; */


.headerLogo{
    font-size: 1em;
    text-transform: uppercase;
    /* min-width: 20vw; */
    font-weight: 800;
    line-height: 2rem;
    font-style: italic;
    /* flex-grow: 1; */
}

.headerLogo span{
    color: #FF9801;
}


.parent-ul{
    display:flex;
    /* flex-basis: 50vw; */
    justify-content: space-around;
}

.parent-ul li{
    margin: 0 0.6em;
}


li{
    color: #FF9801;
}
li:hover{
    color: green;
}






@media screen and (min-width:900px){
padding:0;
align-items: center;

}
`



export {HeaderStyle}