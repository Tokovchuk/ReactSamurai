import React from 'react';
import s from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        if (props.dialogsPage.newMessageText) {
            props.sendMessage();
        }
    }

    let onChangeMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} id={message.id}/>);

    return (
        <section className={s.dialogs}>
            <div className={s.dialogs__list}>
                {dialogElements}
            </div>
            <div className={s.dialogs__wrapper}>
                <div className={s.dialogs__messages}>
                    {messageElements}
                </div>
                <div className={s.dialogs__send}>
                    <textarea ref={newMessageElement}
                              onChange={onChangeMessageText}
                              value={props.dialogsPage.newMessageText}
                              placeholder='Enter your message'/>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </section>
    );
};

export default Dialogs;