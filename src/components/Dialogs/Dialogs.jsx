import React from 'react';
import s from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {sendMessage} from "../../redux/dialogs-reducer";
import {Textarea} from "../FormsContorls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = (props) => {

    let addMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                             id={dialog.id}/>);
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}
                                                                             id={message.id}/>);

    if (!props.isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <section className={s.dialogs}>
            <div className={s.dialogs__list}>
                {dialogElements}
            </div>
            <div className={s.dialogs__wrapper}>
                <div className={s.dialogs__messages}>
                    {messageElements}
                </div>
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </section>
    );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.dialogs__send}>
            <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody' placeholder='Enter your message'/>
            <button>Send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'sendMessage'
})(AddMessageForm)

export default Dialogs;