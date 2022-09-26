from os import path
import json
import random

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
                filtered_wordset.add(line[:-1])
                filtered_dico.write(line)
    else:
        filtered_dico = open(filtered_dico_path, "r")
        for line in filtered_dico:
            filtered_wordset.add(line[:-1])
    full_dico.close()
    filtered_dico.close()
    #Returning the set of valid words for future use.
    return filtered_wordset


def generation_ruche(n_ruches = 1, filter_length = 4):
    filtered_wordset = filter_dictionnary()


if __name__ == "__main__":
    kwargs = {}
    generation_ruche()

