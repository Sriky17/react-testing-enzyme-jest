import { AppBar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    // <div className="ui fixed menu">
    //   <div className="ui container center">
    <AppBar data-test="appbarComp">
      <Typography data-test="logoComp" variant="h3">
        LOGO
      </Typography>
    </AppBar>
    //   </div>
    // </div>
  );
};

export default Header;
