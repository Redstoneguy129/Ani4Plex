import React from "react";
import Navbar from "./components/Nav/Navbar";

export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <Navbar>
                <h1 className="text-white">Title</h1>
                <button className="p-1 text-white">Logout</button>
            </Navbar>
        );
    }
}