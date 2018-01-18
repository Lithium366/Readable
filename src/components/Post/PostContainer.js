import { connect } from 'react-redux';
import Post from './Post';
import PostMapDispatchToProps from './PostCommonActionCreators';

export default connect(
  ({categories}) => ({categories}),
  (dispatch) => { return { ...PostMapDispatchToProps(dispatch) } }
)(Post);