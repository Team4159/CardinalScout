//@flow
import firebase from "firebase/app";
import { createAction } from "redux-actions";
import { constants } from "../config";

const signIn = createAction(constants.SIGN_IN, authProvider => authProvider);
const signInWithGoogle = () => signIn(new firebase.auth.GoogleAuthProvider()); 

export default signInWithGoogle;
