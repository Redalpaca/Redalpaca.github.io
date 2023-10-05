
class Updater {

    constructor() {
        this.__init__();
    }

    __init__(path = "./model/LatestPost.html", async = true) {
        // initialize vars
        this.cnt_total = 3;
        this.cnt_cur = 0; // no value?
        this.blogCards = "";
        this.parent = document.querySelector(".blog");
        this.refer = document.querySelector(".ref-insert");
        // get outer html
        var url = path;
        var xhr = new XMLHttpRequest();
        var doc = "";
        xhr.open('GET', url, async);
        xhr.onreadystatechange = function (doc) {
            if (xhr.readyState === 4) {
                var responseHTML = xhr.responseText;
                var parser = new DOMParser();
                doc = parser.parseFromString(responseHTML, 'text/html');
                console.log(doc);
                this.blogCards = doc.querySelectorAll(".blog-card");
                this.cnt_total = this.blogCards.length;
                this.__init_blogCards_style__(this.blogCards); 
                btn.onclick();
            }
        }.bind(this); 
        // bind the func 'onreadystatechange' to instance of the class, 
        // so 'this' with point to 'updater', not the caller. 
        xhr.send(null);
    }

    __init_blogCards_style__(blogCards) {
        for(let i=3; i<blogCards.length; i++) {
            blogCards[i].classList.add("hide");
        }
    }

    updateBlogCard() {
        console.log("detect click");
        var cnt_next = 0;
        if(this.cnt_total > this.cnt_cur + 3) {
            cnt_next = this.cnt_cur + 3;
        } 
        else {
            cnt_next = this.cnt_total;
            this.handleBorder();
        }
        for (let i = this.cnt_cur; i < cnt_next; i++) {
            var blogCard = this.blogCards[i];
            this.parent.insertBefore(blogCard, this.refer);
            setTimeout(() => {
                // this.blogCards[i].classList.add("show");
                this.blogCards[i].classList.remove("hide");
            }, 0);
        }
        this.cnt_cur = cnt_next;
    }

    handleBorder() {
        // TODO 
        // hide the button, show message: "You already reach the bottom."
        let btn = document.querySelector(".btn-update");
        btn.style.visibility = "hidden";
    }
}

var updater = new Updater();
// blogCards = document.querySelectorAll(".blog-card");
btn = document.querySelector(".btn-update");
btn.onclick = function () {
        updater.updateBlogCard();
    };











