const myHeading = document.querySelector('h1');
myHeading.textContent = 'Ruche Hour!';

// Generation des colonnes laterales
var gauche = document.getElementById('imagesgauche');
var droite = document.getElementById('imagesdroite');

function blockimages(alternate) {
    if (alternate) {
        return `<div> <input type="image" src="icones/ruche.png"/></div><div><input type="image" src="icones/abeille.png"/></div>`
    }
    else {
        return `<div> <input type="image" src="icones/abeille.png"/></div><div><input type="image" src="icones/ruche.png"/></div>`
    }
}

for (var i = 0; i < 8; i++) {
    gauche.innerHTML += blockimages(false);
    droite.innerHTML += blockimages(true);
}

// Mise en place du jeu.
var today;
var daily_play;
var letters = [], todayletters = [];
var found, foundlist = [];
var pangram_found, pangrams_foundlist = [];
var current_score;
var guess;
var load_words;
var rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9;
var max_score, max_score_today, max_score_yesterday;
var n_words, wordlist = [];
var n_wordstoday, todaywordlist = [];
var n_wordsyesterday, yesterdaywordlist = [];
var n_pangrams, pangramlist = [];
var n_pangramstoday, todaypangramlist = [];
var n_pangramsyesterday, yesterdaypangramlist = [];


// Ajout d'une lettre au mot en cours - l'alvéole se contracte au clic.
function type(letter, combno) {
	reinitialize_message();
	document.getElementById("comb" + combno).style.height = "120px";
	document.getElementById("comb" + combno).style.width = "120px";
	document.getElementById("comb" + combno).style.left = parseInt(document.getElementById("comb" + combno).style.left) + 20 + "px";
	document.getElementById("comb" + combno).style.top = parseInt(document.getElementById("comb" + combno).style.top) + 20 + "px";
	document.getElementById("guess").value = document.getElementById("guess").value + letter;
}


// Reset des alvéoles après un click.
function untype() {
	document.getElementById("comb1").style.height = "160px";
	document.getElementById("comb1").style.width = "160px";
	document.getElementById("comb1").style.left = "1px";
	document.getElementById("comb1").style.top = "61px";
	document.getElementById("comb2").style.height = "160px";
	document.getElementById("comb2").style.width = "160px";
	document.getElementById("comb2").style.left = "105px";
	document.getElementById("comb2").style.top = "2px";
	document.getElementById("comb3").style.height = "160px";
	document.getElementById("comb3").style.width = "160px";
	document.getElementById("comb3").style.left = "209px";
	document.getElementById("comb3").style.top = "61px";
	document.getElementById("comb4").style.height = "160px";
	document.getElementById("comb4").style.width = "160px";
	document.getElementById("comb4").style.left = "1px";
	document.getElementById("comb4").style.top = "181px";
	document.getElementById("comb5").style.height = "160px";
	document.getElementById("comb5").style.width = "160px";
	document.getElementById("comb5").style.left = "105px";
	document.getElementById("comb5").style.top = "240px";
	document.getElementById("comb6").style.height = "160px";
	document.getElementById("comb6").style.width = "160px";
	document.getElementById("comb6").style.left = "209px";
	document.getElementById("comb6").style.top = "181px";
	document.getElementById("comb7").style.height = "160px";
	document.getElementById("comb7").style.width = "160px";
	document.getElementById("comb7").style.left = "105px";
	document.getElementById("comb7").style.top = "121px";
}

