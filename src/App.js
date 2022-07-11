import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Courses from './Components/Courses/Courses';
import Bestseller from './Components/Bestseller/Bestseller';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/Notfound/Notfound';
import Coursedetails from './Components/Coursedetails/Coursedetails';
import Placeorder from './Components/Placeorder/Placeorder';
function App() {
  return (
    <div >
      <BrowserRouter>
        {/* navbar */}
        <NavigationBar></NavigationBar>
        <Switch>
          {/* home */}
          <Route exact path='/'>
            <Home></Home>
          </Route>
          {/* also home */}
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          {/* about */}
          <Route path='/about' >
            <About></About>
          </Route>
          {/* service courses */}
          <Route path='/services' >
            <Courses></Courses>
          </Route>
          {/* best seller */}
          <Route path='/best' >
            <Bestseller></Bestseller>
          </Route>
          {/* course details */}
          <Route path="/courseinfo/:courseid" >
            <Coursedetails></Coursedetails>
          </Route>
          {/* place order */}
          <Route path='/placeorder' >
            <Placeorder></Placeorder>
          </Route>
          {/* not found */}
          <Route path='*' >
            <Notfound></Notfound>
          </Route>
        </Switch>
        {/* footer */}
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}
export default App;