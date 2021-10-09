import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Banner from './Components/Banner';
import BmwM1 from './Components/BmwM1';
import BmwM2 from './Components/BmwM2';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Banner/>
          </Route>

          <Route path='/bmwm1'>
            <BmwM1/>
          </Route>

          <Route path='/bmwm2'>
            <BmwM2/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
