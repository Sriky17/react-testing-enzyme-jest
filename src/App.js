import { Container } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React from "react";
import Header from "./components/Header";
// import "../src/app.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backgroundcolor: {
    background: "#4dabf5",
    height: 575,
    width: 1255,
  },
}));

function App() {
  const classes = useStyles();
  return (
    // <div style={{ backgroundColor: "red", height: "400px" }}>
    <Container className={classes.backgroundcolor}>
      <div>
        <Header />
      </div>
    </Container>
  );
}

export default App;
