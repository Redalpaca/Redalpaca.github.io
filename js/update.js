
class Updater {
    // cnt_total = 3;
    // cnt_cur = 3;
    // blogCards = "";
    // parent = document.querySelector(".blog");
    // btn = document.querySelector(".btn-update");

    constructor() {
        this.__init__();
        this.cnt_total = 3;
        this.cnt_cur = 3; // no value?
        this.blogCards = "";
        this.parent = document.querySelector(".blog");
        this.btn = document.querySelector(".btn-update");
        this.btn.onclick = function () {
            this.updateBlogCard;
        };
    }

    __init__(path = "./model/LatestPost.html", async = true) {
        var url = path;
        var xhr = new XMLHttpRequest();
        var doc = "";
        xhr.open('GET', url, async);
        xhr.setRequestHeader('schemes', 'https');
        xhr.onreadystatechange = function (doc) {
            // if (xhr.status === 200) {
            var responseHTML = xhr.responseText;
            var parser = new DOMParser();
            doc = parser.parseFromString(responseHTML, 'text/html');
            console.log(doc);
            this.blogCards = doc.querySelectorAll(".blog-card");
            this.cnt_total = this.blogCards.length;
            // }
        };
        xhr.send(null);
        return;
    }

    updateBlogCard() {
        console.log("detect click");
        if (this.cnt_cur + 3 >= this.cnt_total) {
            this.cnt_cur = this.cnt_total;
            for (let i = this.cnt_cur; i < this.cnt_total; i++) {
                var blogCard = this.blogCards[i];
                this.parent.append(blogCard);
            }
            this.handleBorder();
            return;
        }
        for (let i = this.cnt_cur; i < this.cnt_cur + 3; i++) {
            var blogCard = this.blogCards[i];
            this.parent.append(blogCard);
        }
        this.cnt_cur += 3;
        return;
    }

    handleBorder() {
        // TODO 
        // hide the button, show message: "You already reach the bottom."
        console.log("test");
    }
}


var updater = new Updater();













