import {$host } from './index';

export const createEmployee = async (formData) => {
    try {
        const { data } = await $host.post('api/emp/employees', formData);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getEmployees = async () => {
    try {
        const { data } = await $host.get('api/emp/employees');
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
export const deleteEmployee = async (id) => {
    try {
        const { data } = await $host.delete(`api/emp/employees/${id}`);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
