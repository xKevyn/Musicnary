"""
"""
import time as t
from _thread import *

class Time(object):
    def __init__(self, time):
        self.time = time
        start_new_thread(self.time_thread, ())

    def time_thread(self):
        while self.time > 0:
            t.sleep(1)
            self.time -= 1
        self.end_round
