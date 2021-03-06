import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const action = login('123wert');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123wert'
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});