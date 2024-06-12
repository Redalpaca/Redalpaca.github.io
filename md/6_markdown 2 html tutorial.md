# Markdown to html tutorial
## Method by Python
> We can do that by 'onekey'

```Python``` is a good way to convert .md file to .html file automatically. As 'github.io' can only be a statical webpage, use ```Python``` could be more convenient than use ```JS``` to do so.

We need 3 3rd libraries: ``` Python-Markdown ```, ``` pygments ```, ``` github-markdown-css ``` 
<!-- github link: https://github.com/Python-Markdown/markdown -->
### md 2 html
``` Python-Markdown ``` library is what we need, which can be installed by pip:
```Bash
pip install markdown
```
It's official documents: [python-markdown](https://python-markdown.github.io/reference/)
Basic usage:
```Python
content_html = markdown.markdown(md_text)
```
This can only provide very basic functions, the html output is also rudimentary.
But the markdown library provides a series of extension options for complex cases, for example:

```Python
md_extend = ['extra', 'abbr', ''\
          'fenced_code', 'def_list',\
          'footnotes', 'md_in_html',\
          'tables', 'toc', 'sane_lists',\
          'codehilite', 'meta', 'nl2br',\
          'smarty', 'wikilinks'
          ];
content_html = markdown.markdown(md_text, extensions= md_extend)
```
> refer from: [python-markdown extensions](https://python-markdown.github.io/extensions/)

### CSS
``` Python-Markdown ``` library does not previde style sheet, ``` github-markdown-css ``` is a open source markdown css repository.
> link：[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

we can use the css by CDN or embeding the CSS stylesheet into the HTML.
❗ remember to check the **README** of the repo first, notice the '**Usage**' block ❗


``` HTML
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css'>

or save as a CSS file:

<link rel="stylesheet" href="../css/md-github.css">

or embeding into HTML:

<style>
    /*  github-markdown-css content 
        ...
        ...
    */
</style>

```

### Code Highlight
``` pygments ``` library can generate code hightlight CSS, use this code as example: 
```Python
highlight_css = pygments.formatters.HtmlFormatter().get_style_defs('.codehilite')
```

### End
We can design a wrapper, just like what this blog do.
```HTML
<html><head>
    <meta charset="utf-8">
    <title>Redalpaca's site</title>
    <!-- markdown renderer  -->
    <link rel="stylesheet" href="../css/md-github.css">
    <link rel="stylesheet" href="../css/md-highlight.css">

    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="shortcut icon" href="../img/icon/avatar.png" type="image/x-icon">
    <style>
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }
      @media (max-width: 767px) {
        .markdown-body {
          padding: 15px;
        }
      }
    </style>
  </head>
  <body for="html-export">
    <div class="header">
      <div class="left-container">
        <div class="avatar">
          <img class="avatar" src="../img/icon/avatar.png" alt="test" width="45">
        </div>
        <div class="header-title">
          <h2>Redalpaca's Blog</h2>
          <p>Hi👋, welcome to alpaca land.</p>
        </div>
      </div>
      <div class="right-container">
        <h3 class="link-github">GitHub</h3>
        <h3 class="link-page">Page</h3>
        <h3 class="link-alpaca">Alpaca</h3>
      </div>
    </div>
    <!-- markdown to html content label -->
    <div class="markdown-body">
      <!-- Here is the markdown content -->
      <!-- Here is the markdown content -->
    </div>
    <div class="footer">
      <div class="personal-info">
        <p class="email">zhoualpaca@gmail.com</p>
      </div>
    </div>
    <script src="./js/general.js"></script>
  </body></html>
```

## Method by VScode extension
...to be done