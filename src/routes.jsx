import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

//pages
import Gallery from "./pages/Gallery";
import Modal from "./components/Modal";

const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path="/" children={<Gallery />} />
      </Switch>

      {background && <Route path="/img/:id" children={<Modal />} />}
    </>
  );
};

export default Routes;
