const fetchWrapper = (path, config = {}) => {
  const APIUrl = 'http://localhost:3001';

  const APIConfig = {
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
  };

  return fetch(`${APIUrl}${path}`, {
    ...APIConfig,
    ...config
  }).then(res => res.json());
};

// Categories
const fetchCategories = () => fetchWrapper(`/categories`);

// Posts
const fetchAllPosts = () => fetchWrapper(`/posts`);
const fetchCategoryPosts = (category) => fetchWrapper(`/${category}/posts`);
const fetchPost = (postId) => fetchWrapper(`/posts/${postId}`);
const addPost = (postData) => fetchWrapper(`/posts`, {
  method: 'POST',
  body: JSON.stringify(postData)
});
const updatePost = (postData) => fetchWrapper(`/posts/${postData.id}`, {
  method: 'PUT',
  body: JSON.stringify({ title: postData.title, body: postData.body })
});

// Comments
const fetchComments = (postId) => fetchWrapper(`/posts/${postId}/comments`);
const updateComment = (commentData) => fetchWrapper(`/comments/${commentData.id}`, {
  method: 'PUT',
  body: JSON.stringify({ timestamp: commentData.timestamp, body: commentData.body })
});
const addComment = (commentData) => fetchWrapper(`/comments`, {
  method: 'POST',
  body: JSON.stringify(commentData)
});

// Voting. Accept types 'comments' and 'posts'
const vote = (id, type, direction) => fetchWrapper(`/${type}/${id}`, {
  method: 'POST',
  body: JSON.stringify({ option: direction === -1 ? 'downVote' : 'upVote' })
});

// Deleting 'comments' and 'posts'
const deleteItem = (id, type) => fetchWrapper(`/${type}/${id}`, { method: 'DELETE' });

export {
  fetchCategories,
  fetchAllPosts,
  fetchCategoryPosts,
  fetchPost,
  vote,
  addPost,
  updatePost,
  fetchComments,
  deleteItem,
  addComment,
  updateComment
}