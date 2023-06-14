import MainNavigation from "./MainNavigation";
import Footer from "@/components/layout/Footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
