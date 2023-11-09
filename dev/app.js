import { api, getData, addCategoryList, addTypesList } from "./src";

const [dataTypes, dataCategories] = await Promise.all([
	getData(api.products.typesURL),
	getData(api.products.categoriesURL),
]);

const sortedTypes = dataTypes
	? dataTypes.toSorted((a, b) => a.name.localeCompare(b.name))
	: {};
const sortedCategories = dataCategories
	? dataCategories.toSorted((a, b) => a.name.localeCompare(b.name))
	: {};

addTypesList(sortedTypes, sortedCategories);
addCategoryList(sortedCategories);
