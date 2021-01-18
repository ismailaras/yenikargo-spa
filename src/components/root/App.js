import '../../App.css';
import Navi from "../navi/Navi";
import React from "react";
import {Container} from "reactstrap";
import Dashboard from "./Dashboard";
import {Switch, Route} from "react-router-dom";
import CartList from "../cart/CartList";
import NotFound from "../common/NotFound";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <div>
        <Container>
            <Navi/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/cart" component={CartList}/>
                <Route path="/saveProduct/:productId" component={AddOrUpdateProduct}/>
                <Route path="/saveProduct" component={AddOrUpdateProduct}/>
                <Route component={NotFound}/>
            </Switch>
        </Container>
    </div>
  );
}

export default App;
