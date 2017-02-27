import { connect } from 'react-redux';
import Write from '../../components/Write';

function mapStateToProps(state) {
  return {
  }
}

const WriteContainer = connect(mapStateToProps)(Write);

export default WriteContainer
