const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    warehouses: [{
        warehousesName: { type: String },
        stock: { type: Number }
    }],
    status: { type: String, enum: ['on sale', 'not on sale'], required: true },
    characteristics: { type: String, required: true }
}, {
    collection: 'products',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

productSchema.plugin(mongoosePaginate);

const PRModel = mongoose.model('Product', productSchema);
module.exports = PRModel;