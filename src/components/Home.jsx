import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Dynamic Data in React</h1>

                <h3>Example 1:</h3>
                <span>35 x 24 = </span> {35 * 24}

                <h3>Example 2:</h3>
                { 5 === 2 ? "Yes" : "No" }
            </div>
        );
    }
}