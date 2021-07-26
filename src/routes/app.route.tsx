import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Main from '../fragments/main/Main';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Router>
);

export default AppRoutes;
