import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "MathLab" }
    }

    setMessage = (childData) => {
        this.setState({ message: childData })
    }

    render() {
        return (
            <div className="Header">
                <MuiThemeProvider>
                    <AppBar title={this.state.message} color="Black">
                    </AppBar>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Header;