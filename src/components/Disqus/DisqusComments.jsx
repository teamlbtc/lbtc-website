import React, { Component } from "react";
import Disqus from "disqus-react";

export default class extends Component {
  render() {
    const disqusShortname = "letsbethechange-in";
    const disqusConfig = {
      url: "http://letsbethechange.in",
      identifier: "blog-1",
      title: "Jauntful Internship",
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
