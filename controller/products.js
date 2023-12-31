import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        const id= request.params.id
        const products = await Product.findOne({ 'id': id });
        response.json(products);
    }catch (error) {
        response.json('Error: ', error.message);        
    
    }
}