// import React from 'react'
// import { useSelector } from 'react-redux'
// const App = () => {
//   const {count} = useSelector(state => state.posts)
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { PostsList } from './feature/PostList'
// import {PostForm} from './feature/PostForm'
// function App() {
//   return (
//       <div className="App">
//               <React.Fragment>
//                 <PostsList />
//                 <PostForm/>
//               </React.Fragment>  
//       </div>
//   )
// }

// export default App
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import  Navbar  from  './Navbar' 
import  PostList  from './feature/PostList'
import {PostForm} from './feature/PostForm'
import SinglePost from './feature/SinglePost'
function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostForm />
                <PostList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePost} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App