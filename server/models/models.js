const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Employees = sequelize.define('employees', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    position: {type: DataTypes.STRING, unique: false, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const DangerousWorks = sequelize.define('dangerousWorks', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    job_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

DangerousWorks.hasMany(Employees, {foreignKey: 'workId'});
Employees.belongsTo(DangerousWorks);

module.exports = {
    User,
    Employees,
    DangerousWorks
}