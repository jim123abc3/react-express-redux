import {GET_IMAGES} from '../actions/constant'

const imageReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_IMAGES:
        return payload
      default:
        return state
    }
}

export default imageReducer;