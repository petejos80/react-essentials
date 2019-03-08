import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <nav>
                <span>This is the Navbar component</span>
                <h3>{this.props.string}</h3>        
            </nav>
        )
    }
}