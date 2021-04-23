import React, { Component } from "react";
import Disqus from "disqus-react";

export default class extends Component {
  render() {
    const disqusShortname = "letsbethechange-in";
    const disqusConfig = {
      url: "http://letsbethechange.in",
      identifier: "blog-8",
      title: "ಬದಲಾಗಿ ಬದಲಾಗಿಸೋಣ,  ಸ್ವಚ್ಛ ಬೆಂಗಳೂರು ಕನಸನ್ನು ನನಸು ಮಾಡೋಣ!",
    };

    return (
      <div className="article-container">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }
}
