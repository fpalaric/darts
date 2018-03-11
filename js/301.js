// ------------------------
let pnumber; // Number of players
let aplayer=[]; // Array containing players names
let save; // String used for saving scores


// If there was already a game going on
if(localStorage.getItem("temp_301")!="no_game"){
	document.getElementById("select").style.display = "inline-block";
	document.getElementById("score").style.display = "inline-block";
	document.getElementById("register").style.display = "inline-block";
	document.getElementById("table").style.display = "table";
	document.getElementById("save").style.display = "inline-block";
	document.getElementById("reset").style.display = "inline-block";
	document.getElementById("rules").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("playerNumber").style.display = "none";
	document.getElementById("go").style.display = "none";
	document.getElementById("enter_player").style.display = "none";
	document.getElementById("undo").style.display = "inline-block";
	// Split the string temp_301 that contains the info of the previous game
	// The string is formated this way : "temp_301/Player_1:2:299/Player_2:10:291/Player_3:301/Player_4:301"
	let tab=localStorage.getItem("temp_301").split("/");
	for(let i=1; i<tab.length; i++){
		tab[i]=tab[i].split(":");
		aplayer.push(tab[i][0]);
	}
	// tab now contains a sub array for every players : [Player_1][2][299]
	pnumber=aplayer.length;
	
	// Appends the players into the select element
	let select=document.getElementById("select");
	for (let i=0; i<pnumber; i++){
		let option = document.createElement('option');
        option.text = aplayer[i];
        select.appendChild(option);
	}
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

// Create as many input field as the number of players
function button_compute(){
	pnumber=document.getElementById("playerNumber").value;
	create_inputs(pnumber);
}


function create_inputs(number){
	for (let i=0; i < pnumber; i++){
		let x = document.createElement("INPUT");
		x.setAttribute("type", "text");
		x.setAttribute("ID",i);
		//By default the name is player_i
		x.value="player "+i;
		// Insert them is the div "name_holder"
		document.getElementById("name_holder").appendChild(x);
	}
	document.getElementById("go").style.display = "none";
	document.getElementById("enter_player").style.display = "inline-block";
}


function hide_gui(){
	document.getElementById("rules").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("playerNumber").style.display = "none";
	for (let i=0; i<pnumber; i++){
		document.getElementById(i).style.display = "none";
	}
	document.getElementById("enter_player").style.display = "none";
}

function enter_player(){
	hide_gui();
	//Append the players name into the select element and fill the array aplayer with the names
	let select=document.getElementById("select");
	for (let i=0; i<pnumber; i++){
		let option = document.createElement('option');
        option.text = document.getElementById(i).value;
        select.appendChild(option);
		aplayer.push(document.getElementById(i).value);
	}
	document.getElementById("select").style.display = "inline-block";
	document.getElementById("score").style.display = "inline-block";
	document.getElementById("register").style.display = "inline-block";
	document.getElementById("table").style.display = "table";
	document.getElementById("save").style.display = "inline-block";
	document.getElementById("reset").style.display = "inline-block";
	document.getElementById("undo").style.display = "inline-block";
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
}

// Called when the user register a score for a player
function button_register(){
	let value=document.getElementById("score").value;
	if(value <= 180 && value>0){
		let select=document.getElementById("select");
		let index=select.selectedIndex; 	//Get the index of the selected player (index = table row)
		let table = document.getElementById("table");
		var score=document.getElementById("score").value; // Insert the value 
		var cell2=table.rows[index].cells[table.rows[index].cells.length-1];
		var result = cell2.innerHTML-score; // Modify the 301 value (301-inserted score)
		if (result > 0)
			{
				cell2.innerHTML = result;
				var cell1 = table.rows[index].insertCell(table.rows[index].cells.length-1); // Insert a cell in second to last position
				cell1.innerHTML = score;
			}
		if (result==0)
			{
				//TODO : display player i win and save the game
			}
		// Construct the string used to save the data (see top of the code to see the format used)
		save="temp_301";
		for(let i=0; i<table.rows.length; i++){
			save=save+"/"+table.rows[i].cells[0].innerHTML;
			for (let j=1; j<table.rows[i].cells.length-1; j++){
				save=save+":"+table.rows[i].cells[j].innerHTML;
			}
		}
		// Save the string into the localStorage
		localStorage.setItem("temp_301", save);
	}
}

function button_undo(){
	let table = document.getElementById("table");
	let select=document.getElementById("select");
	let index=select.selectedIndex; 	//Get the index of the selected player (index = table row)
	console.log(table.rows[index].cells.length-2);
	if(table.rows[index].cells.length-2>0 && table.rows[index].cells.length-2!=table.rows[index].cells.length-1){
	var cell1=table.rows[index].cells[table.rows[index].cells.length-2];
	var cell2=table.rows[index].cells[table.rows[index].cells.length-1];
	cell2.innerHTML=parseInt(cell2.innerHTML)+parseInt(cell1.innerHTML);
	table.rows[index].deleteCell(table.rows[index].cells.length-2);
	}
}

function button_save(){
	save="temp_301";
	for(let i=0; i<table.rows.length; i++){
		save=save+"/"+table.rows[i].cells[0].innerHTML;
		for (let j=1; j<table.rows[i].cells.length-1; j++){
			save=save+":"+table.rows[i].cells[j].innerHTML;
		}
	}
	localStorage.removeItem("last_301");
	localStorage.setItem("last_301", save);
	console.log(save);
}

function button_reset(){
	localStorage.setItem("temp_301", "no_game");
	location.reload();
}





