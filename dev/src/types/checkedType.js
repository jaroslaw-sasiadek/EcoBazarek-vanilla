export function checkedType(element) {
	let checked = document.getElementById("checked");

	if (checked) {
		checked.removeAttribute("id");
		if (checked != element) {
			element.id = "checked";
		}
	} else {
		element.id = "checked";
	}
}
