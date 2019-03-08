import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>This is the Home Component</p>
                <span>35 x 24 = </span> {35 * 24}
            </div>
        );
    }
}