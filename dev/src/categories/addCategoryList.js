import { api, getData } from "../api";
import "./categories.css";

export function addCategoryList(categories) {
	const ulCategories = document.getElementById("categories__ul");

	categories.map((category) => {
		const li = document.createElement("li");
		li.setAttribute("id", category.id);
		li.classList.add(category.type);
		li.addEventListener("click", () => {
			getData(api.products.productURL);
		});

		const img = document.createElement("img");
		img.src = category.iconUrl;
		img.alt = category.name;

		const p = document.createElement("p");
		p.textContent = category.name;

		li.append(img, p);
		ulCategories.append(li);
	});
}
