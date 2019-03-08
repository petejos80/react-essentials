import React from "react";
import { Header } from './Header.jsx'

export class Home extends React.Component {
    render() {
        const user = {
            name: "Samantha"
        };
        return (
            <div>
                <Header string={"I'm a prop!"}/>
            </div>
        );
    }
}