import { firebaseAuth } from "src/firebase";
import { auth } from "../actions";

export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      authUser => {
        if(authUser) {
          dispatch(auth(authUser));
        } 
        resolve();
        unsubscribe();
      },

      error => reject(error)
    );
  });
}
