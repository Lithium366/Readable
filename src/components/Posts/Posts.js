import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa'

const updatePosts = (props, category) => {
  const {
    fetchAllPosts,
    fetchCategoryPosts,
    sortState
    } = props;

  if (category) {
    fetchCategoryPosts(category, sortState);
  } else {
    fetchAllPosts(sortState);
  }
};

class Posts extends Component {
  componentWillMount(nextProps) {
    const {
      category
    } = this.props;

    updatePosts(this.props, category);
  }
  componentWillReceiveProps(nextProps) {
    const { category } = nextProps;

    // updated prop is category
    this.props.category !== category && updatePosts(this.props, category);
  }
  render() {
    const {
      posts,
      category,
      sortPosts,
      } = this.props;

    return (
      <table className="postsList">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              Author
            </th>
            <th>
              Posted
              <button onClick={() => sortPosts(1, 'timestamp')} className="buttonControl"><FontAwesome.FaLongArrowUp /></button>
              <button onClick={() => sortPosts(-1, 'timestamp')} className="buttonControl"><FontAwesome.FaLongArrowDown /></button>
            </th>
            <th>
              Vote score
              <button onClick={() => sortPosts(1, 'voteScore')} className="buttonControl"><FontAwesome.FaLongArrowUp /></button>
              <button onClick={() => sortPosts(-1, 'voteScore')} className="buttonControl"><FontAwesome.FaLongArrowDown /></button>
            </th>
            <th>
              # of comments
            </th>
          </tr>
        </thead>
        <tbody>
        { posts
          .filter(post => (post.category === category || !category))
          .map(post =>(
            <tr key={ post.id }>
              <td><Link to={`/view/${post.category}/${post.id}`} >{ post.title }</Link></td>
              <td>{ post.author }</td>
              <td>{ moment(post.timestamp).format('MM-DD-YYYY, h:mmA') }</td>
              <td>{ post.voteScore }</td>
              <td>{ post.commentCount }</td>
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