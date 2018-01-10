import React, { Component } from 'react';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa';

class Post extends Component {
  componentWillMount() {
    const {
      fetchComments,
      postId
    } = this.props;

    fetchComments(postId);
  }
  render() {
    const {
      comments,
      vote,
      } = this.props;

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
              <button className="buttonControl"><FontAwesome.FaTrash/></button>
              <button className="buttonControl"><FontAwesome.FaPencil/></button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Post;
