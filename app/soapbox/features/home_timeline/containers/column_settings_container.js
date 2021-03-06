import { connect } from 'react-redux';
import ColumnSettings from '../components/column_settings';
import {
  getSettings,
  changeSetting,
  saveSettings,
} from '../../../actions/settings';

const mapStateToProps = state => ({
  settings: getSettings(state).get('home'),
});

const mapDispatchToProps = dispatch => ({

  onChange(key, checked) {
    dispatch(changeSetting(['home', ...key], checked));
  },

  onSave() {
    dispatch(saveSettings());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSettings);
