import { InputComponents } from "./InputComponents";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { RegisterAndContributorStyle } from "./ComponentsStyles";
import { Link } from "react-router-dom";



const Contributor =() =>{
    const linkstyle = {
        color: {color: 'lightblue'}
    }
    const Formik = useFormik(
        {
            initialValues: {
                fullName : '',
                email: '' ,
                state: '',
                country: '',
                password: ''

            } ,

            onsubmit(values){
                console.log(values)
            } ,
            validationSchema: Yup.object({
                fullName : Yup.string().required('Required'),
                email: Yup.string().email('enter valid email').required('Required'),
                country: Yup.string().required('Required'),
                state: Yup.string().required('Required'),
                password: Yup.string().required('Required'),
            })
        }
    )
    return <RegisterAndContributorStyle>

        <form onSubmit={Formik.handleSubmit}>
            <div className="form-content">
                <img src="mylogo.png"  alt="Africa-goge" />
                <p>Please create a new account here</p>
            </div>
        {/* fullname */}
        <InputComponents type='text' name='fullName' placeholder='Full Name' value={Formik.values.fullName}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.fullName && Formik.touched.fullName ?  <div>{Formik.errors.fullName}</div> : null}

        {/* email */}
        <InputComponents type='email' name='email' placeholder='Enter valid mail' value={Formik.values.email}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.email && Formik.touched.email ?  <div>{Formik.errors.email}</div> : null}

        {/* country */}

        <InputComponents type='text' name='country' placeholder='Country' value={Formik.values.country}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.country && Formik.touched.country ?  <div>{Formik.errors.country}</div> : null}

        {/* state */}

        <InputComponents type='text' name='state' placeholder='State' value={Formik.values.state}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.state && Formik.touched.state ?  <div>{Formik.errors.state}</div> : null}

        {/* Password */}

        <InputComponents type='password' name='password' placeholder='Password' value={Formik.values.password}  change={Formik.handleChange} blur={Formik.handleBlur} />
        {Formik.errors.password && Formik.touched.password ?  <div>{Formik.errors.password}</div> : null}
        <p>Already have an account ?<Link to='/register'><span style={linkstyle.color}>Sign up</span></Link></p>
        <button type="submit">Become a Contributor</button>
        </form>

        <div className="parent__2">
            {/* image */}
            <img src="contributor.png"  alt="Register"/>
        </div>
    </RegisterAndContributorStyle>

}

export default Contributor;