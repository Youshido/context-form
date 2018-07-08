import React, { Component } from "react";
import AntdThemeExample from "./examples/AntdThemeExample";
import BasicFormExample from "./examples/BasicFormExample";
import FullFeaturedFormExample from "./examples/FullFeaturedFormExample";
import getScriptParams from "./utils/getScriptParams";

const examplesMap = {
  "basic"         : BasicFormExample,
  "full-featured" : FullFeaturedFormExample,
  "antd"          : AntdThemeExample
};


class ExampleApp extends Component {
  render() {
    const example  = this.props.example || getScriptParams().example;
    const Example = examplesMap[example] || BasicFormExample;

    return (
      <div className={"wrapper"}>
        {/*<div className='header'>*/}
        {/*<img src={logo} className='logo'/>*/}
        {/*<h1>Context Form Demo</h1>*/}
        {/*</div>*/}
        <Example/>
      </div>
    );
  }
}

export default ExampleApp;
