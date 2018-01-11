import React, { Component } from 'react';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa';
import CommentForm from '../Forms/CommentFormContainer';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };

    this.onHideForm = this.onHideForm.bind(this);
  }
  componentWillMount() {
    const {
      fetchComments,
      postId
    } = this.props;

    fetchComments(postId);
  }
  onEditComment(id) {
    this.setState({
      edit: true,
      editId: id
    })
  }
  onHideForm() {
    this.setState({
      edit: false
    });
  }
  render() {
    const {
      comments,
      vote,
      deleteComment,
      postId
    } = this.props;
    const {
      edit,
      editId
    } = this.state;


    return (
      <div>
        { comments.length !== 0 &&
          (<h4>Comments: </h4>)
        }
        {comments.map(comment => (
          <div key={comment.id}>
            <div>{comment.body}</div>
            <div className="meta">
              <span>
                Votes: {comment.voteScore}
                <button onClick={() => vote(comment.id, 1)} className="buttonControl"><FontAwesome.FaThumbsOUp /></button>
                <button onClick={() => vote(comment.id, -1)} className="buttonControl"><FontAwesome.FaThumbsODown /></button>
              </span>
              <span>By: {comment.author}</span>
              <span>Posted: { moment(comment.timestamp).format('MM-DD-YYYY, h:mmA') }</span>
              <button onClick={() => deleteComment(comment.id)} className="buttonControl"><FontAwesome.FaTrash/></button>
              <button onClick={() => this.onEditComment(comment.id)} className="buttonControl"><FontAwesome.FaPencil/></button>
            </div>
            { edit && editId === comment.id &&
              <div className="inlineCommentsForm">
                <CommentForm comment={comment} onHideForm={this.onHideForm} parentId={postId} />
              </div>
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Post;
