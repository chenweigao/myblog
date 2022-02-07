(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{676:function(t,n,e){"use strict";e.r(n);var a=e(6),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[t._v("#")]),t._v(" Vim")]),t._v(" "),e("h2",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" reference")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("NAME")]),t._v(" "),e("th",[t._v("URL")]),t._v(" "),e("th",[t._v("DES")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("VundleVim")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/VundleVim/Vundle.vim",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/VundleVim/Vundle.vim"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("Vim plugin manager")])]),t._v(" "),e("tr",[e("td",[t._v("ale")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/w0rp/ale",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/w0rp/ale"),e("OutboundLink")],1)]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("vim-airline")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/vim-airline/vim-airline",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vim-airline/vim-airline"),e("OutboundLink")],1)]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"plugin-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-manager"}},[t._v("#")]),t._v(" Plugin Manager")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://github.com/VundleVim/Vundle.vim",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vundle"),e("OutboundLink")],1),t._v(" is short for "),e("em",[t._v("Vim bundle")]),t._v(" and is a "),e("a",{attrs:{href:"http://www.vim.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vim"),e("OutboundLink")],1),t._v(" plugin manager.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/.vim/bundle\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.vimrc\n")])])]),e("p",[t._v("In  "),e("code",[t._v(".vimrc")]),t._v(" , this is my config:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" nocompatible\nfiletype off\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ts")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" expandtab\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rtp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("~/.vim/bundle/Vundle.vim\ncall vundle"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#begin()")]),t._v("\n\nPlugin "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VundleVim/Vundle.vim'")]),t._v("\nPlugin "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/Valloric/YouCompleteMe.git'")]),t._v("\nBundle "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'luochen1990/rainbow'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" g:rainbow_active "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nPlugin "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w0rp/ale'")]),t._v("\nPlugin "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vim-airline/vim-airline'")]),t._v("\nPlugin "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vim-airline/vim-airline-themes'")]),t._v("\ncall vundle"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#end()")]),t._v("\nfiletype plugin indent on\n")])])]),e("p",[t._v("Then build:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" +PluginInstall +qall\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# options: PluginClean, PluginUpdate, PluginList")]),t._v("\n")])])]),e("p",[t._v("Other useful settings:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" nu"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" autoindent "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#自动对齐")]),t._v("\nsyntax on\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);