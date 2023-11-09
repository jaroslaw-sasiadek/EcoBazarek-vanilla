export function filterVegeCategories(categories) {
	return categories.filter((category) => {
		return (
			category.type === "CEREALS" ||
			category.type === "FRUITS" ||
			category.type === "VEGETABLE" ||
			category.type === "WINE_AND_SPIRITS" ||
			(category.type === "OTHER" && category.id != "EGG")
		);
	});
}
