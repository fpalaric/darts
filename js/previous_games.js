let pnumber; // Number of players
let aplayer=[]; // Array containing players names


// If there was already a game going on
if(localStorage.getItem("last_301")!="no_game"){
	// Split the string temp_301 that contains the info of the previous game
	// The string is formated this way : "temp_301/Player_1:2:299/Player_2:10:291/Player_3:301/Player_4:301"
	let tab=localStorage.getItem("last_301").split("/");
	for(let i=1; i<tab.length; i++){
		tab[i]=tab[i].split(":");
		aplayer.push(tab[i][0]);
	}
	// tab now contains a sub array for every players : [Player_1][2][299]
	pnumber=aplayer.length;
	
	// Insert the table with the players name and the 301 cell
	let table = document.getElementById("table");
	for (let i=0; i<pnumber; i++){
		let row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = aplayer[i];
		var cell = row.insertCell();
		cell.innerHTML = 301;
		cell.style.color="red";
	}
	console.log(tab);
	// Insert all the scores of every players in the table
	for (let i=0; i<aplayer.length; i++){
		for (let j=1; j<tab[i+1].length; j++){
			var cell1 = table.rows[i].insertCell(table.rows[i].cells.length-1);
			cell1.innerHTML=tab[i+1][j];
			// Used to reduce the 301 cells according to the what the player scored (301-the just inserted score)
			var cell2=table.rows[i].cells[table.rows[i].cells.length-1];
			cell2.innerHTML=cell2.innerHTML-cell1.innerHTML;
		}
	}
}