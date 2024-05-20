import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://apithemoviedb.org/3',
    params: {
        api_key: '08a00e6ccda695a8627c903572f2d9d0',
        language: 'ko-KR'
    }
})

export default instance