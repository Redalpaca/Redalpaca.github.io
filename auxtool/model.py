from bs4 import BeautifulSoup

class Updater_Index(object):
    model = '<div class=\"element-index\"><span class=\"universe-icon\" width="16" height="16"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="FileLinkWordOutlined"><path d="M4 3h12.595c.93 0 1.806.355 2.439.96A3.07 3.07 0 0 1 20 6.176V21H7.405a3.53 3.53 0 0 1-2.439-.96A3.068 3.068 0 0 1 4 17.823V3ZM3 1a1 1 0 0 0-1 1v15.823c0 1.373.57 2.69 1.583 3.66A5.529 5.529 0 0 0 7.405 23H21a1 1 0 0 0 1-1V6.176a5.07 5.07 0 0 0-1.583-3.66A5.53 5.53 0 0 0 16.595 1H3Z" fill="currentColor"></path><path d="M6.75 8a1 1 0 0 1 1-1h8.5a1 1 0 1 1 0 2h-8.5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h8.5a1 1 0 1 1 0 2h-8.5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2h-4.5a1 1 0 0 1-1-1Z" fill="currentColor"></path></svg></span><p class="title-index"><a class="title-index" href=""></a></p></div>'
    def __init__(self, path = '.\model\LatestPost.html'):
        def parser(path: str):
            html_string = open(path, 'r', encoding= 'utf-8').read()
            soup = BeautifulSoup(html_string, "lxml")
            return soup
        soup = parser(path)
        self.model = BeautifulSoup(Updater_Index.model, "lxml")   
        self.blog_cards = soup.find_all(attrs={"class":"blog-card"})
        pass
    
    def update(self, path = '.\model\LatestIndex.html'):
        with open(path, "w") as f:
            for blog_card in self.blog_cards:
                a = blog_card.find(name="a")
                a_index = self.model.select("a.title-index")[0]
                a_index.string = a.string
                a_index.attrs["href"] = a.attrs["href"]
                f.write(str(self.model.find(attrs={"class":"element-index"})))

class Updater_Card(object):
    
    
    pass

if __name__ == "__main__":
    updater_index = Updater_Index()
    updater_index.update()
    pass