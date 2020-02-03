import React from "react";
import classes from "./Toolbar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import BarToggle from "../SideBar/BarToggle/BarToggle";
import Logo from "../../../assets/bf-192.png";

const toolbar = props => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header id="navbar" className={classes.Toolbar}>
      <BarToggle clicked={props.barToggleClicked} />
      <nav className={classes.Desktop}>
        <NavigationItems />
      </nav>
      <div className={classes.Logo}>
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default toolbar;
