import React from "react";
import { Header } from './Header.jsx';

export class Home extends React.Component {
    render() {
        var name = "Bob";

        return(
            <div>
                <Header string={"I'm a prop!"} name={name} />
            </div>
        );
    }
}