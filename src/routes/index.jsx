import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Detail from "../pages/dashboard/Detail";
import { Login, Register } from "../pages/landingpage";
import NotFound from "../pages/notfound";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/dashboard/*"
            element={
                <Dashboard />
            }
          />
          <Route path='/detail' element={<Detail/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;