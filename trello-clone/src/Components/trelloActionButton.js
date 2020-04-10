import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import { addList,addCard } from '../Actions';


class TrelloActionButton extends React.Component {

    state = {
        formOpen : false,
        text: ""
    };

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card" ;
        const buttonTextOpacity = list ? 1 : 0.5 ;
        const buttonTextColor = list ? "white" : "inherit" ;
        const buttonTextBackground = list ? "rgba(0,0,0,0.08)" : "inherit";

        return (
            <div 
            onClick={ this.openForm }
            style={ {
                ...styles.formButtonGroup,
                opacity: buttonTextOpacity,
                color: buttonTextColor,
                backgroundColor: buttonTextBackground
             } } >
                <div> <Icon>add</Icon> </div>
                <div> { buttonText } </div> 
            </div>
        );
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };
    
    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };
    
    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text){
            this.setState({
                text: ""
            });
            dispatch(addList(text));
            this.closeForm();
        }
        else
            return;
    }
    handleAddCard = () => {
        const { dispatch,listId } = this.props;
        const { text } = this.state;
        if(text){
            this.setState({
                text: ""
            });
            dispatch(addCard(listId,text));
            this.closeForm();
        }

    }

    renderForm = () => {

        const { list } = this.props;
        const placeHolder = list ? "Enter list title.." : "Enter card title..";
        const buttonTitle = list ? "Add List" : "Add Card";
        return  <div>
                    <Card style={{
                        overflow: "hidden",
                        minHeight: 80,
                        minWidth: 272
                    }}>
                        <TextareaAutosize placeholder={ placeHolder } 
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: "none",
                            width: "100%",
                            outline: "none",
                            border: "none"
                        }}/>
                    </Card>   
                    <div style={{
                        display: "flex", flexDirection: "row", textAlign: "center", margin: "2px"
                    }}>
                        <Button  onMouseDown={ list ? this.handleAddList : this.handleAddCard }   variant="contained" style={{ color: "white", backgroundColor: "#5aac44"}}> {buttonTitle} </Button>
                        <Icon onClick={this.closeForm}>close</Icon>
                    </div>
                 </div>;
    }; 


    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    formButtonGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
        paddingBottom: 10 
    }
}

export default connect()(TrelloActionButton);