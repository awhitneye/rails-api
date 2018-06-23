import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import axios from 'axios';

import style from '../styles/app.css';

import Navigation from './Navigation';
import Video from './Video';
import Streamview from './Streamview';
import Loginview from './Loginview';
// import dummy from 'somewhere'  <-- exampleStreamData

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // streamList: [],
      currentStream: {},
      currentUser: '',
      autoplay: 1,
    };
  }

  componentWillMount() {
    // ajax requests during willMount
    const thisUrl = document.location;
    const path = thisUrl.pathname;
    // console.log('Path', path); // should result in /biz/SOME_ID
    const reqId = path.split('/')[2];
    // console.log('reqId, ', reqId);// should result in the ID
    this.setState({
      currentStream: reqId,
    });

    // logic below goes in each component to router
    // axios.get(`http://127.0.0.1:8081/stream/${reqId}/`)
    //   .then((res) => {
    //     console.log('res.data looks like: ', res.data);
    //     // this.setState({ currentStream: something from data})
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    const isLoggedIn = this.state.currentUser;
    let view;

    if (isLoggedIn) {
      view = (<Streamview 
                currentStream={this.state.currentStream} 
                currentUser={this.state.currentUser} 
              />);
    } else {
      view = <Loginview />;
    }

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Navigation currentUser={this.state.currentUser} />
            User Sessions (Google OAuth) can go here.
            Search bar can also go here to find list of Streams
          </div>
        </nav>
        <div className="row">
          {view}
          Streamview can go here. Conditionally render
          Streams if a user is logged in, or
          a Log in page is no one is logged in yet.
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
