
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import ReviewSubmission from './components/ReviewSubmission';

function App() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/review-submission" component={ReviewSubmission} />
    </Router>
  );
}

export default App;
