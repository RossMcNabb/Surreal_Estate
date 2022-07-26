
import '../styles/App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import AddProperty from './AddProperty';
import Properties from './Properties';

function App() {
  return (
<Router>
<div className="App">
  <h2>Surreal Estate</h2>
    <NavBar/>
    <Switch>
      <Route path="/AddProperty">
        <AddProperty/>
      </Route>
    </Switch>
    <Switch>
      <Route path="/Propeties">
        <Properties/>
      </Route>
    </Switch>


    </div>
    </Router>
  );
}

export default App;
