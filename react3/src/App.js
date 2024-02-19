import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './navpar';
import Home from './home';
import Product from './product';
import Payment from './payment';
function App() {
  return (
    <div className="App">
    <Nav/>
    
    <BrowserRouter>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/product"
                            element={<Product/>}
                        ></Route>
                        <Route
                            exact
                            path="/payment"
                            element={<Payment />}
                        ></Route>
                    </Routes>
                
            </BrowserRouter>

     
    </div>
  );
}

export default App;
