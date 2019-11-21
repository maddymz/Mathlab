import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './Header.css';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

/**
 * @author Sajith Thattazhi, Viraj Khatri
 * @version 1.0
 */
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
            showLogoutButton: this.props.showLogoutButton
        }
    }

    logout() {
        this.props.parentProps.history.push('/')
    }

    render() {
        return (
            <div className="Header">
                <MuiThemeProvider>
                    <AppBar title={this.state.message} color="Black" showMenuIconButton= {false}>
                        {this.state.showLogoutButton && 
                        <RaisedButton label="Logout" primary={true} style={style} onClick={(event) => this.logout()} /> }
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