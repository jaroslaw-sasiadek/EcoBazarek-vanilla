export async function getData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(response.status);
		return await response.json();
	} catch (error) {
		alert("Nie udało się wczytać danych!");
	}
}
