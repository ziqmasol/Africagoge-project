import { Button, MenuItem, TextField , IconButton } from '@mui/material';
import CoursesCard from './CoursesCard';
import CourseStyle from './CoursesStyle';
import { coursesData } from './CoursesData';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer/Footer";


const Courses =()=>{
const [courseArray , setCourseArray] = useState([...coursesData]);
const [inputValue , setInputValue] = useState('');

const handleInputChange =(event) =>{
    setInputValue(event.target.value);
}
const filteredCourse = ()=>{
        const filter =coursesData.filter((course,index)=>{
            if(course.category === inputValue || course.status === inputValue){
                return course;
            };
            
        })
    setCourseArray([...filter]);
console.log(courseArray)

    // courseArray.filter((course,index)=>{
    //     if(course.status === inputValue){
    //         console.log(courseArray)
    //         return <CoursesCard key={index} title={course.title} status={course.status} background={course.image} />        }

    //         else{
    //             return <h1>Course not found</h1>
    //         }
    // })

}
// filter paid and free courses;

const freeCourse = (paidOrfree) =>{
    setCourseArray(coursesData.filter((courseItem,index)=>{
        if(courseItem.status === paidOrfree){
            return courseItem
        }

    }))
}



    return <>
    <Header />
     <CourseStyle>
            {/* section header */}
            <div className='header'>
                {/* header-content */}
                <div className='header-content'>
                    <h1>
                        Browse Thousands of our video tutorial curated only for you
                    </h1>
                    <p>
                        access all tutorial when you become a premium member of <b>Semaj Africa</b> 
                    </p>
                </div>
                {/* header-image */}
    <div className='header-img'>
                    {/* <img src='./blogpage/card_pics4.jpg' alt='web dev' /> */}
                </div>
            </div>
            {/* section-content */}
            <div className='header-form'>
                {/* search */}
<div className='header-label'>
                <label>
                <IconButton onClick={filteredCourse} ><SearchIcon /></IconButton>
                <input name='search for courses' placeholder='search for courses e.g web development' value={inputValue} onChange={handleInputChange} />
                </label>
                </div>
                {/* cards, filter,side panel , */}
<div className='utility'>
                    {/* child-1 */}
 <div className='child-1'>
                        {/* filter sort icon g-1 */}
                        <div className='utility-navBar'>
                            {/* left icon */}
                            <ul className='right'>
                                <li>
                                showing 1-8 0f 10 results
                                </li>
                                <li>show 6 12 16</li>
                            </ul  >
                            {/* right */}
                            <ul className='left'>
                                <li style={{width: '100px' , display: 'inline-block'}}><TextField size='small' label= 'sort by' color='primary' select value='free' fullWidth>
                                    <MenuItem value='free'>Free</MenuItem>

                                    <MenuItem value='premium'>premium</MenuItem>
                                    </TextField></li>
                                <li>sort by</li>
                            </ul>
                        </div>
                        {/* cards g-2 */}
<div className='courseCard'> 


                    {courseArray.map((courseCard , index)=>{

                    return <CoursesCard key={index} title={courseCard.title} status={courseCard.status} background={courseCard.image} />
                        
                    }
                        
                    
                    ) }
                

                        </div>

                    </div>

                    {/* child-2 */}
                    <div className='child-2'>
                        {/* list of courses */}
                        <h2>All courses</h2>
                        <ul>

    <li> web development</li>
     <li> designs</li>
     <li>photography</li>
     <li>3d artist</li>
     <li>motion Graphics</li>
     <li>software engineer
                            </li><li>
                                ui/ux
                            </li><li>
                                sound music
                            </li>
                            <li>
                                digital marketing
                            </li>
                        </ul>

                        <ul>
                            <li>course type</li>
                            <ul className='flex-type'>
                            <li onClick={()=>freeCourse('premium')}  className='type'>paid</li>
                            <li onClick={()=>freeCourse('free')}   className='type'>free</li>
                            </ul>

                            <Button variant='contained' sx={{background:'#ff9800' , borderRadius: '20px'  ,margin: '2rem 0' ,
                        
                        }}>filter</Button>

                        </ul>


                    </div>
                </div>
            </div>

        {/* <CoursesCard /> */}
    </CourseStyle>
    <Footer />
    </>
}

export default Courses;