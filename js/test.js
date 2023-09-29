var url = "./model/LatestPost.html";
var xhr = new XMLHttpRequest();
doc = "";
xhr.open('GET', url, true);
xhr.onreadystatechange = function() {
    var responseHTML = xhr.responseText;
    var parser = new DOMParser();
    doc = parser.parseFromString(responseHTML, 'text/html');
    // console.log(doc);
};
console.log(doc);
xhr.send(null);