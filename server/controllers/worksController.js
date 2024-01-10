const { DangerousWorks } = require('../models/models');
const path = require('path');
const uuid = require('uuid');
const ApiError = require('../error/ApiError');

class WorksController {

    async getAllWorks(req, res, next) {
        try {
            const works = await DangerousWorks.findAll();
            return res.json(works);
        } catch (error) {
            console.error('Error fetching works:', error);
            next(ApiError.internal('Error fetching works from the database'));
        }
    }

    async getWorkById(req, res, next) {
        try {
            const workId = req.params.id;
            const work = await DangerousWorks.findByPk(workId);

            if (!work) {
                return next(ApiError.notFound('Work not found'));
            }

            return res.json(work);
        } catch (error) {
            next(ApiError.internal('Internal Server Error'));
        }
    }

    async createWork(req, res, next) {
        try {
            let { job_name, description } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const work = await DangerousWorks.create({ job_name, description, img: fileName });
    
            return res.json(work);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateWork(req, res, next) {
        try {
            const workId = req.params.id;
            const { job_name, description, img } = req.body;
            await DangerousWorks.update({ job_name, description, img }, {
                where: { id: workId }
            });
            return res.json({ success: 'Updated Successfully' });
        } catch (error) {
            console.error('Error updating work:', error);
            next(ApiError.internal('Error updating work in the database'));
        }
    }

    async deleteWork(req, res, next) {
        try {
            const workId = req.params.id;
            await DangerousWorks.destroy({
                where: { id: workId }
            });
            return res.json({ success: 'Deleted Successfully' });
        } catch (error) {
            console.error('Error deleting work:', error);
            next(ApiError.internal('Error deleting work from the database'));
        }
    }
}

module.exports = new WorksController();
