import React from "react";

export class Header extends React.Component {
    render() {
        console.log("These are props:", this.props);
        return(
            <nav>
                <span>This is the Navbar component</span>
                <h1>{this.props.prop1}</h1>
            </nav>
        )
    }
}