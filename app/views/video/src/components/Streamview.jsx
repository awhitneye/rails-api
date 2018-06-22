import React from 'react';
// import PropTypes from 'prop-types';
import url from 'url';
import axios from 'axios';
import style from '../styles/streamview.css';
// import ChatList from './components/ChatList';
// import dummy from 'somewhere'  <-- exampleStreamData

function Streamview(props) { 
  return (
      <div>
        <div className="col-md-7">
          <Video currentStream={props.currentStream} />
          Current Stream video can go here
        </div>
        <div className="col-md-5">
          Chat List can go here
        </div>
        <div className="col-md-5">
          Related Streams can go here
        </div>
      </div>
  );
}


// Streamview.propTypes = {
// };

// Streamview.defaultProps = {
// };

export default Streamview;
