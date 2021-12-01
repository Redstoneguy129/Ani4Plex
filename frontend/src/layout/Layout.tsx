import React from "react";

export default class Layout extends React.Component {
    render(): React.ReactNode {
        return <div>{this.props.children}</div>
    }
}