"""
Represent a telephone of the music, storing the music prompted and guessed as well as the drawings for the music prompted
"""
import time as t
from _thread import *

class Telephone(object):
    def __init__(self, music, player, time):
        """
        current_mode where True = guess, False = drawing
        """
        self.current_mode = True
        self.music_guesses = [music]
        self.players_guess = [player]
        self.player_drawings = []
        self.players_draw = []
        self.time = time
        start_new_thread(self.time_thread, ())
    
    """
    Stores the music prompted by the initial player and the guesses from the later rounds' player
    """
    def guess(self, music, player):
        self.music_guesses.append(music)
        self.players_guess.append(player)
        self.current_mode = False

    """
    Stores the drawings drawn by the player for the given music
    """
    def draw(self, player_drawing, player):
        self.player_drawings.append(player_drawing)
        self.players_draw.append(player)
        self.current_mode = True

    def time_thread(self):
        """
        Runs in threads to keep track of time
        """
        while self.time > 0:
            t.sleep(1)
            self.time -= 1
        self.end_round

    def done(self):
        self.end_round

    def end_round(self, player, music, player_drawing):
        pass