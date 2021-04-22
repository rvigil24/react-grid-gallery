import React from "react";
import {

  Switch,
  Route,
  useLocation,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ImageView from "./pages/ImageView";
import Modal from "./components/Modal";

const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (

      <div>
        <Switch location={background || location}>
          <Route exact path="/" children={<Home />} />
          <Route path="/gallery" children={<Gallery />} />
          <Route path="/img/:id" children={<ImageView />} />
        </Switch>

        {background && <Route path="/img/:id" children={<Modal />} />}
      </div>

  );
};

export default Routes;