// Affichage des différentes lettres
function display() {
	var didtouch = 0;

	document.getElementById("play1").src = "lettres/"+ letters[0] + ".png";
	document.getElementById("play1").alt = letters[0];
	document.getElementById("play1").style.left = "36px";
	document.getElementById("play1").style.top = "66px";
	document.getElementById("play1").ontouchstart = function() {didtouch = 1; type(letters[0], 1)};
	document.getElementById("play1").onmousedown = function() {if (didtouch != 1) {type(letters[0], 1)}};
	document.getElementById("play1").style.display = "block";
	document.getElementById("play1").onmouseup = function() {untype()};
	document.getElementById("play1").ondragend = function() {untype()};
	document.getElementById("play1").ontouchend = function() {untype()};
	document.getElementById("play1").ontouchcancel = function() {untype()};

	document.getElementById("play2").src = "lettres/"+ letters[1] + ".png";
	document.getElementById("play2").alt = letters[1];
	document.getElementById("play2").style.left = "141px";
	document.getElementById("play2").style.top = "7px";
	document.getElementById("play2").ontouchstart = function() {didtouch = 1; type(letters[1], 2)};
	document.getElementById("play2").onmousedown = function() {if (didtouch != 1) {type(letters[1], 2)}};
	document.getElementById("play2").style.display = "block";
	document.getElementById("play2").onmouseup = function() {untype()};
	document.getElementById("play2").ondragend = function() {untype()};
	document.getElementById("play2").ontouchend = function() {untype()};
	document.getElementById("play2").ontouchcancel = function() {untype()};

	document.getElementById("play3").src = "lettres/"+ letters[2] + ".png";
	document.getElementById("play3").alt = letters[2];
	document.getElementById("play3").style.left = "246px";
	document.getElementById("play3").style.top = "66px";
	document.getElementById("play3").ontouchstart = function() {didtouch = 1; type(letters[2], 3)};
	document.getElementById("play3").onmousedown = function() {if (didtouch != 1) {type(letters[2], 3)}};
	document.getElementById("play3").style.display = "block";
	document.getElementById("play3").onmouseup = function() {untype()};
	document.getElementById("play3").ondragend = function() {untype()};
	document.getElementById("play3").ontouchend = function() {untype()};
	document.getElementById("play3").ontouchcancel = function() {untype()};

	document.getElementById("play4").src = "lettres/"+ letters[3] + ".png";
	document.getElementById("play4").alt = letters[3];
	document.getElementById("play4").style.left = "36px";
	document.getElementById("play4").style.top = "186px";
	document.getElementById("play4").ontouchstart = function() {didtouch = 1; type(letters[3], 4)};
	document.getElementById("play4").onmousedown = function() {if (didtouch != 1) {type(letters[3], 4)}};
	document.getElementById("play4").style.display = "block";
	document.getElementById("play4").onmouseup = function() {untype()};
	document.getElementById("play4").ondragend = function() {untype()};
	document.getElementById("play4").ontouchend = function() {untype()};
	document.getElementById("play4").ontouchcancel = function() {untype()};

	document.getElementById("play5").src = "lettres/"+ letters[4] + ".png";
	document.getElementById("play5").alt = letters[4];
	document.getElementById("play5").style.left = "141px";
	document.getElementById("play5").style.top = "245px";
	document.getElementById("play5").ontouchstart = function() {didtouch = 1; type(letters[4], 5)};
	document.getElementById("play5").onmousedown = function() {if (didtouch != 1) {type(letters[4], 5)}};
	document.getElementById("play5").style.display = "block";
	document.getElementById("play5").onmouseup = function() {untype()};
	document.getElementById("play5").ondragend = function() {untype()};
	document.getElementById("play5").ontouchend = function() {untype()};
	document.getElementById("play5").ontouchcancel = function() {untype()};

	document.getElementById("play6").src = "lettres/"+ letters[5] + ".png";
	document.getElementById("play6").alt = letters[5];
	document.getElementById("play6").style.left = "246px";
	document.getElementById("play6").style.top = "186px";
	document.getElementById("play6").ontouchstart = function() {didtouch = 1; type(letters[5], 6)};
	document.getElementById("play6").onmousedown = function() {if (didtouch != 1) {type(letters[5], 6)}};
	document.getElementById("play6").style.display = "block";
	document.getElementById("play6").onmouseup = function() {untype()};
	document.getElementById("play6").ondragend = function() {untype()};
	document.getElementById("play6").ontouchend = function() {untype()};
	document.getElementById("play6").ontouchcancel = function() {untype()};

	document.getElementById("play7").src = "lettres/"+ letters[6] + ".png";
	document.getElementById("play7").alt = "center: " + letters[6];
	document.getElementById("play7").style.left = "141px";
	document.getElementById("play7").style.top = "126px";
	document.getElementById("play7").ontouchstart = function() {didtouch = 1; type(letters[6], 7)};
	document.getElementById("play7").onmousedown = function() {if (didtouch != 1) {type(letters[6], 7)}};
	document.getElementById("play7").style.display = "block";
	document.getElementById("play7").onmouseup = function() {untype()};
	document.getElementById("play7").ondragend = function() {untype()};
	document.getElementById("play7").ontouchend = function() {untype()};
	document.getElementById("play7").ontouchcancel = function() {untype()};
}

