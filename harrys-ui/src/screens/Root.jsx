import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const Root = () => {
  return (
    <main className="">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default Root;
