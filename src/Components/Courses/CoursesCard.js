import styled from "styled-components";
import { coursesData } from "./CoursesData";


const CoursesCard = (props)=>{
    return <CourseCardStyle background={props.background}>
       <h1>{props.status}</h1>
<div className="title">
<p>{props.title}</p>
</div>
    </CourseCardStyle>
}

export default CoursesCard;


const CourseCardStyle = styled.div`
width: 80%;
min-height: 25rem;
max-width: 400px;
position: relative;
background: center/cover no-repeat round url(${props=>props.background});
/* width: 400px; */
position: relative;
text-align: center;
display: flex;
flex-direction: column;
border-radius:20px;
margin: 1rem 0;


:hover{
    opacity: 0.87356573;
    transform: scale(95%);
    transition: all in 3s linear;
}

h1{
    width:55%;
    max-width: 200px;;
    margin-left:auto; 
    background:linear-gradient(to right,#FF9001,#ffb001  ,#FFBE00);
    padding: 0 0 .5rem 0;
    border-radius:0 20px 0 20px;
    color:white;
}


.title{
    position: relative;
    height: 100px;
    /* border: 2px solid green; */
    color: white;
    top:calc(100% - 150.9667px);
    /* background:#FF9801; */
    background:linear-gradient(to right,#FF9001,#FF9801,#FFBE00);
    border-radius:0 0 20px 20px;

}
.title p{
    text-align: left;
    font-size: 1.3rem;
    letter-spacing: 2px;
    font-weight: bold;
    padding: .5rem  0 0 1rem;
    
}

@media screen and (min-width:768px){
    /* border: 2px solid indigo; */
    margin: 1.5rem;
    width: 70vw;
}

@media screen and (min-width:1023px){
    width: 350px;
}



`