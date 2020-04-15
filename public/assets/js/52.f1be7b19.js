(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{386:function(t,a,s){"use strict";s.r(a);var r=s(3),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("因为 GIL（全局解释器锁）, python 只有一个 GIL, 运行时只有拿到这个锁才能执行，同一时间只有一个获得 GIL 的线程在跑，其他线程都在等待状态。")]),t._v(" "),s("p",[t._v("相当于每个 CPU 在同一时间只能执行一个线程。")]),t._v(" "),s("h2",{attrs:{id:"why-coroutiones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-coroutiones"}},[t._v("#")]),t._v(" Why Coroutiones")]),t._v(" "),s("ul",[s("li",[t._v("Python 的多线程不能利用多核CPU")])]),t._v(" "),s("p",[t._v("因为 GIL（全局解释器锁）, python 只有一个 GIL, 运行时只有拿到这个锁才能执行，同一时间只有一个获得 GIL 的线程在跑，其他线程都在等待状态。")]),t._v(" "),s("p",[t._v("相当于每个 CPU 在同一时间只能执行一个线程。")]),t._v(" "),s("h2",{attrs:{id:"计算密集和i-o-密集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算密集和i-o-密集"}},[t._v("#")]),t._v(" 计算密集和I/O 密集")]),t._v(" "),s("h3",{attrs:{id:"计算密集型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算密集型"}},[t._v("#")]),t._v(" 计算密集型")]),t._v(" "),s("p",[t._v("也叫 CPU 密集型，主要特点是要进行大量的计算，消耗CPU资源，比如计算圆周率、对视频进行高清解码等等，全靠CPU的运算能力。这种计算密集型任务虽然也可以用多任务完成，但是任务越多，花在任务切换的时间就越多，CPU 执行任务的效率就越低，所以，要最高效地利用 CPU，计算密集型任务同时进行的数量应当等于 CPU 的核心数。")]),t._v(" "),s("p",[t._v("计算密集型任务由于主要消耗 CPU 资源，因此，代码运行效率至关重要。Python 这样的脚本语言运行效率很低，完全不适合计算密集型任务。对于计算密集型任务，最好用 C 语言编写。")]),t._v(" "),s("h3",{attrs:{id:"i-o-密集型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-o-密集型"}},[t._v("#")]),t._v(" I/O 密集型")]),t._v(" "),s("p",[t._v("IO 密集型涉及到网络、磁盘 IO 的任务都是 IO 密集型任务，这类任务的特点就是 CPU 消耗很少，任务大部分时间都在等待 IO 操作完成。")]),t._v(" "),s("h2",{attrs:{id:"协程上下文切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协程上下文切换"}},[t._v("#")]),t._v(" 协程上下文切换")]),t._v(" "),s("p",[t._v("协程拥有自己的寄存器上下文和栈。协程调度切换时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈，直接操作栈没有内核切换的开销，可以不加锁地访问全局变量，所以上下文的切换非常快。")]),t._v(" "),s("p",[t._v("💁‍♂对比与进程和线程的调度（上下文切换）：")]),t._v(" "),s("ul",[s("li",[t._v("进程：切换进程上下文，包括分配的内存，数据段，附加段，堆栈段，代码段等")]),t._v(" "),s("li",[t._v("线程：切换线程上下文，主要切换堆栈，以及各寄存器。同一个进程里面不同的线程主要是堆栈不同。")])]),t._v(" "),s("h2",{attrs:{id:"python-多线程结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-多线程结论"}},[t._v("#")]),t._v(" Python 多线程结论")]),t._v(" "),s("p",[t._v("综上，Python 多线程相当于单核多线程。")]),t._v(" "),s("p",[t._v("多线程有两个好处：CPU 并行，IO 并行，单核多线程无法使用多核 CPU，所以在 Python中不能使用多线程来使用多核。")]),t._v(" "),s("h2",{attrs:{id:"并发和并行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发和并行"}},[t._v("#")]),t._v(" 并发和并行")]),t._v(" "),s("h3",{attrs:{id:"并发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发"}},[t._v("#")]),t._v(" 并发")])])}),[],!1,null,null,null);a.default=v.exports}}]);