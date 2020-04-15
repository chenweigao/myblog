(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{401:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception in the commercial products.\nBeing a BSD-licensed product, OpenCV makes it easy for businesses to utilize and modify the code.")]),t._v(" "),s("details",[s("summary",[t._v("To use the camera to find the frame face")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("video_capture "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VideoCapture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprocess_this_frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Grab a single frame of video")]),t._v("\n    ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" video_capture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Resize frame of video to 1/4 size for faster face recognition processing")]),t._v("\n    small_frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)")]),t._v("\n    rgb_small_frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" small_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Only process every other frame of video to save time")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" process_this_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Find all the faces and face encodings in the current frame of video")]),t._v("\n        f_face_locations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" face_recognition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("face_locations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb_small_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        f_face_encodings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" face_recognition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("face_encodings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            rgb_small_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f_face_locations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(f_face_encodings)")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" f_face_encoding "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" f_face_encodings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" face_recognition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compare_faces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("face_encodings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f_face_encoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("face_correct_names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("face_correct_names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    process_this_frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" process_this_frame\n    cv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Video2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Hit 'q' on the keyboard to quit!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("waitKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'q'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n\nvideo_capture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destroyAllWindows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"basic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[t._v("#")]),t._v(" Basic")]),t._v(" "),s("h3",{attrs:{id:"load-and-display-an-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-and-display-an-image"}},[t._v("#")]),t._v(" Load and Display an Image")]),t._v(" "),s("blockquote",[s("p",[t._v("Then create a Mat object that will store the data of the loaded image.")])]),t._v(" "),s("h4",{attrs:{id:"imread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imread"}},[t._v("#")]),t._v(" "),s("code",[t._v("imread()")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("First argument is filename")])]),t._v(" "),s("li",[s("p",[t._v("Second argument specifies the format:")]),t._v(" "),s("ol",[s("li",[t._v("IMREAD_UNCHANGED (<0) loads the image as is (including the alpha channel if present)")]),t._v(" "),s("li",[t._v("IMREAD_GRAYSCALE ( 0) loads the image as an intensity one")]),t._v(" "),s("li",[t._v("IMREAD_COLOR (>0) loads the image in the "),s("strong",[t._v("RGB format")])])])])]),t._v(" "),s("h4",{attrs:{id:"namedwindow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#namedwindow"}},[t._v("#")]),t._v(" "),s("code",[t._v("namedWindow()")])]),t._v(" "),s("ul",[s("li",[s("em",[t._v("WINDOW_AUTOSIZE")])]),t._v(" "),s("li",[s("em",[t._v("WINDOW_NORMAL")])])]),t._v(" "),s("h3",{attrs:{id:"modify-and-save-an-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modify-and-save-an-image"}},[t._v("#")]),t._v(" Modify and Save an Image")]),t._v(" "),s("h4",{attrs:{id:"cvtcolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cvtcolor"}},[t._v("#")]),t._v(" "),s("code",[t._v("cvtColor()")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("cvtColor( image, gray_image, COLOR_BGR2GRAY );")])])]),t._v(" "),s("h4",{attrs:{id:"imwrite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imwrite"}},[t._v("#")]),t._v(" "),s("code",[t._v("imwrite()")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v('imwrite( "../../images/Gray_Image.jpg", gray_image );')])])]),t._v(" "),s("p",[t._v("Save your transformed image in a file on disk (using "),s("code",[t._v("cv::imwrite")]),t._v(" )")]),t._v(" "),s("p",[t._v("Write the Mat gray_image to a new file.")]),t._v(" "),s("h2",{attrs:{id:"core-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-module"}},[t._v("#")]),t._v(" Core Module")]),t._v(" "),s("h3",{attrs:{id:"mat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mat"}},[t._v("#")]),t._v(" Mat")]),t._v(" "),s("p",[t._v("How OpenCV stores and handles images?")]),t._v(" "),s("ul",[s("li",[t._v("Mat")]),t._v(" "),s("li",[t._v("Mat is that you no longer need to manually allocate its memory and release it as soon as you do not need it")])]),t._v(" "),s("p",[s("code",[t._v("uchar* cv::Mat::ptr(int i)")]),t._v(": Returns a pointer to the specified matrix row.")])])}),[],!1,null,null,null);a.default=e.exports}}]);