import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => <div>Welcome to Campus Connect!</div>;
const Community = () => <div>Community Page</div>;
const Profile = () => <div>Your Profile</div>;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/community" component={Community} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
