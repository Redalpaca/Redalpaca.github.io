// test();

/*
 * How to add an event listener to a element?  only by html and js function.
 */

test();

function test() {
    // link_github = document.getElementsByClassName("link-github");
    link_github = document.querySelector(".link-github");
    addLink2_text_element(link_github, "https://github.com/Redalpaca");
    link_alpaca = document.querySelector(".link-alpaca");
    addLink2_text_element(link_alpaca, "./img/icon/alpaca.jpg");
}

function addLink2_text_element(element, url) {
    element.addEventListener('click', function() {
        element.style.cursor = 'default';
        window.open(url);
        // url2clipboard(url_video);
    });
    element.addEventListener("mouseover", function() {
        element.style.color = "#0084ff";
        element.style.cursor = "pointer";
        element.style.textDecoration = 'underline';
        
    });
    element.addEventListener("mouseout", function() {
        element.style.color = '';
        element.style.cursor = 'default';
        element.style.textDecoration = '';
    });
}


class Downloader {
    download_url_by_xhr(url, extention, title) {
        // request headers can not change 'Header'
        // does not fit Access-Control-Allow-Headers
        // so, you don't require to set any header, just let browser send request automatically.
        let DownloadHeaders = {};
        if(title == undefined) {
            title = url;
        };
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = 'blob';
        for(var key in DownloadHeaders) {
            xhr.setRequestHeader(key, DownloadHeaders[key]);
        };
        xhr.onload = function() {
            if (xhr.status === 200) {
              var blob = xhr.response;
              var a = document.createElement('a');
              a.href = window.URL.createObjectURL(blob);
              a.download = title + extention;
              a.style.display = 'none';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }
        };
        xhr.send(null);
    }
}
