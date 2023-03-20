import { Avatar } from "@mui/material";
import HeaderList from "../HeaderListContent";
import FooterStyle from "./FooterStyle";

const Footer = () =>{
    
    return <FooterStyle>
        <div className="parent__1">
        {/* Section-1 */}
        <div className="section-1">
            <div className="logo">
                <img src="footerlogo1.png" alt="AfricaGoge"/>
            </div>
            <p className="section-content">semaj Africa is in online education platform that delivers video courses programs and resources</p>
            <div style={{
                display:'flex' ,
                justifyContent:'space-around'
            }} className="logo-list">
                <span><Avatar src="logos/facebook.png" /></span>
                <span><Avatar src="logos/twitter.png" /></span>
                <span><Avatar src="logos/youtube.jpg" /></span>
                <span><Avatar src="logos/instagram.jpg" /></span>
            </div>
            
        </div>
            {/* Sextion-2 */}
            <div>
                <h4>quickline</h4>
            <ul className="section-2">
            <li>Home</li>
            <li>courses</li>
            <li>Blogs</li>
            <li>About us</li>
            <li>Contact us</li>
            </ul>
            </div>
            {/* Section-3 */}
            <div className="section-3">
                <h1>Contact us</h1>
                <p>
                    (+55)254.254.254 <br/>info@isemajafrica.com <br />Hellos Tower 75 Tam Trinh Hoang <br /> Mai-Ha-Noi-Viet Nam
                </p>
            </div>
            {/* section-3 */}
            <p className="faq">
                Terms and conditions <br /> faq
            </p>

    </div>

    {/* parent - statrt */}
    <div className="parent__2">
        <p>All right reserved || 2023</p>
        <ul>
            <li>
            privacy policy
            </li>
            <li>
                site <span>credit</span>
            </li>
        </ul>

    </div>

    </FooterStyle>
};

export default  Footer;