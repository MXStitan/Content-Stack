import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import posts from './posts.json'


const Layout = (props) => (
  <div>
    <h1>Content Stack Assignment Blog</h1>
    <h2>See whats going around the Globe!!</h2>
    <div id="sidebar">
  <div class="mui--text-light mui--text-display1 mui--align-vertical">SAMPLE BLOG</div>
</div>
<div id="content" class="mui-container-fluid">

</div>

    <hr/>
    <div>
      {props.children}
    </div>
  </div>
)

const PostsList = ({posts}) => (
  <div>
    <ul>
      {posts.map((post) => (
        <li>
          <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
          <p>Published by Zaid <strong> {post.author}</strong> on {post.publishedAt}</p>
        </li>
      ))}
    </ul>
  </div>
)

const PostPage = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <img src={post.url}/>
    <div>{post.content}</div>
    
    <p>
      <Link to="/">👈 Back</Link>
    </p>
  </div>
)


const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <PostsList posts={posts} />}/>
        <Route path="/post/:id"
          render={({ match }) => <PostPage post={posts[match.params.id - 1]} />}/>
        <Route render={() => <div>Post NOT FOUND!</div>}/>
      </Switch>
    </Layout>
  </Router>
)

render(<App />, document.getElementById('root'));
export default App;
