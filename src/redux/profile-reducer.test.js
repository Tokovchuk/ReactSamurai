import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi', like: 10},
        {id: 2, message: 'Hello world', like: 20},
        {id: 3, message: 'Test1111', like: 15},
        {id: 4, message: 'TestMessage', like: 0},
    ]
}

it('length of posts should be incremented', () => {
    // 1. start data
    let action = addPost('test success');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts.length).toBe(5);
});

it('text of new post should be correct', () => {
    // 1. start data
    let action = addPost('test success');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts[4].message).toBe('test success');
});

it('after deleting length of posts should be decremented', () => {
    // 1. start data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts.length).toBe(3);
})