// Rang (Message) - Valeur et update
function update_rank() {
	var rank;

	if (current_score >= rank9) {
		rank = "Félicitations, tu es notre Raïs à nous!";
	} else if (current_score >= rank8) {
		rank = "Quand le chat lève la queue, c'est qu'il est en confiance";
	} else if (current_score >= rank7) {
		rank = "Gratin Cairote";
	} else if (current_score >= rank6) {
		rank = "Habile, Bill";
	} else if (current_score >= rank5) {
		rank = "J'aime ce qu'il se passe";
	} else if (current_score >= rank4) {
		rank = "S'agirait de grandir";
	} else if (current_score >= rank3) {
		rank = "T'es mauvais";
	} else if (current_score >= rank2) {
		rank = "C'est la piquette, Jack";
	} else {
		rank = "Tu sais pas jouer, Jack";
	}

	document.getElementById("rank-update").innerHTML = rank;
}

function set_rank() {
	rank1 = 0;
	rank2 = Math.floor(max_score_today * 0.02);
	rank3 = Math.floor(max_score_today * 0.05);
	rank4 = Math.floor(max_score_today * 0.08);
	rank5 = Math.floor(max_score_today * 0.15);
	rank6 = Math.floor(max_score_today * 0.25);
	rank7 = Math.floor(max_score_today * 0.40);
	rank8 = Math.floor(max_score_today * 0.50);
	rank9 = Math.floor(max_score_today * 0.70);
}

// Sauvegarde d'un mot trouvé (local storage).
function save_word() {
	localStorage.setItem("foundwords", JSON.stringify(foundlist));
}

// Calcul des points.
function add_points_check_pangram() {
	var used_letters = [0, 0, 0, 0, 0, 0];
	var i = 0, j = 0;

	if (daily_play) {
		save_word();
	}

	// Ajout des points
	if (guess.length == 4) {
		current_score += 1;
		return false;
	}
	current_score += guess.length;

	// Verification pangramme pour 7 points bonus
	while (i < guess.length) {
		// On ne vérifie pas le centre - Toujours utilisé.
		for (j = 0; j < 6; j++) {
			if (guess[i] == letters[j]) {
				if (used_letters[j] == 0) {
					used_letters[j] = 1;
				}
			}
	    }
		i += 1;
	}
	// Verification lettre centrale.
	var all_used = true;
	for (j = 0; j < 6; j++) {
		all_used = all_used && used_letters[j] == 1;
	}

	if (all_used) {
        current_score += 7;
        document.getElementById("no-message").style.display = "none";
        document.getElementById("pangram").style.display = "inline";
	}
	return all_used;
}

function found_word() {
	var i;

	for (i = 0; i < found; i++) {
		if (guess == foundlist[i]) {
	    	document.getElementById("no-message").style.display = "none";
	    	document.getElementById("already-found").style.display = "inline";
	    	return false;
	  	}
	}
	// Ajout du mot à la liste avant de compter les points.
	// On sauve le mot en ajoutant les points (add_points calls save_word)	
	foundlist.push(guess);
	found += 1;
	// Ajout des points + Check pangramme
	var is_pangram = add_points_check_pangram();
	if (is_pangram) {
		pangram_found += 1;
		pangrams_foundlist.push(guess);
	}

	// Updating the scoreboard.
	document.getElementById("points-update").innerHTML = current_score;
	document.getElementById("wordcount-update").innerHTML = found + "/" + n_words;
	document.getElementById("pangramcount-update").innerHTML = pangram_found + "/" + n_pangrams;
	document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
	document.getElementById("pangrams-update").innerHTML = pangrams_foundlist.join("<br />");

	update_rank();

	if (found == n_words) {
		alert("Cette petite abeille porte le nom de Maya!");
	}

	return true;
}

function check() {
	var center = false, i;

	reinitialize_message();

	if (load_words === false) {
		guess = document.getElementById("guess").value.toLowerCase();
		document.getElementById("player-guess").reset();
	} else {
		guess = guess.toLowerCase();
	}

	if (guess.length < 4) {
	  document.getElementById("no-message").style.display = "none";
	  document.getElementById("too-short").style.display = "inline";
	  return false;
	}

	for (i = 0; i < guess.length; i++) {
	  if (guess[i] == letters[6]) {
	    center = true;  
		break;
	  }  
	}  

	if (!center) {
	  document.getElementById("no-message").style.display = "none";
	  document.getElementById("center-letter").style.display = "inline";
	  return false;
	}

	for (i = 0; i < n_words; i++) {
	  if (guess == wordlist[i]) {
	    return found_word();
	  }
	}
	document.getElementById("no-message").style.display = "none";
	document.getElementById("not-in-list").style.display = "inline";

	return false;
}

