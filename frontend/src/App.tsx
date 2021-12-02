import React from "react";
import Layout from "./layout/Layout";
import Navbar from "./layout/Navbar";
import Page from "./layout/Page";

export default class App extends React.Component {
    render(): React.ReactNode {
        return <Layout><Navbar/><Page/></Layout>
    }
}