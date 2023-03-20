import styled from "styled-components"

const FilteredCourseStyle = styled.div`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
    text-align: center;
}
/* border: 2px solid red; */
background:lightblue ;
/* height: 40vh; */
width: 85vw;
padding: 1rem;
margin:3rem  auto;
max-width:1120px;
background:#FFF7DF;
border-radius:20px;

.course-list{
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin:1.5rem auto;
    text-transform: capitalize;
    font-weight: bold;
}
.liner{
    height: 7px;
    width:60px;
    background: #ff9801;
    margin:auto;
    display:none
}
li:hover .liner{
display:block;
}
li:active .liner{
    display: block;
}

.filteredCourseCard{
    /* border: 2px solid green; */
    width:85%;
    height: 400px;
    margin:1.5rem auto;
    border-radius: 0 0 10px 10px;
    max-width: 300px;

}

.filteredCourseCard:hover{
    box-shadow: 0 20px 25px -5px rgb(0 0 225 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    /* opacity: 0.38579; */
    transform: scale(105%);
    border-radius: none;
    transition: opacity 1s,tranform 500ms ease-in;
}

.card-pic{
    width:100%;
    height: 60%;
    /* border:2px solid gre */
    border-radius: 10px;
}

.card-content{
    padding: .5rem;
    text-align:left;
    background: linear-gradient(to left,#ff9801,#ffbe01);
    height:40%;
    border-radius:0 0 10px 10px;

}

.card-content h4{
    text-align:left;
}

.slider{
    height: 10px;
    width: 80%;
    background:black;
    margin: .7rem 0;
    border-radius: 10px;
    position:relative;
}

.slider-child{
    /* width: 100%; */
    /* width:${(props)=>props.heightLength}px; */
    height:50%;
    background:white;
    position: absolute;
    top: 2.1px;
    border-radius:10px;

}

.status{
    display:flex;
    justify-content: space-between;
    padding:0;
    /* border:2px solid red; */
    margin:0;
    /* padding-left:1.4rem; */
    
}
.status .level{
    text-align:left;
}

.rating{
    text-align: right;
    text-decoration: underline;
}

.card-pic h3{
    color: lightblue;
    width: 100px;
    max-width: 250px;
    margin-left:auto;
    background: #ff9801;
    text-transform: capitalize;
    border-radius:0 10px 0 10px;
    padding: .5rem .9rem;
}



@media screen and (min-width:900px){
    .filteredcourse{
    /* border:2px solid green; */
    display:flex;
    flex-wrap:wrap;
    
}

.filteredCourseCard{
    width:300px;
}

}

 

`
export default FilteredCourseStyle;