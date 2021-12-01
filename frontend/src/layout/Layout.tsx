import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
    palette: {
        text: {
            primary: '#4F5C6C',
            secondary: '#3DB4F2'
        }
    },
    components: {
        MuiAppBar: {
            
        }
    }
});

export default class Layout extends React.Component {
    render(): React.ReactNode {
        return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
    }
}