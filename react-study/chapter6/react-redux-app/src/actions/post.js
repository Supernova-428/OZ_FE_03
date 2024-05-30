import axios from "axios"

export const fetchPosts = () => {
    return async function fetchPostsThunk(dispatch, getState){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('response', response)
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    }
  }

  export default fetchPosts