import React from "react";
import Navbar from "./components/Nav/Navbar";
import NavLink from "./components/Nav/NavLink";
import NavLogo from "./components/Nav/NavLogo";

export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <Navbar>
                    <NavLogo src="/logo.png"/>
                    <NavLink>Test Button</NavLink>
                </Navbar>
            </div>
        );
    }
}