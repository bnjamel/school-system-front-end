import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RouterContent from "./components/RouterContent";
import Footer from "./components/Footer";
import { useNavigate, useLocation} from "react-router-dom";
import useFetch from "./customHooks/useFetch";
import axios from "axios"
import { useStateValue } from "./context/StateProvider";

const URL = "http://localhost:3001/"

function App() {
  const [{}, dispatch] = useStateValue();
  const location = useLocation();
  const navigator = useNavigate();

  // const {data, isPending, error} = useFetch(URL + "student/", "GET")

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {

      axios.get("http://localhost:3001/user/authToken", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }).then((response) => {
          if (response.data.error) {
            dispatch({
              type: "SET_LOGIN",
              isLogged: false,
            });
          } else {
            dispatch({
              type: "SET_LOGIN",
              isLogged: true,
            });

            dispatch({
              type: "SET_USER",
              user: {
                email: response.data.email,
                name: response.data.name,
                role: response.data.role,
                id: response.data.id,
              },
            });
          }
        });
    } else {
      navigator("/login")
    }
  }, []);

  return (
    <div className="flex h-[100vh] ">
      <div className="w-full ">
        {/* Navbar */}
        <div className="w-full fixed bg-white z-[100]">
          <Navbar location={location}/>
          {/* sub Navbar */}
          <div className=" hidden lg:flex justify-center ">
            <Sidebar location={location}/>
          </div>
        </div>
        {/* Content */}
        <div className="pb-[4rem]">
          <RouterContent />
        </div>
        {/* Footer */}
        <div className="pb-2 max-w-[1200px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
