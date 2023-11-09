import { checkedType } from "./checkedType";
import { handleCategories } from "../categories";
import "./types.css";

export function addTypesList(types, categories) {
	const ulTypes = document.getElementById("types__ul");

	types.map((type) => {
		const li = document.createElement("li");
		li.classList.add(type.id);
		li.textContent = type.name;
		li.tabIndex = 0;
		li.addEventListener("click", () => {
			checkedType(li);
			handleCategories(categories);
		});
		ulTypes.append(li);
	});

	document.getElementById("vege-checkbox").addEventListener("click", () => {
		handleCategories(categories);
	});
}
