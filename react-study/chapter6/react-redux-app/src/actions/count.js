export const delayCount = () => {
    return async function countThunk(dispatch){
        const response = await setTimeout(()=>dispatch({type: 'INCREMENT'}),1000)
    }
  }