import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import axios from 'axios';
import style from '../styles/app.css';
// import ChatList from './components/ChatList';
// import dummy from 'somewhere'  <-- exampleStreamData

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // streamList: [],
      currentStream: {},
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

    //logic below goes in each component to router
    // axios.get(`http://127.0.0.1:8081/stream/${reqId}/`)
    //   .then((res) => {
    //     console.log('res.data looks like: ', res.data);
    //     // this.setState({ currentStream: something from data})
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  changeStream(selectedStream) {
    // takes a selected Stream object and will change the "currentStream"
    this.setState({
      currentStream: selectedStream
    });
  }

  changeStreamList(data) {
    this.setState({
      // streamList: data, 
      currentStream: data[0],
    });
  }

  autoPlayChange() {
    this.setState({autoplay: +!this.state.autoplay});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            Search bar can go here to find list of Streams
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            Current Stream video can go here
          </div>
          <div className="col-md-5">
            Chat List can go here
          </div>
          <div className="col-md-5">
            Related Streams can go here
          </div>
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
