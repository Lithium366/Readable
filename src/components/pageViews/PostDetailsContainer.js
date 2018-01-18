import { connect } from 'react-redux';
import PostDetails from './PostDetails';

import {
  FETCH_POST
} from '../../actions';

import {
  fetchPost
} from '../../util/api';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => {
      fetchPost(postId)
        .then(post => dispatch({type: FETCH_POST, post}));
    }
  }
};

const mapStateToProps = ({ posts, comments}) => ({ posts, comments });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);