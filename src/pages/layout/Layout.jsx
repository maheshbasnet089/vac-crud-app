import { Outlet } from "react-router-dom";
import HeaderNavBar from "../../components/AppBar";

const Layout = () => {
  return (
    <div>
      <HeaderNavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
