import './App.css';
import { useEffect } from 'react';
import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import RegistrationComponent from './components/registration/RegistrationComponent';
import FooterComponent from './components/footer/FooterComponent';

import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/employee/CreateEmployeeComponent';
import LoginComponent from './components/login/LoginComponent';
import MyProfileComponent from './components/My-profile/MyProfileComponent';
import ListMealComponent from './components/meal/ListMealComponent';
import MenuMealTypeComponent from './components/menu/MenuMealTypeComponent';
import ListMealTypeComponent from './components/meal-type/ListMealTypeComponent';
import ListMealByMealTypeComponent from './components/meals-by-meal-type/ListMealByMealTypeComponent';
import CartComponent from './components/cart/CartComponent';
import FinalOrderByIdComponent from './components/final-order-by-id/FinalOrderByIdComponent';
import { ActiveFinalOrdersComponent } from './components/active-final-orders/ActiveFinalOrdersComponent';
import MyActiveFinalOrdersComponent from './components/my-active-final-orders/MyActiveFinalOrdersComponent';
import OrderHistoryComponent from './components/order-history/OrderHistoryComponent';
import MyDeliveredFinalOrdersComponent from './components/my-delivered-final-orders/MyDeliveredFinalOrdersComponent';
import ListUserComponent from './components/user/ListUserComponent';
import jwtDecode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
//od V6, nema SWITCH, vec je zamenjeno sa ROUTES, component sa element i nije vise {ListUserComponent} vec {<ListUserComponent/>}
const PrivateRoute = ({ element, allowedRoles }) => {
  const userRole = localStorage.getItem('role');
  const navigate = useNavigate();
  
  useEffect(() => {
    checkIsTokenValid();
  }, []);

  const checkIsTokenValid = () => {
    if (localStorage.token) {
      try {
        const decodedToken = jwtDecode(localStorage.token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          console.log('Token is expired');
          localStorage.clear();
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.clear();
      }
    }
  };

  if (!localStorage.token || !allowedRoles.includes(userRole)) {
    return <p style={{ textAlign: "center", fontSize: "26px", fontWeight: "500"}}>You do not have permission to access this page.</p>;
  }

  // Render the protected component
  return element;
};

function App() {
  return (
    <>
      <Router>
        <NavbarComponent/>
        <div className="router-view">
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />}  />
            <Route path="/create-employee" element= {<CreateEmployeeComponent />}  />
            <Route path="/edit-employee/:id" element= {<CreateEmployeeComponent />}  />
            <Route path="/registration" element={<RegistrationComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/my-profile" element= {<MyProfileComponent />}  />
            <Route path="/meals" element= {<ListMealComponent />} allo />
            <Route path="/menu" element={<MenuMealTypeComponent />} />
            <Route path="/meal-types" element= {<ListMealTypeComponent />} allow/>
            <Route path="/meals-by-meal-type/:mealTypeId" element={<ListMealByMealTypeComponent />} />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/final-order/:id" element={<FinalOrderByIdComponent />} />
            <Route path="/active-final-orders" element= {<ActiveFinalOrdersComponent />} allowedRoles />
            <Route path="/my-active-final-orders" element= {<MyActiveFinalOrdersComponent />}  />
            <Route path="/my-delivered-final-orders" element={<MyDeliveredFinalOrdersComponent />}  />
            <Route path="/order-history" element={<OrderHistoryComponent />}  />
            <Route path="/users" element= {<ListUserComponent />}  />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}
export default App;
