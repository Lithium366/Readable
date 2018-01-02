import { connect } from 'react-redux';
import Post from './Post';

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.filter(post => post.id === props.post_id)[0]
  };
};

export default connect(mapStateToProps)(Post);