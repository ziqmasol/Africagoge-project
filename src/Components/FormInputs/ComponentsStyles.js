import Styled from "styled-components";


const RegisterAndContributorStyle = Styled.div`
/* border: 2px solid red; */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}

background-color: #FFF7DF;
/* border:2px solid orange; */
width:90vw;
max-width: 1120px;
/* margin:1rem; */
margin: 1rem auto;

img{
    width:100%;
    height:100%;
    display:block;
}

form{
    text-align: center;
    /* border: 2px solid blue; */
    padding: 2rem 0;
    display:inline-block;
    width:100%;
    margin:auto;
}

input{
    margin : .7rem;
    width: 75%;
    max-width: 70%;
    height: 30px;
    padding: .522rem ;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    display:inline-block;
}

.parent__2{
    display: none;
}

button{
    width:80%;
    height: 40px;
    margin-bottom: .3rem;
    font-size: 1.2rem;
    border-radius: 10px;
    border: none;
    background:#FFA000;
    color: white;
    max-width: 300px;

}

h1{
    font-family: monospace;
}

.africa{
    color: #FFA301;
}

.form-content img{
width: 50%;
/* border : 2px solid green; */
height: 10vw;
max-height:100px;
}

@media screen and (min-width:768px){
display: flex;
over-flow: hidden;
width: 100vw;
    .parent__2{
        display: block;
        /* border:2px solid red; */
        flex-basis:50%;
        }
    

    form{
        margin:auto;
        flex-basis: 50%;
    }
}
`




export {RegisterAndContributorStyle}