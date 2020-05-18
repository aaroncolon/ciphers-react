import {
  SET_CIPHER_TYPE,
  SET_STRING
} from '../actions/actionTypes';

const initialState = {
  cipherType : 'alphabetic'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CIPHER_TYPE: {
      const { cipherType } = action.payload;

      return {
        ...state,
        cipherType : cipherType
      }
    }
    case SET_STRING: {
      const { string } = action.payload;

      return {
        ...state,
        string : string
      }
    }
    default:
      return state;
  }
};
