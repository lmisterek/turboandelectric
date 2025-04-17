document.body.onload = holset();

function holset() {
	
	var tableBody = document.getElementById("holsetTable");

	data.forEach(item=> {

		if (item["Manufacturer"] == "HOLSET") {
			const row = document.createElement('tr');
			
			// Part Number Cell
			const cell1 = document.createElement('td');
			const cell1Text = document.createTextNode(item["Part Number"]);
			cell1.appendChild(cell1Text);
			row.appendChild(cell1);

			// Model
			const cell2 = document.createElement('td');
			const cell2Text = document.createTextNode(item["Model"]);
			cell2.appendChild(cell2Text);
			row.appendChild(cell2);

			// Part Type
			const cell3 = document.createElement('td');
			const cell3Text = document.createTextNode(item["Part Type"]);
			cell3.appendChild(cell3Text);
			row.appendChild(cell3);

			// Condition
			const cell4 = document.createElement('td');
			const cell4Text = document.createTextNode(item["Condition"]);
			cell4.appendChild(cell4Text);
			row.appendChild(cell4);

			// Application
			const cell5 = document.createElement('td');
			const cell5Text = document.createTextNode(item["Application"]);
			cell5.appendChild(cell5Text);
			row.appendChild(cell5);



			tableBody.appendChild(row);


		}
	});
}