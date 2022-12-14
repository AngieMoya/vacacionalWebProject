import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import RegisterRecruiter from "../Pages/RegisterRecruiter";
import CreateOffers from "../Pages/CreateOffers";
import Offers from "../Pages/Offers";
import Logout from "../Pages/Logout";

function route({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
      <Route path="/register" element={<Register isLoggedIn={isLoggedIn} />} />
      <Route
        path="/register-recruiter"
        element={<RegisterRecruiter isLoggedIn={isLoggedIn} />}
      />
      <Route
        path="/create-offers"
        element={<CreateOffers isLoggedIn={isLoggedIn} />}
      />
      <Route path="/offers" element={<Offers isLoggedIn={isLoggedIn} />} />
      <Route
        path="/logout"
        element={
          <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        }
      />
    </Routes>
  );
}

export default route;
