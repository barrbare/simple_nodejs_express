const ProductModel = require('../models/product');

module.exports = {
    getAll: (req, res) => {
        ProductModel.find({})
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(500).json(error);
            })
    },
    getOne: async (req, res) => {
        try {
            const item = await ProductModel.findById(req.params.id);
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },    
    add: async (req, res) => {
        try {
            const savedItem = await new ProductModel(req.body).save();
            res.json(savedItem);
        } catch (error) {
            res.status(500).json(error);
        }    
    },
    update: async (req, res) => {
        try {
            const item = await ProductModel.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    search: async (req, res) => {
        const { query, page, limit } = req.query;
        const regexQuery = new RegExp(query, 'i');
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 10
        };

        try {
            const result = await ProductModel.paginate(
                { name: regexQuery },
                options
            );
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}