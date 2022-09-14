// Fichero src/services/api.js
export const callToApi = ( productName) => {
    return fetch(`https://api.spoonacular.com/food/products/suggest?apiKey=${process.env.REACT_APP_API_KEY}&query=${productName}&number=15`)
      .then((response) => response.json())
      .then((response) => {
        console.log('response: ', response);
        const { results: products } = response;
        const formatedProducts = products.map(product => ({
          id: product.id,
          name: product.title,
        }));
          return formatedProducts;
      });
  };