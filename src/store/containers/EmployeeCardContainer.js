import { connect } from 'react-redux';
import { editEmployee, cancelEditEmployee, saveEditEmployee } from '../actions/actions';
import EmployeeCard from '../../components/Cards/EmployeeCard';

const mapStateToProps = (state) => ({
  editingEmployee: state.employee.editingEmployee,
});


const mapDispatchToProps = (dispatch) => ({
  onEditEmployee: (employeeId) => {
    dispatch(editEmployee(employeeId));
  },
  onCancelEdit: () => {
    dispatch(cancelEditEmployee());
  },
  onSaveEdit: (employeeId, updatedEmployee) => {
    dispatch(saveEditEmployee(employeeId, updatedEmployee));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCard);
