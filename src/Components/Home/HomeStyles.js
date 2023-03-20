import styled from "styled-components"


export const HomeStyle = styled.div`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    text-transform:capitalize;
}

.hero{
    height:100%;
    display:flex;
    flex-direction:column;
}

.hero_pics{
height: 250px;
}

/* border: 2px solid red; */
width: 90vw;
max-width:1120px;
margin:2rem auto;
/* max-height:40vh; */


h1,h3,p,h6{
    padding:1rem;
    width: 80%;
}
h1,h3{
    color:#FF9801;
}

img{
    width:100%;
    height:100%;
    display:block;
}

.icon{
    min-height: 100px;
    /* border: 2px solid green; */
    margin: 1.2rem 0;
    display:flex;
    flex-wrap: wrap;
    background: linear-gradient(to right,#FFAB00 , #ffa200);
    /* background:#FFAB00; */
}

.orderpics{
    order:3;
}


.container{
    position:relative;
    /* border: 2px solid red; */
    width: 200px;
    margin:1rem auto;
    height:80%;
    text-align: center;
}

.container::before{
            content: '';
            height:60px;
            width:70px;
            background: blue;
             position: absolute;
            display: block;
            top:40%;
            left:40%;
            border-radius: 50%;
            transform: translate(-50%,-50%);
            z-index:-12;
            background:blue;

}


.container h2{
    color:white;
    font-size: 2rem;
}
.hero-footer h3 , .hero-footer p{
    width: 50%;
}

.hero-footer{
    background:linear-gradient(to left,#ffa200,#FFAB00);
    background-image: center/cover url('./HomePage_picture/About_us2.png');
}

@media screen and (min-width:768px){
    .hero{
        display:flex;
        flex-direction:row;
    }
    .orderpics{
        order:-1;
    }
    .hero_pics{
        flex-grow:1;
        /* border:2px solid green; */
        flex-basis: 50vw;
        height:350px;
        
    }
    .hero-content{
        /* border:2px solid blue; */
        flex-basis:40vw;
        margin:auto;
        display:flex;
        justify-content: center;
    }
}



`
