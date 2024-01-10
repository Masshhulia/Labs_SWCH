const { Employees } = require('../models/models');
const path = require('path');
const uuid = require('uuid');
const ApiError = require('../error/ApiError');

class EmployeesController {

    async getAllEmployees(req, res, next) {
        try {
            const employees = await Employees.findAll();
            return res.json(employees);
        } catch (error) {
            console.error('Error fetching employees:', error);
            next(ApiError.internal('Error fetching employees from the database'));
        }
    }

    async getEmployeeById(req, res, next) {
        try {
            const employeeId = req.params.id;
            const employee = await Employees.findByPk(employeeId);

            if (!employee) {
                return next(ApiError.notFound('Employee not found'));
            }

            return res.json(employee);
        } catch (error) {
            next(ApiError.internal('Internal Server Error'));
        }
    }

    async createEmployee(req, res, next) {
        try {
            let { name, position } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const employee = await Employees.create({ name, position, img: fileName });
    
            return res.json(employee);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateEmployee(req, res, next) {
        try {
            const employeeId = req.params.id;
            const { name, position, img } = req.body;
            await Employees.update({ name, position, img }, {
                where: { id: employeeId }
            });
            return res.json({ success: 'Updated Successfully' });
        } catch (error) {
            console.error('Error updating employee:', error);
            next(ApiError.internal('Error updating employee in the database'));
        }
    }

    async deleteEmployee(req, res, next) {
        try {
            const employeeId = req.params.id;
            await Employees.destroy({
                where: { id: employeeId }
            });
            return res.json({ success: 'Deleted Successfully' });
        } catch (error) {
            console.error('Error deleting employee:', error);
            next(ApiError.internal('Error deleting employee from the database'));
        }
    }
}

module.exports = new EmployeesController();
