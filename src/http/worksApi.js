import {$host } from './index';

export const createJob = async (formData) => {
    try {
        const { data } = await $host.post('api/job/works', formData);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getJob = async () => {
    try {
        const { data } = await $host.get('api/job/works');
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
