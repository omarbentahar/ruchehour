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
var day, foundall;
var daily_play;
var letters = ["s","u","t","e","j","m","n"], todayletters = ["s","u","t","e","j","m","n"];
var found, foundlist = [];
var pangram_found, pangram_list = [];
var current_score;
var guess;
var load_words;
var pangrams_yesterday = 1, pangramlist_yesterday = ["dejetteriez"];
var rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9;
var max_score = 1087, max_score_today = 1087, max_score_yesterday = 1282;
var n_words = 173, wordlist = ["mesusent","neems","ente","menses","nettes","nette","neem","sennes","stents","jeun","tussent","justement","nems","mnemes","menteuse","tunes","nemeens","jutent","menus","tennesse","nettetes","tenesmes","sens","sement","jettent","sene","entetes","mettent","juments","entent","nees","sentes","tuneuses","nemeennes","jeunee","tunees","nemes","ment","menees","entetees","senes","tuent","sente","jeunees","nets","nuent","etetements","sustentees","entente","jejunums","entetent","entees","jeuneuse","teneuse","stent","tenements","menues","mesentente","nenets","nument","jeunes","muent","menue","senses","enjeu","jeunet","menes","nettement","mesententes","junte","sensee","sustente","mense","jeunesse","menteuses","jeunette","sustentes","tente","jumentes","etetement","emmenees","emmenee","usent","emmenent","nettete","nemeen","entetement","juntes","ententes","sustentee","mentes","unes","entete","mente","sent","eussent","meneuse","menu","testent","nenes","sense","neuneu","tenues","tetent","mneme","tenue","mens","nemeenne","musent","tentee","tentees","mussent","emmenes","sensement","tenu","etetent","nenette","nuement","menee","sensees","menuets","sustentent","tentent","mutent","tune","tunent","entes","tenement","neuneus","neume","jeunettes","usnee","jument","meneuses","jeuneuses","mene","neumes","tenesme","nene","nuees","eumenes","usnees","nues","tennesses","tunee","jeunement","menuet","menent","sussent","senne","suent","nenettes","eumene","teneuses","entetements","entetee","sentent","tenus","emettent","tentes","emmene","jeune","jumente","entee","nuee","mentent","jejunum","jeunent","memement","tuneuse","emussent","jeunesses","jeunets"];
var n_wordstoday = 173, todaywordlist = ["mesusent","neems","ente","menses","nettes","nette","neem","sennes","stents","jeun","tussent","justement","nems","mnemes","menteuse","tunes","nemeens","jutent","menus","tennesse","nettetes","tenesmes","sens","sement","jettent","sene","entetes","mettent","juments","entent","nees","sentes","tuneuses","nemeennes","jeunee","tunees","nemes","ment","menees","entetees","senes","tuent","sente","jeunees","nets","nuent","etetements","sustentees","entente","jejunums","entetent","entees","jeuneuse","teneuse","stent","tenements","menues","mesentente","nenets","nument","jeunes","muent","menue","senses","enjeu","jeunet","menes","nettement","mesententes","junte","sensee","sustente","mense","jeunesse","menteuses","jeunette","sustentes","tente","jumentes","etetement","emmenees","emmenee","usent","emmenent","nettete","nemeen","entetement","juntes","ententes","sustentee","mentes","unes","entete","mente","sent","eussent","meneuse","menu","testent","nenes","sense","neuneu","tenues","tetent","mneme","tenue","mens","nemeenne","musent","tentee","tentees","mussent","emmenes","sensement","tenu","etetent","nenette","nuement","menee","sensees","menuets","sustentent","tentent","mutent","tune","tunent","entes","tenement","neuneus","neume","jeunettes","usnee","jument","meneuses","jeuneuses","mene","neumes","tenesme","nene","nuees","eumenes","usnees","nues","tennesses","tunee","jeunement","menuet","menent","sussent","senne","suent","nenettes","eumene","teneuses","entetements","entetee","sentent","tenus","emettent","tentes","emmene","jeune","jumente","entee","nuee","mentent","jejunum","jeunent","memement","tuneuse","emussent","jeunesses","jeunets"];
var n_wordsyesterday = 192, yesterdaywordlist = ["riziere","triee","deterrez","redit","reeditiez","detirerez","eteterez","tiret","territ","titrez","detiree","terriere","editer","tirer","dire","rizerie","irritiez","reiterer","tire","dedier","terrer","etirez","tirez","irritee","ririez","detire","titriez","tetiere","triiez","etirerez","reitererez","rejetiez","retirer","triere","derideriez","eteteriez","reeditez","reitre","ridee","ridez","reiez","etier","deterrerez","reiteriez","dedirez","redie","rire","rejetee","errez","deterriez","rejetterez","dediriez","tritie","rejeter","errerez","redite","deterre","terree","ridiez","deterreriez","terrirez","reitere","terrier","dedierez","tritiee","trieriez","trie","tertre","reedite","iteree","reiteree","irrite","reerez","editeriez","iterer","teter","tiediriez","terrir","trierez","reer","deride","rejette","erriez","detiriez","trier","itereriez","dedire","teteriez","reeriez","tiree","iridie","riez","iterez","triedre","rediriez","deridez","jeter","retiriez","tireriez","detirez","zire","terre","tirerez","etireriez","dedieriez","reiterez","rejetteriez","jetterez","etire","jetteriez","retire","deterree","reez","riderez","etiree","deterrer","reediter","dejeter","ziride","terreriez","etre","irriter","detireriez","terririez","diedre","itere","teterez","riiez","treize","erre","irritez","diriez","terrerez","dejetteriez","etirer","retirez","terri","jerez","tiedirez","deriderez","direz","rejetez","titrerez","retiree","derriere","titree","reeditee","redirez","terrez","tiriez","eteter","reediteriez","titreriez","ride","redire","rirez","etiriez","deridiez","rideriez","iriez","retirerez","titre","deridee","rider","dejetterez","iteriez","iridee","editerez","erreriez","retireriez","terriez","reediterez","rizette","errer","rite","iridiee","itererez","derider","rejet","titrer","eider","detirer","etrier","tridi","reitereriez","tirette","irez","irriterez","triez","rejete","tiedir","irriteriez"];


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
	
	var is_pangram = add_points_check_pangram();
	if (is_pangram) {
		pangram_found += 1;
		pangram_list.push(guess);
	}
	foundlist.push(guess);
	found += 1;

	// Updating the scoreboard.
	document.getElementById("points-update").innerHTML = current_score;
	document.getElementById("word-update").innerHTML = found + "/" + n_words;
	document.getElementById("answers-update").innerHTML = foundlist.join("<br />");

	update_rank();

	if (found == n_words) {
		alert("Cette petite abeille porte le nom de Maya!");
		foundall = true
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

		if (check() === false) {
	    	localStorage.removeItem("foundwords");

	    	for (i = 0; i < found; i++) {
	    		foundlist.pop();
	    	}

			foundall = 0;
			found = 0;
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

	foundall = 0;
	found = 0;
	current_score = 0;
	rank = "Tu sais pas jouer, Jack";
	load_words = false;

	document.getElementById("points-update").innerHTML = current_score;
	document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
	document.getElementById("rank-update").innerHTML = rank;

	for (i = 0; i < 7; i++) {
		letters[i] = todayletters[i];
	}
	n_words = n_wordstoday;
	max_score = max_score_today;
	wordlist = todaywordlist;
	reinitialize_message();
	set_rank();
	if (localStorage.hasOwnProperty("foundwords") === true) {
		replay_words();
	}
	display();
}

function get_yesterday(day) {
	// var xhttp = new XMLHttpRequest();
	// xhttp.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		var gameObj = JSON.parse(this.responseText);
	// 		n_wordsyesterday = gameObj.n_words;
	// 		max_score_yesterday = gameObj.max_score_today;
	// 		yesterdaywordlist = gameObj.wordlist;
	// 		update_yesterday_info();
	//   }
	// };
	// À enlever pour les tests non-locaux?
	update_yesterday_info();
	// xhttp.open("GET", "yesterday", true);
	// xhttp.send();
}

function get_today(day) {
	// var xhttp = new XMLHttpRequest();
	// xhttp.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		var gameObj = JSON.parse(this.responseText);
	// 		todayletters[0] = gameObj.letters[0];
	// 		todayletters[1] = gameObj.letters[1];
	// 		todayletters[2] = gameObj.letters[2];
	// 		todayletters[3] = gameObj.letters[3];
	// 		todayletters[4] = gameObj.letters[4];
	// 		todayletters[5] = gameObj.letters[5];
	// 		todayletters[6] = gameObj.center;
	// 		n_words = gameObj.n_words;
	// 		max_score_today = gameObj.max_score_today;
	// 		wordlist = gameObj.wordlist;
	// 		daily();
	// 	}
	// };
	// Ligne à enlever pour les tests non locaux?
	daily();
	// xhttp.open("GET", "today", true);
	// xhttp.send();
}

window.onload = function() {
	untype();
	get_yesterday();
	get_today();
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

function update_yesterday_info() {
	document.getElementById("answers-yesterday").innerHTML = yesterdaywordlist.join("<br />");
	document.getElementById("ruche-infos-veille").innerHTML = " Mots: " + n_wordsyesterday 
	+ "<br /> Score maximal:  " + max_score_yesterday
	+ "<br /><br /> Pangrammes: " + pangrams_yesterday
	+ "<br /> " + pangramlist_yesterday.join("<br />");
}
