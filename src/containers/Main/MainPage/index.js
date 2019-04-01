import { connect } from 'react-redux';

// Actions
import { deleteDiaryAction } from '@redux/core/actions';


// The component we're mapping to
import view from './view';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
    diaries: state.core.diaries
});

// Any actions to map to the component?
const mapDispatchToProps = {
    deleteDiaryAction
};

export default connect(mapStateToProps, mapDispatchToProps)(view);
