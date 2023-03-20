import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PaidIcon from '@mui/icons-material/Paid';
import PaymentsIcon from '@mui/icons-material/Payments';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CampaignIcon from '@mui/icons-material/Campaign';
import { AccountTree } from "@mui/icons-material";
import { HomeStyle } from "./HomeStyles";
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer/Footer";





const HomePage = () => {
    return <>
    <Header />
    <HomeStyle>
        {/* hero section */}
        <div className="hero">
            <div className="hero-content">
                <div className="center">


                <h1>We're Goge Africa an e-learning platform from west africa</h1>
                <h6>we are at your call,we serve you always</h6>
            </div>
            </div>
            <div className="hero_pics">
                <img width='100%' height='100%'  src="./HomePage_picture/About_Us2.png" alt="content info" />
                </div>
        </div>
        {/* ======hero section ends======= */}

        {/* Article Section */}
        <article className="hero">
            <div  className="hero_pics orderpics">
                <img width='100%' height='100%'  src="./HomePage_picture/About_Us1.png" alt="content info" />
            </div>
            <div className="hero-content orderContent">
                <div className="center">

                <h3>
                we're team <br /> we're family <br /> we're goge Africa

                </h3>
                <p>
                    Aliqua laboris excepteur fugiat consequat consequat est anim ipsum aliqua. Ut adipisicing sunt excepteur sit tempor ad amet esse sint elit reprehenderit elit commodo irure. Ex elit exercitation ad velit sint aliquip cupidatat nostrud.
                </p>
                    
                <Button variant="contained" sx={{
                    textAlign:'center',
                    borderRadius:'30px',
                    background:'#ff9801' ,
                    display:'inline-block',
                    margin: '.5rem 1rem'
                }} >say hello</Button>
                </div>
            </div>
        </article>

        {/* Article ends */}
        {/* customer insight */}
        <div className="hero">
            <article className="hero-content" >
                <div className="center">


                <h3>
                    Customer Insight,
                </h3>
                <h3>Professional Support</h3>
                <p>
                    Aliqua laboris excepteur fugiat consequat consequat est anim ipsum aliqua. Ut adipisicing sunt excepteur sit tempor ad amet esse sint elit reprehenderit elit commodo irure. Ex elit exercitation ad velit sint aliquip cupidatat nostrud.
                </p>
                <h3 className="icons">
                    <Stack spacing={2} direction='row'>
                        <DynamicFeedIcon />
                        <FormatListNumberedIcon />
                        <AddBusinessIcon />
                        <CampaignIcon />

                    </Stack>
                </ h3>
                </div>
            </article>

            <div className="hero_pics">
            <img width='100%' height='100%'  src="./HomePage_picture/customerInsight2.png" alt="content info" />
                
            </div>

        </div>

        {/* customer Insight ends */}

        {/* big icons style */}

        <div className="icon">
        <div className="container">
        <PaidIcon sx={{
            fontSize: '100px', color:'white'
        }} />
        <h2>
        5,679
            <small>Active user</small>
        </h2>
        </div>
        <div className="container">
        <AccountTreeIcon sx={{
            fontSize: '100px', color:'white'
        }} />
        <h2>
        2,679

        </h2>
        <small>we can help out it</small>
        </div>
        <div className="container">
        <PaymentsIcon sx={{
            fontSize: '100px', color:'white'
        }} />
                <h2>
        10,100

        </h2>
        <small>Customers Review</small>
        </div>
        <div className="container">
        <AccountBalanceIcon sx={{
            fontSize: '100px', color:'white'
        }} />
                <h2>
        #10

        </h2>
        <small>Rate</small>
        </div>
        
        </div>
        {/* icons ends */}


        <article className="hero">
            <div className="hero-content">
                <div className="center" >
                    <h3>
                        Meet our creative Team
                    </h3>
                    <p>
                    Aliqua laboris excepteur fugiat consequat consequat est anim ipsum aliqua. Ut adipisicing sunt excepteur sit tempor ad amet esse sint elit reprehenderit elit commodo irure. Ex elit exercitation ad velit sint aliquip cupidatat nostrud.
               
                    </p>
                </div>
            </div>

            <div className="hero_pics">
            <img width='100%' height='100%'  src="./HomePage_picture/grid2.png" alt="content info" />
            

            </div>
        </article>

        <article className="hero-footer">
                <h3>
                Let's build something great Together

                </h3>
                <p>
                    Aliqua laboris excepteur fugiat consequat consequat est anim ipsum aliqua. Ut adipisicing sunt excepteur sit tempor ad amet esse sint elit reprehenderit elit commodo irure. Ex elit exercitation ad velit sint aliquip cupidatat nostrud.</p>
        </article>



    </HomeStyle>
    <Footer />
    </>
        
}


 
export default HomePage;