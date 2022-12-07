import { Container } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React from "react";
import Header from "./components/Header";
// import "../src/app.css";
import { makeStyles } from "@material-ui/core";
// import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  backgroundcolor: {
    background: "#4dabf5",
    height: 575,
    width: 1255,
  },
}));

function App() {
  const classes = useStyles();
  // const conclass = classNames("containerComponent", classes.backgroundcolor);
  return (
    // <div style={{ backgroundColor: "red", height: "400px" }}>
    // <Container className={conclass}>
    <div>
      <Container
        data-test="containerComponent"
        className={classes.backgroundcolor}
      >
        <div>
          <Header />
        </div>
      </Container>
    </div>
  );
}

export default App;
