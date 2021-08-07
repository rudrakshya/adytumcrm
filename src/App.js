import { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
					<Switch>
						<Route path="/" exact component={Login} />
					</Switch>
				</Router>
      </div>
    )
  }
}

export default App;
