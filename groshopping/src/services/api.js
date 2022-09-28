import product from '../mockData/products.json';

export const callToApi = ( productName ) => {
   return Promise.resolve( product )
   .then((response ) => { 
    const { products } = response;
    const formatedProducts = products.map( product => ({
      id: product.id,
      name: product.title,
    }));
    return formatedProducts;
})}