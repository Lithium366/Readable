import React, { Component } from 'react';
import Post from '../Post/PostContainer';
import Comments from '../Comments/CommentsContainer';
import CommentForm from '../forms/CommentFormContainer';
import PostForm from '../forms/PostFormContainer';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };

    this.onEdit = this.onEdit.bind(this);
    this.onHideForm = this.onHideForm.bind(this);
  }
  componentWillMount() {
    const {
      match : {
        params: {
          postId
        }
      },
      fetchPost,
      posts
    } = this.props;

    // Post lazy load if not navigated from a list view
    if (!posts.length) {
      fetchPost(postId);
    }
  }
  componentWillReceiveProps(nextProps) {
    // If post is deleted or error from the API - redirect to a landing page
    if(nextProps.posts[0] && (nextProps.posts[0].deleted === true || nextProps.posts[0].error || !nextProps.posts[0].id)) {
      window.location = '/';
    }
  }
  onEdit() {
    this.setState({
      edit: true
    });
  }
  onHideForm() {
    this.setState({
      edit: false
    });
  }
  render() {
    const {
      match : {
        params: {
          postId
        }
      },
      posts
    } = this.props;

    const {
      edit
    } = this.state;

    const filtered = posts.filter(v => (v.id === postId && v.deleted !== true));
    if (!filtered.length) {
      return null;
    }

    return (
      <div>
        <div className="postDetails">
          <Post postId={postId} posts={posts} onEdit={this.onEdit}/>
        </div>
        { edit && (
          <div className="newPostFormContainer">
            <PostForm post={posts.find(v => v.id === postId)} onHideForm={this.onHideForm} />
          </div>
        )}
        <div className="postComments">
          <Comments postId={postId} />
        </div>
        <div className="commentsForm">
          <h4>Add a new comment:</h4>
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default PostPage;
