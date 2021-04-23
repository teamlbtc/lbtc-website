import React, { Component } from "react";
import Disqus from "disqus-react";

export default class extends Component {
  render() {
    const disqusShortname = "letsbethechange-in";
    const disqusConfig = {
      url: "http://letsbethechange.in",
      identifier: "blog-4",
      title: "Plogging – Fitness can save the Environment",
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
