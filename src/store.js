import {configureStore} from '@reduxjs/toolkit'
import PostSlice from './feature/PostSlice'
const store = configureStore ({
    reducer : {
        posts : PostSlice
    }
}
);

export default store;
// import { configureStore } from '@reduxjs/toolkit'

// import postsReducer from './feature/PostSlice'

// export default configureStore({
//     reducer: {
//         posts: postsReducer
//     }
// })
