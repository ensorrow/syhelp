const initialState = {
  login: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'USER_CHECK':
            if(action.token){
              return {
                ...state,
                login : true
              };
            }
        default:
            return state;
    }
}