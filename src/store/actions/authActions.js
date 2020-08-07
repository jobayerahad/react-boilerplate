import { LOAD_USER, SIGN_IN, SIGN_OUT, AUTH_ERROR } from "./types";
import firebase from "../../config/firebase";

export const loadUser = () => async (dispatch) => {
  try {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) dispatch({ type: LOAD_USER, payload: user });
      else dispatch({ type: SIGN_OUT });
    });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);

    dispatch({ type: SIGN_IN, payload: user });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();

    dispatch({ type: SIGN_OUT });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error });
  }
};
