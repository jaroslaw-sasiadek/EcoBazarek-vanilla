import { addCategoryList } from "./addCategoryList";
import { filterVegeCategories } from "./filterVegeCategories";

export function handleCategories(categories) {
	document.getElementById("categories__ul").innerHTML = "";
	const checkboxVege = document.getElementById("vege-checkbox");

	let displayCategories = checkboxVege.checked
		? filterVegeCategories(categories)
		: categories;

	document.getElementById("checked") &&
		(displayCategories = displayCategories.filter(
			(category) => category.type === checked.className
		));

	addCategoryList(displayCategories);
}
