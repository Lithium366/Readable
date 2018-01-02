import { connect } from 'react-redux';
import Comments from './Comments';

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments.filter(comment => comment.parentId === props.post_id)
  };
};

export default connect(mapStateToProps)(Comments);