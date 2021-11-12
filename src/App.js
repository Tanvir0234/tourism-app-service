
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import Details from './Components/Details/Details';
import Login from './Components/Firebase/Login/Login';
import Register from './Components/Firebase/Register/Register';
import Home from './Components/Home/Home';
import Products from './Components/Products.js/Products';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
    <AuthProvider>
    <BrowserRouter>
     <Header/>
     <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/products">
           <Products></Products>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
           <Register></Register>
        </Route>
        <Route path="/dashboard">
           <Dashboard></Dashboard>
        </Route>
        <Route path="/details/:productId">
           <Details></Details>
        </Route>

     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
