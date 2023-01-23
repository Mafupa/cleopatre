const priceList = document.querySelector('#prices-list')

fetch('./json/tarif.json')
    .then((response) => response.json())
    .then((json) => display_price_list(json));

function display_price_list(obj) {
	for (i = 0; i < obj.services.length; i++) {
		// Create new table row
		var newRow = document.createElement("tr");

		// Create new table data elements
		var serviceTD = document.createElement("td");
		var descriptionTD = document.createElement("td");
		var priceTD = document.createElement("td");
		priceTD.classList.add("price");

		// Add text to the table data elements
		serviceTD.innerHTML = obj.services[i].name;
		descriptionTD.innerHTML = obj.services[i].description;
		priceTD.innerHTML = obj.services[i].price+ " FRW";

		// Append the table data elements to the new row
		newRow.appendChild(serviceTD);
		newRow.appendChild(descriptionTD);
		newRow.appendChild(priceTD);

		// Append the new row to the price list table
		priceList.appendChild(newRow);
	}
}