//@flow
import { constants } from "../constants";

const authState = {
  authenticated: false,
  uid: null,
  user: null
};

export default function authReducer(state = authState, { payload, type }){
  switch(type) {
  case constants.AUTH:
    return {
      ...state,
      authenticated: true,
      uid: payload.uid,
      user: payload
    };
  default: 
    return state;
  }
}
