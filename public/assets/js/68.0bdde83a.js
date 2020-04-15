(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{402:function(e,t,a){"use strict";a.r(t);var s=a(3),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}}),e._v(" "),a("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}}),e._v(" "),a("p",[e._v("The paper named "),a("strong",[e._v("Precise Power Delay Profiling with Commodity Wi-Fi")]),e._v(" is written by Yaxiong Xie, Mo Li`s student in Nayang Technological University. This note is a recap in a easy-to-understand manner.")]),e._v(" "),a("p",[e._v("Before we start the text, let us consider the following questions:")]),e._v(" "),a("ul",[a("li",[e._v("What is power delay profile(PDP) ?")]),e._v(" "),a("li",[e._v("What is the relationship between bandwidth and resolution?")]),e._v(" "),a("li",[e._v("How do we get higher resolution about PDP on commodity WI-FI?")]),e._v(" "),a("li",[e._v('What is the meaning of the name "Splicer"?')]),e._v(" "),a("li",[e._v("Where is the challenge of splicing bandwidth?")])]),e._v(" "),a("h2",{attrs:{id:"power-delay-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-delay-profile"}},[e._v("#")]),e._v(" Power Delay Profile")]),e._v(" "),a("p",[e._v("Power delay profiles(PDP) gives the intensity of a signal received through a multipath channel as a function of time delay. The time delay is the difference in travel time between multipath arrivals. The abscissa is in units of "),a("em",[e._v("time")]),e._v(" and the ordinate is usually in "),a("em",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Decibel",target:"_blank",rel:"noopener noreferrer"}},[e._v("decibels"),a("OutboundLink")],1)]),e._v(". It is easily measured empirically and can be used to extract certain channel's parameters and characterize multipath channel features, which are widely used in motion- or localization-based applications, more detail math principles see "),a("a",{attrs:{href:"https://www.gaussianwaves.com/2014/07/power-delay-profile/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Delay Profile"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The paper classified that it is easy to get PDP from the CSI traces collected from commodity Wi-Fi devices("),a("a",{attrs:{href:"https://www.mathworks.com/help/matlab/ref/ifft.html?s_tid=gn_loc_drop",target:"_blank",rel:"noopener noreferrer"}},[e._v("iFFT"),a("OutboundLink")],1),e._v("). More specifically, a power delay profile can be measured by directly detecting multipath signals with different arrival times in the time domain, the Channel State Information(CSI) is a good way to describe the channel, which however can be obtained easily from commodity Wi-Fi network interface cards, e.g. Atheors 9300, a NIC that our team used.")]),e._v(" "),a("h2",{attrs:{id:"bandwidth-and-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bandwidth-and-resolution"}},[e._v("#")]),e._v(" Bandwidth and Resolution")]),e._v(" "),a("p",[e._v("Power delay profile has it resolution, which we can see form the picture, the time resolution("),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C4"}})],1)],1)],1),e._v(") of the derived PDP from CSI is limited by the bandwidth of the transmitted signal, in mathematic theory, is "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"25B3"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C4"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"B"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(", that's means the resolution is decided by the signal bandwidth, "),a("strong",[e._v("wider bandwidth")]),e._v(" leads to higher resolution.")],1),e._v(" "),a("p",[e._v("However, channel bandwidth of commodity Wi-Fi is regulated by the 802.11 protocol, 20MHz in 802.11 a/g and 40MHz in 802.11n. Take 802.11n as an example, the power delay profile resolution is up to 50ns, which leads to 15m resolution in measuring the multipath lengths.")]),e._v(" "),a("p",[e._v("According to this paper, the Splicer can reducing the errors to be less than 2m. How dose it reduce the error and increase resolution using CSI ?")]),e._v(" "),a("h2",{attrs:{id:"splicer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#splicer"}},[e._v("#")]),e._v(" Splicer")]),e._v(" "),a("p",[e._v("Under the rules that although the width of each individual Wi-Fi band is limited, the total bandwidth is wide, especially the CSI measured from these individual Wi-Fi channels can be spliced to derive a finer power delay profile with much higher time resolution.")]),e._v(" "),a("p",[e._v("The trouble is, the splicing of CSI may result much sever errors. After locating the error sources, there are two main CSI measurement errors should be eliminated:")]),e._v(" "),a("ul",[a("li",[e._v("CSI "),a("em",[e._v("amplitude")]),e._v(" error")]),e._v(" "),a("li",[e._v("CSI "),a("em",[e._v("phase")]),e._v(" error")])]),e._v(" "),a("p",[e._v("According the paper, after eliminating the two errors, we could get the spliced CSI, from  which power delay profile derived.")]),e._v(" "),a("h2",{attrs:{id:"error-correction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-correction"}},[e._v("#")]),e._v(" Error correction")]),e._v(" "),a("h3",{attrs:{id:"sources-of-csi-measurement-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sources-of-csi-measurement-errors"}},[e._v("#")]),e._v(" Sources of CSI measurement errors")]),e._v(" "),a("p",[e._v("According to the wireless processing in the 802.11 NIC and the OFDM[^1], the CSIs measured by NICs mainly introduce the following errors:")]),e._v(" "),a("ul",[a("li",[e._v("SFO(sampling frequency offset)")]),e._v(" "),a("li",[e._v("CFO(central frequency offset)")]),e._v(" "),a("li",[e._v("PBD(packet boundary detection)")])]),e._v(" "),a("p",[e._v("In mathematic theory, we express the equation:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codecogs.com/eqnedit.php?latex=\\inline&space;\\varphi_k=\\theta&space;_k&space;&plus;&space;k\\cdot&space;(\\lambda_o&space;&plus;&space;\\lambda_b&space;)&space;&plus;&space;\\beta",target:"_blank"}},[a("img",{attrs:{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\varphi_k=\\theta&space;_k&space;&plus;&space;k\\cdot&space;(\\lambda_o&space;&plus;&space;\\lambda_b&space;)&space;&plus;&space;\\beta",title:"\\varphi_k=\\theta _k + k\\cdot (\\lambda_o + \\lambda_b ) + \\beta"}})])]),e._v(" "),a("p",[e._v("where "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BB"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"b"}})],1)],1)],1)],1)],1),e._v(" and "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BB"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"o"}})],1)],1)],1)],1)],1),e._v("\nare phase errors introduced by the packet boundary detection uncertainty and the sampling frequency offset, respectively,  "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B2"}})],1)],1)],1),e._v(" is the phase error caused by the central frequency offset.")],1),e._v(" "),a("h3",{attrs:{id:"amplitude-error-correction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amplitude-error-correction"}},[e._v("#")]),e._v(" Amplitude error correction")]),e._v(" "),a("p",[e._v("In this figure, we can see that the two CSI traces from the same Wi-Fi band with an amplitude offset of 7dB. That means although two derived power delay profile have different power levels, the average difference is stable and follows same shapes.")]),e._v(" "),a("h3",{attrs:{id:"phase-error-correction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-error-correction"}},[e._v("#")]),e._v(" Phase error correction")]),e._v(" "),a("ul",[a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BB"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"b"}})],1)],1)],1)],1)],1),e._v(" : is caused by the time shift, to correct it, the paper leverage an observation that the time shift varies in each packet reception but follows a Gaussian distribution with zero mean, in other words, it can be remove by averaging over the measured CSI phase.")],1),e._v(" "),a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BB"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"o"}})],1)],1)],1)],1)],1),e._v(": the SFO, this paper's solution is not the best way, see my another blog.")],1),e._v(" "),a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B2"}})],1)],1)],1),e._v(": the CFO, for individual Wi-Fi bands, phase offset has no impact on derived power delay profile.")],1)]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v('This paper introduced a system named "Splicer" that can driver precise power delay profile on commodity Wi-Fi devices, by using it, we can get the wider Wi-Fi band, that means higher resolution.')]),e._v(" "),a("p",[e._v("[^1]: CYushi Shen, Ed Martin. ezhannel Estimation in OFDM Systems. Freescale Semiconductor, Inc. 2006")])])}),[],!1,null,null,null);t.default=i.exports}}]);