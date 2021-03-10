import React from 'react'
import Home from './pages/home'
import JobList from './pages/jobList'
import JobDetail from './pages/jobDetails';
import MercList from './pages/mercList';
import CreateMerc from './pages/createMerc';
import CreateJob from './pages/createJob';
import MercDetail from './pages/mercDetails';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/header'
import { yellow, cyan } from '@material-ui/core/colors';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[400],
    },
    secondary: {
      main: cyan[400],
    },
  },
});

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <div style={{ padding: "10px" }}>
            <Switch>
              <Route path="/jobs" component={JobList} />
              <Route path="/create-job" component={CreateJob} />
              <Route path="/jobDetail/:jobId" component={JobDetail} />
              <Route path="/mercs" component={MercList} />
              <Route path="/mercDetail/:mercId" component={MercDetail} />
              <Route path="/create-merc" component={CreateMerc} />
              <Route path="/" component={Home} />

            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
