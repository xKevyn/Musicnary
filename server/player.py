"""
Represent the player object on the server side
"""

class Player(object):
    def __init__(self, ip, name):
        self.ip = ip
        self.name = name
    
    def guess(self, string):
        pass

    def disconnect(self):
        pass

    def get_name(self):
        return self.name

    def get_ip(self):
        return self.ip