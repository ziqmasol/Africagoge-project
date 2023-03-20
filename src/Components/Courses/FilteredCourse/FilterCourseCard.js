import { Rating } from "@mui/material";


const FilterCourseCard = (props) => {
    // console.log(props.heightLength)

    return<div  className="filteredCourseCard">
    <div style={{background:`center/cover url(${props.bgImage})`}} className="card-pic">
        <h3>{props.contentHeader}</h3>
    </div>
    <div className="card-content">
        <h4>{props.contentInfo}</h4>
        <div className="slider">
            <div style={{width:`${props.width}%`
            }} className="slider-child"></div>
        </div>
        <div className="status">
            <div className="level" >{props.progress} to complete</div>
            <div><Rating value={props.value} sx={{color: 'white'}} /></div>

        </div>
        <p className="rating" >Leave a rating</p>
    </div>
</div>;
}
 
export default FilterCourseCard ;



