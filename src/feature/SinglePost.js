// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// const SinglePost = () => {
//      const post = useSelector(state => state.posts)
//        const {PostId} = useParams();
//         const newpost = post.filter((i)=>i.id === PostId)  
//      return (
//         <div>
//             <h1>{newpost.title}</h1>
//             <h2>{newpost.content}</h2>
//         </div>
//     )
// }

// export default SinglePost
import React from 'react'
import { useSelector } from 'react-redux'

export const SinglePost = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state =>state.posts.find(post => post.id == postId))
    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </article>
        </section>
    )
}

export default SinglePost;