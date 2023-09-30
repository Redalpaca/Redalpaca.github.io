
class Updater {
    // cnt_total = 3;
    // cnt_cur = 3;
    // blogCards = "";
    // parent = document.querySelector(".blog");
    // btn = document.querySelector(".btn-update");

    constructor() {
        this.__init__();
        
        // this.btn = document.querySelector(".btn-update");
        // this.btn.onclick = function () {
        //     this.updateBlogCard;
        // };
    }

    __init__(path = "./model/LatestPost.html", async = true) {
        // initialize vars
        this.cnt_total = 3;
        this.cnt_cur = 3; // no value?
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
            }
        }.bind(this); 
        // bind the func 'onreadystatechange' to instance of the class, 
        // so 'this' with point to 'updater', not the caller. 
        xhr.send(null);
    }

    // updateBlogCard() {
    //     console.log("detect click");
    //     if (this.cnt_cur + 3 >= this.cnt_total) {
    //         for (let i = this.cnt_cur; i < this.cnt_total; i++) {
    //             var blogCard = this.blogCards[i];
    //             this.parent.append(blogCard);
    //         }
    //         this.handleBorder();
    //         this.cnt_cur = this.cnt_total;
    //         return;
    //     }
    //     for (let i = this.cnt_cur; i < this.cnt_cur + 3; i++) {
    //         var blogCard = this.blogCards[i];
    //         this.parent.append(blogCard);
    //     }
    //     this.cnt_cur += 3;
    //     return;
    // }

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
btn = document.querySelector(".btn-update");
btn.onclick = function () {
        updater.updateBlogCard();
    };












