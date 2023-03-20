import { InputComponents , } from "./InputComponents";
import { useFormik } from "formik";
import { SignInAndForgotPasswordStyle ,RegisterAndContributorStyle } from "./ComponentsStyles";

import { Link } from "react-router-dom";



const SignIn = () =>{
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
        <form className="form" onSubmit={Formik.handleSubmit}>
        <div className="form-content">
                <img src="mylogo.png"  alt="Africa-goge" />
                <p>Sign in to your account to continue</p>
            </div>
        {/* fullname */}
        <InputComponents type='text' name='fullName' placeholder='Full Name' value={Formik.values.fullName}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.fullName && Formik.touched.fullName ?  <div style={{color: 'red'}}>{Formik.errors.fullName}</div> : null}

        {/* Password */}

        <InputComponents type='password' name='password' placeholder='Password' value={Formik.values.password}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.password && Formik.touched.password ?  <small style={{color: 'red'}}>{Formik.errors.password}</small> : null}
        <p>Already have an account ?<Link to='/register'><span style={linkstyle.color}>Sign up</span></Link></p>
        <button type="submit">Sign In</button>

        
        </form>
        <div className="parent__2">
            {/* image */}
            <img className="side-image" src="SignIn.png "  alt="Sign-in"/>
        </div>

    </RegisterAndContributorStyle>
}

export default SignIn;