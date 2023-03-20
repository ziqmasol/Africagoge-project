import FilterCourseCard from "./FilterCourseCard";
import FilteredCourseStyle from './FilterCourseStyle';
import { Button, Paper } from "@mui/material";
import { coursesData } from "../CoursesData";
import { useReducer , useState } from "react";
import OrderedCourse from "./OrderedCourse";
import {Box,Card,Stack} from '@mui/material';
import { orderData } from "./OrderData";
import Header from "../../HeaderAndFooter/Header";
import Footer from "../../HeaderAndFooter/Footer/Footer";




const FilteredCourseLayout = () => {
    
// 1. free premium and ordered Course; 2. coursestatuse;
    // const courseStates = {
    //     fCourse : [...coursesData],
    //     oCourse : [...orderData],
    //     showOrderedCourse : false


    // }

    // const updatecourseType = 'updatecourseType';
    // const updateOrderCourseType = 'updateOrderCourseType';
    // const updateShowOrderedCourse = 'updateShowOrderedCourse';

    // const reducer = (state,action)=>{
    //     switch(action.type){
    //         case updatecourseType:
    //             return {...state,}
    //     }
    // }

    let CourseColorStatus;







    // table State
    const [filterCourseStatus , setFilteredCourseStatus] = useState([...orderData]);

    // freecourse state
    const [freeCourse,setFreeCourse] = useState([...coursesData]);
    // console.log(freeCourse);

    // show orderCourse;

    const [showCourseOrder,setShowOrderCourse] = useState(true);

    // table state handler
    const filteredFreeCourseHandler = (courseStatus,allcourse) =>{
        const filterCourse = orderData.filter((eachCourse,index)=>{
        if(eachCourse.status === courseStatus)return eachCourse;})
        if(!allcourse){
            setFilteredCourseStatus(filterCourse);}
            else if(allcourse){
                setFilteredCourseStatus([...orderData])
            }
    }

    // =============Manage Table State==========
    
    
    // initialSate 
    
    

    const courseTypeHandler =(courseStatus) =>{
        const courseType = coursesData.filter(eachCourse=>{
            if(eachCourse.status === courseStatus) return eachCourse
        })
            setShowOrderCourse(true)
            setFreeCourse(courseType)
        
    }

    const orderCourseHandler = () =>{
        setShowOrderCourse((prev)=>!prev)
    }

    
    return <>
    <Header />
    <FilteredCourseStyle>
        <div className="section-header">
            <h3>My courses</h3>
        </div>
        <div className="course-list">
            <li onClick={()=>courseTypeHandler('free')} >free courses
                <div className="liner" ></div>
            </li>
            <li onClick={()=>courseTypeHandler('premium')} >Premium courses
            <div className="liner" ></div>

            </li>
            <li onClick={orderCourseHandler}>Order Courses
            <div className="liner" ></div>

            </li>
        </div>

        <Box sx={{ display:showCourseOrder ?'block'  : 'none'

        }}>


        {/* </div> */}

            <Box component='div' sx={{
                display:{xs: 'block', md:'flex'},
                flexWrap: 'wrap'

            }} style={{}} >
                {
                    freeCourse.map((eachCourse,index)=>{
                        return <FilterCourseCard key={index}
                        bgImage={eachCourse.image} 
                        width={parseInt(eachCourse.progress)}
                        contentHeader={eachCourse.status}
                        contentInfo={eachCourse.title}
                        progress={eachCourse.progress}
                        image={eachCourse.image}
                        courseTitle = {eachCourse.courseTitle}
                        
                        value={Math.floor(Math.random() * 5) || 2}
                        />
                    })
                }


            </Box>

            {/* button */}
<div style={{alignSelf:'center' , margin:'auto' , flexGrow:'1'}} >
<Button variant="contained" sx={{background:'#FF9801' ,alignSelf:'center',
'&:hover':{
    background: 'white',
    color: '#ff9081'
} ,

}} >Discover Courses</Button>
</div>

</Box>


            {/* button close */}

        <div style={{display: showCourseOrder ? 'none' : 'block' }}>
        <Box sx={{
            width:'90%',
            margin:'2rem auto'
        }}>
            <Card sx={{display:'flex',
        justifyContent:'space-around',
        textTransform:'capitalize',flexWrap:'wrap' ,
        fontWeight:'800', height:'50px',alignItems:'center'}} >
                <li onClick={()=>filteredFreeCourseHandler(null,'all_course')} >all ordered courses</li>
                <li onClick={()=>filteredFreeCourseHandler('Successful', null)}>Successful</li>
                <li onClick={()=>filteredFreeCourseHandler('Cancelled',null)}>Cancelled</li>

                
                
                

            </Card>
        </Box>

        <OrderedCourse  tableData={filterCourseStatus} />
        </div>


        
    </FilteredCourseStyle>;
    <Footer />
    </>
}
 
export default FilteredCourseLayout;