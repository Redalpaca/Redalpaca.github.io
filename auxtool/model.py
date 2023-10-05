from bs4 import BeautifulSoup

class Updater_Index(object):
    def __init__(self, path = '.\model\LatestPost.html'):
        def parser(path: str):
            html_string = open(path, 'r', encoding= 'utf-8').read()
            soup = BeautifulSoup(html_string, "lxml")
            return soup
        parser(path)   
        
        
        pass
    
    
    pass



def addContent():
    
    
    pass

if __name__ == "__main__":
    pass