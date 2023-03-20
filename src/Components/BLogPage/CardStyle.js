import styled from "styled-components";


export const CardStyle = styled.div`
/* border: 2px solid red; */
width: 80vw;
color: white;
box-shadow: -2px 2px 6px 1px rgba(0,0,0,0.51);
margin: 2rem auto;
border-radius: 20px;
text-transform: capitalize;
max-width: 400px;


.card-content{
    /* border: 2px solid; */
    padding: .9rem;
    background: #FF9801;
    border-radius: 0 0 15px 15px;
}
.card-img{
    /* border: 2px solid; */
    height:15rem;
    width: 100%;

}
.card-img img{
    display:block;
    height:100%;
    width:100%;
    border-radius: 12px 12px 0 0;

}
button{
    padding: .9rem;
    margin-top: 1rem;
    border-radius: 20px;
    text-transform: uppercase;
    border: none;
    outline: 2px solid white;
    background: white;
    color: #FF9801;
    font-weight: 800;
}


`