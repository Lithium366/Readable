import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa'

class Posts extends Component {
  render() {
    const {
      posts,
      category
      } = this.props;

    return (
      <table className="postsList">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              Posted
              <button><FontAwesome.FaLongArrowUp /></button>
              <button><FontAwesome.FaLongArrowDown /></button>
            </th>
            <th>
              Vote score
              <button><FontAwesome.FaLongArrowUp /></button>
              <button><FontAwesome.FaLongArrowDown /></button>
            </th>
          </tr>
        </thead>
        <tbody>
        { posts
          .filter(post => (post.category === category || !category))
          .map(post =>(
            <tr key={ post.id }>
              <td><Link to={`${post.category}/${post.id}`} >{ post.title }</Link></td>
              <td>{ moment(post.timestamp).format('MM-DD-YYYY, h:mmA') }</td>
              <td>
                { post.voteScore }
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    )
  }
}

Posts.propTypes = {
  category: PropTypes.string,
  posts: PropTypes.array
};

export default Posts;