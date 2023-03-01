import NavBar from "../components/navigation/navbar";
import { useEffect, useState } from "react";

function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}

export default Layout;
