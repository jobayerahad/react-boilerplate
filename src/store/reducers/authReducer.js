import { LOAD_USER, SIGN_IN, SIGN_OUT, AUTH_ERROR } from "../actions/types";

const initialState = { isAuthenticated: true, loading: true, user: {}, error: null };

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: { uid: payload.uid, email: payload.email },
      };

    case SIGN_IN:
      return {
        ...state,
        user: { uid: payload.uid, email: payload.email },
        isAuthenticated: true,
        loading: false,
      };

    case SIGN_OUT: {
      return {
        isAuthenticated: false,
        loading: false,
        user: {},
        error: null,
      };
    }
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: {},
        error: payload,
      };

    default:
      return state;
  }
}
