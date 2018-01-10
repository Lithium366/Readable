const APIUrl = 'http://localhost:3001';

const APIConfig = {
  headers: {
    'Authorization': 'whatever-you-want',
  },
};

// Categories
const fetchCategories = () => fetch(`${APIUrl}/categories`, APIConfig).then(res => res.json());

// Posts
const fetchAllPosts = () => fetch(`${APIUrl}/posts`, APIConfig).then(res => res.json());
const fetchCategoryPosts = (category) => fetch(`${APIUrl}/${category}/posts`, APIConfig).then(res => res.json());
const fetchPost = (postId) => fetch(`${APIUrl}/posts/${postId}`, APIConfig).then(res => res.json());
const deletePost = (postId) => fetch(`${APIUrl}/posts/${postId}`, {
  ...APIConfig,
  method: 'DELETE',
}).then(res => res.json());

// Comments
const fetchComments = (postId) => fetch(`${APIUrl}/posts/${postId}/comments`, APIConfig).then(res => res.json());

// Voting. Accept types 'comments' and 'posts'
const vote = (id, type, direction) => fetch(`${APIUrl}/${type}/${id}`, {
  method: 'POST',
  body: JSON.stringify({
    option: direction === -1 ? 'downVote' : 'upVote'
  }),
  headers: {
    ...APIConfig.headers,
    'Content-Type': 'application/json'
  }
}).then(res => res.json());

export {
  fetchCategories,
  fetchAllPosts,
  fetchCategoryPosts,
  fetchPost,
  vote,
  deletePost,
  fetchComments
}