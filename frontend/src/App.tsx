import React from "react";
import Layout from "./layout/Layout";
import Navbar from "./layout/Navbar";

export default class App extends React.Component {
    render(): React.ReactNode {
        return <Layout><Navbar/></Layout>
    }
}