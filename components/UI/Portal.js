import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);
const {children, onClick, isOpen} = props;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <>
    {isOpen && <BackDrop onClick={onClick}/>}
    {children}</>,
    document.getElementById("navigation")
  );
};

export default Portal;
