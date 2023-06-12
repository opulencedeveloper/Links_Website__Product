import MainNavigation from "./MainNavigation";
//import Footer from "@/components/layout/footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
