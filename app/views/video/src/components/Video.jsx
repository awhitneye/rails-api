function Video(props) {
  return (
    <div>
        <div className="video"> Here's your video!
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + prop.video.id.videoId + '?autoplay=' + prop.autoplay} allowFullScreen></iframe>
            <div className="chat-box"> Chat Messages!
                <div className="user-search">
                    <div className="search-results" />
                    <button className="close-search" type="button"onClick="toggleSearch()">X</button>
                    <div className="search-input">
                        <input id="searchQuery" className="search-query" onKeyDown="submit(event)" type="text" value="" />
                        <button id="searchButton" className="search-submit" onClick="search()" type="submit">Search</button>
                    </div>
                </div>
                <div className="messages" />
            </div>
        </div>
            <div className="below-stream">
            <div className="stream-information">
                    <p className="title">{props.currentVideo.title}</p>
                    <div className="stream-details">
                        <p className="concurrent-viewers"> ____ concurrent users watching now! </p>
                        <p className="chats-per-second" />
                    </div>
                </div>
            <div className="search-button">
                    <button className="toggle-search" onClick="toggleSearch()" type="button">
                        <i className="fas fa-search" /> Search by User
                    </button>
                </div>
        </div>
        <div className="divider" />
    </div>
  );
}


Video.propTypes = {
};

Video.defaultProps = {
};

export default Video;
