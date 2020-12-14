import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Account from './pages/Account';
import AppPage from './pages/AppPage';
import Contact from './pages/Contact';
import Create from './pages/Create';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Babysitting from './pages/tasks/Babysitting';
import Dogwalking from './pages/tasks/Dogwalking';
import Petsitting from './pages/tasks/Petsitting';
import Pickup from './pages/tasks/Pickup';
import Tutoring from './pages/tasks/Tutoring';
import YardWork from './pages/tasks/YardWork';
import TaskTemplate from './pages/TaskTemplate';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
      <Route exact path="/about">
        <Header />
        <About />
        <Footer />
      </Route>
      <Route exact path="/app">
        <Header />
        <AppPage />
        <Footer />
      </Route>
      <Route exact path="/account">
        <Header />
        <Account />
        <Footer />
      </Route>
      <Route exact path="/login">
        <Header />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/signup">
        <Header />
        <Signup />
        <Footer />
      </Route>
      <Route exact path="/create">
        <Header />
        <Create />
        <Footer />
      </Route>
      <Route exact path="/contact">
        <Header />
        <Contact />
        <Footer />
      </Route>
      <Route exact path="/create/babysitting">
        <Header />
        <Babysitting />
        <Footer />
      </Route>
      <Route exact path="/create/tutoring">
        <Header />
        <Tutoring />
        <Footer />
      </Route>
      <Route exact path="/create/pickup">
        <Header />
        <Pickup />
        <Footer />
      </Route>
      <Route exact path="/create/yardwork">
        <Header />
        <YardWork />
        <Footer />
      </Route>
      <Route exact path="/create/dogwalking">
        <Header />
        <Dogwalking />
        <Footer />
      </Route>
      <Route exact path="/create/Petsitting">
        <Header />
        <Petsitting />
        <Footer />
      </Route>
      <Route path="/t/:taskId" component={TaskTemplate} />
    </Router>
  );
}

export default App;
