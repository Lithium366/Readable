import React, { Component } from 'react';
import Post from '../Post/PostContainer';
import Comments from '../Comments/CommentsContainer';
import CommentForm from '../FormComponents/CommentFormContainer';
import PostForm from '../FormComponents/PostFormContainer';
import { Link } from 'react-router-dom';
import Error404 from '../errors/Error404';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      error404: false
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
    const post = nextProps.posts[0];
    if(post && (post.error || !post.id)) {
      this.setState({
        error404: true
      });
    }
  }
  onEdit() {
    this.setState({
      edit: true
    });
  }
  goBack() {
    window.history.back();
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
      edit,
      error404
    } = this.state;

    // If post is not found - show 404
    if (error404) {
      return (<Error404 />);
    }

    // If post was just deleted - redirect to home page, don't show 404
    const isPostDeleted = posts.filter(v => (v.id === postId && v.deleted));
    if (isPostDeleted.length === 1) {
      window.location = '/';
      return null;
    }

    // Postpone rendering if we don't have a
    const post = posts.find(v => (v.id === postId));
    if (!post) {
      return null;
    }

    return (
      <div>
        <nav>
          <Link to="" onClick={this.goBack}>&lt;- Go back to the list</Link>
        </nav>
        <div className="postDetails">
          <Post postId={postId} posts={posts} onEdit={this.onEdit}/>
        </div>
        { edit && (
          <div className="newPostFormContainer">
            <PostForm post={post} onHideForm={this.onHideForm} />
          </div>
        )}
        <div className="postComments">
          <Comments postId={postId} />
        </div>
        <div className="commentsForm">
          <h4>Add a new comment:</h4>
          <CommentForm parentId={postId} />
        </div>
      </div>
    );
  }
}

export default PostPage;
