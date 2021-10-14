// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// const Navbar = () => {
//     const posts = useSelector(state => state.posts)
//     return (
//         <div>
//             <NavLink exact activeClassName = "active_class"  to ="/PostList">PostList</NavLink>
//             <NavLink exact activeClassName="active_class" to ="/PostForm" >PostForm</NavLink>
//              {/* <NavLink exact activeClassName="active_class" to = "/SinglePost/1">SinglePost</NavLink> */}
//             {posts.map((post) => {
//                 return (
//                     <div>
//                         <NavLink to={`/SinglePost/${post.id}`}>
//                             View Post
//                         </NavLink>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Navbar

// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// export const PostsList = () => {
//     const posts = useSelector(state => state.posts)

//     const renderedPosts = posts.map(post => (
//         <article className="post-excerpt" key={post.id}>
//             <h3>{post.title}</h3>
//             <p className="post-content">{post.content.substring(0, 100)}</p>
//             <Link to={`/posts/${post.id}`} className="button muted-button">
//                 View Post
//             </Link>
//         </article>
//     ))

//     return (
//         <section className="posts-list">
//             <h2>Posts</h2>
//             {renderedPosts}
//         </section>
//     )
// }

import React from 'react'
import { Link } from 'react-router-dom'
 const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>
                <div >
                    <div>
                        <Link to="/">Posts</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
export default Navbar;










