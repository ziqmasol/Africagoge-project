import FormInputs from "./Components/FormInputs/FormInputs";
import { BlogPage } from "./Components/BLogPage/BlogPage";
import Courses from "./Components/Courses/Courses";
import FilteredCourseLayout from "./Components/Courses/FilteredCourse/FilterCoursesLayout";
import HomePage from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import { Route,Routes } from "react-router-dom";
import ForgotPassword from './Components/FormInputs/ForgotPassword';
import Register from './Components/FormInputs/Register';
import SignIn from './Components/FormInputs/SignIn';
import Contributor from './Components/FormInputs/Contributor'







function App() {
  return (
    <div className="App">

      <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/home" element={<Courses/>} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/courses" element={<FilteredCourseLayout />} />
        {/* form input */}

        <Route path="/login" element={<SignIn />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/contributor" element={<Contributor />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        </Routes>
    </div>
  );
}

export default App;
