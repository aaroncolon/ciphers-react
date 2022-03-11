import {
  SET_CIPHER_TYPE,
  SET_STRING
} from './actionTypes'

export const setCipherType = function(data) {
  return {
    type: SET_CIPHER_TYPE,
    payload: {
      cipherType: data.cipherType
    }
  }
}

export const setString = function(data) {
  return {
    type: SET_STRING,
    payload: {
      string: data.string
    }
  }
}
