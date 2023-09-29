from bs4 import BeautifulSoup

def parser(path: str):
    html_string = open(path, 'r', encoding= 'utf-8').read()
    soup = BeautifulSoup(html_string, "lxml")
    pass

def addContent():
    
    
    pass

if __name__ == "__main__":
    pass