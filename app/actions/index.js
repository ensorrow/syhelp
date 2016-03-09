/*
 * action 创建函数
 */
const  USER_CHECK = 'USER_CHECK';

//export function userCheck(token) {
//  return {
//    type: USER_CHECK,
//    token
//  }
//}

var userCheck = (token) => {
  return (dispatch) => {
    dispatch({ type: USER_CHECK, token });
  }
}

module.exports = {
  userCheck
}