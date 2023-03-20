import styled from "styled-components";


const FooterStyle = styled.footer`

min-height : 100px;
width: 100vw;
max-width: 1120px;
margin:auto;
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style-type:none;
    text-transform: capitalize;
}
.parent__1{

    background:grey;
color: white;
padding:1rem;
}
.parent__2{
    background: black;
    padding: 1rem;
    color: white;
    font-weight:400;
    /* height: 35px; */
}
.section-content{
    width: 300px;
}
.parent__1 div{
    margin: .8rem 0;
}

.parent__2 span{
        color: yellow;
    }
    .logo{
        height: 100px;
        width: 250px;
    }
    .logo img {
        width: 100%;
        height: 100%;
        text-align: left;
        position: relative;
        left:10;
    }

@media screen and (min-width:760px){
    .parent__1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    }
    .faq{
        align-self: flex-end;
    }

    .parent__2{
        display:flex;
        justify-content: space-between;
        /* padding: 0 1.5rem; */
    }
    .parent__2 p{
        padding-left: 4.5rem;
    }
    .parent__2 ul{
        position:relative;
        right: 2vh;
    }

}
`

export default FooterStyle;