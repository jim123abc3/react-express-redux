import {GET_IMAGES} from './constant';

export const getImages = () => dispatch => {
  return fetch('/api/images')
    .then(res => res.json())
    .then(images => dispatch({type: GET_IMAGES, payload: images}))
}
