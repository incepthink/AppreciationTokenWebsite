import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App bg-gray-100">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
