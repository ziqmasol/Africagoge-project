import styled from "styled-components";



const BlogPageStyle  = styled.div`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
padding: 1.5rem 1rem;
text-align: center;
min-height: 20vh;
display: flex;
justify-Content: center;
align-Items : center;
max-width:1120px;
margin:auto;
text-transform: center;

.section-content {
    color: #FF9801;
    margin: 1rem auto;
    /* width:100%; */
}
.section-image{
    display: none;

}

@media screen and (min-width:768px ){
    height: 500px;
    justify-content: center;
    .section-image{
        display: block;
        flex-basis: 45vw;
    }


    .section-image{
        position: relative;
        height:100%;
        /* box-shadow: 4px 4px 10px 10px lightgrey; */
    }
    .section-image img{
        height:100%;
        width:100%;
        position: absolute;
        left: 0;
    }

    

    .section-content{
        font-size: 1.5rem;
        /* border: 2px solid; */
        margin:auto;
        /* width:400px; */

        text-transform: capitalize;
    }
    /* .section-content h1{
        margin: .6rem 0;
        color:#FF9801;
    } */
}

`

export default BlogPageStyle;