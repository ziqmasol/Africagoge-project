import styled from "styled-components"

const CounterStyle = styled.div`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
text-align: center;
margin: 1rem .6rem;
/* display: flex; */
div{
    width: 40px;
border-radius: 100%;
border: 2px solid #FF9801;
background: #FFF;
color:#FF9801;
font-weight: bold;
padding:.4rem 0;
}
`

const Counter =({count}) =>{
    return <CounterStyle>
        <div>{count+1}</div>

    </CounterStyle>
}

export default Counter;