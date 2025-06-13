import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
