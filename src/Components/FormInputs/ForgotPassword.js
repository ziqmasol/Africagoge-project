import { InputComponents , } from "./InputComponents";
import { useFormik } from "formik";
import { RegisterAndContributorStyle } from "./ComponentsStyles";
import { Link } from "react-router-dom";



const ForgotPassword = () =>{
    const linkstyle = {
        color: {color: 'lightblue'}
    }

    const validate = (values) =>{
        const errors = {};
        if(!values.fullName){
            errors.fullName = 'Required'
        }
        if(!values.password){
            errors.password= 'Required'
        }

        return errors;
    }
    const Formik = useFormik({
        initialValues: {
            fullName: '',
            password: ''
        },
        onSubmit(values){
            console.log(values)
        }, validate
    })
    return <RegisterAndContributorStyle>
        <form onSubmit={Formik.handleSubmit}>
        <div className="form-content">
                <img src="mylogo.png"  alt="Africa-goge" />
                <p>Ok let's fetch you ya'login details</p>
            </div>

        {/* fullname */}
        {/* <InputComponents type='text' name='fullName' placeholder='Full Name' value={Formik.values.fullName}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.fullName && Formik.touched.fullName ?  <div style={{color: 'red'}}>{Formik.errors.fullName}</div> : null} */}

        {/* Password */}

        <InputComponents type='password' name='password' placeholder='Password' value={Formik.values.password}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.password && Formik.touched.password ?  <small style={{color: 'red'}}>{Formik.errors.password}</small> : null}
        <p>Already have an account ?<Link to='/login'><span style={linkstyle.color}>Sign In</span></Link></p>
        <button type="submit">Proceed</button>

        
        </form>
        <div className="parent__2">
            {/* image */}
            <img className="side-image" src="ForgotPassword.png "  alt="Forgot Password"/>
        </div>

    </RegisterAndContributorStyle>
}

export default ForgotPassword;