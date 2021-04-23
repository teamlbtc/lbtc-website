import React from "react";
import YouTube from "react-youtube";

class YoutubeVideo extends React.Component {
  render() {
    
    const opts = {
      height: "450",
      width: "550",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="P4M4WRtlKPQ" opts={opts} onReady={this.onPlayerReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeVideo;