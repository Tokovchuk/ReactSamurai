import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', like: 10},
                {id: 2, message: 'Hello world', like: 20},
                {id: 3, message: 'Test1', like: 15},
                {id: 4, message: 'blablabla', like: 0},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Loki'},
                {id: 2, name: 'Hulk'},
                {id: 3, name: 'Spider-Man'},
                {id: 4, name: 'Odin'},
                {id: 5, name: 'Tony Stark'},
                {id: 6, name: 'Captain America'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Im fine'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
}




export default store;