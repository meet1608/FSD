import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import EmailVerify1 from "./components/EmailVerify1";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import AdminMain from "./admincomponents/adminMain";
import AdminLogin from "./admincomponents/adminLogin";
import AdminSingup from "./admincomponents/adminSingup";

function App() {
	 const user = localStorage.getItem("token");

	// const [user,setUser] = useState(null);


	//  const getUser = async () => {
	// 	try {
	// 	  const url = `http://localhost:8080/auth/google/callback`;
	// 	  const { data } = await axios.get(url, { withCredentials: true });
	// 	  setUser(data.user._json);
	// 	} catch (err) {
	// 	  console.log(err);
	// 	}
	//   };
	
	//   useEffect(() => {
	// 	getUser();
	//   }, []);
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify1 />} />
			<Route path="/adminUser/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
			<Route path="/adminlogin" exact element={<AdminLogin/>} />
			<Route path="/adminsingup" exact element={<AdminSingup/>} />
			<Route path="/adminlogin" exact element={<AdminLogin/>} />

		</Routes>
	);
}

export default App;
