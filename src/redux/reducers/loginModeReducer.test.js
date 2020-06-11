import loginModeReducer from './loginModeReducer';

test('Default state should be login', () => {
    let action = { type: 'blah' };
    expect(loginModeReducer(undefined, action)).toBe('login');
});

test(`LOGIN_ MODE should return 'login'`, () => {
    let action = { type: 'SET_TO_LOGIN_MODE' };
    expect(loginModeReducer('blah', action)).toBe('login');
});

test(`SET_TO_REGISTER should return 'register'`, () => {
    let action = { type: 'SET_TO_REGISTER_MODE' };
    expect(loginModeReducer('blah', action)).toBe('register');
});