import React from 'react';

import './App.css';
import { useGetPosts } from './lib/api-hooks';
import { FetchState } from './types';

function App() {

  const [posts, fetchState, getPosts]=  useGetPosts();
  return (
    <div className="container">
      {
        fetchState === FetchState.DEFAULT && (
          <>
          <p>hi click the button below for list of posts</p>
          <button onClick={getPosts}>Get posts</button>
          </>
        )
      }
      {
        fetchState === FetchState.LOADING && 
          <p>Fetching posts...</p>
        
      }
      {
        fetchState === FetchState.ERROR && (
          <>
          <p>
            something went wrong
          </p>
          <button onClick={getPosts}>try again</button>
          
          </>
        )
      }

      {fetchState === FetchState.SUCCESS && (
        <>
       <p> list of posts:</p>
       <ul className ="posts-list">
        {
          posts.map((post) => (
            <li key={post.id} className="post">
              <h3> {post.id} - {post.title}</h3>
              <p>
                {post.body}
              </p>
            </li>
          ))
        }
       </ul>
        
        </>
      )}

    </div>
  );
}

export default App;
