const apiUrl = "https://api-eko-bazarek.azurewebsites.net/api";

const productsURL = apiUrl + "/products";
const typesURL = productsURL + "/types";
const categoriesURL = productsURL + "/categories";
const productURL = productsURL + "/01d5e2a0-1b34-4644-8205-506130e03b75";
const products = { productsURL, productURL, typesURL, categoriesURL };

export const api = {
	apiUrl,
	products,
};
