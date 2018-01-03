import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
const { connect } = require('react-redux');
import { SPS } from '../components';

const mapStateToProps = (state: SpsContainerProps) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch<SpsContainerProps>) => {
  return {
    ...bindActionCreators(
      {},
      dispatch
    ),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SPS
);
