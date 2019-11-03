import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router-dom";

/**
 * @author : Bhavana Vakkalagadda(bvakkala)
 * @since : 02 Nov, 2019
 */

class TeacherView extends Component {
   
    createQuiz(event){
        return;
    }
    logout(event){
        return;
    }
    sendMessage () {
        // this.props.setHeaderMessage("Lets Create the quiz!");
        this.props.history.push("/quiz")
    }

    constructor(props){
        super(props)
        console.log(props);
        
    }
    render() {
        const customStyle = {marginTop:"150px"}
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Teacher"
                        color="Black">
                        <RaisedButton  label="Logout" primary={true} style={style} onClick={(event) => this.logout(event)}/>

                    </AppBar>
                    <p style={customStyle}>Want to Create Quiz?</p>
                    <br/>
                    {/* <Link to = "/quiz" > */}
                        <RaisedButton label="Create Quiz" primary={true} style={style} onClick={(event) => this.sendMessage()}/>   
                                         {/* </Link> */}
                    <br/>
                </div>
            </MuiThemeProvider>
        </div>
    );
}
}
const style = {
    margin: 15,
};
export default TeacherView;