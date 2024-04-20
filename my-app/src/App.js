import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Login from "./Components/Auth/Login.jsx";
import Register from "./Components/Auth/Register.jsx";
import ForgetPassword from "./Components/Auth/ForgetPassword.jsx";
import ResetPassword from "./Components/Auth/ResetPassword.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Request from "./Components/Request/Request.jsx";
import About from "./Components/About/About.jsx";
import Subscribe from "./Components/Payment/Subscribe.jsx";
import PaymentFail from "./Components/Payment/PaymentFail.jsx";
import PaymentSucces from "./Components/Payment/PaymentSucces.jsx";
import NotFound from "./Components/Payment/NotFound.jsx";
import CoursePage from "./Components/CourseDetails/CoursePage.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import ChangePassword from "./Components/Profile/ChangePassword.jsx";
import UpdateProfile from "./Components/Profile/UpdateProfile.jsx"
import DashBoard from "./Components/Admin/Dashbord/DashBoard.jsx";
import AdminCourses from "./Components/Admin/AdminCourses/AdminCourses.jsx";
import CreateCourses from "./Components/Admin/CreateCourses/CreateCourses.jsx"
import Users from "./Components/Admin/Users/Users.jsx"

function App() {

  return (
    <>
       <Router>
        <Header/>
        <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/courses" element={<Courses/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/request" element={<Request/>}/>
              <Route path="/subscribe" element={<Subscribe/>}/>
              <Route path="/paymentfail" element={<PaymentFail/>}/>
              <Route path="/course/:id" element={<CoursePage/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/changepassword" element={<ChangePassword/>}/>
              <Route path="/updateprofile" element={<UpdateProfile/>}/>
              <Route path="/paymentsuccess" element={<PaymentSucces/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/forgetpassword" element={<ForgetPassword/>}/>
              <Route path="/restpassword/:token" element={<ResetPassword/>}/>

              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<DashBoard/>}/>
              <Route path="/admin/createcourses" element={<CreateCourses/>}/>
              <Route path="/admin/courses" element={<AdminCourses/>}/>
              <Route path="/admin/users" element={<Users/>}/>
        </Routes>
        <Footer/>
       </Router>
    </>
  )
}

export default App;
