from os import path
import json
import random
import string


def generation_lettres(n_letters = 7):
    lettres = random.sample(string.ascii_lowercase, n_letters)
    return lettres
    

def filter_dictionnary(filter_length = 4):
    # Filtering dictionnary to words of given length
    filtered_wordset = set()
    full_dico = open("dictionnaire_ODS_2021.txt", "r")
    filtered_dico_path = f"{filter_length}lettres_dictionnaire_ODS_2021.txt"
    
    # Creating the txt file containing the words if it does not exist (for reference).
    if not path.exists(filtered_dico_path):
        filtered_dico = open(filtered_dico_path, "w+")
        for line in full_dico:
            #The last character is /n so we need to remove it from the line.
            if len(line) >= filter_length + 1:
                filtered_wordset.add(line[:-1].lower())
                filtered_dico.write(line)
    else:
        filtered_dico = open(filtered_dico_path, "r")
        for line in filtered_dico:
            filtered_wordset.add(line[:-1].lower())
    full_dico.close()
    filtered_dico.close()
    #Returning the set of valid words for future use.
    return filtered_wordset


def generation_ruche(n_ruches = 2, min_words = 30, min_pangrammes = 1, max_score_min = 100, \
                    n_letters = 7, filter_length = 4, pangram_bonus = 7):
    random.seed(0)
    filtered_wordset = filter_dictionnary(filter_length)
    # Ruches Counter
    ruches_generees = 0
    ruche_list = []
    tries = 0
    while ruches_generees < n_ruches:
        tries += 1
        # Ruche data
        n_words, wordlist = 0, []
        n_pangrams, pangramlist = 0, []
        max_score = 0
        # Letter generation
        letters = generation_lettres(n_letters) #No need to filter on word_length anymore
        for possible_word in filtered_wordset:
            # First filter: Word must contain center letter = last letter
            if letters[-1] not in possible_word:
                continue
            # Second Filter: Must only contains letters from our list
            if not all(char in letters for char in possible_word):
                continue
            else:
                n_words += 1
                wordlist.append(possible_word)
                if len(possible_word) > filter_length:
                    max_score += len(possible_word)
                else: max_score += 1
            # Pangram check, do we have all letters
            if all(letter in possible_word for letter in letters):
                n_pangrams += 1
                pangramlist.append(possible_word)
                max_score += pangram_bonus
        # Selection criteria for la ruche.
        if n_pangrams >= min_pangrammes and max_score >= max_score_min and n_words >= min_words:
            # Populating info
            ruche = {"day": ruches_generees, "letters": letters[:-1], "center": letters[-1], \
            "max_score": max_score, "n_words": n_words, "n_pangrams": n_pangrams, \
                "words": wordlist, "pangrammes": pangramlist}
            ruche_list.append(ruche)
            print(f"\n\nLettres: {letters}\nScore Max: {max_score} - Nombre de mots: {n_words} - Nombre de pangrammes: {n_pangrams}\nListe des pangrammes: {pangramlist}\nListe des mots: {wordlist}")
            # Generating corresponding json
            ruches_generees += 1

    with open("ruches.json", "a") as ruche_file:
        ruche_file.write(json.dumps(ruche_list, indent = 4))

    print(tries)



if __name__ == "__main__":
    kwargs = {}
    generation_ruche()

