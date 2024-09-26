import { Outlet } from "react-router-dom";
import Header from "../Components/Header"; // Assuming you have a Header component

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