function replay_words() {
	var i, replay;

	load_words = true;
	replay = JSON.parse(localStorage.getItem("foundwords"));
	localStorage.removeItem("foundwords");

	for (i = 0; i < replay.length; i++) {
		guess = replay[i];
		if (check() == false) {
	    	localStorage.removeItem("foundwords");
	    	for (i = 0; i < found; i++) {
	    		foundlist.pop();
	    	}

			found = 0;
			pangram_found = 0;
			current_score = 0;
			rank = "Tu sais pas jouer, Jack";

			reinitialize_message();

			load_words = false;

			return;
		}
	}

	reinitialize_message();
	load_words = false;
}

function daily() {
	var i;

	daily_play = true;

	for (i = 0; i < found; i++) {
	  foundlist.pop();
	}

	found = 0;
	pangram_found = 0;
	current_score = 0;
	rank = "Tu sais pas jouer, Jack";
	load_words = false;

	document.getElementById("points-update").innerHTML = current_score;
	document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
	document.getElementById("pangrams-update").innerHTML = pangrams_foundlist.join("<br />");
	document.getElementById("rank-update").innerHTML = rank;

	for (i = 0; i < 7; i++) {
		letters[i] = todayletters[i];
	}
	max_score = max_score_today;
	n_words = n_wordstoday;
	wordlist = todaywordlist;
	n_pangrams = n_pangramstoday;
	pangramlist = todaypangramlist;
	reinitialize_message();
	set_rank();
	if (localStorage.hasOwnProperty("foundwords") === true) {
		replay_words();
	}
	display();
}


async function get_data(today) {
	var i;
	yesterday = (today + 1499) % 1500;
	var path_today = "./ruches/ruche_" + today.toString() + ".json";
	var path_yesterday = "./ruches/ruche_" + yesterday.toString() + ".json";
	await fetch(path_today)
		.then(response => response.json())
		.then(data_today => {
			for (i = 0; i < 6; i++){
				todayletters[i] = data_today["letters"][i];
			}
			todayletters[6] = data_today["center"];
			max_score_today = data_today["max_score"];
			n_wordstoday = data_today["n_words"];
			todaywordlist = data_today["words"];
			n_pangramstoday = data_today["n_pangrams"];
			todaypangramlist = data_today["pangrammes"];
		})
	;
	await fetch(path_yesterday)
		.then(response => response.json())
		.then(data_previous => {
			max_score_yesterday = data_previous["max_score"];
			n_wordsyesterday = data_previous["n_words"];
			yesterdaywordlist = data_previous["words"];
			n_pangramsyesterday = data_previous["n_pangrams"];
			yesterdaypangramlist = data_previous["pangrammes"];
		})
	;
	daily();
	update_previous_info();
}

window.onload = function() {
	// Setting up display.
	untype();
	update_ruche_calendar();
	// Getting data
	today = get_day();
	get_data(today);
};

function shuffle() {
	var i, j, t;
	for (i = 5; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		t = letters[j];
		letters[j] = letters[i];
		letters[i] = t;
	}
	display();
}

function delete_letter() {
	var str = document.getElementById("guess").value;
	var len = str.length;

	str = str.slice(0, len - 1) + str.slice(len, len);
	document.getElementById("guess").value = str;
}

function reinitialize_message() {
	document.getElementById("no-message").style.display = "inline";
	document.getElementById("pangram").style.display = "none";
	document.getElementById("already-found").style.display = "none";
	document.getElementById("center-letter").style.display = "none";
	document.getElementById("too-short").style.display = "none";
	document.getElementById("not-in-list").style.display = "none";
}

function toggle_yesterday_info() {
	var resultats = document.getElementById("resultats-veille");
    if (resultats.style.display == "none") {
        resultats.style.display = "block";
    } else {
        resultats.style.display = "none";
    }
}

function update_previous_info() {
	document.getElementById("answers-yesterday").innerHTML = yesterdaywordlist.join("<br />");
	document.getElementById("ruche-precedente").innerHTML = " Mots: " + n_wordsyesterday 
	+ "<br /> Score maximal:  " + max_score_yesterday
	+ "<br /><br /> Pangrammes: " + n_pangramsyesterday
	+ "<br /> " + yesterdaypangramlist.join("<br />");
}

function get_day() {
	const now = new Date();
	return Math.floor(now.getTime() / (2*86400*1000)) % 1500;
}

function update_ruche_calendar() {
	const now = new Date();
	var passed = now.getTime() / (2*86400*1000);
	var ruche_id = passed % 1500;
	var ruches_number = Math.floor((ruche_id + 870) % 1500);
	if (passed - Math.floor(passed) < 0.5) {
		var playday = 1;
	}
	else {
		var playday = 2;
	}
	document.getElementById("numero").innerHTML += "Ruche n<sup>o</sup> " + ruches_number + "<br/>Jour " + playday;
}