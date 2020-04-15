(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{383:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Do you want to build your own site from scratch or generate one for your project? This guide could help you with "),a("strong",[t._v("Jekyll")]),t._v(" and "),a("strong",[t._v("GitHub Pages")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),a("p",[t._v("Before we start build our Jekyll site, we should do as follows in GitHub:")]),t._v(" "),a("ul",[a("li",[t._v("Create a new "),a("strong",[t._v("empty")]),t._v(" repository, "),a("strong",[t._v("name")]),t._v(" is "),a("em",[t._v("username")]),t._v(".github.io; For example, my repository named chenweigao.github.io.")]),t._v(" "),a("li",[t._v("In your home folder, clone this repository, using "),a("code",[t._v("git clone")])]),t._v(" "),a("li",[t._v("If you have any questions about "),a("strong",[t._v("Git")]),t._v(" ,see my another post "),a("a",{attrs:{href:"https://chenweigao.github.io/2018/01/12/git.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git - To Use Git More Easily: Config, Branch and Rebase"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("Take Ubuntu system as an example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ruby jekyll\n")])])]),a("p",[t._v("or this "),a("a",{attrs:{href:"https://jekyllrb.com/docs/installation/#ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ruby ruby-dev build-essential\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Install Ruby Gems to ~/gems'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export GEM_HOME="),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/gems'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export PATH="),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/gems/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.bashrc\ngem "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jekyll bundler\n")])])]),a("p",[t._v("change the gem source:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/\n")])])]),a("h2",{attrs:{id:"build-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-site"}},[t._v("#")]),t._v(" Build Site")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# After you install jekyll")]),t._v("\njekyll new ~/username.github.io/\n")])])]),a("p",[t._v("After you do this, you will see a directory "),a("code",[t._v("blog")]),t._v(", then:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd username.github.io\njekyll server\n")])])]),a("p",[t._v("Then your site could be seen at: "),a("code",[t._v("http://localhost:4000")]),t._v(", open your browser and type it, you'll see your new site.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build site in local")]),t._v("\nbundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" jekyll build\nbundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" jekyll server --incremental\n")])])]),a("h2",{attrs:{id:"blog-directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blog-directory-structure"}},[t._v("#")]),t._v(" Blog Directory Structure")]),t._v(" "),a("p",[t._v("If you "),a("code",[t._v("ls")]),t._v(" in your "),a("em",[t._v("blog")]),t._v(" directory, you will see many files, an overview of what will be used for you does:")]),t._v(" "),a("p",[a("strong",[t._v("_config.yml")]),t._v(":  your configuration data")]),t._v(" "),a("p",[t._v("In this file, you could do many things to your site, this is my _confg.yml file, you can edit as soon as you like.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#_config.yml")]),t._v("\ntitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Nerche")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Note")]),t._v("\nemail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" weigao1024"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@foxmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\ndescription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# this means to ignore newlines until "baseurl:"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Welcome")]),t._v(" to my profile pages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nbaseurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the subpath of your site, e.g. /blog")]),t._v("\nurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the base hostname & protocol for your site")]),t._v("\ngithub_username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  chenweigao\n")])])]),a("p",[a("strong",[t._v("_posts")]),t._v(":  this is where your article stored, when you want to publish a new blog, to "),a("strong",[t._v("CREATE")]),t._v(" a new file here, the naming convention of these files is important, and must follow the format:"),a("code",[t._v("YEAR-MONTH-DAY-title.md")]),t._v(", such as: "),a("code",[t._v("2018-02-02-myblog.md")]),t._v(", please remember this, it is very "),a("strong",[t._v("important")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"add-post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-post"}},[t._v("#")]),t._v(" Add Post")]),t._v(" "),a("p",[t._v("We create a new markdown file named "),a("code",[t._v("2018-02-02-test.md")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('---\nlayout: article\ntitle:  "This is a test blog"\ntags:\n  - blog\nmodify_date: 2017-01-01\n---\n## You will see me at [https://localhost:4000](https://localhost:4000)\nThe head is **required** in every post\nwhich tells the system your post\'s title, layout, time and so on...\n')])])]),a("p",[t._v("Then you need to open your "),a("code",[t._v("terminal")]),t._v(", and type:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("jekyll build\njekyll server\n")])])]),a("p",[t._v("Then you open your browser, and type "),a("code",[t._v("https://localhost:4000")]),t._v(" ,you will find the blog's update.")]),t._v(" "),a("h2",{attrs:{id:"publish-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-blog"}},[t._v("#")]),t._v(" Publish Blog")]),t._v(" "),a("p",[t._v("Now it is time to publish your blog in GitHub Pages, you need to:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my frist blog"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("p",[t._v("Then you can see your blog at "),a("em",[t._v("username")]),t._v(".github.io, such as "),a("a",{attrs:{href:"chenweigao.github.io"}},[t._v("chenweigao.github.io")])]),t._v(" "),a("h2",{attrs:{id:"highlight-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highlight-code"}},[t._v("#")]),t._v(" Highlight Code")]),t._v(" "),a("p",[t._v("Sometimes, especially for a coder, you may want to highlight your code:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('{% raw %}\n{% highlight c linonos %}\n\nint mian(){\n  printf("Hello Jekyll!\\n");\n  return 0;\n}\n\n{% endhighlight %}\n{% endraw %}\n')])])]),a("div",{staticClass:"custom-block tip"},[a("p",[a("code",[t._v("raw")]),t._v(" and "),a("code",[t._v("endraw")]),t._v(" make the code not parsed by Jekyll.")])]),t._v(" "),a("h2",{attrs:{id:"including-images-and-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#including-images-and-resources"}},[t._v("#")]),t._v(" Including Images and resources")]),t._v(" "),a("p",[t._v("Chance are, at some points, you'll want to include images, downloads, or other digital assets along with your text content. There are a number of ways to include digital assets in Jekyll, one common solution is to create a folder in the root of the project directory call something like "),a("code",[t._v("assets")]),t._v(", into which any images, files or  other resources are placed.")]),t._v(" "),a("p",[t._v("Including an image assets in a post:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("My helpful screenshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" site.url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/assets/screenshot.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("or:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("My helpful screenshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/assets/screenshot.jpg"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" absolute_url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("linking to a PDF for readers to download:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("get the PDF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" site.url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/assets/mydoc.pdf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("see at the official guide,"),a("a",{attrs:{href:"https://jekyllrb.com/docs/posts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Writing Post"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"add-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-https"}},[t._v("#")]),t._v(" Add HTTPS")]),t._v(" "),a("p",[t._v("When you want to add HTTPS, it is really a big work, see "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22667528",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),a("OutboundLink")],1),t._v(", that is helpful. The tool we use is "),a("a",{attrs:{href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloudflare"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("There is an auto tool can help you add https, "),a("a",{attrs:{href:"https://app.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify"),a("OutboundLink")],1),t._v(", which helps you set your site here, and make it faster, more importantly, it is free, "),a("em",[a("strong",[t._v("highly recommend")])]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"highlight-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highlight-js"}},[t._v("#")]),t._v(" highlight.js")]),t._v(" "),a("p",[t._v("using  "),a("a",{attrs:{href:"https://highlightjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("highlight.js"),a("OutboundLink")],1),t._v(", downloads the package and select  a "),a("code",[t._v(".css")]),t._v(", then in "),a("code",[t._v("header.html")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ site.url }}/assets/css/default.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ site.url }}/assets/css/highlight.pack.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("hljs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initHighlightingOnLoad")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);