import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id : 1, title : 'first post', content :'hello'
    },
    {
        id : 2, title : 'second post', content : 'more text'
    }
]
 const PostSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers: {
            postAdded :(state, action) =>{
                state.push(action.payload)
            }
        }
    }
)

export const { postAdded } = PostSlice.actions;
export default  PostSlice.reducer;

//import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     { id: '1', title: 'First Post!', content: 'Hello!' },
//     { id: '2', title: 'Second Post', content: 'More text' }
// ]

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {}
// })

// export default postsSlice.reducer