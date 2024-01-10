// actions.js
export const editEmployee = (employeeId, changes) => ({
  type: 'EDIT_EMPLOYEE',
  payload: { employeeId, changes },
});

export const cancelEditEmployee = () => ({
  type: 'CANCEL_EDIT_EMPLOYEE',
});

export const saveEditEmployee = (employeeId, updatedEmployee) => ({
  type: 'SAVE_EDIT_EMPLOYEE',
  payload: { employeeId, updatedEmployee },
});
