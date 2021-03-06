const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
   switch(action.type) {
      case 'LOGIN_ERROR':
        console.log('Login Failed.');
        return {
          ...state,     //will take data from initialState
          authError: 'Login failed.'
        }

      case 'LOGIN_SUCCESS':
        console.log('Login success');
        return {
          ...state,
          authError: null
        }

      case 'SIGNOUT_SUCCESS':
        console.log('SignOut success');
        return state;

      default:
        return state;
   }
};

export default authReducer;