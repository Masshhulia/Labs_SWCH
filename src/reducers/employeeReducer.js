const initialState = {
  employees: [],
  editingEmployee: {},
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_EMPLOYEE':
      console.log('EDIT_EMPLOYEE Action:', action.payload);
      const { employeeId, changes } = action.payload;
      return {
        ...state,
        editingEmployee: {
          ...state.editingEmployee,
          [employeeId]: {
            ...state.editingEmployee[employeeId],
            ...changes,
          },
        },
      };
    case 'SAVE_EDIT_EMPLOYEE':
      const { employeeId: id, updatedEmployee } = action.payload;
      console.log('SAVE_EDIT_EMPLOYEE:', id, updatedEmployee);
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === id ? { ...employee, ...updatedEmployee } : employee
        ),
        editingEmployee: {},
      };
    case 'CANCEL_EDIT_EMPLOYEE':
      return {
        ...state,
        editingEmployee: {},
      };
    default:
      return state;
  }
};



export default employeeReducer;
