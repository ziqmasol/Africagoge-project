import styled from "styled-components";
import { HomeStyle } from "../Home/HomeStyles";
import { TextField,Box, Button} from "@mui/material";
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer/Footer";


const ContactUsStyle = styled.div`
TextField{
    display:block;
}
`



const ContactUs = () => {
    const textField ={
        display:'block',
        margin:'1rem 0',
        width:'200px',
        outline:'2px solid #ff9801',
        borderRadius:'10px',
        border:'none'
    }
    return<>
    <ContactUsStyle>
        <Header />
       <HomeStyle>
        <div className="hero">
            <div className="hero-content">
                <div className="center">

                <h3>
                    24Hrs on desk Customer support
                </h3>
                <p>
                    we are at your call, we serve you always
                </p>
                </div>
            </div>
            <div className="hero_pics">
                <img src="./contactUs.png" alt="Contact us pics" />
            </div>
        </div>

        <div className="form">
            <h1>let's Talk</h1>
            <p>we do normally get back within 48hrs. Please leave a message</p>
            <form >
                <TextField fullWidth sx={textField} placeholder="Fullname" variant="outlined" size="large" />

                <TextField fullWidth sx={textField} placeholder="Country/region" variant="outlined" size="large" />

                <TextField fullWidth sx={textField} placeholder="Street Address" variant="outlined" size="large" />

                <TextField fullWidth sx={textField} placeholder="city" variant="outlined" size="large" />

                <TextField fullWidth sx={textField} type='text' placeholder="Your Message" variant="outlined" size="large" />
                <Button variant="contained" size='large' 
                sx={{
                    background: "#ff9801",
                    color:'white',
                    '&:hover':{
                        background: "white",
                        color:"#ff9801"
                    }
                }}
                
                >Send message</Button>
            </form>
        </div>
       </HomeStyle>
    </ContactUsStyle>
    <Footer />
        </>
}
 
export default ContactUs;