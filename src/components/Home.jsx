import React from "react";
import { Header } from './Header.jsx'

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Header prop1={"I'm a prop!"}/>
            </div>
        );
    }
}