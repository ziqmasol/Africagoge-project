import styled from "styled-components";


const CourseStyle = styled.div`
/* border: 2px solid green; */
max-width:1120px;
margin: auto;
margin-bottom: 2rem;
/* min-height:400px; */

img{
    height:100%;
    width: 100%;
    display:block;
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style-type: none;

}
.header{
    /* border: 2px solid red; */
    margin: 1rem auto;
    padding: 1.2rem;
    color:white;
    min-height: 400px;
    width: 100%;
    display:flex;
    background: linear-gradient(to right,#FF9001,#FFBE00,#FF9801);

}

.header-content{
    margin: auto;
}
.header-img{
    display:none;
}

/* section form */
.header-label{
    height: 60px;
    background: white;
    width: 80%;
    margin: 1rem auto;
    border-radius: 15px;
    display:flex;
}
.header-label label{
margin:auto 1.2rem;
border-bottom: 3px solid lightgrey;
width: 100%;
background:#FF9801;
border-radius: 10px;
}
.header-label input{
    border: none;
    margin-left:1.3rem;
    width: 80%;
    height: 30px;
    display: inline-block;
    outline: none;
    font-size: 1.3rem;


}


.type{
        border: 2px solid black;
        border-radius: 50%;
        height:50px;
        width:50px;
        margin:auto;
        padding: .9rem 0;
        font-weight:600;
    }

    .type:hover{
    background-color: black;
    color: #FF9801;
    }

/* course list section */

/* utility child-1&2 */
.utility{
    /* border: 2px solid pink; */
    /* width:80vw; */
    max-width:80%;
    /* min-height: 60vw; */
    margin: auto;
}

.child-2 , .child-1{
    /* border: 2px dotted green; */
    /* margin:auto; */
}
.child-2{
    display: none;
}

.utility-navBar{
    display: flex;
    justify-content: center;
    padding: 1rem;
    align-items:center;

}

.utility-navBar ul{
    display: flex;
    gap:20px;
}




/* ============laptop========== */
@media screen and (min-width:768px){
    .header{
        height:300px;
        justify-content: space-evenly;
        padding: 0;
    }
    .header-img{
        display:block;
        height:100%;
        flex-grow:1;
        width: 60vw;
        background:center/cover url('./blogpage/card_pics2.jpg');
        align-self: stretch;
    }
    .header-content{
        margin: 0;
        width: 400px;
        align-self : center;
        /* border: 2px solid green; */
        height:auto;

    }
}
.header-content h1{
    max-width: 400px;
    margin-bottom: .9rem;
    font-weight: bold;


}
.header-content p{
    text-transform: capitalize;
}

.header-content p{
    margin-top: 2rem;
}
.header-img{
    margin: auto .5rem;
    /* border: 2px solid red; */
    max-width: 300px;
}
.courseCard{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap:10px;
    flex-wrap:wrap;

}


.utility-navBar{
    justify-content: space-between;

}


@media screen and (min-width:1024px){
    .utility{
        display:flex;
    }
    .child-2{
        flex-basis: 300px;
        display:block;
        padding: 2rem .6rem;
        text-align:center;
    }
.courseCard{
    justify-content: center;
}
    .utility-navBar{
        justify-content: flex-start;
        padding-left: 2rem;
    }

    .child-2 li {
        text-transform: capitalize;
        padding: .6rem 0;
    }

    .flex-type{
        display:flex;
    }

    .utility-navBar{
    justify-content: space-between;

}
}





`

export default CourseStyle;