export const examples = 

[
    {
       "url":"tryit.asp?filename=trycss_syntax1",
       "title":"CSS syntax",
       "filename":"trycss_syntax1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  color: red;\n  text-align: center;\n} \n</style>\n</head>\n<body>\n\n<p>Hello World!</p>\n<p>These paragraphs are styled with CSS.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_syntax_element",
       "title":"The element selector",
       "filename":"trycss_syntax_element",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  text-align: center;\n  color: red;\n} \n</style>\n</head>\n<body>\n\n<p>Every paragraph will be affected by the style.</p>\n<p id=\"para1\">Me too!</p>\n<p>And me!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_syntax_id",
       "title":"The id selector",
       "filename":"trycss_syntax_id",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#para1 {\n  text-align: center;\n  color: red;\n}\n</style>\n</head>\n<body>\n\n<p id=\"para1\">Hello World!</p>\n<p>This paragraph is not affected by the style.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_syntax_class",
       "title":"The class selector (for all elements)",
       "filename":"trycss_syntax_class",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center {\n  text-align: center;\n  color: red;\n}\n</style>\n</head>\n<body>\n\n<h1 class=\"center\">Red and center-aligned heading</h1>\n<p class=\"center\">Red and center-aligned paragraph.</p> \n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_syntax_element_class",
       "title":"The class selector (for only <p> elements)",
       "filename":"trycss_syntax_element_class",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.center {\n  text-align: center;\n  color: red;\n}\n</style>\n</head>\n<body>\n\n<h1 class=\"center\">This heading will not be affected</h1>\n<p class=\"center\">This paragraph will be red and center-aligned.</p> \n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_syntax_element_class2",
       "title":"An HTML element that refer to two classes",
       "filename":"trycss_syntax_element_class2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.center {\n  text-align: center;\n  color: red;\n}\n\np.large {\n  font-size: 300%;\n}\n</style>\n</head>\n<body>\n\n<h1 class=\"center\">This heading will not be affected</h1>\n<p class=\"center\">This paragraph will be red and center-aligned.</p>\n<p class=\"center large\">This paragraph will be red, center-aligned, and in a large font-size.</p> \n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_syntax_universal",
       "title":"The universal selector",
       "filename":"trycss_syntax_universal",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n* {\n  text-align: center;\n  color: blue;\n}\n</style>\n</head>\n<body>\n\n<h1>Hello world!</h1>\n\n<p>Every element on the page will be affected by the style.</p>\n<p id=\"para1\">Me too!</p>\n<p>And me!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_grouping",
       "title":"Grouping selectors",
       "filename":"trycss_grouping",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1, h2, p {\n  text-align: center;\n  color: red;\n}\n</style>\n</head>\n<body>\n\n<h1>Hello World!</h1>\n<h2>Smaller heading!</h2>\n<p>This is a paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_howto_external",
       "title":"External CSS",
       "filename":"trycss_howto_external",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"stylesheet\" href=\"mystyle.css\">\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_howto_internal",
       "title":"Internal CSS",
       "filename":"trycss_howto_internal",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-color: linen;\n}\n\nh1 {\n  color: maroon;\n  margin-left: 40px;\n} \n</style>\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_howto_inline",
       "title":"Inline CSS",
       "filename":"trycss_howto_inline",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h1 style=\"color:blue;text-align:center;\">This is a heading</h1>\n<p style=\"color:red;\">This is a paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_howto_multiple",
       "title":"Multiple style sheets",
       "filename":"trycss_howto_multiple",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">\n<style>\nh1 {\n  color: orange;\n}\n</style>\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<p>The style of this document is a combination of an external stylesheet, and internal style</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_howto_cascade",
       "title":"Cascading order",
       "filename":"trycss_howto_cascade",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">\n<style>\nbody {background-color: linen;}\n</style>\n</head>\n<body style=\"background-color: lavender\">\n\n<h1>Multiple Styles Will Cascade into One</h1>\n<p>Here, the background color of the page is set with inline CSS, and also with an internal CSS, and also with an external CSS.</p>\n<p>Try experimenting by removing styles to see how the cascading stylesheets work (try removing the inline CSS first, then the internal, then the external).</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_comments",
       "title":"Single-line comment",
       "filename":"trycss_comments",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n/* This is a single-line comment */\np {\n  color: red;\n} \n</style>\n</head>\n<body>\n\n<p>Hello World!</p>\n<p>This paragraph is styled with CSS.</p>\n<p>CSS comments are not shown in the output.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_comments3",
       "title":"Multi-line comment",
       "filename":"trycss_comments3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n/* This is\na multi-line\ncomment */\n\np {\n  color: red;\n} \n</style>\n</head>\n<body>\n\n<p>Hello World!</p>\n<p>This paragraph is styled with CSS.</p>\n<p>CSS comments are not shown in the output.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color_background",
       "title":"Set the background color of an element",
       "filename":"trycss_color_background",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h1 style=\"background-color:DodgerBlue;\">Hello World</h1>\n\n<p style=\"background-color:Tomato;\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color_text",
       "title":"Set the text color",
       "filename":"trycss_color_text",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h3 style=\"color:Tomato;\">Hello World</h3>\n\n<p style=\"color:DodgerBlue;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n\n<p style=\"color:MediumSeaGreen;\">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color_border",
       "title":"Set the border color",
       "filename":"trycss_color_border",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h1 style=\"border: 2px solid Tomato;\">Hello World</h1>\n\n<h1 style=\"border: 2px solid DodgerBlue;\">Hello World</h1>\n\n<h1 style=\"border: 2px solid Violet;\">Hello World</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color_values",
       "title":"Set different color values",
       "filename":"trycss_color_values",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<p>Same as color name \"Tomato\":</p>\n\n<h1 style=\"background-color:rgb(255, 99, 71);\">rgb(255, 99, 71)</h1>\n<h1 style=\"background-color:#ff6347;\">#ff6347</h1>\n<h1 style=\"background-color:hsl(9, 100%, 64%);\">hsl(9, 100%, 64%)</h1>\n\n<p>Same as color name \"Tomato\", but 50% transparent:</p>\n<h1 style=\"background-color:rgba(255, 99, 71, 0.5);\">rgba(255, 99, 71, 0.5)</h1>\n<h1 style=\"background-color:hsla(9, 100%, 64%, 0.5);\">hsla(9, 100%, 64%, 0.5)</h1>\n\n<p>In addition to the predefined color names, colors can be specified using RGB, HEX, HSL, or even transparent colors using RGBA or HSLA color values.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color_rgb2",
       "title":"Set RGB values",
       "filename":"trycss_color_rgb2",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Specify colors using RGB values</h1>\n\n<h2 style=\"background-color:rgb(255, 0, 0);\">rgb(255, 0, 0)</h2>\n<h2 style=\"background-color:rgb(0, 0, 255);\">rgb(0, 0, 255)</h2>\n<h2 style=\"background-color:rgb(60, 179, 113);\">rgb(60, 179, 113)</h2>\n<h2 style=\"background-color:rgb(238, 130, 238);\">rgb(238, 130, 238)</h2>\n<h2 style=\"background-color:rgb(255, 165, 0);\">rgb(255, 165, 0)</h2>\n<h2 style=\"background-color:rgb(106, 90, 205);\">rgb(106, 90, 205)</h2>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color_hex_gray",
       "title":"Set HEX values",
       "filename":"trycss_color_hex_gray",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Shades of gray</h1>\n\n<p>By using equal values for red, green, and blue, you will get different shades of gray:</p>\n\n<h2 style=\"background-color:#3c3c3c;\">#3c3c3c</h2>\n<h2 style=\"background-color:#616161;\">#616161</h2>\n<h2 style=\"background-color:#787878;\">#787878</h2>\n<h2 style=\"background-color:#b4b4b4;\">#b4b4b4</h2>\n<h2 style=\"background-color:#f0f0f0;\">#f0f0f0</h2>\n<h2 style=\"background-color:#f9f9f9;\">#f9f9f9</h2>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color_hsl2",
       "title":"Set HSL values",
       "filename":"trycss_color_hsl2",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Specify colors using HSL values</h1>\n\n<h2 style=\"background-color:hsl(0, 100%, 50%);\">hsl(0, 100%, 50%)</h2>\n<h2 style=\"background-color:hsl(240, 100%, 50%);\">hsl(240, 100%, 50%)</h2>\n<h2 style=\"background-color:hsl(147, 50%, 47%);\">hsl(147, 50%, 47%)</h2>\n<h2 style=\"background-color:hsl(300, 76%, 72%);\">hsl(300, 76%, 72%)</h2>\n<h2 style=\"background-color:hsl(39, 100%, 50%);\">hsl(39, 100%, 50%)</h2>\n<h2 style=\"background-color:hsl(248, 53%, 58%);\">hsl(248, 53%, 58%)</h2>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background-color_body",
       "title":"Set the background color of a page",
       "filename":"trycss_background-color_body",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h1>Hello World!</h1>\n\n<p>This page has a light blue background color!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background-color_elements",
       "title":"Set the background color of different elements",
       "filename":"trycss_background-color_elements",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  background-color: green;\n}\n\ndiv {\n  background-color: lightblue;\n}\n\np {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<h1>CSS background-color example!</h1>\n<div>\nThis is a text inside a div element.\n<p>This paragraph has its own background color.</p>\nWe are still in the div element.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background-image",
       "title":"Set an image as the background of a page",
       "filename":"trycss_background-image",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-image: url(\"paper.gif\");\n}\n</style>\n</head>\n<body>\n\n<h1>Hello World!</h1>\n\n<p>This page has an image as the background!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background-image_gradient2",
       "title":"How to repeat a background image only horizontally",
       "filename":"trycss_background-image_gradient2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-image: url(\"gradient_bg.png\");\n  background-repeat: repeat-x;\n}\n</style>\n</head>\n<body>\n\n<h1>Hello World!</h1>\n<p>Here, a background image is repeated only horizontally!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background-image_position",
       "title":"How to position a background image",
       "filename":"trycss_background-image_position",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-image: url(\"img_tree.png\");\n  background-repeat: no-repeat;\n  background-position: right top;\n  margin-right: 200px;\n}\n</style>\n</head>\n<body>\n\n<h1>Hello World!</h1>\n<p>Here, the background image is only shown once. In addition it is positioned away from the text.</p>\n<p>In this example we have also added a margin on the right side, so that the background image will not disturb the text.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background-image_attachment",
       "title":"A fixed background image (this image will not scroll with the rest of the page)",
       "filename":"trycss_background-image_attachment",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-image: url(\"img_tree.png\");\n  background-repeat: no-repeat;\n  background-position: right top;\n  margin-right: 200px;\n  background-attachment: fixed;\n}\n</style>\n</head>\n<body>\n\n<h1>The background-attachment Property</h1>\n\n<p>The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page).</p>\n\n<p><strong>Tip:</strong> If you do not see any scrollbars, try to resize the browser window.</p>\n\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n<p>The background-image is fixed. Try to scroll down the page.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background_shorthand",
       "title":"All the background properties in one declaration",
       "filename":"trycss_background_shorthand",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background: #ffffff url(\"img_tree.png\") no-repeat right top;\n  margin-right: 200px;\n}\n</style>\n</head>\n<body>\n\n<h1>The background Property</h1>\n\n<p>The background property is a shorthand property for specifying all the background properties in one declaration.</p>\n\n<p>Here, the background image is only shown once, and it is also positioned in the top-right corner.</p>\n\n<p>We have also added a right margin, so that the text will not write over the background image.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_background_shorthand2",
       "title":"Advanced background example",
       "filename":"trycss_background_shorthand2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  margin-left: 200px;\n  background: #5d9ab2 url(\"img_tree.png\") no-repeat top left;\n}\n\n.center_div {\n  border: 1px solid gray;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n  background-color: #d0f0f6;\n  text-align: left;\n  padding: 8px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"center_div\">\n  <h1>Hello World!</h1>\n  <p>This example contains some advanced CSS methods you may not have learned yet. But, we will explain these methods in a later chapter in the tutorial.</p>\n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-width",
       "title":"Set the width of the four borders",
       "filename":"trycss_border-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.one {\n  border-style: solid;\n  border-width: 5px;\n}\n\np.two {\n  border-style: solid;\n  border-width: medium;\n}\n\np.three {\n  border-style: dotted;\n  border-width: 2px;\n}\n\np.four {\n  border-style: dotted;\n  border-width: thick;\n}\n\np.five {\n  border-style: double;\n  border-width: 15px;\n}\n\np.six {\n  border-style: double;\n  border-width: thick;\n}\n</style>\n</head>\n<body>\n\n<h2>The border-width Property</h2>\n<p>This property specifies the width of the four borders:</p>\n\n<p class=\"one\">Some text.</p>\n<p class=\"two\">Some text.</p>\n<p class=\"three\">Some text.</p>\n<p class=\"four\">Some text.</p>\n<p class=\"five\">Some text.</p>\n<p class=\"six\">Some text.</p>\n\n<p><b>Note:</b> The \"border-width\" property does not work if it is used alone. \nAlways specify the \"border-style\" property to set the borders first.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-top-width",
       "title":"Set the width of the top border",
       "filename":"trycss_border-top-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-top-width: 15px;\n}\n</style>\n</head>\n<body>\n\n<p><b>Note:</b> The \"border-top-width\" property does not work if it is used alone. Use the \"border-style\" property to set the borders first.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-bottom-width",
       "title":"Set the width of the bottom border",
       "filename":"trycss_border-bottom-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-bottom-width: 15px;\n}\n</style>\n</head>\n<body>\n\n<p><b>Note:</b> The \"border-bottom-width\" property does not work if it is used alone. Use the \"border-style\" property to set the borders first.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-left-width",
       "title":"Set the width of the left border",
       "filename":"trycss_border-left-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-left-width: 15px;\n}\n</style>\n</head>\n<body>\n\n<p><b>Note:</b> The \"border-left-width\" property does not work if it is used alone. Use the \"border-style\" property to set the borders first.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-right-width",
       "title":"Set the width of the right border",
       "filename":"trycss_border-right-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-right-width: 15px;\n}\n</style>\n</head>\n<body>\n\n<p><b>Note:</b> The \"border-right-width\" property does not work if it is used alone. Use the \"border-style\" property to set the borders first.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-style",
       "title":"Set the style of the four borders",
       "filename":"trycss_border-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.dotted {border-style: dotted;}\np.dashed {border-style: dashed;}\np.solid {border-style: solid;}\np.double {border-style: double;}\np.groove {border-style: groove;}\np.ridge {border-style: ridge;}\np.inset {border-style: inset;}\np.outset {border-style: outset;}\np.none {border-style: none;}\np.hidden {border-style: hidden;}\np.mix {border-style: dotted dashed solid double;}\n</style>\n</head>\n<body>\n\n<h2>The border-style Property</h2>\n<p>This property specifies what kind of border to display:</p>\n\n<p class=\"dotted\">A dotted border.</p>\n<p class=\"dashed\">A dashed border.</p>\n<p class=\"solid\">A solid border.</p>\n<p class=\"double\">A double border.</p>\n<p class=\"groove\">A groove border.</p>\n<p class=\"ridge\">A ridge border.</p>\n<p class=\"inset\">An inset border.</p>\n<p class=\"outset\">An outset border.</p>\n<p class=\"none\">No border.</p>\n<p class=\"hidden\">A hidden border.</p>\n<p class=\"mix\">A mixed border.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-top-style",
       "title":"Set the style of the top border",
       "filename":"trycss_border-top-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n}\n\np.none {border-top-style: none;}\np.dotted {border-top-style: dotted;}\np.dashed {border-top-style: dashed;}\np.solid {border-top-style: solid;}\np.double {border-top-style: double;}\np.groove {border-top-style: groove;}\np.ridge {border-top-style: ridge;}\np.inset {border-top-style: inset;}\np.outset {border-top-style: outset;}\n</style>\n</head>\n<body>\n\n<p class=\"none\">No top border.</p>\n<p class=\"dotted\">A dotted top border.</p>\n<p class=\"dashed\">A dashed top border.</p>\n<p class=\"solid\">A solid top border.</p>\n<p class=\"double\">A double top border.</p>\n<p class=\"groove\">A groove top border.</p>\n<p class=\"ridge\">A ridge top border.</p>\n<p class=\"inset\">An inset top border.</p>\n<p class=\"outset\">An outset top border.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-bottom-style",
       "title":"Set the style of the bottom border",
       "filename":"trycss_border-bottom-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {border-style: solid;}\np.none {border-bottom-style: none;}\np.dotted {border-bottom-style: dotted;}\np.dashed {border-bottom-style: dashed;}\np.solid {border-bottom-style: solid;}\np.double {border-bottom-style: double;}\np.groove {border-bottom-style: groove;}\np.ridge {border-bottom-style: ridge;}\np.inset {border-bottom-style: inset;}\np.outset {border-bottom-style: outset;}\n</style>\n</head>\n<body>\n\n<p class=\"none\">No bottom border.</p>\n<p class=\"dotted\">A dotted bottom border.</p>\n<p class=\"dashed\">A dashed bottom border.</p>\n<p class=\"solid\">A solid bottom border.</p>\n<p class=\"double\">A double bottom border.</p>\n<p class=\"groove\">A groove bottom border.</p>\n<p class=\"ridge\">A ridge bottom border.</p>\n<p class=\"inset\">An inset bottom border.</p>\n<p class=\"outset\">An outset bottom border.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-left-style",
       "title":"Set the style of the left border",
       "filename":"trycss_border-left-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n}\n\np.none {border-left-style: none;}\np.dotted {border-left-style: dotted;}\np.dashed {border-left-style: dashed;}\np.solid {border-left-style: solid;}\np.double {border-left-style: double;}\np.groove {border-left-style: groove;}\np.ridge {border-left-style: ridge;}\np.inset {border-left-style: inset;}\np.outset {border-left-style: outset;}\n</style>\n</head>\n<body>\n\n<p class=\"none\">No left border.</p>\n<p class=\"dotted\">A dotted left border.</p>\n<p class=\"dashed\">A dashed left border.</p>\n<p class=\"solid\">A solid left border.</p>\n<p class=\"double\">A double left border.</p>\n<p class=\"groove\">A groove left border.</p>\n<p class=\"ridge\">A ridge left border.</p>\n<p class=\"inset\">An inset left border.</p>\n<p class=\"outset\">An outset left border.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-right-style",
       "title":"Set the style of the right border",
       "filename":"trycss_border-right-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n}\n\np.none {border-right-style: none;}\np.dotted {border-right-style: dotted;}\np.dashed {border-right-style: dashed;}\np.solid {border-right-style: solid;}\np.double {border-right-style: double;}\np.groove {border-right-style: groove;}\np.ridge {border-right-style: ridge;}\np.inset {border-right-style: inset;}\np.outset {border-right-style: outset;}\n</style>\n</head>\n<body>\n\n<p class=\"none\">No right border.</p>\n<p class=\"dotted\">A dotted right border.</p>\n<p class=\"dashed\">A dashed right border.</p>\n<p class=\"solid\">A solid right border.</p>\n<p class=\"double\">A double right border.</p>\n<p class=\"groove\">A groove right border.</p>\n<p class=\"ridge\">A ridge right border.</p>\n<p class=\"inset\">An inset right border.</p>\n<p class=\"outset\">An outset right border.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-color",
       "title":"Set the color of the four borders",
       "filename":"trycss_border-color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.one {\n  border-style: solid;\n  border-color: #0000ff;\n}\n\np.two {\n  border-style: solid;\n  border-color: #ff0000 #0000ff;\n}\n\np.three {\n  border-style: solid;\n  border-color: #ff0000 #00ff00 #0000ff;\n}\n\np.four {\n  border-style: solid;\n  border-color: #ff0000 #00ff00 #0000ff rgb(250,0,255);\n}\n</style>\n</head>\n<body>\n\n<p class=\"one\">One-colored border!</p>\n<p class=\"two\">Two-colored border!</p>\n<p class=\"three\">Three-colored border!</p>\n<p class=\"four\">Four-colored border!</p>\n<p><b>Note:</b> The \"border-color\" property does not work if it is used alone. Use the \"border-style\" property to set the borders first.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-top-color",
       "title":"Set the color of the top border",
       "filename":"trycss_border-top-color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-top-color: #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-bottom-color",
       "title":"Set the color of the bottom border",
       "filename":"trycss_border-bottom-color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-bottom-color: #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-left-color",
       "title":"Set the color of the left border",
       "filename":"trycss_border-left-color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-left-color: #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-right-color",
       "title":"Set the color of the right border",
       "filename":"trycss_border-right-color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-right-color: #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border",
       "title":"All the border properties in one declaration",
       "filename":"trycss_border",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border: 5px solid red;\n}\n</style>\n</head>\n<body>\n\n<h2>The border Property</h2>\n\n<p>This property is a shorthand property for border-width, border-style, and border-color.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border_round",
       "title":"Add rounded borders to an element",
       "filename":"trycss_border_round",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.normal {\n  border: 2px solid red;\n  padding: 5px;\n}\n\np.round1 {\n  border: 2px solid red;\n  border-radius: 5px;\n  padding: 5px;\n}\n\np.round2 {\n  border: 2px solid red;\n  border-radius: 8px;\n  padding: 5px;\n}\n\np.round3 {\n  border: 2px solid red;\n  border-radius: 12px;\n  padding: 5px;\n}\n</style>\n</head>\n<body>\n\n<h2>The border-radius Property</h2>\n<p>This property is used to add rounded borders to an element:</p>\n\n<p class=\"normal\">Normal border</p>\n<p class=\"round1\">Round border</p>\n<p class=\"round2\">Rounder border</p>\n<p class=\"round3\">Roundest border</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-style2",
       "title":"Set different borders on each side",
       "filename":"trycss_border-style2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.one {\n  border-style: dotted solid dashed double;\n}\n\np.two {\n  border-style: dotted solid dashed;\n}\n\np.three {\n  border-style: dotted solid;\n}\n\np.four {\n  border-style: dotted;\n}\n</style>\n</head>\n<body>\n\n<p class=\"one\">This is some text in a paragraph.</p>\n<p class=\"two\">This is some text in a paragraph.</p>\n<p class=\"three\">This is some text in a paragraph.</p>\n<p class=\"four\">This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-top",
       "title":"All the top border properties in one declaration",
       "filename":"trycss_border-top",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-top: thick double #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-bottom",
       "title":"All the bottom border properties in one declaration",
       "filename":"trycss_border-bottom",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-bottom: thick dotted #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-left",
       "title":"All the left border properties in one declaration",
       "filename":"trycss_border-left",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-left: thick double #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_border-right",
       "title":"All the right border properties in one declaration",
       "filename":"trycss_border-right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border-style: solid;\n  border-right: thick double #ff0000;\n}\n</style>\n</head>\n<body>\n\n<p>This is some text in a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin_sides",
       "title":"Specify different margins for each side of an element",
       "filename":"trycss_margin_sides",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  margin-top: 100px;\n  margin-bottom: 100px;\n  margin-right: 150px;\n  margin-left: 80px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Using individual margin properties</h2>\n\n<div>This div element has a top margin of 100px, a right margin of 150px, a bottom margin of 100px, and a left margin of 80px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin_shorthand_4val",
       "title":"Use shorthand margin property with four values",
       "filename":"trycss_margin_shorthand_4val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  margin: 25px 50px 75px 100px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The margin shorthand property - 4 values</h2>\n\n<div>This div element has a top margin of 25px, a right margin of 50px, a bottom margin of 75px, and a left margin of 100px.</div>\n\n<hr>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin_shorthand_3val",
       "title":"Use shorthand margin property with three values",
       "filename":"trycss_margin_shorthand_3val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  margin: 25px 50px 75px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The margin shorthand property - 3 values</h2>\n\n<div>This div element has a top margin of 25px, a right and left margin of 50px, and a bottom margin of 75px.</div>\n\n<hr>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin_shorthand_2val",
       "title":"Use shorthand margin property with two values",
       "filename":"trycss_margin_shorthand_2val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  margin: 25px 50px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The margin shorthand property - 2 values</h2>\n\n<div>This div element has a top and bottom margin of 25px, and a right and left margin of 50px.</div>\n\n<hr>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin_shorthand_1val",
       "title":"Use shorthand margin property with one value",
       "filename":"trycss_margin_shorthand_1val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  margin: 25px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The margin shorthand property - 1 value</h2>\n\n<div>This div element has a top, bottom, left, and right margin of 25px.</div>\n\n<hr>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin_auto",
       "title":"Set margin to auto to center the element within its container",
       "filename":"trycss_margin_auto",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  margin: auto;\n  border: 1px solid red;\n}\n</style>\n</head>\n<body>\n\n<h2>Use of margin: auto</h2>\n<p>You can set the margin property to auto to horizontally center the element within its container. The element will then take up the specified width, and the remaining space will be split equally between the left and right margins:</p>\n\n<div>\nThis div will be horizontally centered because it has margin: auto;\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin-left_inherit",
       "title":"Let the left margin be inherited from the parent element",
       "filename":"trycss_margin-left_inherit",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid red;\n  margin-left: 100px;\n}\n\np.ex1 {\n  margin-left: inherit;\n}\n</style>\n</head>\n<body>\n\n<h2>Use of the inherit value</h2>\n<p>Let the left margin be inherited from the parent element:</p>\n\n<div>\n<p class=\"ex1\">This paragraph has an inherited left margin (from the div element).</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_margin_collapse",
       "title":"Margin collapse",
       "filename":"trycss_margin_collapse",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  margin: 0 0 50px 0;\n}\n\nh2 {\n  margin: 20px 0 0 0;\n}\n</style>\n</head>\n<body>\n\n<p>In this example the h1 element has a bottom margin of 50px and the h2 element has a top margin of 20px. So, the vertical margin between h1 and h2 should have been 70px (50px + 20px). However, due to margin collapse, the actual margin ends up being 50px.</p>\n\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding_sides",
       "title":"Specify different padding for each side of an element",
       "filename":"trycss_padding_sides",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  background-color: lightblue;\n  padding-top: 50px;\n  padding-right: 30px;\n  padding-bottom: 50px;\n  padding-left: 80px;\n}\n</style>\n</head>\n<body>\n\n<h2>Using individual padding properties</h2>\n\n<div>This div element has a top padding of 50px, a right padding of 30px, a bottom padding of 50px, and a left padding of 80px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding_shorthand_4val",
       "title":"Use shorthand padding property with four values",
       "filename":"trycss_padding_shorthand_4val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  padding: 25px 50px 75px 100px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The padding shorthand property - 4 values</h2>\n\n<div>This div element has a top padding of 25px, a right padding of 50px, a bottom padding of 75px, and a left padding of 100px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding_shorthand_3val",
       "title":"Use shorthand padding property with three values",
       "filename":"trycss_padding_shorthand_3val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  padding: 25px 50px 75px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The padding shorthand property - 3 values</h2>\n\n<div>This div element has a top padding of 25px, a right and left padding of 50px, and a bottom padding of 75px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding_shorthand_2val",
       "title":"Use shorthand padding property with two values",
       "filename":"trycss_padding_shorthand_2val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  padding: 25px 50px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The padding shorthand property - 2 values</h2>\n\n<div>This div element has a top and bottom padding of 25px, and a right and left padding of 50px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding_shorthand_1val",
       "title":"Use shorthand padding property with one value",
       "filename":"trycss_padding_shorthand_1val",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 1px solid black;\n  padding: 25px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>The padding shorthand property - 1 value</h2>\n\n<div>This div element has a top, bottom, left, and right padding of 25px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding_width",
       "title":"Padding and element width (without box-sizing)",
       "filename":"trycss_padding_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.ex1 {\n  width: 300px;\n  background-color: yellow;\n}\n\ndiv.ex2 {\n  width: 300px;\n  padding: 25px;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Padding and element width</h2>\n\n<div class=\"ex1\">This div is 300px wide.</div>\n<br>\n\n<div class=\"ex2\">The width of this div is 350px, even though it is defined as 300px in the CSS.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding_width2",
       "title":"Padding and element width (with box-sizing)",
       "filename":"trycss_padding_width2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.ex1 {\n  width: 300px;\n  background-color: yellow;\n}\n\ndiv.ex2 {\n  width: 300px;\n  padding: 25px;\n  box-sizing: border-box;\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Padding and element width - with box-sizing</h2>\n\n<div class=\"ex1\">This div is 300px wide.</div>\n<br>\n\n<div class=\"ex2\">The width of this div remains at 300px, in spite of the 50px of total left and right padding, because of the box-sizing: border-box property.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding-left",
       "title":"Set padding-left of an element",
       "filename":"trycss_padding-left",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.padding {\n  padding-left: 2cm;\n}\np.padding2 {\n  padding-left: 50%;\n}\n</style>\n</head>\n<body>\n\n<h1>The padding-left Property</h1>\n\n<p>This is a text with no left padding.</p>\n<p class=\"padding\">This text has a left padding of 2 cm.</p>\n<p class=\"padding2\">This text has a left padding of 50%.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding-right",
       "title":"Set padding-right of an element",
       "filename":"trycss_padding-right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.padding {\n  padding-right: 2cm;\n}\n\np.padding2 {\n  padding-right: 50%;\n}\n</style>\n</head>\n<body>\n\n<h1>The padding-right Property</h1>\n\n<p>This is a text with no right padding. This is a text with no right padding. This is a text with no right padding.</p>\n<p class=\"padding\">This text has a right padding of 2 cm. This text has a right padding of 2 cm. This text has a right padding of 2 cm.</p>\n<p class=\"padding2\">This text has a right padding of 50%. This text has a right padding of 50%. This text has a right padding of 50%.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding-top",
       "title":"Set padding-top of an element",
       "filename":"trycss_padding-top",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.padding {\n  padding-top: 2cm;\n}\n\np.padding2 {\n  padding-top: 50%;\n}\n</style>\n</head>\n<body>\n\n<h1>The padding-top Property</h1>\n\n<p>This is a text with no top padding. This is a text with no top padding. This is a text with no top padding.</p>\n<p class=\"padding\">This text has a top padding of 2 cm. This text has a top padding of 2 cm. This text has a top padding of 2 cm.</p>\n<p class=\"padding2\">This text has a top padding of 50%. This text has a top padding of 50%. This text has a top padding of 50%.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_padding-bottom",
       "title":"Set padding-bottom of an element",
       "filename":"trycss_padding-bottom",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.padding {\n  padding-bottom:2cm;\n}\n\np.padding2 {\n  padding-bottom:50%;\n}\n</style>\n</head>\n<body>\n\n<h1>The padding-bottom Property</h1>\n\n<p>This is a text with no bottom padding. This is a text with no bottom padding. This is a text with no bottom padding.</p>\n<p class=\"padding\">This text has a bottom padding of 2 cm. This text has a bottom padding of 2 cm. This text has a bottom padding of 2 cm.</p>\n<p class=\"padding2\">This text has a bottom padding of 50%. This text has a bottom padding of 50%. This text has a bottom padding of 50%.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dim_height_width",
       "title":"Set the height and width of an element",
       "filename":"trycss_dim_height_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  height: 100px;\n  width: 500px;\n  background-color: powderblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Set the height and width of an element</h2>\n\n<div>This div element has a height of 100px and a width of 500px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dim_max_width",
       "title":"Set max-width of an element",
       "filename":"trycss_dim_max_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  max-width: 500px;\n  height: 100px;\n  background-color: powderblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Set the max-width of an element</h2>\n\n<div>This div element has a height of 100px and a max-width of 500px.</div>\n\n<p>Resize the browser window to see the effect.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dim_height",
       "title":"Set the height and width of different elements",
       "filename":"trycss_dim_height",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg.one {\n  height: auto;\n}\n\nimg.two {\n  height: 200px;\n  width: 200px;\n}\n\ndiv.three {\n  height: 300px;\n  width: 300px;\n  background-color: powderblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Set the height and width of elements</h2>\n\n<p>Original image:</p>\n<img class=\"one\" src=\"ocean.jpg\" width=\"300\" height=\"300\"><br>\n\n<p>Sized image (200x200 pixels):</p>\n<img class=\"two\" src=\"ocean.jpg\" width=\"300\" height=\"300\"><br>\n\n<p>The height and width of this div element is 300px:</p>\n<div class=\"three\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dim_height_percent",
       "title":"Set the height and width of an image using percent",
       "filename":"trycss_dim_height_percent",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nhtml, body {\n  height: 100%;\n}\n\nimg.one {\n  height: auto;\n  width: auto;\n}\n\nimg.two {\n  height: 50%;\n  width: 50%;\n}\n</style>\n</head>\n<body>\n\n<h2>Set the height and width in %</h2>\n<p>Resize the browser window to see the effect.</p>\n\n<p>Original image:</p>\n<img class=\"one\" src=\"ocean.jpg\" width=\"300\" height=\"300\"><br>\n\n<p>Sized image (in %):</p>\n<img class=\"two\" src=\"ocean.jpg\" width=\"300\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dim_max-width",
       "title":"Set min-width and max-width of an element",
       "filename":"trycss_dim_max-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  max-width: 400px;\n  min-width: 100px;\n  background-color: powderblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Set the max-width and min-width of an element</h2>\n<p>Resize the browser window to see the effect.</p>\n\n<div>This is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dim_max-height",
       "title":"Set min-height and max-height of an element",
       "filename":"trycss_dim_max-height",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  max-height: 600px;\n  min-height: 400px;\n  background-color: powderblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Set the max-height and min-height of an element</h2>\n<p>Resize the browser window to see the effect.</p>\n\n<div>This is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_boxmodel",
       "title":"Demonstrating the box model",
       "filename":"trycss_boxmodel",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background-color: lightgrey;\n  width: 300px;\n  border: 15px solid green;\n  padding: 50px;\n  margin: 20px;\n}\n</style>\n</head>\n<body>\n\n<h2>Demonstrating the Box Model</h2>\n\n<p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.</p>\n\n<div>This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_boxmodel_width",
       "title":"Specify an element with a total width of 250px",
       "filename":"trycss_boxmodel_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 320px;\n  padding: 10px;\n  border: 5px solid gray;\n  margin: 0;\n}\n</style>\n</head>\n<body>\n\n<h2>Calculate the total width:</h2>\n\n<img src=\"klematis4_big.jpg\" width=\"350\" height=\"263\" alt=\"Klematis\">\n<div>The picture above is 350px wide. The total width of this element is also 350px.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_outline_intro",
       "title":"Draw a line around an element (outline)",
       "filename":"trycss_outline_intro",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  border: 2px solid black;\n  outline: #4CAF50 solid 10px;\n  margin: auto;  \n  padding: 20px;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS Outline</h2>\n<p>This element has a 2px black border and a green outline with a width of 10px.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_outline-style",
       "title":"Set the style of an outline",
       "filename":"trycss_outline-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {outline-color:red;}\n\np.dotted {outline-style: dotted;}\np.dashed {outline-style: dashed;}\np.solid {outline-style: solid;}\np.double {outline-style: double;}\np.groove {outline-style: groove;}\np.ridge {outline-style: ridge;}\np.inset {outline-style: inset;}\np.outset {outline-style: outset;}\n</style>\n</head>\n<body>\n\n<h2>The outline-style Property</h2>\n\n<p class=\"dotted\">A dotted outline</p>\n<p class=\"dashed\">A dashed outline</p>\n<p class=\"solid\">A solid outline</p>\n<p class=\"double\">A double outline</p>\n<p class=\"groove\">A groove outline. The effect depends on the outline-color value.</p>\n<p class=\"ridge\">A ridge outline. The effect depends on the outline-color value.</p>\n<p class=\"inset\">An inset outline. The effect depends on the outline-color value.</p>\n<p class=\"outset\">An outset outline. The effect depends on the outline-color value.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_outline-color",
       "title":"Set the color of an outline",
       "filename":"trycss_outline-color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.ex1 {\n  border: 2px solid black;\n  outline-style: solid;\n  outline-color: red;\n}\n\np.ex2 {\n  border: 2px solid black;\n  outline-style: dotted;\n  outline-color: blue;\n}\n\np.ex3 {\n  border: 2px solid black;\n  outline-style: outset;\n  outline-color: grey;\n}\n</style>\n</head>\n<body>\n\n<h2>The outline-color Property</h2>\n<p>The outline-color property is used to set the color of the outline.</p>\n\n<p class=\"ex1\">A solid red outline.</p>\n<p class=\"ex2\">A dotted blue outline.</p>\n<p class=\"ex3\">An outset grey outline.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_outline-width",
       "title":"Set the width of an outline",
       "filename":"trycss_outline-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.ex1 {\n  border: 1px solid black;\n  outline-style: solid;\n  outline-color: red;\n  outline-width: thin;\n}\n\np.ex2 {\n  border: 1px solid black;\n  outline-style: solid;\n  outline-color: red;\n  outline-width: medium;\n}\n\np.ex3 {\n  border: 1px solid black;\n  outline-style: solid;\n  outline-color: red;\n  outline-width: thick;\n}\n\np.ex4 {\n  border: 1px solid black;\n  outline-style: solid;\n  outline-color: red;\n  outline-width: 4px;\n}\n</style>\n</head>\n<body>\n\n<h2>The outline-width Property</h2>\n\n<p class=\"ex1\">A thin outline.</p>\n<p class=\"ex2\">A medium outline.</p>\n<p class=\"ex3\">A thick outline.</p>\n<p class=\"ex4\">A 4px thick outline.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_outline",
       "title":"Use the shorthand outline property",
       "filename":"trycss_outline",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.ex1 {outline: dashed;}\np.ex2 {outline: dotted red;}\np.ex3 {outline: 5px solid yellow;}\np.ex4 {outline: thick ridge pink;}\n</style>\n</head>\n<body>\n\n<h2>The outline Property</h2>\n\n<p class=\"ex1\">A dashed outline.</p>\n<p class=\"ex2\">A dotted red outline.</p>\n<p class=\"ex3\">A 5px solid yellow outline.</p>\n<p class=\"ex4\">A thick ridge pink outline.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_outline-offset",
       "title":"Add space between an outline and the edge/border of an element",
       "filename":"trycss_outline-offset",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  margin: 30px;\n  border: 1px solid black;\n  outline: 1px solid red;\n  outline-offset: 15px;\n}\n</style>\n</head>\n<body>\n\n<h2>The outline-offset Property</h2>\n\n<p>This paragraph has an outline 15px outside the border edge.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_color",
       "title":"Set the text color of different elements",
       "filename":"trycss_color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  color: blue;\n}\n\nh1 {\n  color: green;\n}\n</style>\n</head>\n<body>\n\n<h1>This is heading 1</h1>\n<p>This is an ordinary paragraph. Notice that this text is blue. The default text color for a page is defined in the body selector.</p>\n<p>Another paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text-align",
       "title":"Align the text",
       "filename":"trycss_text-align",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-align: center;\n}\n\nh2 {\n  text-align: left;\n}\n\nh3 {\n  text-align: right;\n}\n</style>\n</head>\n<body>\n\n<h1>Heading 1 (center)</h1>\n<h2>Heading 2 (left)</h2>\n<h3>Heading 3 (right)</h3>\n\n<p>The three headings above are aligned center, left and right.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text-decoration_link",
       "title":"Remove the line under links",
       "filename":"trycss_text-decoration_link",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na {\n  text-decoration: none;\n}\n</style>\n</head>\n<body>\n\n<h1>Using text-decoration: none</h1>\n\n<p>A link with no underline: <a href=\"https://www.w3schools.com\">W3Schools.com</a></p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text-decoration",
       "title":"Decorate the text",
       "filename":"trycss_text-decoration",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-decoration: underline;\n}\n\nh2 {\n  text-decoration: underline red;\n}\n\nh3 {\n  text-decoration: underline red double;\n}\n\np {\n  text-decoration: underline red double 5px;\n}\n</style>\n</head>\n<body>\n\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<p>A paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text-transform",
       "title":"Control the letters in a text",
       "filename":"trycss_text-transform",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.uppercase {\n  text-transform: uppercase;\n}\n\np.lowercase {\n  text-transform: lowercase;\n}\n\np.capitalize {\n  text-transform: capitalize;\n}\n</style>\n</head>\n<body>\n\n<h1>Using the text-transform property</h1>\n\n<p class=\"uppercase\">This text is transformed to uppercase.</p>\n<p class=\"lowercase\">This text is transformed to lowercase.</p>\n<p class=\"capitalize\">This text is capitalized.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text-indent",
       "title":"Indent text",
       "filename":"trycss_text-indent",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  text-indent: 50px;\n}\n</style>\n</head>\n<body>\n\n<h1>Using text-indent</h1>\n\n<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_letter-spacing",
       "title":"Specify the space between characters",
       "filename":"trycss_letter-spacing",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh2 {\n  letter-spacing: 5px;\n}\n\nh3 {\n  letter-spacing: -2px;\n}\n</style>\n</head>\n<body>\n\n<h1>Using letter-spacing</h1>\n\n<h2>This is heading 1</h2>\n<h3>This is heading 2</h3>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_line-height",
       "title":"Specify the space between lines",
       "filename":"trycss_line-height",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.small {\n  line-height: 0.7;\n}\n\np.big {\n  line-height: 1.8;\n}\n</style>\n</head>\n<body>\n\n<h1>Using line-height</h1>\n\n<p>\nThis is a paragraph with a standard line-height.<br>\nThe default line height in most browsers is about 110% to 120%.<br>\n</p>\n\n<p class=\"small\">\nThis is a paragraph with a smaller line-height.<br>\nThis is a paragraph with a smaller line-height.<br>\n</p>\n\n<p class=\"big\">\nThis is a paragraph with a bigger line-height.<br>\nThis is a paragraph with a bigger line-height.<br>\n</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text_direction",
       "title":"Set the text direction of an element",
       "filename":"trycss_text_direction",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.ex1 {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n</style>\n</head>\n<body>\n\n<p>This is the default text direction.</p>\n\n<p class=\"ex1\">This is right-to-left text direction.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text_word-spacing",
       "title":"Increase the white space between words",
       "filename":"trycss_text_word-spacing",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.one {\n  word-spacing: 10px;\n}\n\np.two {\n  word-spacing: -2px;\n}\n</style>\n</head>\n<body>\n\n<h1>Using word-spacing</h1>\n\n<p>This is a paragraph with normal word spacing.</p>\n\n<p class=\"one\">This is a paragraph with larger word spacing.</p>\n\n<p class=\"two\">This is a paragraph with smaller word spacing.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text-shadow",
       "title":"Specify a text shadow for an element",
       "filename":"trycss_text-shadow",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-shadow: 3px 2px red;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow effect</h1>\n<p><b>Note:</b> Internet Explorer 9 and earlier do not support the text-shadow property.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_text_white-space",
       "title":"Disable text wrapping inside an element",
       "filename":"trycss_text_white-space",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  white-space: nowrap;\n}\n</style>\n</head>\n<body>\n\n<h1>Using white-space</h1>\n\n<p>\nThis is some text that will not wrap.\nThis is some text that will not wrap.\nThis is some text that will not wrap.\nThis is some text that will not wrap.\nThis is some text that will not wrap.\nThis is some text that will not wrap.\nThis is some text that will not wrap.\nThis is some text that will not wrap.\nThis is some text that will not wrap.\n</p>\n\n<p>Try to remove the white-space property to see the difference!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_vertical-align",
       "title":"Vertical alignment of an image inside text",
       "filename":"trycss_vertical-align",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg.a {\n  vertical-align: baseline;\n}\n\nimg.b {\n  vertical-align: text-top;\n}\n\nimg.c {\n  vertical-align: text-bottom;\n}\n\nimg.d {\n  vertical-align: sub;\n}\n\nimg.e {\n  vertical-align: super;\n}\n</style>\n</head>\n<body>\n\n<h1>The vertical-align Property</h1>\n\n<h2>vertical-align: baseline (default):</h2>\n<p>An <img class=\"a\" src=\"sqpurple.gif\" width=\"9\" height=\"9\"> image with a default alignment.</p> \n\n<h2>vertical-align: text-top:</h2>\n<p>An <img class=\"b\" src=\"sqpurple.gif\" width=\"9\" height=\"9\"> image with a text-top alignment.</p> \n\n<h2>vertical-align: text-bottom:</h2>\n<p>An <img class=\"c\" src=\"sqpurple.gif\" width=\"9\" height=\"9\"> image with a text-bottom alignment.</p>\n\n<h2>vertical-align: sub:</h2>\n<p>An <img class=\"d\" src=\"sqpurple.gif\" width=\"9\" height=\"9\"> image with a sub alignment.</p> \n\n<h2>vertical-align: sup:</h2>\n<p>An <img class=\"e\" src=\"sqpurple.gif\" width=\"9\" height=\"9\"> image with a super alignment.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-family",
       "title":"Set the font of a text",
       "filename":"trycss_font-family",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.p1 {\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.p2 {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.p3 {\n  font-family: \"Lucida Console\", \"Courier New\", monospace;\n}\n</style>\n</head>\n<body>\n\n<h1>CSS font-family</h1>\n<p class=\"p1\">This is a paragraph, shown in the Times New Roman font.</p>\n<p class=\"p2\">This is a paragraph, shown in the Arial font.</p>\n<p class=\"p3\">This is a paragraph, shown in the Lucida Console font.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-size",
       "title":"Set the size of the font",
       "filename":"trycss_font-size",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  font-size: 250%;\n}\n\nh2 {\n  font-size: 200%;\n}\n\np {\n  font-size: 100%;\n}\n</style>\n</head>\n<body>\n\n<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<p>This is a paragraph.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-size_px",
       "title":"Set the size of the font in px",
       "filename":"trycss_font-size_px",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  font-size: 40px;\n}\n\nh2 {\n  font-size: 30px;\n}\n\np {\n  font-size: 14px;\n}\n</style>\n</head>\n<body>\n\n<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-size_em",
       "title":"Set the size of the font in em",
       "filename":"trycss_font-size_em",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  font-size: 2.5em; /* 40px/16=2.5em */\n}\n\nh2 {\n  font-size: 1.875em; /* 30px/16=1.875em */\n }\n\np {\n  font-size: 0.875em; /* 14px/16=0.875em */\n}\n</style>\n</head>\n<body>\n\n<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<p>This is a paragraph.</p>\n<p>Specifying the font-size in em allows all major browsers to resize the text.\nUnfortunately, there is still a problem with older versions of IE. When resizing the text, it becomes larger/smaller than it should.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-size_percent_em",
       "title":"Set the size of the font in percent and em",
       "filename":"trycss_font-size_percent_em",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  font-size: 100%;\n}\n\nh1 {\n  font-size: 2.5em;\n}\n\nh2 {\n  font-size: 1.875em;\n}\n\np {\n  font-size: 0.875em;\n}\n</style>\n</head>\n<body>\n\n<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<p>This is a paragraph.</p>\n<p>Specifying the font-size in percent and em displays the same size in all major browsers, and allows all browsers to resize the text!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-style",
       "title":"Set the style of the font",
       "filename":"trycss_font-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.normal {\n  font-style: normal;\n}\n\np.italic {\n  font-style: italic;\n}\n\np.oblique {\n  font-style: oblique;\n}\n</style>\n</head>\n<body>\n\n<h1>The font-style property</h1>\n\n<p class=\"normal\">This is a paragraph in normal style.</p>\n<p class=\"italic\">This is a paragraph in italic style.</p>\n<p class=\"oblique\">This is a paragraph in oblique style.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-variant",
       "title":"Set the variant of the font",
       "filename":"trycss_font-variant",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.normal {\n  font-variant: normal;\n}\n\np.small {\n  font-variant: small-caps;\n}\n</style>\n</head>\n<body>\n\n<h1>The font-variant property</h1>\n\n<p class=\"normal\">My name is Hege Refsnes.</p>\n<p class=\"small\">My name is Hege Refsnes.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font-weight",
       "title":"Set the boldness of the font",
       "filename":"trycss_font-weight",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.normal {\n  font-weight: normal;\n}\n\np.light {\n  font-weight: lighter;\n}\n\np.thick {\n  font-weight: bold;\n}\n\np.thicker {\n  font-weight: 900;\n}\n</style>\n</head>\n<body>\n\n<h1>The font-weight property</h1>\n\n<p class=\"normal\">This is a paragraph.</p>\n<p class=\"light\">This is a paragraph.</p>\n<p class=\"thick\">This is a paragraph.</p>\n<p class=\"thicker\">This is a paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_font",
       "title":"All the font properties in one declaration",
       "filename":"trycss_font",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np.a {\n  font: 20px Arial, sans-serif;\n}\n\np.b {\n  font: italic bold 12px/30px Georgia, serif;\n}\n</style>\n</head>\n<body>\n\n<h1>The font Property</h1>\n\n<p class=\"a\">This is a paragraph. The font size is set to 20 pixels, and the font family is Arial.</p>\n\n<p class=\"b\">This is a paragraph. The font is set to italic and bold, the font size is set to 12 pixels, the line height is set to 30 pixels, and the font family is Georgia.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_icons_fa",
       "title":"Font Awesome icons",
       "filename":"trycss_icons_fa",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<title>Font Awesome Icons</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<script src=\"https://kit.fontawesome.com/a076d05399.js\" crossorigin=\"anonymous\"></script>\n<!--Get your own code at fontawesome.com-->\n</head>\n<body>\n\n<h1>Font Awesome icon library</h1>\n\n<p>Some Font Awesome icons:</p>\n<i class=\"fas fa-cloud\"></i>\n<i class=\"fas fa-heart\"></i>\n<i class=\"fas fa-car\"></i>\n<i class=\"fas fa-file\"></i>\n<i class=\"fas fa-bars\"></i>\n\n<p>Styled Font Awesome icons (size and color):</p>\n<i class=\"fas fa-cloud\" style=\"font-size:24px;\"></i>\n<i class=\"fas fa-cloud\" style=\"font-size:36px;\"></i>\n<i class=\"fas fa-cloud\" style=\"font-size:48px;color:red;\"></i>\n<i class=\"fas fa-cloud\" style=\"font-size:60px;color:lightblue;\"></i>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_icons_bs",
       "title":"Bootstrap icons",
       "filename":"trycss_icons_bs",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<title>Bootstrap Icons</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n<body class=\"container\">\n\n<h1>Bootstrap icon library</h1>\n\n<p>Some Bootstrap icons:</p>\n<i class=\"glyphicon glyphicon-cloud\"></i>\n<i class=\"glyphicon glyphicon-remove\"></i>\n<i class=\"glyphicon glyphicon-user\"></i>\n<i class=\"glyphicon glyphicon-envelope\"></i>\n<i class=\"glyphicon glyphicon-thumbs-up\"></i>\n<br><br>\n\n<p>Styled Bootstrap icons (size and color):</p>\n<i class=\"glyphicon glyphicon-cloud\" style=\"font-size:24px;\"></i>\n<i class=\"glyphicon glyphicon-cloud\" style=\"font-size:36px;\"></i>\n<i class=\"glyphicon glyphicon-cloud\" style=\"font-size:48px;color:red;\"></i>\n<i class=\"glyphicon glyphicon-cloud\" style=\"font-size:60px;color:lightblue;\"></i>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_icons_google",
       "title":"Google icons",
       "filename":"trycss_icons_google",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<title>Google Icons</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n</head>\n<body>\n\n<h1>Google icon library</h1>\n\n<p>Some Google icons:</p>\n<i class=\"material-icons\">cloud</i>\n<i class=\"material-icons\">favorite</i>\n<i class=\"material-icons\">attachment</i>\n<i class=\"material-icons\">computer</i>\n<i class=\"material-icons\">traffic</i>\n<br><br>\n\n<p>Styled Google icons (size and color):</p>\n<i class=\"material-icons\" style=\"font-size:24px;\">cloud</i>\n<i class=\"material-icons\" style=\"font-size:36px;\">cloud</i>\n<i class=\"material-icons\" style=\"font-size:48px;color:red;\">cloud</i>\n<i class=\"material-icons\" style=\"font-size:60px;color:lightblue;\">cloud</i>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link",
       "title":"Add different colors to visited/unvisited links",
       "filename":"trycss_link",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n/* unvisited link */\na:link {\n  color: red;\n}\n\n/* visited link */\na:visited {\n  color: green;\n}\n\n/* mouse over link */\na:hover {\n  color: hotpink;\n}\n\n/* selected link */\na:active {\n  color: blue;\n}\n</style>\n</head>\n<body>\n\n<h2>Styling a link depending on state</h2>\n\n<p><b><a href=\"default.asp\" target=\"_blank\">This is a link</a></b></p>\n<p><b>Note:</b> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective.</p>\n<p><b>Note:</b> a:active MUST come after a:hover in the CSS definition in order to be effective.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link_decoration",
       "title":"Use of text-decoration on links",
       "filename":"trycss_link_decoration",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\na:active {\n  text-decoration: underline;\n}\n</style>\n</head>\n<body>\n\n<h2>Styling a link with text-decoration property</h2>\n\n<p><b><a href=\"default.asp\" target=\"_blank\">This is a link</a></b></p>\n<p><b>Note:</b> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective.</p>\n<p><b>Note:</b> a:active MUST come after a:hover in the CSS definition in order to be effective.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link_background",
       "title":"Specify a background color for links",
       "filename":"trycss_link_background",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na:link {\n  background-color: yellow;\n}\n\na:visited {\n  background-color: cyan;\n}\n\na:hover {\n  background-color: lightgreen;\n}\n\na:active {\n  background-color: hotpink;\n} \n</style>\n</head>\n<body>\n\n<h2>Styling a link with background-color property</h2>\n\n<p><b><a href=\"default.asp\" target=\"_blank\">This is a link</a></b></p>\n<p><b>Note:</b> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective.</p>\n<p><b>Note:</b> a:active MUST come after a:hover in the CSS definition in order to be effective.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link2",
       "title":"Add other styles to hyperlinks",
       "filename":"trycss_link2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na.one:link {color:#ff0000;}\na.one:visited {color:#0000ff;}\na.one:hover {color:#ffcc00;}\n\na.two:link {color:#ff0000;}\na.two:visited {color:#0000ff;}\na.two:hover {font-size:150%;}\n\na.three:link {color:#ff0000;}\na.three:visited {color:#0000ff;}\na.three:hover {background:#66ff66;}\n\na.four:link {color:#ff0000;}\na.four:visited {color:#0000ff;}\na.four:hover {font-family:monospace;}\n\na.five:link {color:#ff0000;text-decoration:none;}\na.five:visited {color:#0000ff;text-decoration:none;}\na.five:hover {text-decoration:underline;}\n</style>\n</head>\n<body>\n\n<h2>Styling Links</h2>\n\n<p>Mouse over the links and watch them change layout:</p>\n\n<p><b><a class=\"one\" href=\"default.asp\" target=\"_blank\">This link changes color</a></b></p>\n<p><b><a class=\"two\" href=\"default.asp\" target=\"_blank\">This link changes font-size</a></b></p>\n<p><b><a class=\"three\" href=\"default.asp\" target=\"_blank\">This link changes background-color</a></b></p>\n<p><b><a class=\"four\" href=\"default.asp\" target=\"_blank\">This link changes font-family</a></b></p>\n<p><b><a class=\"five\" href=\"default.asp\" target=\"_blank\">This link changes text-decoration</a></b></p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_cursor",
       "title":"Different types of cursors",
       "filename":"trycss_cursor",
       "html":"<!DOCTYPE html>\n<html>\n<body>\n\n<h2>The cursor Property</h2>\n\n<p>Mouse over the words to change the cursor.</p>\n<span style=\"cursor:auto\">auto</span><br>\n<span style=\"cursor:crosshair\">crosshair</span><br>\n<span style=\"cursor:default\">default</span><br>\n<span style=\"cursor:e-resize\">e-resize</span><br>\n<span style=\"cursor:help\">help</span><br>\n<span style=\"cursor:move\">move</span><br>\n<span style=\"cursor:n-resize\">n-resize</span><br>\n<span style=\"cursor:ne-resize\">ne-resize</span><br>\n<span style=\"cursor:nw-resize\">nw-resize</span><br>\n<span style=\"cursor:pointer\">pointer</span><br>\n<span style=\"cursor:progress\">progress</span><br>\n<span style=\"cursor:s-resize\">s-resize</span><br>\n<span style=\"cursor:se-resize\">se-resize</span><br>\n<span style=\"cursor:sw-resize\">sw-resize</span><br>\n<span style=\"cursor:text\">text</span><br>\n<span style=\"cursor:w-resize\">w-resize</span><br>\n<span style=\"cursor:wait\">wait</span><br>\n\n<p><strong>Tip:</strong> The cursor: hand is often used on links.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link_advanced",
       "title":"Advanced - Create link boxes",
       "filename":"trycss_link_advanced",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na:link, a:visited {\n  background-color: #f44336;\n  color: white;\n  padding: 14px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\na:hover, a:active {\n  background-color: red;\n}\n</style>\n</head>\n<body>\n\n<h2>Link Button</h2>\n\n<p>A link styled as a button:</p>\n<a href=\"default.asp\" target=\"_blank\">This is a link</a>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link_advanced2",
       "title":"Advanced - Create link boxes with borders",
       "filename":"trycss_link_advanced2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na:link, a:visited {\n  background-color: white;\n  color: black;\n  border: 2px solid green;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\na:hover, a:active {\n  background-color: green;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<h2>Link Button</h2>\n\n<a href=\"default.asp\" target=\"_blank\">This is a link</a>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_list-style-type_all",
       "title":"All the different list item markers in lists",
       "filename":"trycss_list-style-type_all",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul.a {list-style-type: circle;}\nul.b {list-style-type: disc;}\nul.c {list-style-type: square;}\n\nol.d {list-style-type: armenian;}\nol.e {list-style-type: cjk-ideographic;}\nol.f {list-style-type: decimal;}\nol.g {list-style-type: decimal-leading-zero;}\nol.h {list-style-type: georgian;}\nol.i {list-style-type: hebrew;}\nol.j {list-style-type: hiragana;}\nol.k {list-style-type: hiragana-iroha;}\nol.l {list-style-type: katakana;}\nol.m {list-style-type: katakana-iroha;}\nol.n {list-style-type: lower-alpha;}\nol.o {list-style-type: lower-greek;}\nol.p {list-style-type: lower-latin;}\nol.q {list-style-type: lower-roman;}\nol.r {list-style-type: upper-alpha;}\nol.s {list-style-type: upper-latin;}\nol.t {list-style-type: upper-roman;}\nol.u {list-style-type: none;}\nol.v {list-style-type: inherit;}\n</style>\n</head>\n<body>\n\n<h2>All List Style Types</h2>\n\n<ul class=\"a\">\n  <li>Circle type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n<ul class=\"b\">\n  <li>Disc type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n<ul class=\"c\">\n  <li>Square type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n<ol class=\"d\">\n  <li>Armenian type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"e\">\n  <li>Cjk-ideographic type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"f\">\n  <li>Decimal type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"g\">\n  <li>Decimal-leading-zero type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"h\">\n  <li>Georgian type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"i\">\n  <li>Hebrew type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"j\">\n  <li>Hiragana type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"k\">\n  <li>Hiragana-iroha type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"l\">\n  <li>Katakana type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"m\">\n  <li>Katakana-iroha type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"n\">\n  <li>Lower-alpha type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"o\">\n  <li>Lower-greek type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"p\">\n  <li>Lower-latin type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"q\">\n  <li>Lower-roman type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"r\">\n  <li>Upper-alpha type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"s\">\n  <li>Upper-latin type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"t\">\n  <li>Upper-roman type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"u\">\n  <li>None type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ol class=\"v\">\n  <li>inherit type</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_list-style-image",
       "title":"Set an image as the list-item marker",
       "filename":"trycss_list-style-image",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul {\n  list-style-image: url('sqpurple.gif');\n}\n</style>\n</head>\n<body>\n\n<h2>The list-style-image Property</h2>\n\n<p>The list-style-image property specifies an image as the list item marker:</p>\n\n<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_list-style-position",
       "title":"Position the list-item marker",
       "filename":"trycss_list-style-position",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul.a {\n  list-style-position: outside;\n}\n\nul.b {\n  list-style-position: inside;\n}\n</style>\n</head>\n<body>\n\n<h1>The list-style-position Property</h1>\n\n<h2>list-style-position: outside (default):</h2>\n<ul class=\"a\">\n  <li>Coffee - A brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant</li>\n  <li>Tea - An aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub (bush) native to Asia</li>\n  <li>Coca Cola - A carbonated soft drink produced by The Coca-Cola Company. The drink's name refers to two of its original ingredients, which were kola nuts (a source of caffeine) and coca leaves</li>\n</ul>\n\n<h2>list-style-position: inside:</h2>\n<ul class=\"b\">\n  <li>Coffee - A brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant</li>\n  <li>Tea - An aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub (bush) native to Asia</li>\n  <li>Coca Cola - A carbonated soft drink produced by The Coca-Cola Company. The drink's name refers to two of its original ingredients, which were kola nuts (a source of caffeine) and coca leaves</li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_list-style_none",
       "title":"Remove default list settings",
       "filename":"trycss_list-style_none",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul.demo {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n</style>\n</head>\n<body>\n\n<p>Default list:</p>\n<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n<p>Remove bullets, margin and padding from list:</p>\n<ul class=\"demo\">\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_list-style",
       "title":"All list properties in one declaration",
       "filename":"trycss_list-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul {\n  list-style: square inside url(\"sqpurple.gif\");\n}\n</style>\n</head>\n<body>\n\n<h2>The list-style Property</h2>\n\n<p>The list-style property is a shorthand property, which is used to set all the list properties in one declaration.</p>\n\n<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_list-style_colors",
       "title":"Style lists with colors",
       "filename":"trycss_list-style_colors",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nol {\n  background: #ff9999;\n  padding: 20px;\n}\n\nul {\n  background: #3399ff;\n  padding: 20px;\n}\n\nol li {\n  background: #ffe5e5;\n  color: darkred;\n  padding: 5px;\n  margin-left: 35px;\n}\n\nul li {\n  background: #cce5ff;\n  color: darkblue;\n  margin: 5px;\n}\n</style>\n</head>\n<body>\n\n<h1>Styling Lists With Colors</h1>\n\n<ol>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ol>\n\n<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_list-style-border",
       "title":"Full-width bordered list",
       "filename":"trycss_list-style-border",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul {\n  list-style-type: none;\n  padding: 0;\n  border: 1px solid #ddd;\n}\n\nul li {\n  padding: 8px 16px;\n  border-bottom: 1px solid #ddd;\n}\n\nul li:last-child {\n  border-bottom: none\n}\n</style>\n</head>\n<body>\n\n<h2>A bordered list</h2>\n\n<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Coca Cola</li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_border",
       "title":"Specify a black border for table, th, and td elements",
       "filename":"trycss_table_border",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable, th, td {\n  border: 1px solid;\n}\n</style>\n</head>\n<body>\n\n<h2>Add a border to a table:</h2>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_border-collapse",
       "title":"Use of border-collapse",
       "filename":"trycss_table_border-collapse",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable, td, th {\n  border: 1px solid;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n</style>\n</head>\n<body>\n\n<h2>Let the table borders collapse</h2>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_border2",
       "title":"Single border around the table",
       "filename":"trycss_table_border2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable {\n  width: 100%;\n  border: 1px solid;\n}\n</style>\n</head>\n<body>\n\n<h2>Single Border Around The Table</h2>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_width",
       "title":"Specify the width and height of a table",
       "filename":"trycss_table_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable, td, th {\n  border: 1px solid black;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  height: 70px;\n}\n</style>\n</head>\n<body>\n\n<h2>The width and height Properties</h2>\n\n<p>Set the width of the table, and the height of the table header row:</p>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n    <td>$150</td>\n  </tr>\n  <tr>\n    <td>Joe</td>\n    <td>Swanson</td>\n    <td>$300</td>\n  </tr>\n  <tr>\n    <td>Cleveland</td>\n    <td>Brown</td>\n    <td>$250</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_align",
       "title":"Set the horizontal alignment of content (text-align)",
       "filename":"trycss_table_align",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable, td, th {\n  border: 1px solid black;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  text-align: left;\n}\n</style>\n</head>\n<body>\n\n<h2>The text-align Property</h2>\n\n<p>This property sets the horizontal alignment (like left, right, or center) of the content in th or td.</p>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n    <td>$150</td>\n  </tr>\n  <tr>\n    <td>Joe</td>\n    <td>Swanson</td>\n    <td>$300</td>\n  </tr>\n  <tr>\n    <td>Cleveland</td>\n    <td>Brown</td>\n    <td>$250</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_vertical-align",
       "title":"Set the vertical alignment of content (vertical-align)",
       "filename":"trycss_table_vertical-align",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable, td, th {\n  border: 1px solid black;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd {\n  height: 50px;\n  vertical-align: bottom;\n}\n</style>\n</head>\n<body>\n\n<h2>The vertical-align Property</h2>\n\n<p>This property sets the vertical alignment (like top, bottom, or middle) of the content in th or td.</p>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n    <td>$150</td>\n  </tr>\n  <tr>\n    <td>Joe</td>\n    <td>Swanson</td>\n    <td>$300</td>\n  </tr>\n  <tr>\n    <td>Cleveland</td>\n    <td>Brown</td>\n    <td>$250</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_padding",
       "title":"Specify the padding for th and td elements",
       "filename":"trycss_table_padding",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable, td, th {  \n  border: 1px solid #ddd;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  padding: 15px;\n}\n</style>\n</head>\n<body>\n\n<h2>The padding Property</h2>\n\n<p>This property adds space between the border and the content in a table.</p>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n    <td>$150</td>\n  </tr>\n  <tr>\n    <td>Joe</td>\n    <td>Swanson</td>\n    <td>$300</td>\n  </tr>\n  <tr>\n    <td>Cleveland</td>\n    <td>Brown</td>\n    <td>$250</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_border_divider",
       "title":"Horizontal dividers",
       "filename":"trycss_table_border_divider",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n</style>\n</head>\n<body>\n\n<h2>Bordered Table Dividers</h2>\n<p>Add the border-bottom property to th and td for horizontal dividers:</p>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n  <th>Savings</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n    <td>$150</td>\n  </tr>\n  <tr>\n    <td>Joe</td>\n    <td>Swanson</td>\n    <td>$300</td>\n  </tr>\n  <tr>\n    <td>Cleveland</td>\n    <td>Brown</td>\n    <td>$250</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_hover",
       "title":"Hoverable table",
       "filename":"trycss_table_hover",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\ntr:hover {background-color: coral;}\n</style>\n</head>\n<body>\n\n<h2>Hoverable Table</h2>\n\n<p>Move the mouse over the table rows to see the effect.</p>\n\n<table>\n  <tr>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Points</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n    <td>$150</td>\n  </tr>\n  <tr>\n    <td>Joe</td>\n    <td>Swanson</td>\n    <td>$300</td>\n  </tr>\n  <tr>\n    <td>Cleveland</td>\n    <td>Brown</td>\n    <td>$250</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_striped",
       "title":"Striped tables",
       "filename":"trycss_table_striped",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {background-color: #f2f2f2;}\n</style>\n</head>\n<body>\n\n<h2>Striped Table</h2>\n\n<p>For zebra-striped tables, use the nth-child() selector and add a background-color to all even (or odd) table rows:</p>\n\n<table>\n  <tr>\n  <th>First Name</th>\n  <th>Last Name</th>\n  <th>Points</th>\n  </tr>\n  <tr>\n  <td>Peter</td>\n  <td>Griffin</td>\n  <td>$100</td>\n  </tr>\n  <tr>\n  <td>Lois</td>\n  <td>Griffin</td>\n  <td>$150</td>\n  </tr>\n  <tr>\n  <td>Joe</td>\n  <td>Swanson</td>\n  <td>$300</td>\n  </tr>\n  <tr>\n  <td>Cleveland</td>\n  <td>Brown</td>\n  <td>$250</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_color",
       "title":"Specify the color of the table borders",
       "filename":"trycss_table_color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}\n\nth {\n  background-color: #04AA6D;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<h2>Colored Table Header</h2>\n\n<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>Peter</td>\n    <td>Griffin</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>Lois</td>\n    <td>Griffin</td>\n    <td>$150</td>\n  </tr>\n  <tr>\n    <td>Joe</td>\n    <td>Swanson</td>\n    <td>$300</td>\n  </tr>\n  <tr>\n    <td>Cleveland</td>\n    <td>Brown</td>\n    <td>$250</td>\n</tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_caption-side",
       "title":"Set the position of the table caption",
       "filename":"trycss_table_caption-side",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable, td, th {\n  border: 1px solid black;\n}\n\ncaption {\n  caption-side: bottom;\n}\n</style>\n</head>\n<body>\n\n<table>\n<caption>Table 1.1 Customers</caption>\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n    <th>Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n    <td>Germany</td>\n  </tr>\n  <tr class=\"alt\">\n    <td>Berglunds snabbk�p</td>\n    <td>Christina Berglund</td>\n    <td>Sweden</td>\n  </tr>\n  <tr>\n    <td>Centro comercial Moctezuma</td>\n    <td>Francisco Chang</td>\n    <td>Mexico</td>\n  </tr>\n  <tr class=\"alt\">\n    <td>Ernst Handel</td>\n    <td>Roland Mendel</td>\n    <td>Austria</td>\n  </tr>\n  <tr>\n    <td>Island Trading</td>\n    <td>Helen Bennett</td>\n    <td>UK</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_responsive",
       "title":"Responsive Table",
       "filename":"trycss_table_responsive",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {background-color: #f2f2f2;}\n</style>\n</head>\n<body>\n\n<h2>Responsive Table</h2>\n<p>A responsive table will display a horizontal scroll bar if the screen is too \nsmall to display the full content. Resize the browser window to see the effect:</p>\n<p>To create a responsive table, add a container element (like div) with <strong>overflow-x:auto</strong> around the table element:</p>\n\n<div style=\"overflow-x: auto;\">\n  <table>\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n      <th>Points</th>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Smith</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n      <td>50</td>\n    </tr>\n    <tr>\n      <td>Eve</td>\n      <td>Jackson</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n      <td>94</td>\n    </tr>\n    <tr>\n      <td>Adam</td>\n      <td>Johnson</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n      <td>67</td>\n    </tr>\n  </table>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_table_fancy",
       "title":"Create a fancy table",
       "filename":"trycss_table_fancy",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#customers {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers tr:nth-child(even){background-color: #f2f2f2;}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #04AA6D;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<h1>A Fancy Table</h1>\n\n<table id=\"customers\">\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n    <th>Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Berglunds snabbk�p</td>\n    <td>Christina Berglund</td>\n    <td>Sweden</td>\n  </tr>\n  <tr>\n    <td>Centro comercial Moctezuma</td>\n    <td>Francisco Chang</td>\n    <td>Mexico</td>\n  </tr>\n  <tr>\n    <td>Ernst Handel</td>\n    <td>Roland Mendel</td>\n    <td>Austria</td>\n  </tr>\n  <tr>\n    <td>Island Trading</td>\n    <td>Helen Bennett</td>\n    <td>UK</td>\n  </tr>\n  <tr>\n    <td>K�niglich Essen</td>\n    <td>Philip Cramer</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Laughing Bacchus Winecellars</td>\n    <td>Yoshi Tannamuri</td>\n    <td>Canada</td>\n  </tr>\n  <tr>\n    <td>Magazzini Alimentari Riuniti</td>\n    <td>Giovanni Rovelli</td>\n    <td>Italy</td>\n  </tr>\n  <tr>\n    <td>North/South</td>\n    <td>Simon Crowther</td>\n    <td>UK</td>\n  </tr>\n  <tr>\n    <td>Paris sp�cialit�s</td>\n    <td>Marie Bertrand</td>\n    <td>France</td>\n  </tr>\n</table>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_visibility_hidden",
       "title":"How to hide an element (visibility:hidden)",
       "filename":"trycss_visibility_hidden",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1.hidden {\n  visibility: hidden;\n}\n</style>\n</head>\n<body>\n\n<h1>This is a visible heading</h1>\n<h1 class=\"hidden\">This is a hidden heading</h1>\n<p>Notice that the hidden heading still takes up space.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_display_none",
       "title":"How to not display an element (display:none)",
       "filename":"trycss_display_none",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1.hidden {\n  display: none;\n}\n</style>\n</head>\n<body>\n\n<h1>This is a visible heading</h1>\n<h1 class=\"hidden\">This is a hidden heading</h1>\n<p>Notice that the h1 element with display: none; does not take up any space.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_display_inline",
       "title":"How to display a block-level element as an inline element",
       "filename":"trycss_display_inline",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n  display: inline;\n}\n</style>\n</head>\n<body>\n\n<p>These two paragraphs generates inline boxes, and it results in</p>\n\n<p>no distance between the two elements.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_display_block",
       "title":"How to display an inline element as a block-level element",
       "filename":"trycss_display_block",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nspan {\n  display: block;\n}\n</style>\n</head>\n<body>\n\n<h1>Display span elements as block elements</h1>\n\n<span>A display property with</span> <span>a value of \"block\" results in</span> <span>a line break between each span elements.</span>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_display_js",
       "title":"How to to use CSS together with JavaScript to show hidden content",
       "filename":"trycss_display_js",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#panel, .flip {\n  font-size: 16px;\n  padding: 10px;\n  text-align: center;\n  background-color: #4CAF50;\n  color: white;\n  border: solid 1px #a6d8a8;\n  margin: auto;\n}\n\n#panel {\n  display: none;\n}\n</style>\n</head>\n<body>\n\n<p class=\"flip\" onclick=\"myFunction()\">Click to show panel</p>\n\n<div id=\"panel\">\n  <p>This panel contains a div element, which is hidden by default (display: none).</p>\n  <p>It is styled with CSS and we use JavaScript to show it (display: block).</p>\n  <p>How it works: Notice that the p element with class=\"flip\" has an onclick attribute attached to it. When the user clicks on the p element, a function called myFunction() is executed, which changes the style of the div with id=\"panel\" from display:none (hidden) to display:block (visible).</p>\n  <p>You will learn more about JavaScript in our JavaScript Tutorial.</p>\n</div>\n\n<script>\nfunction myFunction() {\n  document.getElementById(\"panel\").style.display = \"block\";\n}\n</script>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_fixed",
       "title":"Position an element relative to the browser window",
       "filename":"trycss_position_fixed",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.fixed {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 300px;\n  border: 3px solid #73AD21;\n}\n</style>\n</head>\n<body>\n\n<h2>position: fixed;</h2>\n\n<p>An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled:</p>\n\n<div class=\"fixed\">\nThis div element has position: fixed;\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_relative",
       "title":"Position an element relative to its normal position",
       "filename":"trycss_position_relative",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.relative {\n  position: relative;\n  left: 30px;\n  border: 3px solid #73AD21;\n}\n</style>\n</head>\n<body>\n\n<h2>position: relative;</h2>\n\n<p>An element with position: relative; is positioned relative to its normal position:</p>\n\n<div class=\"relative\">\nThis div element has position: relative;\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_absolute",
       "title":"Position an element with an absolute value",
       "filename":"trycss_position_absolute",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.relative {\n  position: relative;\n  width: 400px;\n  height: 200px;\n  border: 3px solid #73AD21;\n} \n\ndiv.absolute {\n  position: absolute;\n  top: 80px;\n  right: 0;\n  width: 200px;\n  height: 100px;\n  border: 3px solid #73AD21;\n}\n</style>\n</head>\n<body>\n\n<h2>position: absolute;</h2>\n\n<p>An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed):</p>\n\n<div class=\"relative\">This div element has position: relative;\n  <div class=\"absolute\">This div element has position: absolute;</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_sticky",
       "title":"Sticky positioning",
       "filename":"trycss_position_sticky",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 5px;\n  background-color: #cae8ca;\n  border: 2px solid #4CAF50;\n}\n</style>\n</head>\n<body>\n\n<p>Try to <b>scroll</b> inside this frame to understand how sticky positioning works.</p>\n\n<div class=\"sticky\">I am sticky!</div>\n\n<div style=\"padding-bottom:2000px\">\n  <p>In this example, the sticky element sticks to the top of the page (top: 0), when you reach its scroll position.</p>\n  <p>Scroll back up to remove the stickyness.</p>\n  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_zindex",
       "title":"Overlapping elements",
       "filename":"trycss_zindex",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n</style>\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<img src=\"img_tree.png\">\n<p>Because the image has a z-index of -1, it will be placed behind the text.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_clip",
       "title":"Set the shape of an element",
       "filename":"trycss_clip",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  position: absolute;\n  clip: rect(0px,60px,200px,0px);\n}\n</style>\n</head>\n<body>\n\n<img src=\"w3css.gif\" width=\"100\" height=\"140\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_top",
       "title":"Set the top edge of an image using a pixel value",
       "filename":"trycss_position_top",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  position: absolute;\n  top: 0px;\n}\n</style>\n</head>\n<body>\n\n<img src=\"smiley.gif\" width=\"42\" height=\"42\">\n<h1>This is a heading</h1>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_bottom",
       "title":"Set the bottom edge of an image using a pixel value",
       "filename":"trycss_position_bottom",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg.ex1 {\n  position: absolute;\n  bottom: 0px;\n}\n\nimg.ex2 {\n  position: relative;\n  bottom: -100px;\n}\n</style>\n</head>\n<body>\n\n<img class=\"ex1\" src=\"smiley.gif\" width=\"42\" height=\"42\">\n<h1>This is a heading</h1>\n<img class=\"ex2\" src=\"smiley.gif\" width=\"42\" height=\"42\">\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_left",
       "title":"Set the left edge of an image using a pixel value",
       "filename":"trycss_position_left",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  position: absolute;\n  left: 50px;\n}\n</style>\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<img src=\"smiley.gif\" width=\"42\" height=\"42\">\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_position_right",
       "title":"Set the right edge of an image using a pixel value",
       "filename":"trycss_position_right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  position: absolute;\n  right: 50px;\n}\n</style>\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<img src=\"smiley.gif\" width=\"42\" height=\"42\">\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_top_left",
       "title":"Position image text (top left corner)",
       "filename":"trycss_image_text_top_left",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.topleft {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the top left corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"topleft\">Top Left</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_top_right",
       "title":"Position image text (top right corner)",
       "filename":"trycss_image_text_top_right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.topright {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the top right corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"topright\">Top Right</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_bottom_left",
       "title":"Position image text (bottom left corner)",
       "filename":"trycss_image_text_bottom_left",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.bottomleft {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the bottom left corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"bottomleft\">Bottom Left</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_bottom_right",
       "title":"Position image text (bottom right corner)",
       "filename":"trycss_image_text_bottom_right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.bottomright {\n  position: absolute;\n  bottom: 8px;\n  right: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the bottom right corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"bottomright\">Bottom Right</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_center",
       "title":"Position image text (centered)",
       "filename":"trycss_image_text_center",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.center {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n\n<p>Center text in image:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"center\">Centered</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_overflow_visible",
       "title":"Using overflow: visible - The overflow is not clipped. It renders outside the element's box.",
       "filename":"trycss_overflow_visible",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background-color: coral;\n  width: 200px;\n  height: 65px;\n  border: 1px solid;\n  overflow: visible;\n}\n</style>\n</head>\n<body>\n\n<h2>Overflow: visible</h2>\n\n<p>By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:</p>\n\n<div>You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_overflow_hidden",
       "title":"Using overflow: hidden - The overflow is clipped, and the rest of the content is hidden.",
       "filename":"trycss_overflow_hidden",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background-color: coral;\n  width: 200px;\n  height: 65px;\n  border: 1px solid black;\n  overflow: hidden;\n}\n</style>\n</head>\n<body>\n\n<h2>Overflow: hidden</h2>\n\n<p>With the hidden value, the overflow is clipped, and the rest of the content is hidden:</p>\n<p>Try to remove the overflow property to understand how it works.</p>\n\n<div>You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_overflow_scroll",
       "title":"Using overflow: scroll - The overflow is clipped, but a scrollbar is added to see the rest of the content.",
       "filename":"trycss_overflow_scroll",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background-color: coral;\n  width: 200px;\n  height: 100px;\n  border: 1px solid black;\n  overflow: scroll;\n}\n</style>\n</head>\n<body>\n\n<h2>Overflow: scroll</h2>\n\n<p>Setting the overflow value to scroll, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):</p>\n\n<div>You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_overflow_auto",
       "title":"Using overflow: auto - If overflow is clipped, a scrollbar should be added to see the rest of the content.",
       "filename":"trycss_overflow_auto",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background-color: coral;\n  width: 200px;\n  height: 65px;\n  border: 1px solid black;\n  overflow: auto;\n}\n</style>\n</head>\n<body>\n\n<h2>Overflow: auto</h2>\n\n<p>The auto value is similar to scroll, only it add scrollbars when necessary:</p>\n\n<div>You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_overflow_xy",
       "title":"Using overflow-x and overflow-y.",
       "filename":"trycss_overflow_xy",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background-color: coral;\n  width: 200px;\n  height: 65px;\n  border: 1px solid black;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n</style>\n</head>\n<body>\n\n<h2>Overflow-x and overflow-y</h2>\n\n<p>You can also change the overflow of content horizontally or vertically.</p>\n<p>overflow-x specifies what to do with the left/right edges of the content.</p>\n<p>overflow-y specifies what to do with the top/bottom edges of the content.</p>\n\n<div>You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float",
       "title":"A simple use of the float property",
       "filename":"trycss_float",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  float: right;\n}\n</style>\n</head>\n<body>\n\n<p>In the paragraph below, we have added an image with style <b>float:right</b>. The result is that the image will float to the right in the paragraph.</p>\n<p><img src=\"w3css.gif\" width=\"100\" height=\"140\">\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\n</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float2",
       "title":"An image with border and margins that floats to the right in a paragraph",
       "filename":"trycss_float2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  float: right;\n  border: 1px dotted black;\n  margin: 0px 0px 15px 20px;\n}\n</style>\n</head>\n<body>\n\n<h2>Let an image float to the right in a paragraph</h2>\n\n<p>In the paragraph below, the image will float to the right. A dotted black border is added to the image. \nWe have also added margins to the image to push the text away from the image:\n0 px margin on the top and right side, 15 px margin on the bottom, and 20 px margin on the left side of the image.\n</p>\n\n<p><img src=\"w3css.gif\" width=\"100\" height=\"140\">\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\n</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float3",
       "title":"An image with a caption that floats to the right",
       "filename":"trycss_float3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  float: right;\n  width: 120px;\n  margin: 0 0 15px 20px;\n  padding: 15px;\n  border: 1px solid black;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<h2>Let an image with a caption float to the right</h2>\n\n<p>In the paragraph below, the div element is 120 pixels wide and it contains the image. The div element will float to the right. Margins are added to the div to push the text away from the div. Borders and padding are added to the div to frame in the picture and the caption.</p>\n\n<div>\n<img src=\"w3css.gif\" width=\"100\" height=\"140\"><br>CSS is fun!\n</div>\n\n<p>\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\nThis is some text. This is some text. This is some text.\n</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float4",
       "title":"Let the first letter of a paragraph float to the left",
       "filename":"trycss_float4",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nspan {\n  float: left;\n  width: 0.7em;\n  font-size: 400%;\n  font-family: algerian, courier;\n  line-height: 80%;\n}\n</style>\n</head>\n<body>\n\n<h2>Style the first letter of a paragraph and let it float left</h2>\n\n<p>\n<span>H</span>ere, the first letter of this text is embedded in a span element. The span element has a width that is 0.7 times the size of the current font. The font-size of the span element is 400% (quite large) and the line-height is 80%. The font of the letter in the span will be in \"Algerian\".\n</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float_clear",
       "title":"Turning off float (using the clear property)",
       "filename":"trycss_float_clear",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.div1 {\n  float: left;\n  width: 100px;\n  height: 50px;\n  margin: 10px;\n  border: 3px solid #73AD21;\n}\n\n.div2 {\n  border: 1px solid red;\n}\n\n\n.div3 {\n  float: left;\n  width: 100px;\n  height: 50px;\n  margin: 10px;\n  border: 3px solid #73AD21;\n}\n\n.div4 {\n  border: 1px solid red;\n  clear: left;\n}\n</style>\n</head>\n<body>\n\n<h2>Without clear</h2>\n<div class=\"div1\">div1</div>\n<div class=\"div2\">div2 - Notice that the div2 element is after div1, in the HTML code. However, since div1 is floated to the left, this happens: the text in div2 is floated around div1, and div2 surrounds the whole thing.</div>\n\n<h2>Using clear</h2>\n<div class=\"div3\">div3</div>\n<div class=\"div4\">div4 - Using clear moves div4 down below the floated div3. The value \"left\" clears elements floated to the left. You can also clear \"right\" and \"both\".</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_layout_clearfix2",
       "title":"Turning off float (using the \"clearfix\" hack)",
       "filename":"trycss_layout_clearfix2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  border: 3px solid #4CAF50;\n  padding: 5px;\n}\n\n.img1 {\n  float: right;\n}\n\n.img2 {\n  float: right;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n</style>\n</head>\n<body>\n\n<h2>Without Clearfix</h2>\n\n<p>This image is floated to the right. It is also taller than the element containing it, so it overflows outside of its container:</p>\n\n<div>\n  <img class=\"img1\" src=\"pineapple.jpg\" alt=\"Pineapple\" width=\"170\" height=\"170\">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...\n</div>\n\n<h2 style=\"clear:right\">With New Modern Clearfix</h2>\n<p>Add the clearfix hack to the containing element, to fix this problem:</p>\n\n<div class=\"clearfix\">\n  <img class=\"img2\" src=\"pineapple.jpg\" alt=\"Pineapple\" width=\"170\" height=\"170\">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float_boxes",
       "title":"Create floating boxes",
       "filename":"trycss_float_boxes",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n* {\n  box-sizing: border-box;\n}\n\n.box {\n  float: left;\n  width: 33.33%;\n  padding: 50px;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n</style>\n</head>\n<body>\n\n<h2>Grid of Boxes</h2>\n<p>Float boxes side by side:</p>\n\n<div class=\"clearfix\">\n  <div class=\"box\" style=\"background-color:#bbb\">\n  <p>Some text inside the box.</p>\n  </div>\n  <div class=\"box\" style=\"background-color:#ccc\">\n  <p>Some text inside the box.</p>\n  </div>\n  <div class=\"box\" style=\"background-color:#ddd\">\n  <p>Some text inside the box.</p>\n  </div>\n</div>\n\n<p><strong>Note:</strong> Here, we use the clearfix hack to take care of the layout flow. \nWe also use the box-sizing property to make sure that the box doesn't break due to extra padding. Try to remove this code to see the effect.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float_images_side",
       "title":"Create side-by-side images",
       "filename":"trycss_float_images_side",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n* {\n  box-sizing: border-box;\n}\n\n.img-container {\n  float: left;\n  width: 33.33%;\n  padding: 5px;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n</style>\n</head>\n<body>\n\n<h2>Images Side by Side</h2>\n<p>Float images side by side:</p>\n\n<div class=\"clearfix\">\n  <div class=\"img-container\">\n  <img src=\"img_5terre.jpg\" alt=\"Italy\" style=\"width:100%\">\n  </div>\n  <div class=\"img-container\">\n  <img src=\"img_forest.jpg\" alt=\"Forest\" style=\"width:100%\">\n  </div>\n  <div class=\"img-container\">\n  <img src=\"img_mountains.jpg\" alt=\"Mountains\" style=\"width:100%\">\n  </div>\n</div>\n\n<p>Note that we also use the clearfix hack to take care of the layout flow, and that we add the box-sizing property to make sure that the image container doesn't break due to extra padding. Try to remove this code to see the effect.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float_boxes_flex",
       "title":"Create equal-height boxes (with flexbox)",
       "filename":"trycss_float_boxes_flex",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  background-color: DodgerBlue;\n}\n\n.flex-container .box {\n  background-color: #f1f1f1;\n  width: 50%;\n  margin: 10px;\n  text-align: center;\n  line-height: 75px;\n  font-size: 30px;\n}\n</style>\n</head>\n<body>\n\n<h1>Flexible Boxes</h1>\n\n<div class=\"flex-container\">\n  <div class=\"box\">Box 1 - This is some text to make sure that the content gets really tall. This is some text to make sure that the content gets really tall.</div>\n  <div class=\"box\">Box 2 - My height will follow Box 1.</div>\n</div>\n\n<p>Try to resize the browser window to see the flexible layout.</p>\n<p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 or earlier versions.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_float5",
       "title":"Creating a horizontal menu",
       "filename":"trycss_float5",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: #111;\n}\n\n.active {\n  background-color: red;\n}\n</style>\n</head>\n<body>\n\n<ul>\n  <li><a href=\"#home\" class=\"active\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_layout_cols",
       "title":"Create a web layout example",
       "filename":"trycss_layout_cols",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n* {\n  box-sizing: border-box;\n}\nbody {\n  background-color: white;\n}\n\n.header, .footer {\n  background-color: grey;\n  color: white;\n  padding: 15px;\n}\n\n.column {\n  float: left;\n  padding: 15px;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.menu {\n  width: 25%;\n}\n\n.content {\n  width: 75%;\n}\n\n.menu ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.menu li {\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: #33b5e5;\n  color: #ffffff;\n}\n\n.menu li:hover {\n  background-color: #0099cc;\n}\n</style>\n</head>\n<body>\n\n<div class=\"header\">\n  <h1>Chania</h1>\n</div>\n\n<div class=\"clearfix\">\n  <div class=\"column menu\">\n    <ul>\n      <li>The Flight</li>\n      <li>The City</li>\n      <li>The Island</li>\n      <li>The Food</li>\n    </ul>\n  </div>\n\n  <div class=\"column content\">\n    <h1>The City</h1>\n    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>\n    <p>You will learn more about web layout and responsive web pages in a later chapter.</p>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <p>Footer Text</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_inline-block_span1",
       "title":"Show the differences between inline, inline-block and block",
       "filename":"trycss_inline-block_span1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nspan.a {\n  display: inline; /* the default for span */\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border: 1px solid blue;  \n  background-color: yellow; \n}\n\nspan.b {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border: 1px solid blue;    \n  background-color: yellow; \n}\n\nspan.c {\n  display: block;\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border: 1px solid blue;    \n  background-color: yellow; \n}\n</style>\n</head>\n<body>\n\n<h1>The display Property</h1>\n\n<h2>display: inline</h2>\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. <span class=\"a\">Aliquam</span> <span class=\"a\">venenatis</span> gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet. </div>\n\n<h2>display: inline-block</h2>\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. <span class=\"b\">Aliquam</span> <span class=\"b\">venenatis</span> gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet. </div>\n\n<h2>display: block</h2>\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. <span class=\"c\">Aliquam</span> <span class=\"c\">venenatis</span> gravida nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet. </div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_inline-block_nav",
       "title":"Using inline-block to create navigation links",
       "filename":"trycss_inline-block_nav",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.nav {\n  background-color: yellow; \n  list-style-type: none;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\n\n.nav li {\n  display: inline-block;\n  font-size: 20px;\n  padding: 20px;\n}\n</style>\n</head>\n<body>\n\n<h1>Horizontal Navigation Links</h1>\n<p>By default, list items are displayed vertically. In this example we use display: inline-block to display them horizontally (side by side).</p>\n<p>Note: If you resize the browser window, the links will automatically break when it becomes too crowded.</p>\n\n<ul class=\"nav\">\n  <li><a href=\"#home\">Home</a></li>\n  <li><a href=\"#about\">About Us</a></li>\n  <li><a href=\"#clients\">Our Clients</a></li>  \n  <li><a href=\"#contact\">Contact Us</a></li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_container",
       "title":"Center aligning with margin",
       "filename":"trycss_align_container",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center {\n  margin: auto;\n  width: 60%;\n  border: 3px solid #73AD21;\n  padding: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Center Align Elements</h2>\n<p>To horizontally center a block element (like div), use margin: auto;</p>\n\n<div class=\"center\">\n  <p>Hello World!</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_text",
       "title":"Center aligning text",
       "filename":"trycss_align_text",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center {\n  text-align: center;\n  border: 3px solid green;\n}\n</style>\n</head>\n<body>\n\n<h2>Center Text</h2>\n\n<div class=\"center\">\n  <p>This text is centered.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_image",
       "title":"Center an image",
       "filename":"trycss_align_image",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n</style>\n</head>\n<body>\n\n<h2>Center an Image</h2>\n<p>To center an image, set left and right margin to auto, and make it into a block element.</p>\n\n<img src=\"paris.jpg\" alt=\"Paris\" style=\"width:40%\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_pos",
       "title":"Left/Right aligning with position",
       "filename":"trycss_align_pos",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.right {\n  position: absolute;\n  right: 0px;\n  width: 300px;\n  border: 3px solid #73AD21;\n  padding: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Right align with the position property</h2>\n\n<p>An example of how to right align elements with the position property:</p>\n\n<div class=\"right\">\n  <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_pos_crossbrowser",
       "title":"Left/Right aligning with position - Crossbrowser solution",
       "filename":"trycss_align_pos_crossbrowser",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n}\n\n.right {\n  position: absolute;\n  right: 0px;\n  width: 300px;\n  background-color: #b0e0e6;\n}\n</style>\n</head>\n<body>\n\n<h2>Right Align</h2>\n\n<div class=\"container\">\n  <div class=\"right\">\n    <p><b>Note:</b> When aligning using the position property, always include the !DOCTYPE declaration! If missing, it can produce strange results in IE browsers.</p>\n  </div>\n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_float",
       "title":"Left/Right aligning with float",
       "filename":"trycss_align_float",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.right {\n  float: right;\n  width: 300px;\n  border: 3px solid #73AD21;\n  padding: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Right align with the float property</h2>\n\n<p>An example of how to right align elements with the float property:</p>\n\n<div class=\"right\">\n  <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_float_crossbrowser",
       "title":"Left/Right aligning with float - Crossbrowser solution",
       "filename":"trycss_align_float_crossbrowser",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.right {\n  float: right;\n  width: 300px;\n  background-color: #b0e0e6;\n}\n</style>\n</head>\n<body>\n\n<h2>Right Align</h2>\n\n<div class=\"right\">\n  <p><b>Note:</b> When aligning using the float property, always include the !DOCTYPE declaration! If missing, it can produce strange results in IE browsers.</p>\n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_padding",
       "title":"Center vertically with padding",
       "filename":"trycss_align_padding",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center {\n  padding: 70px 0;\n  border: 3px solid green;\n}\n</style>\n</head>\n<body>\n\n<h2>Center vertically with padding</h2>\n\n<p>In this example, we use the padding property to center the div element vertically:</p>\n\n<div class=\"center\">\n  <p>I am vertically centered.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_padding2",
       "title":"Center vertically and horizontally",
       "filename":"trycss_align_padding2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center {\n  padding: 70px 0;\n  border: 3px solid green;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<h2>Center with padding and text-align</h2>\n\n<p>In this example, we use padding and text-align to center the div element both vertically and horizontally:</p>\n\n<div class=\"center\">\n  <p>I am vertically and horizontally centered.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_line-height",
       "title":"Center vertically with line-height",
       "filename":"trycss_align_line-height",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center {\n  line-height: 200px;\n  height: 200px;\n  border: 3px solid green;\n  text-align: center;\n}\n\n.center p {\n  line-height: 1.5;\n  display: inline-block;\n  vertical-align: middle;\n}\n</style>\n</head>\n<body>\n\n<h2>Center with line-height</h2>\n\n<p>In this example, we use the line-height property with a value that is equal to the height property to center the div element:</p>\n\n<div class=\"center\">\n  <p>I am vertically and horizontally centered.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_align_transform",
       "title":"Center vertically and horizontally with position",
       "filename":"trycss_align_transform",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center { \n  height: 200px;\n  position: relative;\n  border: 3px solid green; \n}\n\n.center p {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n</style>\n</head>\n<body>\n\n<h2>Center with position and transform</h2>\n\n<p>In this example, we use positioning and the transform property to vertically and horizontally center the div element:</p>\n\n<div class=\"center\">\n  <p>I am vertically and horizontally centered.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_element_element",
       "title":"Descendant selector",
       "filename":"trycss_sel_element_element",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv p {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>Descendant Selector</h2>\n\n<p>The descendant selector matches all elements that are descendants of a specified element.</p>\n\n<div>\n  <p>Paragraph 1 in the div.</p>\n  <p>Paragraph 2 in the div.</p>\n  <section><p>Paragraph 3 in the div.</p></section>\n</div>\n\n<p>Paragraph 4. Not in a div.</p>\n<p>Paragraph 5. Not in a div.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_element_gt",
       "title":"Child selector",
       "filename":"trycss_sel_element_gt",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv > p {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>Child Selector</h2>\n\n<p>The child selector (>) selects all elements that are the children of a specified element.</p>\n\n<div>\n  <p>Paragraph 1 in the div.</p>\n  <p>Paragraph 2 in the div.</p>\n  <section>\n    <!-- not Child but Descendant -->\n    <p>Paragraph 3 in the div (inside a section element).</p>\n  </section>\n  <p>Paragraph 4 in the div.</p>\n</div>\n\n<p>Paragraph 5. Not in a div.</p>\n<p>Paragraph 6. Not in a div.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_element_pluss",
       "title":"Adjacent Sibling selector",
       "filename":"trycss_sel_element_pluss",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv + p {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>Adjacent Sibling Selector</h2>\n\n<p>The + selector is used to select an element that is directly after another specific element.</p>\n<p>The following example selects the first p element that are placed immediately after div elements:</p>\n\n<div>\n  <p>Paragraph 1 in the div.</p>\n  <p>Paragraph 2 in the div.</p>\n</div>\n\n<p>Paragraph 3. After a div.</p>\n<p>Paragraph 4. After a div.</p>\n\n<div>\n  <p>Paragraph 5 in the div.</p>\n  <p>Paragraph 6 in the div.</p>\n</div>\n\n<p>Paragraph 7. After a div.</p>\n<p>Paragraph 8. After a div.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_element_tilde",
       "title":"General Sibling selector",
       "filename":"trycss_sel_element_tilde",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv ~ p {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>General Sibling Selector</h2>\n\n<p>The general sibling selector (~) selects all elements that are next siblings of a specified element.</p>\n\n<p>Paragraph 1.</p>\n\n<div>\n  <p>Paragraph 2.</p>\n</div>\n\n<p>Paragraph 3.</p>\n<code>Some code.</code>\n<p>Paragraph 4.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link",
       "title":"Add different colors to a hyperlink",
       "filename":"trycss_link",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n/* unvisited link */\na:link {\n  color: red;\n}\n\n/* visited link */\na:visited {\n  color: green;\n}\n\n/* mouse over link */\na:hover {\n  color: hotpink;\n}\n\n/* selected link */\na:active {\n  color: blue;\n}\n</style>\n</head>\n<body>\n\n<h2>Styling a link depending on state</h2>\n\n<p><b><a href=\"default.asp\" target=\"_blank\">This is a link</a></b></p>\n<p><b>Note:</b> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective.</p>\n<p><b>Note:</b> a:active MUST come after a:hover in the CSS definition in order to be effective.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link2",
       "title":"Add other styles to hyperlinks",
       "filename":"trycss_link2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na.one:link {color:#ff0000;}\na.one:visited {color:#0000ff;}\na.one:hover {color:#ffcc00;}\n\na.two:link {color:#ff0000;}\na.two:visited {color:#0000ff;}\na.two:hover {font-size:150%;}\n\na.three:link {color:#ff0000;}\na.three:visited {color:#0000ff;}\na.three:hover {background:#66ff66;}\n\na.four:link {color:#ff0000;}\na.four:visited {color:#0000ff;}\na.four:hover {font-family:monospace;}\n\na.five:link {color:#ff0000;text-decoration:none;}\na.five:visited {color:#0000ff;text-decoration:none;}\na.five:hover {text-decoration:underline;}\n</style>\n</head>\n<body>\n\n<h2>Styling Links</h2>\n\n<p>Mouse over the links and watch them change layout:</p>\n\n<p><b><a class=\"one\" href=\"default.asp\" target=\"_blank\">This link changes color</a></b></p>\n<p><b><a class=\"two\" href=\"default.asp\" target=\"_blank\">This link changes font-size</a></b></p>\n<p><b><a class=\"three\" href=\"default.asp\" target=\"_blank\">This link changes background-color</a></b></p>\n<p><b><a class=\"four\" href=\"default.asp\" target=\"_blank\">This link changes font-family</a></b></p>\n<p><b><a class=\"five\" href=\"default.asp\" target=\"_blank\">This link changes text-decoration</a></b></p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_link_focus",
       "title":"Use of :focus",
       "filename":"trycss_link_focus",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ninput:focus {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<form action=\"/action_page.php\" method=\"get\">\n  First name: <input type=\"text\" name=\"fname\"><br><br>\n  Last name: <input type=\"text\" name=\"lname\"><br><br>\n  <input type=\"submit\" value=\"Submit\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_first-child1",
       "title":":first-child - match the first p element",
       "filename":"trycss_first-child1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np:first-child {\n  color: blue;\n} \n</style>\n</head>\n<body>\n\n<p>This is some text.</p>\n<p>This is some text.</p>\n\n<div>\n  <p>This is some text.</p>\n  <p>This is some text.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_first-child2",
       "title":":first-child - match the first i element in all p elements",
       "filename":"trycss_first-child2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np i:first-child {\n  color: blue;\n} \n</style>\n</head>\n<body>\n\n<p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>\n<p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_first-child3",
       "title":":first-child - Match all i elements in all first child p elements",
       "filename":"trycss_first-child3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np:first-child i {\n  color: blue;\n} \n</style>\n</head>\n<body>\n\n<p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>\n<p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>\n\n<div>\n  <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>\n  <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_lang",
       "title":"Use of :lang",
       "filename":"trycss_lang",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nq:lang(no) {\n  quotes: \"~\" \"~\";\n}\n</style>\n</head>\n<body>\n\n<p>Some text <q lang=\"no\">A quote in a paragraph</q> Some text.</p>\n<p>In this example, :lang defines the quotation marks for q elements with lang=\"no\":</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_firstletter",
       "title":"Make the first letter special in a text",
       "filename":"trycss_firstletter",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np::first-letter {\n  color: #ff0000;\n  font-size: xx-large;\n}\n</style>\n</head>\n<body>\n\n<p>You can use the ::first-letter pseudo-element to add a special effect to the first character of a text!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_firstline",
       "title":"Make the first line special in a text",
       "filename":"trycss_firstline",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np::first-line {\n  color: #ff0000;\n  font-variant: small-caps;\n}\n</style>\n</head>\n<body>\n\n<p>You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_firstline_letter",
       "title":"Make the first letter and first line special",
       "filename":"trycss_firstline_letter",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\np::first-letter {\n  color: #ff0000;\n  font-size: xx-large;\n}\n\np::first-line {\n  color: #0000ff;\n  font-variant: small-caps;\n}\n</style>\n</head>\n<body>\n\n<p>You can combine the ::first-letter and ::first-line pseudo-elements to add a special effect to the first letter and the first line of a text!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_before",
       "title":"Use :before to insert some content before an element",
       "filename":"trycss_before",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1::before {\n  content: url(smiley.gif);\n}\n</style>\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<p>The ::before pseudo-element inserts content before the content of an element.</p>\n\n<h1>This is a heading</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_after",
       "title":"Use :after to insert some content after an element",
       "filename":"trycss_after",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1::after {\n  content: url(smiley.gif);\n}\n</style>\n</head>\n<body>\n\n<h1>This is a heading</h1>\n<p>The ::after pseudo-element inserts content after the content of an element.</p>\n\n<h1>This is a heading</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_opacity",
       "title":"Creating transparent images",
       "filename":"trycss_image_opacity",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  opacity: 0.5;\n}\n</style>\n</head>\n<body>\n\n<h1>Image Transparency</h1>\n<p>The opacity property specifies the transparency of an element. The lower the value, the more transparent:</p>\n\n<p>Image with 50% opacity:</p>\n<img src=\"img_forest.jpg\" alt=\"Forest\" width=\"170\" height=\"100\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_transparency",
       "title":"Creating transparent images - mouseover effect",
       "filename":"trycss_image_transparency",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  opacity: 0.5;\n}\n\nimg:hover {\n  opacity: 1.0;\n}\n</style>\n</head>\n<body>\n\n<h1>Image Transparency</h1>\n<p>The opacity property is often used together with the :hover selector to change the opacity on mouse-over:</p>\n<img src=\"img_forest.jpg\" alt=\"Forest\" width=\"170\" height=\"100\">\n<img src=\"img_mountains.jpg\" alt=\"Mountains\" width=\"170\" height=\"100\">\n<img src=\"img_5terre.jpg\" alt=\"Italy\" width=\"170\" height=\"100\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_transparency2",
       "title":"Reversed mouseover effect for transparent images",
       "filename":"trycss_image_transparency2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg:hover {\n  opacity: 0.5;\n}\n</style>\n</head>\n<body>\n\n<h1>Image Transparency</h1>\n<p>The opacity property is often used together with the :hover selector to change the opacity on mouse-over:</p>\n<img src=\"img_forest.jpg\" alt=\"Forest\" width=\"170\" height=\"100\">\n<img src=\"img_mountains.jpg\" alt=\"Mountains\" width=\"170\" height=\"100\">\n<img src=\"img_5terre.jpg\" alt=\"Italy\" width=\"170\" height=\"100\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_opacity_box",
       "title":"Transparent box/div",
       "filename":"trycss_opacity_box",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background-color: #4CAF50;\n  padding: 10px;\n}\n\ndiv.first {\n  opacity: 0.1;\n}\n\ndiv.second {\n  opacity: 0.3;\n}\n\ndiv.third {\n  opacity: 0.6;\n}\n</style>\n</head>\n<body>\n\n<h1>Transparent Box</h1>\n<p>When using the opacity property to add transparency to the background of an element, all of its child elements become transparent as well. This can make the text inside a fully transparent element hard to read:</p>\n\n<div class=\"first\"><p>opacity 0.1</p></div>\n<div class=\"second\"><p>opacity 0.3</p></div>\n<div class=\"third\"><p>opacity 0.6</p></div>\n<div><p>opacity 1 (default)</p></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_opacity_box2",
       "title":"Transparent box/div with RGBA values",
       "filename":"trycss_opacity_box2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  background: rgb(76, 175, 80);\n  padding: 10px;\n}\n\ndiv.first {\n  background: rgba(76, 175, 80, 0.1);\n}\n\ndiv.second {\n  background: rgba(76, 175, 80, 0.3);\n}\n\ndiv.third {\n  background: rgba(76, 175, 80, 0.6);\n}\n</style>\n</head>\n<body>\n\n<h1>Transparent Box</h1>\n<p>With opacity:</p>\n<div style=\"opacity:0.1;\"><p>10% opacity</p></div>\n<div style=\"opacity:0.3;\"><p>30% opacity</p></div>\n<div style=\"opacity:0.6;\"><p>60% opacity</p></div>\n<div><p>opacity 1</p></div>\n\n<p>With RGBA color values:</p>\n<div class=\"first\"><p>10% opacity</p></div>\n<div class=\"second\"><p>30% opacity</p></div>\n<div class=\"third\"><p>60% opacity</p></div>\n<div><p>default</p></div>\n\n<p>Notice how the text gets transparent as well as the background color when using the opacity property.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_transparency",
       "title":"Creating a transparent box with text on a background image",
       "filename":"trycss_transparency",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.background {\n  background: url(klematis.jpg) repeat;\n  border: 2px solid black;\n}\n\ndiv.transbox {\n  margin: 30px;\n  background-color: #ffffff;\n  border: 1px solid black;\n  opacity: 0.6;\n}\n\ndiv.transbox p {\n  margin: 5%;\n  font-weight: bold;\n  color: #000000;\n}\n</style>\n</head>\n<body>\n\n<div class=\"background\">\n  <div class=\"transbox\">\n    <p>This is some text that is placed in the transparent box.</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_navbar_vertical_active",
       "title":"Fully styled vertical navigation bar",
       "filename":"trycss_navbar_vertical_active",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #f1f1f1;\n}\n\nli a {\n  display: block;\n  color: #000;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\nli a.active {\n  background-color: #04AA6D;\n  color: white;\n}\n\nli a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<h2>Vertical Navigation Bar</h2>\n<p>In this example, we create an \"active\" class with a green background color and a white text. The class is added to the \"Home\" link.</p>\n\n<ul>\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_navbar_horizontal_float_advanced",
       "title":"Fully styled horizontal navigation bar",
       "filename":"trycss_navbar_horizontal_float_advanced",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\na:hover:not(.active) {\n  background-color: #111;\n}\n\n.active {\n  background-color:#04AA6D;\n}\n</style>\n</head>\n<body>\n\n<ul>\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_navbar_vertical_fixed",
       "title":"Full-height fixed vertical navigation bar",
       "filename":"trycss_navbar_vertical_fixed",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  margin: 0;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 25%;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n}\n\nli a {\n  display: block;\n  color: #000;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\nli a.active {\n  background-color: #04AA6D;\n  color: white;\n}\n\nli a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<ul>\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>\n\n<div style=\"margin-left:25%;padding:1px 16px;height:1000px;\">\n  <h2>Fixed Full-height Side Nav</h2>\n  <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>\n  <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>\n  <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>\n  <p>Some text..</p>\n  <p>Some text..</p>\n  <p>Some text..</p>\n  <p>Some text..</p>\n  <p>Some text..</p>\n  <p>Some text..</p>\n  <p>Some text..</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_navbar_horizontal_black_fixed",
       "title":"Fixed horizontal navigation bar",
       "filename":"trycss_navbar_horizontal_black_fixed",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {margin:0;}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover:not(.active) {\n  background-color: #111;\n}\n\n.active {\n  background-color: #04AA6D;\n}\n</style>\n</head>\n<body>\n\n<ul>\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>\n\n<div style=\"padding:20px;margin-top:30px;background-color:#1abc9c;height:1500px;\">\n  <h1>Fixed Top Navigation Bar</h1>\n  <h2>Scroll this page to see the effect</h2>\n  <h2>The navigation bar will stay at the top of the page while scrolling</h2>\n\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n  <p>Some text some text some text some text..</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_navbar_sticky",
       "title":"Sticky navigation bar (does not work in IE or Edge 15 and earlier)",
       "filename":"trycss_navbar_sticky",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  font-size: 28px;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 0;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: #111;\n}\n\n.active {\n  background-color: #4CAF50;\n}\n</style>\n</head>\n<body>\n\n<div class=\"header\">\n  <h2>Scroll Down</h2>\n  <p>Scroll down to see the sticky effect.</p>\n</div>\n\n<ul>\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n</ul>\n\n<h3>Sticky Navigation Bar Example</h3>\n<p>The navbar will <strong>stick</strong> to the top when you reach its scroll position.</p>\n<p><strong>Note:</strong> Internet Explorer do not support sticky positioning and Safari requires a -webkit- prefix.</p>\n<p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n<p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n<p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n<p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n<p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n<p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n<p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_navbar_horizontal_responsive",
       "title":"Responsive top navigation",
       "filename":"trycss_navbar_horizontal_responsive",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\nbody {margin: 0;}\n\nul.topnav {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nul.topnav li {float: left;}\n\nul.topnav li a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nul.topnav li a:hover:not(.active) {background-color: #111;}\n\nul.topnav li a.active {background-color: #04AA6D;}\n\nul.topnav li.right {float: right;}\n\n@media screen and (max-width: 600px) {\n  ul.topnav li.right, \n  ul.topnav li {float: none;}\n}\n</style>\n</head>\n<body>\n\n<ul class=\"topnav\">\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li class=\"right\"><a href=\"#about\">About</a></li>\n</ul>\n\n<div style=\"padding:0 16px;\">\n  <h2>Responsive Topnav Example</h2>\n  <p>This example use media queries to stack the topnav vertically when the screen size is 600px or less.</p>\n  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>\n  <h4>Resize the browser window to see the effect.</h4>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_navbar_vertical_responsive",
       "title":"Responsive side navigation",
       "filename":"trycss_navbar_vertical_responsive",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\nbody {margin: 0;}\n\nul.sidenav {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 25%;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n}\n\nul.sidenav li a {\n  display: block;\n  color: #000;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n \nul.sidenav li a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\nul.sidenav li a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n\ndiv.content {\n  margin-left: 25%;\n  padding: 1px 16px;\n  height: 1000px;\n}\n\n@media screen and (max-width: 900px) {\n  ul.sidenav {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  \n  ul.sidenav li a {\n    float: left;\n    padding: 15px;\n  }\n  \n  div.content {margin-left: 0;}\n}\n\n@media screen and (max-width: 400px) {\n  ul.sidenav li a {\n    text-align: center;\n    float: none;\n  }\n}\n</style>\n</head>\n<body>\n\n<ul class=\"sidenav\">\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>\n\n<div class=\"content\">\n  <h2>Responsive Sidenav Example</h2>\n  <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is 900px or less.</p>\n  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>\n  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>\n  <h3>Resize the browser window to see the effect.</h3>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dropdown_text",
       "title":"Dropdown text",
       "filename":"trycss_dropdown_text",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  padding: 12px 16px;\n  z-index: 1;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n</style>\n</head>\n<body>\n\n<h2>Hoverable Dropdown</h2>\n<p>Move the mouse over the text below to open the dropdown content.</p>\n\n<div class=\"dropdown\">\n  <span>Mouse over me</span>\n  <div class=\"dropdown-content\">\n  <p>Hello World!</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dropdown_button",
       "title":"Dropdown menu",
       "filename":"trycss_dropdown_button",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #f1f1f1}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41;\n}\n</style>\n</head>\n<body>\n\n<h2>Dropdown Menu</h2>\n<p>Move the mouse over the button to open the dropdown menu.</p>\n\n<div class=\"dropdown\">\n  <button class=\"dropbtn\">Dropdown</button>\n  <div class=\"dropdown-content\">\n  <a href=\"#\">Link 1</a>\n  <a href=\"#\">Link 2</a>\n  <a href=\"#\">Link 3</a>\n  </div>\n</div>\n\n<p><strong>Note:</strong> We use href=\"#\" for test links. In a real web site this would be URLs.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dropdown_right",
       "title":"Right-aligned dropdown menu",
       "filename":"trycss_dropdown_right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #f1f1f1;}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41;\n}\n</style>\n</head>\n<body>\n\n<h2>Aligned Dropdown Content</h2>\n<p>Determine whether the dropdown content should go from left to right or right to left with the left and right properties.</p>\n\n<div class=\"dropdown\" style=\"float:left;\">\n  <button class=\"dropbtn\">Left</button>\n  <div class=\"dropdown-content\" style=\"left:0;\">\n  <a href=\"#\">Link 1</a>\n  <a href=\"#\">Link 2</a>\n  <a href=\"#\">Link 3</a>\n  </div>\n</div>\n\n<div class=\"dropdown\" style=\"float:right;\">\n  <button class=\"dropbtn\">Right</button>\n  <div class=\"dropdown-content\">\n  <a href=\"#\">Link 1</a>\n  <a href=\"#\">Link 2</a>\n  <a href=\"#\">Link 3</a>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dropdown_image",
       "title":"Dropdown image",
       "filename":"trycss_dropdown_image",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.desc {\n  padding: 15px;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<h2>Dropdown Image</h2>\n<p>Move the mouse over the image below to open the dropdown content.</p>\n\n<div class=\"dropdown\">\n  <img src=\"img_5terre.jpg\" alt=\"Cinque Terre\" width=\"100\" height=\"50\">\n  <div class=\"dropdown-content\">\n  <img src=\"img_5terre.jpg\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\n  <div class=\"desc\">Beautiful Cinque Terre</div>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_dropdown_navbar",
       "title":"Dropdown navigation bar",
       "filename":"trycss_dropdown_navbar",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-color:white;\n}\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #38444d;\n}\n\nli {\n  float: left;\n}\n\nli a, .dropbtn {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover, .dropdown:hover .dropbtn {\n  background-color: red;\n}\n\nli.dropdown {\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {background-color: #f1f1f1;}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n</style>\n</head>\n<body>\n\n<ul>\n  <li><a href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li class=\"dropdown\">\n    <a href=\"javascript:void(0)\" class=\"dropbtn\">Dropdown</a>\n    <div class=\"dropdown-content\">\n      <a href=\"#\">Link 1</a>\n      <a href=\"#\">Link 2</a>\n      <a href=\"#\">Link 3</a>\n    </div>\n  </li>\n</ul>\n\n<h3>Dropdown Menu inside a Navigation Bar</h3>\n<p>Hover over the \"Dropdown\" link to see the dropdown menu.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_gallery",
       "title":"Image gallery",
       "filename":"trycss_image_gallery",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.gallery {\n  margin: 5px;\n  border: 1px solid #ccc;\n  float: left;\n  width: 180px;\n}\n\ndiv.gallery:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<div class=\"gallery\">\n  <a target=\"_blank\" href=\"img_5terre.jpg\">\n    <img src=\"img_5terre.jpg\" alt=\"Cinque Terre\" width=\"600\" height=\"400\">\n  </a>\n  <div class=\"desc\">Add a description of the image here</div>\n</div>\n\n<div class=\"gallery\">\n  <a target=\"_blank\" href=\"img_forest.jpg\">\n    <img src=\"img_forest.jpg\" alt=\"Forest\" width=\"600\" height=\"400\">\n  </a>\n  <div class=\"desc\">Add a description of the image here</div>\n</div>\n\n<div class=\"gallery\">\n  <a target=\"_blank\" href=\"img_lights.jpg\">\n    <img src=\"img_lights.jpg\" alt=\"Northern Lights\" width=\"600\" height=\"400\">\n  </a>\n  <div class=\"desc\">Add a description of the image here</div>\n</div>\n\n<div class=\"gallery\">\n  <a target=\"_blank\" href=\"img_mountains.jpg\">\n    <img src=\"img_mountains.jpg\" alt=\"Mountains\" width=\"600\" height=\"400\">\n  </a>\n  <div class=\"desc\">Add a description of the image here</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_gallery_responsive",
       "title":"Responsive Image gallery",
       "filename":"trycss_image_gallery_responsive",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.gallery {\n  border: 1px solid #ccc;\n}\n\ndiv.gallery:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.responsive {\n  padding: 0 6px;\n  float: left;\n  width: 24.99999%;\n}\n\n@media only screen and (max-width: 700px) {\n  .responsive {\n    width: 49.99999%;\n    margin: 6px 0;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .responsive {\n    width: 100%;\n  }\n}\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n</style>\n</head>\n<body>\n\n<h2>Responsive Image Gallery</h2>\n\n<h4>Resize the browser window to see the effect.</h4>\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"img_5terre.jpg\">\n      <img src=\"img_5terre.jpg\" alt=\"Cinque Terre\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"img_forest.jpg\">\n      <img src=\"img_forest.jpg\" alt=\"Forest\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"img_lights.jpg\">\n      <img src=\"img_lights.jpg\" alt=\"Northern Lights\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"img_mountains.jpg\">\n      <img src=\"img_mountains.jpg\" alt=\"Mountains\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n<div class=\"clearfix\"></div>\n\n<div style=\"padding:6px;\">\n  <p>This example use media queries to re-arrange the images on different screen sizes: for screens larger than 700px wide, it will show four images side by side, for screens smaller than 700px, it will show two images side by side. For screens smaller than 500px, the images will stack vertically (100%).</p>\n  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sprites_img",
       "title":"An image sprite",
       "filename":"trycss_sprites_img",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#home {\n  width: 46px;\n  height: 44px;\n  background: url(img_navsprites.gif) 0 0;\n}\n\n#next {\n  width: 43px;\n  height: 44px;\n  background: url(img_navsprites.gif) -91px 0;\n}\n</style>\n</head>\n<body>\n\n<img id=\"home\" src=\"img_trans.gif\" width=\"1\" height=\"1\">\n<img id=\"next\" src=\"img_trans.gif\" width=\"1\" height=\"1\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sprites_nav",
       "title":"An image sprite - a navigation list",
       "filename":"trycss_sprites_nav",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#navlist {\n  position: relative;\n}\n\n#navlist li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  top: 0;\n}\n\n#navlist li, #navlist a {\n  height: 44px;\n  display: block;\n}\n\n#home {\n  left: 0px;\n  width: 46px;\n  background: url('img_navsprites.gif') 0 0;\n}\n\n#prev {\n  left: 63px;\n  width: 43px;\n  background: url('img_navsprites.gif') -47px 0;\n}\n\n#next {\n  left: 129px;\n  width: 43px;\n  background: url('img_navsprites.gif') -91px 0;\n}\n</style>\n</head>\n<body>\n\n<ul id=\"navlist\">\n  <li id=\"home\"><a href=\"default.asp\"></a></li>\n  <li id=\"prev\"><a href=\"css_intro.asp\"></a></li>\n  <li id=\"next\"><a href=\"css_syntax.asp\"></a></li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sprites_hover_nav",
       "title":"An image sprite with hover effect",
       "filename":"trycss_sprites_hover_nav",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#navlist {\n  position: relative;\n}\n\n#navlist li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  top: 0;\n}\n\n#navlist li, #navlist a {\n  height: 44px;\n  display: block;\n}\n\n#home {\n  left: 0px;\n  width: 46px;\n  background: url('img_navsprites_hover.gif') 0 0;\n}\n\n#prev {\n  left: 63px;\n  width: 43px;\n  background: url('img_navsprites_hover.gif') -47px 0;\n}\n\n#next {\n  left: 129px;\n  width: 43px;\n  background: url('img_navsprites_hover.gif') -91px 0;\n}\n\n#home a:hover {\n  background: url('img_navsprites_hover.gif') 0 -45px;\n}\n\n#prev a:hover {\n  background: url('img_navsprites_hover.gif') -47px -45px;\n}\n\n#next a:hover {\n  background: url('img_navsprites_hover.gif') -91px -45px;\n}\n</style>\n</head>\n<body>\n\n<ul id=\"navlist\">\n  <li id=\"home\"><a href=\"default.asp\"></a></li>\n  <li id=\"prev\"><a href=\"css_intro.asp\"></a></li>\n  <li id=\"next\"><a href=\"css_syntax.asp\"></a></li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_attribute",
       "title":"Selects all <a> elements with a target attribute",
       "filename":"trycss_sel_attribute",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na[target] {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS [attribute] Selector</h2>\n<p>The links with a target attribute gets a yellow background:</p>\n\n<a href=\"https://www.w3schools.com\">w3schools.com</a>\n<a href=\"http://www.disney.com\" target=\"_blank\">disney.com</a>\n<a href=\"http://www.wikipedia.org\" target=\"_top\">wikipedia.org</a>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_attribute_value",
       "title":"Selects all <a> elements with a target=\"_blank\" attribute",
       "filename":"trycss_sel_attribute_value",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\na[target=_blank] {\n  background-color: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS [attribute=\"value\"] Selector</h2>\n<p>The link with target=\"_blank\" gets a yellow background:</p>\n\n<a href=\"https://www.w3schools.com\">w3schools.com</a>\n<a href=\"http://www.disney.com\" target=\"_blank\">disney.com</a>\n<a href=\"http://www.wikipedia.org\" target=\"_top\">wikipedia.org</a>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_attribute_value2",
       "title":"Selects all elements with a title attribute that contains a space-separated list of words, one of which is \"flower\"",
       "filename":"trycss_sel_attribute_value2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n[title~=flower] {\n  border: 5px solid yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS [attribute~=\"value\"] Selector</h2>\n<p>All images with the title attribute containing the word \"flower\" get a yellow border.</p>\n\n<img src=\"klematis.jpg\" title=\"klematis flower\" width=\"150\" height=\"113\">\n<img src=\"img_flwr.gif\" title=\"flower\" width=\"224\" height=\"162\">\n<img src=\"img_tree.gif\" title=\"tree\" width=\"200\" height=\"358\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_attribute_hyphen",
       "title":"Selects all elements with a class attribute value that begins with \"top\" (must be whole word)",
       "filename":"trycss_sel_attribute_hyphen",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n[class|=top] {\n  background: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS [attribute|=\"value\"] Selector</h2>\n\n<h1 class=\"top-header\">Welcome</h1>\n<p class=\"top-text\">Hello world!</p>\n<p class=\"topcontent\">Are you learning CSS?</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_attribute_start",
       "title":"Selects all elements with a class attribute value that begins with \"top\" (must not be whole word)",
       "filename":"trycss_sel_attribute_start",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n[class^=\"top\"] {\n  background: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS [attribute^=\"value\"] Selector</h2>\n\n<h1 class=\"top-header\">Welcome</h1>\n<p class=\"top-text\">Hello world!</p>\n<p class=\"topcontent\">Are you learning CSS?</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_attribute_end",
       "title":"Selects all elements with a class attribute value that ends with \"test\"",
       "filename":"trycss_sel_attribute_end",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n[class$=\"test\"] {\n  background: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS [attribute$=\"value\"] Selector</h2>\n\n<div class=\"first_test\">The first div element.</div>\n<div class=\"second\">The second div element.</div>\n<div class=\"my-test\">The third div element.</div>\n<p class=\"mytest\">This is some text in a paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_sel_attribute_contain",
       "title":"Selects all elements with a class attribute value that contains \"te\"",
       "filename":"trycss_sel_attribute_contain",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n[class*=\"te\"] {\n  background: yellow;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS [attribute*=\"value\"] Selector</h2>\n\n<div class=\"first_test\">The first div element.</div>\n<div class=\"second\">The second div element.</div>\n<div class=\"my-test\">The third div element.</div>\n<p class=\"mytest\">This is some text in a paragraph.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_width",
       "title":"Full-width input field",
       "filename":"trycss_form_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput {\n  width: 100%;\n}\n</style>\n</head>\n<body>\n\n<h2>A full-width input field</h2>\n\n<form>\n  <label for=\"fname\">First Name</label>\n  <input type=\"text\" id=\"fname\" name=\"fname\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_padding",
       "title":"Padded input field",
       "filename":"trycss_form_padding",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n}\n</style>\n</head>\n<body>\n\n<h2>Padded input fields</h2>\n\n<form>\n  <label for=\"fname\">First Name</label>\n  <input type=\"text\" id=\"fname\" name=\"fname\">\n  <label for=\"lname\">Last Name</label>\n  <input type=\"text\" id=\"lname\" name=\"lname\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_border",
       "title":"Bordered input field",
       "filename":"trycss_form_border",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: 2px solid red;\n  border-radius: 4px;\n}\n</style>\n</head>\n<body>\n\n<h2>Input fields with borders</h2>\n\n<form>\n  <label for=\"fname\">First Name</label>\n  <input type=\"text\" id=\"fname\" name=\"fname\">\n  <label for=\"lname\">Last Name</label>\n  <input type=\"text\" id=\"lname\" name=\"lname\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_border2",
       "title":"Bottom bordered input field",
       "filename":"trycss_form_border2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 2px solid red;\n}\n</style>\n</head>\n<body>\n\n<h2>Input fields with bottom border</h2>\n\n<form>\n  <label for=\"fname\">First Name</label>\n  <input type=\"text\" id=\"fname\" name=\"fname\">\n  <label for=\"lname\">Last Name</label>\n  <input type=\"text\" id=\"lname\" name=\"lname\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_color",
       "title":"Colored input fields",
       "filename":"trycss_form_color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: none;\n  background-color: #3CBC8D;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<h2>Input fields with color</h2>\n\n<form>\n  <label for=\"fname\">First Name</label>\n  <input type=\"text\" id=\"fname\" name=\"fname\" value=\"John\">\n  <label for=\"lname\">Last Name</label>\n  <input type=\"text\" id=\"lname\" name=\"lname\" value=\"Doe\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_focus",
       "title":"Focused input fields",
       "filename":"trycss_form_focus",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: 1px solid #555;\n  outline: none;\n}\n\ninput[type=text]:focus {\n  background-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h2>Input fields with color on :focus</h2>\n\n<p>Here, the input field gets a color when it gets focus (clicked on):</p>\n\n<form>\n  <label for=\"fname\">First Name</label>\n  <input type=\"text\" id=\"fname\" name=\"fname\" value=\"John\">\n  <label for=\"lname\">Last Name</label>\n  <input type=\"text\" id=\"lname\" name=\"lname\" value=\"Doe\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_focus2",
       "title":"Focused input fields 2",
       "filename":"trycss_form_focus2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: 3px solid #ccc;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  outline: none;\n}\n\ninput[type=text]:focus {\n  border: 3px solid #555;\n}\n</style>\n</head>\n<body>\n\n<h2>Input fields with black border on :focus</h2>\n\n<p>Here, the input field gets a black border color when it gets focus (clicked on). We have also added the CSS transition property to animate the border color (takes 0.5 seconds to change the color on focus):</p>\n\n<form>\n  <label for=\"fname\">First Name</label>\n  <input type=\"text\" id=\"fname\" name=\"fname\" value=\"John\">\n  <label for=\"lname\">Last Name</label>\n  <input type=\"text\" id=\"lname\" name=\"lname\" value=\"Doe\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_icon",
       "title":"Input with icon/image",
       "filename":"trycss_form_icon",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  background-color: white;\n  background-image: url('searchicon.png');\n  background-position: 10px 10px; \n  background-repeat: no-repeat;\n  padding: 12px 20px 12px 40px;\n}\n</style>\n</head>\n<body>\n\n<h2>Input field with an icon inside</h2>\n\n<form>\n  <input type=\"text\" name=\"search\" placeholder=\"Search..\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_search_anim",
       "title":"Animated search input",
       "filename":"trycss_form_search_anim",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=text] {\n  width: 130px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  background-color: white;\n  background-image: url('searchicon.png');\n  background-position: 10px 10px; \n  background-repeat: no-repeat;\n  padding: 12px 20px 12px 40px;\n  transition: width 0.4s ease-in-out;\n}\n\ninput[type=text]:focus {\n  width: 100%;\n}\n</style>\n</head>\n<body>\n\n<h2>Animate width of search input</h2>\n\n<form>\n  <input type=\"text\" name=\"search\" placeholder=\"Search..\">\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_textarea",
       "title":"Styling textareas",
       "filename":"trycss_form_textarea",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ntextarea {\n  width: 100%;\n  height: 150px;\n  padding: 12px 20px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 16px;\n  resize: none;\n}\n</style>\n</head>\n<body>\n\n<h2>Styling textarea</h2>\n\n<p><strong>Tip:</strong> Use the resize property to prevent textareas from being resized (disable the \"grabber\" in the bottom right corner):</p>\n\n<form>\n  <textarea>Some text...</textarea>\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_select",
       "title":"Styling select menus",
       "filename":"trycss_form_select",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \nselect {\n  width: 100%;\n  padding: 16px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #f1f1f1;\n}\n</style>\n</head>\n<body>\n\n<h2>Styling a select menu</h2>\n\n<form>\n  <select id=\"country\" name=\"country\">\n  <option value=\"au\">Australia</option>\n  <option value=\"ca\">Canada</option>\n  <option value=\"usa\">USA</option>\n  </select>\n</form>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_button",
       "title":"Styling input buttons",
       "filename":"trycss_form_button",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #04AA6D;\n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n</style>\n</head>\n<body>\n\n<h2>Styling form buttons</h2>\n\n<input type=\"button\" value=\"Button\">\n<input type=\"reset\" value=\"Reset\">\n<input type=\"submit\" value=\"Submit\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_form_responsive",
       "title":"Responsive form",
       "filename":"trycss_form_responsive",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n* {\n  box-sizing: border-box;\n}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\nlabel {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n}\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .col-25, .col-75, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Responsive Form</h2>\n<p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>\n\n<div class=\"container\">\n  <form action=\"/action_page.php\">\n  <div class=\"row\">\n    <div class=\"col-25\">\n      <label for=\"fname\">First Name</label>\n    </div>\n    <div class=\"col-75\">\n      <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-25\">\n      <label for=\"lname\">Last Name</label>\n    </div>\n    <div class=\"col-75\">\n      <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-25\">\n      <label for=\"country\">Country</label>\n    </div>\n    <div class=\"col-75\">\n      <select id=\"country\" name=\"country\">\n        <option value=\"australia\">Australia</option>\n        <option value=\"canada\">Canada</option>\n        <option value=\"usa\">USA</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-25\">\n      <label for=\"subject\">Subject</label>\n    </div>\n    <div class=\"col-75\">\n      <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:200px\"></textarea>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <input type=\"submit\" value=\"Submit\">\n  </div>\n  </form>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_counters1",
       "title":"Create a counter",
       "filename":"trycss_counters1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  counter-reset: section;\n}\n\nh2::before {\n  counter-increment: section;\n  content: \"Section \" counter(section) \": \";\n}\n</style>\n</head>\n<body>\n\n<h1>Using CSS Counters</h1>\n\n<h2>HTML Tutorial</h2>\n<h2>CSS Tutorial</h2>\n<h2>JavaScript Tutorial</h2>\n<h2>Python Tutorial</h2>\n<h2>SQL Tutorial</h2>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_counters2",
       "title":"Nested counters 1",
       "filename":"trycss_counters2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  counter-reset: section;\n}\n\nh1 {\n  counter-reset: subsection;\n}\n\nh1::before {\n  counter-increment: section;\n  content: \"Section \" counter(section) \". \";\n}\n\nh2::before {\n  counter-increment: subsection;\n  content: counter(section) \".\" counter(subsection) \" \";\n}\n</style>\n</head>\n<body>\n\n\n<h1>HTML/CSS Tutorials</h1>\n<h2>HTML</h2>\n<h2>CSS</h2>\n<h2>Bootstrap</h2>\n<h2>W3.CSS</h2>\n\n<h1>Scripting Tutorials</h1>\n<h2>JavaScript</h2>\n<h2>jQuery</h2>\n<h2>React</h2>\n\n<h1>Programming Tutorials</h1>\n<h2>Python</h2>\n<h2>Java</h2>\n<h2>C++</h2>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_counters3",
       "title":"Nested counters 2",
       "filename":"trycss_counters3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nol {\n  counter-reset: section;\n  list-style-type: none;\n}\n\nli::before {\n  counter-increment: section;\n  content: counters(section,\".\") \" \";\n}\n</style>\n</head>\n<body>\n\n<ol>\n  <li>item</li>\n  <li>item   \n  <ol>\n    <li>item</li>\n    <li>item</li>\n    <li>item\n    <ol>\n      <li>item</li>\n      <li>item</li>\n      <li>item</li>\n    </ol>\n    </li>\n    <li>item</li>\n  </ol>\n  </li>\n  <li>item</li>\n  <li>item</li>\n</ol>\n\n<ol>\n  <li>item</li>\n  <li>item</li>\n</ol>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_website_layout_footer",
       "title":"Simple, responsive website layout",
       "filename":"trycss_website_layout_footer",
       "html":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<title>CSS Website Layout</title>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n/* Style the header */\n.header {\n  background-color: #f1f1f1;\n  padding: 20px;\n  text-align: center;\n}\n\n/* Style the top navigation bar */\n.topnav {\n  overflow: hidden;\n  background-color: #333;\n}\n\n/* Style the topnav links */\n.topnav a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* Change color on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n/* Create three unequal columns that floats next to each other */\n.column {\n  float: left;\n  padding: 10px;\n}\n\n/* Left and right column */\n.column.side {\n  width: 25%;\n}\n\n/* Middle column */\n.column.middle {\n  width: 50%;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column.side, .column.middle {\n    width: 100%;\n  }\n}\n\n/* Style the footer */\n.footer {\n  background-color: #f1f1f1;\n  padding: 10px;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<div class=\"header\">\n  <h1>Header</h1>\n  <p>Resize the browser window to see the responsive effect.</p>\n</div>\n\n<div class=\"topnav\">\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n</div>\n\n<div class=\"row\">\n  <div class=\"column side\">\n    <h2>Side</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>\n  </div>\n  \n  <div class=\"column middle\">\n    <h2>Main Content</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>\n  </div>\n  \n  <div class=\"column side\">\n    <h2>Side</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <p>Footer</p>\n</div>\n  \n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_website_layout_blog",
       "title":"A website example",
       "filename":"trycss_website_layout_blog",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial;\n  padding: 10px;\n  background: #f1f1f1;\n}\n\n/* Header/Blog Title */\n.header {\n  padding: 30px;\n  text-align: center;\n  background: white;\n}\n\n.header h1 {\n  font-size: 50px;\n}\n\n/* Style the top navigation bar */\n.topnav {\n  overflow: hidden;\n  background-color: #333;\n}\n\n/* Style the topnav links */\n.topnav a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* Change color on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n/* Create two unequal columns that floats next to each other */\n/* Left column */\n.leftcolumn {   \n  float: left;\n  width: 75%;\n}\n\n/* Right column */\n.rightcolumn {\n  float: left;\n  width: 25%;\n  background-color: #f1f1f1;\n  padding-left: 20px;\n}\n\n/* Fake image */\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n/* Add a card effect for articles */\n.card {\n  background-color: white;\n  padding: 20px;\n  margin-top: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n  margin-top: 20px;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 800px) {\n  .leftcolumn, .rightcolumn {   \n    width: 100%;\n    padding: 0;\n  }\n}\n\n/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */\n@media screen and (max-width: 400px) {\n  .topnav a {\n    float: none;\n    width: 100%;\n  }\n}\n</style>\n</head>\n<body>\n\n<div class=\"header\">\n  <h1>My Website</h1>\n  <p>Resize the browser window to see the effect.</p>\n</div>\n\n<div class=\"topnav\">\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\" style=\"float:right\">Link</a>\n</div>\n\n<div class=\"row\">\n  <div class=\"leftcolumn\">\n    <div class=\"card\">\n      <h2>TITLE HEADING</h2>\n      <h5>Title description, Dec 7, 2017</h5>\n      <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n      <p>Some text..</p>\n      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n    </div>\n    <div class=\"card\">\n      <h2>TITLE HEADING</h2>\n      <h5>Title description, Sep 2, 2017</h5>\n      <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n      <p>Some text..</p>\n      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n    </div>\n  </div>\n  <div class=\"rightcolumn\">\n    <div class=\"card\">\n      <h2>About Me</h2>\n      <div class=\"fakeimg\" style=\"height:100px;\">Image</div>\n      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>\n    </div>\n    <div class=\"card\">\n      <h3>Popular Post</h3>\n      <div class=\"fakeimg\"><p>Image</p></div>\n      <div class=\"fakeimg\"><p>Image</p></div>\n      <div class=\"fakeimg\"><p>Image</p></div>\n    </div>\n    <div class=\"card\">\n      <h3>Follow Me</h3>\n      <p>Some text..</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <h2>Footer</h2>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_border-radius",
       "title":"Add rounded corners to elements",
       "filename":"trycss3_border-radius",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n#rcorners1 {\n  border-radius: 25px;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px;  \n}\n\n#rcorners2 {\n  border-radius: 25px;\n  border: 2px solid #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px;  \n}\n\n#rcorners3 {\n  border-radius: 25px;\n  background: url(paper.gif);\n  background-position: left top;\n  background-repeat: repeat;\n  padding: 20px; \n  width: 200px;\n  height: 150px;  \n}\n</style>\n</head>\n<body>\n\n<h1>The border-radius Property</h1>\n\n<p>Rounded corners for an element with a specified background color:</p>\n<p id=\"rcorners1\">Rounded corners!</p>\n<p>Rounded corners for an element with a border:</p>\n<p id=\"rcorners2\">Rounded corners!</p>\n<p>Rounded corners for an element with a background image:</p>\n<p id=\"rcorners3\">Rounded corners!</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_border-radius2",
       "title":"Round each corner separately",
       "filename":"trycss3_border-radius2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n#rcorners1 {\n  border-radius: 15px 50px 30px 5px;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px; \n}\n\n#rcorners2 {\n  border-radius: 15px 50px 30px;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px; \n}\n\n#rcorners3 {\n  border-radius: 15px 50px;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px; \n} \n\n#rcorners4 {\n  border-radius: 15px;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px; \n} \n</style>\n</head>\n<body>\n\n<h1>The border-radius Property</h1>\n\n<p>Four values - border-radius: 15px 50px 30px 5px:</p>\n<p id=\"rcorners1\"></p>\n\n<p>Three values - border-radius: 15px 50px 30px:</p>\n<p id=\"rcorners2\"></p>\n\n<p>Two values - border-radius: 15px 50px:</p>\n<p id=\"rcorners3\"></p>\n\n<p>One value - border-radius: 15px:</p>\n<p id=\"rcorners4\"></p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_border-radius3",
       "title":"Create elliptical corners",
       "filename":"trycss3_border-radius3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n#rcorners1 {\n  border-radius: 50px / 15px;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px; \n}\n\n#rcorners2 {\n  border-radius: 15px / 50px;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px; \n}\n\n#rcorners3 {\n  border-radius: 50%;\n  background: #73AD21;\n  padding: 20px; \n  width: 200px;\n  height: 150px;\n} \n</style>\n</head>\n<body>\n\n<h1>The border-radius Property</h1>\n\n<p>Elliptical border - border-radius: 50px / 15px:</p>\n<p id=\"rcorners1\"></p>\n\n<p>Elliptical border - border-radius: 15px / 50px:</p>\n<p id=\"rcorners2\"></p>\n\n<p>Ellipse border - border-radius: 50%:</p>\n<p id=\"rcorners3\"></p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_border-image",
       "title":"Create an image border around an element, using the round keyword",
       "filename":"trycss3_border-image",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n#borderimg { \n  border: 10px solid transparent;\n  padding: 15px;\n  border-image: url(border.png) 30 round;\n}\n</style>\n</head>\n<body>\n\n<h1>The border-image Property</h1>\n\n<p>Here, the middle sections of the image are repeated to create the border:</p>\n<p id=\"borderimg\">border-image: url(border.png) 30 round;</p>\n\n<p>Here is the original image:</p><img src=\"border.png\">\n<p><strong>Note:</strong> Internet Explorer 10, and earlier versions, do not support the border-image property.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_border-image2",
       "title":"Create an image border around an element, using the stretch keyword",
       "filename":"trycss3_border-image2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n#borderimg { \n  border: 10px solid transparent;\n  padding: 15px;\n  border-image: url(border.png) 30 stretch;\n}\n</style>\n</head>\n<body>\n\n<h1>The border-image Property</h1>\n\n<p>Here, the middle sections of the image are stretched to create the border:</p>\n<p id=\"borderimg\">border-image: url(border.png) 30 stretch;</p>\n\n<p>Here is the original image:</p><img src=\"border.png\">\n<p><strong>Note:</strong> Internet Explorer 10, and earlier versions, do not support the border-image property.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_border-image3",
       "title":"Image border - Different slice values",
       "filename":"trycss3_border-image3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#borderimg1 {\n  border: 10px solid transparent;\n  padding: 15px;\n  border-image: url(border.png) 50 round;\n}\n\n#borderimg2 {\n  border: 10px solid transparent;\n  padding: 15px;\n  border-image: url(border.png) 20% round;\n}\n\n#borderimg3 {\n  border: 10px solid transparent;\n  padding: 15px;\n  border-image: url(border.png) 30% round;\n}\n</style>\n</head>\n<body>\n\n<h1>The border-image Property</h1>\n\n<p id=\"borderimg1\">border-image: url(border.png) 50 round;</p>\n<p id=\"borderimg2\">border-image: url(border.png) 20% round;</p>\n<p id=\"borderimg3\">border-image: url(border.png) 30% round;</p>\n\n<p><strong>Note:</strong> Internet Explorer 10, and earlier versions, do not support the border-image property.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_background_multiple",
       "title":"Add multiple background images for an element",
       "filename":"trycss3_background_multiple",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n#example1 {\n  background-image: url(img_flwr.gif), url(paper.gif);\n  background-position: right bottom, left top;\n  background-repeat: no-repeat, repeat;\n  padding: 15px;\n}\n</style>\n</head>\n<body>\n\n<h1>Multiple Backgrounds</h1>\n<p>The following div element has two background images:</p>\n\n<div id=\"example1\">\n  <h1>Lorem Ipsum Dolor</h1>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_background-size",
       "title":"Specify the size of a background image",
       "filename":"trycss3_background-size",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#example1 {\n  border: 1px solid black;\n  background: url(img_flwr.gif);\n  background-size: 100px 80px;\n  background-repeat: no-repeat;\n  padding: 15px;\n}\n\n#example2 {\n  border: 1px solid black;\n  background: url(img_flwr.gif);\n  background-repeat: no-repeat;\n  padding: 15px;\n}\n</style>\n</head>\n<body>\n\n<h1>The background-size Property</h1>\n\n<p>Resized background-image:</p>\n<div id=\"example1\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n</div>\n\n<p>Original size of the background-image:</p>\n<div id=\"example2\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_background-size_contain",
       "title":"Scale a background image using \"contain\" and \"cover\"",
       "filename":"trycss3_background-size_contain",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.div1 {\n  border: 1px solid black;\n  height: 120px;\n  width: 150px;\n  background: url(img_flwr.gif);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.div2 {\n  border: 1px solid black;\n  height: 120px;\n  width: 150px;\n  background: url(img_flwr.gif);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.div3 {\n  border: 1px solid black;\n  height: 120px;\n  width: 150px;\n  background: url(img_flwr.gif);\n  background-repeat: no-repeat;\n}\n</style>\n</head>\n<body>\n\n<h1>The background-size Property</h1>\n\n<h2>background-size: contain:</h2>\n<div class=\"div1\">\n<p>Lorem ipsum dolor sit amet.</p>\n</div>\n\n<h2>background-size: cover:</h2>\n<div class=\"div2\">\n<p>Lorem ipsum dolor sit amet.</p>\n</div>\n\n<h2>No background-size defined:</h2>\n<div class=\"div3\">\n<p>Lorem ipsum dolor sit amet.</p>\n</div>\n\n<p>Original image:</p>\n<img src=\"img_flwr.gif\" alt=\"Flowers\" width=\"224\" height=\"162\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_background_multiple3",
       "title":"Define sizes of multiple background images",
       "filename":"trycss3_background_multiple3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n#example1 {\n  background: url(img_tree.gif) left top no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;\n  padding: 15px;\n  background-size: 50px, 130px, auto;\n}\n</style>\n</head>\n<body>\n\n<div id=\"example1\">\n  <h1>Lorem Ipsum Dolor</h1>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_background_full",
       "title":"Full-size background image (completely fill the content area)",
       "filename":"trycss3_background_full",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \nhtml { \n  background: url(img_man.jpg) no-repeat center fixed; \n  background-size: cover;\n}\n\nbody { \n  color: white; \n}\n</style>\n</head>\n<body>\n\n<h1>Full Page Background Image</h1>\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_background-origin",
       "title":"Use background-origin to specify where the background image is positioned",
       "filename":"trycss3_background-origin",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#example1 {\n  border: 10px solid black;\n  padding: 35px;\n  background: url(img_flwr.gif);\n  background-repeat: no-repeat;\n}\n\n#example2 {\n  border: 10px solid black;\n  padding: 35px;\n  background: url(img_flwr.gif);\n  background-repeat: no-repeat;\n  background-origin: border-box;\n}\n\n#example3 {\n  border: 10px solid black;\n  padding: 35px;\n  background: url(img_flwr.gif);\n  background-repeat: no-repeat;\n  background-origin: content-box;\n}\n</style>\n</head>\n<body>\n\n<h1>The background-origin Property</h1>\n\n<p>No background-origin (padding-box is default):</p>\n<div id=\"example1\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n</div>\n\n<p>background-origin: border-box:</p>\n<div id=\"example2\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n</div>\n\n<p>background-origin: content-box:</p>\n<div id=\"example3\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_background-clip",
       "title":"Use background-clip to specify the painting area of the background",
       "filename":"trycss3_background-clip",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#example1 {\n  border: 10px dotted black;\n  padding: 35px;\n  background: yellow;\n}\n\n#example2 {\n  border: 10px dotted black;\n  padding: 35px;\n  background: yellow;\n  background-clip: padding-box;\n}\n\n#example3 {\n  border: 10px dotted black;\n  padding: 35px;\n  background: yellow;\n  background-clip: content-box;\n}\n</style>\n</head>\n<body>\n\n<h1>The background-clip Property</h1>\n\n<p>No background-clip (border-box is default):</p>\n<div id=\"example1\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n</div>\n\n<p>background-clip: padding-box:</p>\n<div id=\"example2\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n</div>\n\n<p>background-clip: content-box:</p>\n<div id=\"example3\">\n  <h2>Lorem Ipsum Dolor</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear",
       "title":"Linear Gradient - top to bottom",
       "filename":"trycss3_gradient-linear",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(red, yellow);\n}\n</style>\n</head>\n<body>\n\n<h1>Linear Gradient - Top to Bottom</h1>\n<p>This linear gradient starts red at the top, transitioning to yellow at the bottom:</p>\n\n<div id=\"grad1\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear_ltr",
       "title":"Linear Gradient - left to right",
       "filename":"trycss3_gradient-linear_ltr",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(to right, red , yellow);\n}\n</style>\n</head>\n<body>\n\n<h1>Linear Gradient - Left to Right</h1>\n<p>This linear gradient starts red at the left, transitioning to yellow (to the right):</p>\n\n<div id=\"grad1\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear_diagonal",
       "title":"Linear Gradient - diagonal",
       "filename":"trycss3_gradient-linear_diagonal",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(to bottom right, red, yellow);\n}\n</style>\n</head>\n<body>\n\n<h1>Linear Gradient - Diagonal</h1>\n<p>This linear gradient starts red at top left, transitioning to yellow (at bottom right):</p>\n\n<div id=\"grad1\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear_angles",
       "title":"Linear Gradient - with a specified angle",
       "filename":"trycss3_gradient-linear_angles",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 100px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(0deg, red, yellow);\n}\n\n#grad2 {\n  height: 100px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(90deg, red, yellow);\n}\n\n#grad3 {\n  height: 100px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(180deg, red, yellow);\n}\n\n#grad4 {\n  height: 100px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(-90deg, red, yellow);\n}\n</style>\n</head>\n<body>\n\n<h1>Linear Gradients - Using Different Angles</h1>\n\n<div id=\"grad1\" style=\"text-align:center;\">0deg</div><br>\n<div id=\"grad2\" style=\"text-align:center;\">90deg</div><br>\n<div id=\"grad3\" style=\"text-align:center;\">180deg</div><br>\n<div id=\"grad4\" style=\"text-align:center;\">-90deg</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear_cs",
       "title":"Linear Gradient - with multiple color stops",
       "filename":"trycss3_gradient-linear_cs",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(red, yellow, green);\n}\n\n#grad2 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(red, orange, yellow, green, blue, indigo, violet);\n}\n\n#grad3 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(red 10%, green 85%, blue 90%);\n}\n</style>\n</head>\n<body>\n\n<h1>Linear Gradients - Multiple Color Stops</h1>\n<p><strong>Note:</strong> Color stops are spaced evenly when no percents are specified.</p>\n\n<h2>3 Color Stops (evenly spaced):</h2>\n<div id=\"grad1\"></div>\n\n<h2>7 Color Stops (evenly spaced):</h2>\n<div id=\"grad2\"></div>\n\n<h2>3 Color Stops (not evenly spaced):</h2>\n<div id=\"grad3\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear_rainbow",
       "title":"Linear Gradient - color of a rainbow + text",
       "filename":"trycss3_gradient-linear_rainbow",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 55px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);\n}\n</style>\n</head>\n<body>\n\n<div id=\"grad1\" style=\"text-align:center;margin:auto;color:#888888;font-size:40px;font-weight:bold\">\nRainbow Background\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear_trans",
       "title":"Linear Gradient - with transparency",
       "filename":"trycss3_gradient-linear_trans",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 200px;\n  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));\n}\n</style>\n</head>\n<body>\n\n<h1>Linear Gradient - Transparency</h1>\n<p>To add transparency, we use the rgba() function to define the color stops. The last parameter in the rgba() function can be a value from 0 to 1, and it defines the transparency of the color: 0 indicates full transparency, 1 indicates full color (no transparency).</p>\n\n<div id=\"grad1\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-linear_repeating",
       "title":"Linear Gradient - a repeating linear gradient",
       "filename":"trycss3_gradient-linear_repeating",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);\n}\n\n#grad2 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: repeating-linear-gradient(45deg,red,yellow 7%,green 10%);\n}\n\n#grad3 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: repeating-linear-gradient(190deg,red,yellow 7%,green 10%);\n}\n\n#grad4 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: repeating-linear-gradient(90deg,red,yellow 7%,green 10%);\n}\n\n#grad5 {\n  height: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: repeating-linear-gradient(45deg, red 0px, red 10px, red 10px, yellow 10px, yellow 20px);\n}\n</style>\n</head>\n<body>\n\n<h1>Repeating Linear Gradient</h1>\n\n<div id=\"grad1\"></div>\n\n<p>A repeating gradient on 45deg axe starting red and finishing green:</p>\n<div id=\"grad2\"></div>\n\n<p>A repeating gradient on 190deg axe starting red and finishing green:</p>\n<div id=\"grad3\"></div>\n\n<p>A repeating gradient on 90deg axe starting red and finishing green:</p>\n<div id=\"grad4\"></div>\n\n<p>A repeating linear gradient with solid stripes:</p>\n<div id=\"grad5\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-radial",
       "title":"Radial Gradient - evenly spaced color stops",
       "filename":"trycss3_gradient-radial",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 150px;\n  width: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(red, yellow, green);\n}\n</style>\n</head>\n<body>\n\n<h1>Radial Gradient - Evenly Spaced Color Stops</h1>\n\n<div id=\"grad1\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-radial2",
       "title":"Radial Gradient - differently spaced color stops",
       "filename":"trycss3_gradient-radial2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 150px;\n  width: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(red 5%, yellow 15%, green 60%);\n}\n</style>\n</head>\n<body>\n\n<h1>Radial Gradient - Differently Spaced Color Stops</h1>\n\n<div id=\"grad1\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-radial_shape",
       "title":"Radial Gradient - set shape",
       "filename":"trycss3_gradient-radial_shape",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 150px;\n  width: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(red, yellow, green);\n}\n\n#grad2 {\n  height: 150px;\n  width: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(circle, red, yellow, green);\n}\n</style>\n</head>\n<body>\n\n<h1>Radial Gradient - Shapes</h1>\n\n<h2>Ellipse (this is default):</h2>\n<div id=\"grad1\"></div>\n\n<h2><strong>Circle:</strong></h2>\n<div id=\"grad2\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-radial_size",
       "title":"Radial Gradient - different size keywords",
       "filename":"trycss3_gradient-radial_size",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 150px;\n  width: 150px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);\n}\n\n#grad2 {\n  height: 150px;\n  width: 150px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);\n}\n\n#grad3 {\n  height: 150px;\n  width: 150px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(closest-corner at 60% 55%, red, yellow, black);\n}\n\n#grad4 {\n  height: 150px;\n  width: 150px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: radial-gradient(farthest-corner at 60% 55%, red, yellow, black);\n}\n</style>\n</head>\n<body>\n\n<h1>Radial Gradients - Different size keywords</h1>\n\n<h2>closest-side:</h2>\n<div id=\"grad1\"></div>\n\n<h2>farthest-side:</h2>\n<div id=\"grad2\"></div>\n\n<h2>closest-corner:</h2>\n<div id=\"grad3\"></div>\n\n<h2>farthest-corner (default):</h2>\n<div id=\"grad4\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_gradient-radial_repeating",
       "title":"Radial Gradient - a repeating radial gradient",
       "filename":"trycss3_gradient-radial_repeating",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#grad1 {\n  height: 150px;\n  width: 200px;\n  background-color: red; /* For browsers that do not support gradients */\n  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);\n}\n</style>\n</head>\n<body>\n\n<h1>Repeating Radial Gradient</h1>\n\n<div id=\"grad1\"></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-shadow1",
       "title":"Simple shadow effect",
       "filename":"trycss3_text-shadow1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-shadow: 2px 2px;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow effect!</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-shadow2",
       "title":"Add a color to the shadow",
       "filename":"trycss3_text-shadow2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-shadow: 2px 2px red;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow effect!</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-shadow3",
       "title":"Add a blur effect to the shadow",
       "filename":"trycss3_text-shadow3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-shadow: 2px 2px 5px red;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow effect!</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-shadow4",
       "title":"White text with black shadow",
       "filename":"trycss3_text-shadow4",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  color: white;\n  text-shadow: 2px 2px 4px #000000;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow effect!</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-shadow5",
       "title":"A red neon glow shadow",
       "filename":"trycss3_text-shadow5",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-shadow: 0 0 3px #FF0000;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow with red neon glow!</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-shadow6",
       "title":"A red and blue neon glow shadow",
       "filename":"trycss3_text-shadow6",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow with red and blue neon glow!</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-shadow7",
       "title":"White text with black, blue, and darkblue shadow",
       "filename":"trycss3_text-shadow7",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 {\n  color: white;\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\n</style>\n</head>\n<body>\n\n<h1>Text-shadow effect!</h1>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-shadow",
       "title":"Add a simple box-shadow to an element",
       "filename":"trycss3_box-shadow",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 300px;\n  height: 100px;\n  padding: 15px;\n  background-color: coral;\n  box-shadow: 10px 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>The box-shadow Property</h1>\n\n<div>This is a div element with a box-shadow</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-shadow2",
       "title":"Add color to box-shadow",
       "filename":"trycss3_box-shadow2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 300px;\n  height: 100px;\n  padding: 15px;\n  background-color: coral;\n  box-shadow: 10px 10px lightblue;\n}\n</style>\n</head>\n<body>\n\n<h1>The box-shadow Property</h1>\n\n<div>A div element with a lightblue box-shadow</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-shadow3",
       "title":"Add color and blur effect to box-shadow",
       "filename":"trycss3_box-shadow3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 300px;\n  height: 100px;\n  padding: 15px;\n  background-color: coral;\n  box-shadow: 10px 10px 5px lightblue;\n}\n</style>\n</head>\n<body>\n\n<h1>The box-shadow Property</h1>\n\n<div>A div element with a 5px blurred, lightblue box-shadow.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-shadow4",
       "title":"Create paper-like cards (text)",
       "filename":"trycss3_box-shadow4",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.card {\n  width: 250px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\ndiv.header {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px;\n  font-size: 40px;\n}\n\ndiv.container {\n  padding: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Create Cards</h1>\n\n<p>The box-shadow property can be used to create paper-like cards:</p>\n\n<div class=\"card\">\n  <div class=\"header\">\n    <h1>1</h1>\n  </div>\n\n  <div class=\"container\">\n    <p>January 1, 2021</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-shadow5",
       "title":"Create paper-like cards (polaroid images)",
       "filename":"trycss3_box-shadow5",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv.polaroid {\n  width: 250px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\ndiv.container {\n  padding: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Create Polaroid Images</h1>\n\n<p>The box-shadow property can be used to create polaroid images:</p>\n\n<div class=\"polaroid\">\n  <img src=\"rock600x400.jpg\" alt=\"Norway\" style=\"width:100%\">\n  <div class=\"container\">\n    <p>Hardanger, Norway</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-overflow",
       "title":"Specify how hidden, overflowed content should be signaled to the user",
       "filename":"trycss3_text-overflow",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \np.test1 {\n  white-space: nowrap; \n  width: 200px; \n  border: 1px solid #000000;\n  overflow: hidden;\n  text-overflow: clip;\n}\n\np.test2 {\n  white-space: nowrap; \n  width: 200px; \n  border: 1px solid #000000;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n</style>\n</head>\n<body>\n\n<h1>The text-overflow Property</h1>\n<p>The following two paragraphs contains a long text that will not fit in the box.</p>\n\n<h2>text-overflow: clip:</h2>\n<p class=\"test1\">This is some long text that will not fit in the box</p>\n\n<h2>text-overflow: ellipsis:</h2>\n<p class=\"test2\">This is some long text that will not fit in the box</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_text-overflow_hover",
       "title":"How to display the overflowed content when hover over the element",
       "filename":"trycss3_text-overflow_hover",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv.test {\n  white-space: nowrap; \n  width: 200px; \n  overflow: hidden; \n  border: 1px solid #000000;\n}\n\ndiv.test:hover {\n  overflow: visible;\n}\n</style>\n</head>\n<body>\n\n<p>Hover over the two divs below, to see the entire text.</p>\n<div class=\"test\" style=\"text-overflow:ellipsis;\">This is some long text that will not fit in the box</div>\n<br>\n<div class=\"test\" style=\"text-overflow:clip;\">This is some long text that will not fit in the box</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_word-wrap",
       "title":"Allow long words to be able to be broken and wrap onto the next line",
       "filename":"trycss3_word-wrap",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \np.test {\n  width: 11em; \n  border: 1px solid #000000;\n  word-wrap: break-word;\n}\n</style>\n</head>\n<body>\n\n<h1>The word-wrap Property</h1>\n\n<p class=\"test\">This paragraph contains a very long word: thisisaveryveryveryveryveryverylongword. The long word will break and wrap to the next line.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_word-break",
       "title":"Specify line breaking rules",
       "filename":"trycss3_word-break",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \np.test1 {\n  width: 140px; \n  border: 1px solid #000000;\n  word-break: keep-all;\n}\n\np.test2 {\n  width: 140px; \n  border: 1px solid #000000;\n  word-break: break-all;\n}\n</style>\n</head>\n<body>\n\n<h1>The word-break Property</h1>\n\n<p class=\"test1\">This paragraph contains some text. This line will-break-at-hyphens.</p>\n\n<p class=\"test2\">This paragraph contains some text. The lines will break at any character.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_font-face_rule",
       "title":"Use your \"own\" fonts in @font-face rule",
       "filename":"trycss3_font-face_rule",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n@font-face {\n   font-family: myFirstFont;\n   src: url(sansation_light.woff);\n}\n\n* {\n   font-family: myFirstFont;\n}\n</style>\n</head>\n<body>\n\n<h1>The @font-face Rule</h1>\n\n<div>\nWith CSS, websites can use fonts other than the pre-selected \"web-safe\" fonts.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_font-face_rule_bold",
       "title":"Use your \"own\" fonts in @font-face rule (bold)",
       "filename":"trycss3_font-face_rule_bold",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n@font-face {\n   font-family: myFirstFont;\n   src: url(sansation_light.woff);\n}\n\n@font-face {\n   font-family: myFirstFont;\n   src: url(sansation_bold.woff);\n   font-weight: bold;\n}\n\n* {\n   font-family: myFirstFont;\n}\n</style>\n</head>\n<body>\n\n<h1>The @font-face Rule</h1>\n\n<div>\nWith CSS, websites can use <b>fonts other than the pre-selected \"web-safe\" fonts</b>.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_translate",
       "title":"translate() - move an element from its current position",
       "filename":"trycss3_transform_translate",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n  transform: translate(50px,100px);\n}\n</style>\n</head>\n<body>\n\n<h1>The translate() Method</h1>\n<p>The translate() method moves an element from its current position:</p>\n\n<div>\nThis div element is moved 50 pixels to the right, and 100 pixels down from its current position.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_rotate",
       "title":"rotate() - rotate an element clockwise",
       "filename":"trycss3_transform_rotate",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\ndiv#myDiv {\n  transform: rotate(20deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The rotate() Method</h1>\n\n<p>The rotate() method rotates an element clockwise or counter-clockwise.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is rotated clockwise 20 degrees.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_rotate2",
       "title":"rotate() - rotate an element counter-clockwise",
       "filename":"trycss3_transform_rotate2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\ndiv#myDiv {\n  transform: rotate(-20deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The rotate() Method</h1>\n\n<p>The rotate() method rotates an element clockwise or counter-clockwise.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is rotated counter-clockwise with 20 degrees.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_scale",
       "title":"scale() - increase an element",
       "filename":"trycss3_transform_scale",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  margin: 150px;\n  width: 200px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n  transform: scale(2,3);\n}\n</style>\n</head>\n<body>\n\n<h1>The scale() Method</h1>\n\n<p>The scale() method increases or decreases the size of an element.</p>\n\n<div>\nThis div element is two times of its original width, and three times of its original height.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_scale2",
       "title":"scale() - decrease an element",
       "filename":"trycss3_transform_scale2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  margin: 150px;\n  width: 200px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n  transform: scale(0.5,0.5);\n}\n</style>\n</head>\n<body>\n\n<h1>The scale() Method</h1>\n\n<p>The scale() method increases or decreases the size of an element.</p>\n\n<div>\nThis div element is decreased to be half of its original width and height.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_skewx",
       "title":"skewX() - skews an element along the X-axis",
       "filename":"trycss3_transform_skewx",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\ndiv#myDiv {\n  transform: skewX(20deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The skewX() Method</h1>\n\n<p>The skewX() method skews an element along the X-axis by the given angle.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is skewed 20 degrees along the X-axis.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_skewy",
       "title":"skewY() - skews an element along the Y-axis",
       "filename":"trycss3_transform_skewy",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\ndiv#myDiv {\n  transform: skewY(20deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The skewY() Method</h1>\n\n<p>The skewY() method skews an element along the Y-axis by the given angle.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is skewed 20 degrees along the Y-axis.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_skew",
       "title":"skew() - skews an element along the X and Y-axis",
       "filename":"trycss3_transform_skew",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\ndiv#myDiv {\n  transform: skew(20deg,10deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The skew() Method</h1>\n<p>The skew() method skews an element into a given angle.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is skewed 20 degrees along the X-axis, and 10 degrees along the Y-axis.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_matrix1",
       "title":"matrix() - rotate, scale, move, and skew an element",
       "filename":"trycss3_transform_matrix1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\ndiv#myDiv1 {\n  transform: matrix(1, -0.3, 0, 1, 0, 0);\n}\n\ndiv#myDiv2 {\n  transform: matrix(1, 0, 0.5, 1, 150, 0);\n}\n</style>\n</head>\n<body>\n\n<h1>The matrix() Method</h1>\n\n<p>The matrix() method combines all the 2D transform methods into one.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv1\">\nUsing the matrix() method.\n</div>\n\n<div id=\"myDiv2\">\nAnother use of the matrix() method.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_rotatex",
       "title":"rotateX() - rotate an element around its X-axis at a given degree",
       "filename":"trycss3_transform_rotatex",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\n#myDiv {\n  transform: rotateX(150deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The rotateX() Method</h1>\n\n<p>The rotateX() method rotates an element around its X-axis at a given degree.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is rotated 150 degrees.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_rotatey",
       "title":"rotateY() - rotate an element around its Y-axis at a given degree",
       "filename":"trycss3_transform_rotatey",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\n#myDiv {\n  transform: rotateY(150deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The rotateY() Method</h1>\n\n<p>The rotateY() method rotates an element around its Y-axis at a given degree.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is rotated 150 degrees.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transform_rotatez",
       "title":"rotateZ() - rotate an element around its Z-axis at a given degree",
       "filename":"trycss3_transform_rotatez",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 300px;\n  height: 100px;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\n#myDiv {\n  transform: rotateZ(90deg);\n}\n</style>\n</head>\n<body>\n\n<h1>The rotateZ() Method</h1>\n\n<p>The rotateZ() method rotates an element around its Z-axis at a given degree.</p>\n\n<div>\nThis a normal div element.\n</div>\n\n<div id=\"myDiv\">\nThis div element is rotated 90 degrees.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transition1",
       "title":"Transition - change width of an element",
       "filename":"trycss3_transition1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background: red;\n  transition: width 2s;\n}\n\ndiv:hover {\n  width: 300px;\n}\n</style>\n</head>\n<body>\n\n<h1>The transition Property</h1>\n\n<p>Hover over the div element below, to see the transition effect:</p>\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transition2",
       "title":"Transition - change width and height of an element",
       "filename":"trycss3_transition2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background: red;\n  transition: width 2s, height 4s;\n}\n\ndiv:hover {\n  width: 300px;\n  height: 300px;\n}\n</style>\n</head>\n<body>\n\n<h1>The transition Property</h1>\n\n<p>Hover over the div element below, to see the transition effect:</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transition_speed",
       "title":"Specify different speed curves for a transition",
       "filename":"trycss3_transition_speed",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background: red;\n  transition: width 2s;\n}\n\n#div1 {transition-timing-function: linear;}\n#div2 {transition-timing-function: ease;}\n#div3 {transition-timing-function: ease-in;}\n#div4 {transition-timing-function: ease-out;}\n#div5 {transition-timing-function: ease-in-out;}\n\ndiv:hover {\n  width: 300px;\n}\n</style>\n</head>\n<body>\n\n<h1>The transition-timing-function Property</h1>\n\n<p>Hover over the div elements below, to see the different speed curves:</p>\n\n<div id=\"div1\">linear</div><br>\n<div id=\"div2\">ease</div><br>\n<div id=\"div3\">ease-in</div><br>\n<div id=\"div4\">ease-out</div><br>\n<div id=\"div5\">ease-in-out</div><br>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transition_delay",
       "title":"Specify a delay for a transition effect",
       "filename":"trycss3_transition_delay",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background: red;\n  transition: width 3s;\n  transition-delay: 1s;\n}\n\ndiv:hover {\n  width: 300px;\n}\n</style>\n</head>\n<body>\n\n<h1>The transition-delay Property</h1>\n\n<p>Hover over the div element below, to see the transition effect:</p>\n\n<div></div>\n\n<p><b>Note:</b> The transition effect has a 1 second delay before starting.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transition_transform",
       "title":"Add a transformation to a transition effect",
       "filename":"trycss3_transition_transform",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background: red;\n  transition: width 2s, height 2s, transform 2s;\n}\n\ndiv:hover {\n  width: 300px;\n  height: 300px;\n  transform: rotate(180deg);\n}\n</style>\n</head>\n<body>\n\n<h1>Transition + Transform</h1>\n\n<p>Hover over the div element below:</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_transition5",
       "title":"Specify all transition properties in one shorthand property",
       "filename":"trycss3_transition5",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background: red;\n  transition: width 2s linear 1s;\n}\n\ndiv:hover {\n  width: 300px;\n}\n</style>\n</head>\n<body>\n\n<h1>Using The transition Shorthand Property</h1>\n\n<p>Hover over the div element below, to see the transition effect:</p>\n\n<div></div>\n\n<p><b>Note:</b> The transition effect has a 1 second delay before starting.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation1",
       "title":"Bind an animation to an element",
       "filename":"trycss3_animation1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  animation-name: example;\n  animation-duration: 4s;\n}\n\n@keyframes example {\n  from {background-color: red;}\n  to {background-color: yellow;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<div></div>\n\n<p><b>Note:</b> When an animation is finished, it goes back to its original style.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation2",
       "title":"Animation - change background-color of an element",
       "filename":"trycss3_animation2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  animation-name: example;\n  animation-duration: 4s;\n}\n\n@keyframes example {\n  0%   {background-color: red;}\n  25%  {background-color: yellow;}\n  50%  {background-color: blue;}\n  100% {background-color: green;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<div></div>\n\n<p><b>Note:</b> When an animation is finished, it goes back to its original style.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation3",
       "title":"Animation - change background-color and position of an element",
       "filename":"trycss3_animation3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  position: relative;\n  animation-name: example;\n  animation-duration: 4s;\n}\n\n@keyframes example {\n  0%   {background-color:red; left:0px; top:0px;}\n  25%  {background-color:yellow; left:200px; top:0px;}\n  50%  {background-color:blue; left:200px; top:200px;}\n  75%  {background-color:green; left:0px; top:200px;}\n  100% {background-color:red; left:0px; top:0px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<div></div>\n\n<p><b>Note:</b> When an animation is finished, it goes back to its original style.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation_delay",
       "title":"Delay an animation",
       "filename":"trycss3_animation_delay",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  position: relative;\n  animation-name: example;\n  animation-duration: 4s;\n  animation-delay: 2s;\n}\n\n@keyframes example {\n  0%   {background-color:red; left:0px; top:0px;}\n  25%  {background-color:yellow; left:200px; top:0px;}\n  50%  {background-color:blue; left:200px; top:200px;}\n  75%  {background-color:green; left:0px; top:200px;}\n  100% {background-color:red; left:0px; top:0px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<p>The animation-delay property specifies a delay for the start of an animation. The following example has a 2 seconds delay before starting the animation:</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation_count",
       "title":"Run animation 3 times before it stops",
       "filename":"trycss3_animation_count",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  position: relative;\n  animation-name: example;\n  animation-duration: 4s;\n  animation-iteration-count: 3;\n}\n\n@keyframes example {\n  0%   {background-color:red; left:0px; top:0px;}\n  25%  {background-color:yellow; left:200px; top:0px;}\n  50%  {background-color:blue; left:200px; top:200px;}\n  75%  {background-color:green; left:0px; top:200px;}\n  100% {background-color:red; left:0px; top:0px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<p>The animation-iteration-count property specifies the number of times an animation should run. The following example will run the animation 3 times before it stops:</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation_count2",
       "title":"Run animation for ever",
       "filename":"trycss3_animation_count2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  position: relative;\n  animation-name: example;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes example {\n  0%   {background-color:red; left:0px; top:0px;}\n  25%  {background-color:yellow; left:200px; top:0px;}\n  50%  {background-color:blue; left:200px; top:200px;}\n  75%  {background-color:green; left:0px; top:200px;}\n  100% {background-color:red; left:0px; top:0px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<p>The animation-iteration-count property can be set to infinite to let the animation run for ever:</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation_direction",
       "title":"Run animation in reverse direction",
       "filename":"trycss3_animation_direction",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  position: relative;\n  animation-name: example;\n  animation-duration: 4s;\n  animation-direction: reverse;  \n}\n\n@keyframes example {\n  0%   {background-color:red; left:0px; top:0px;}\n  25%  {background-color:yellow; left:200px; top:0px;}\n  50%  {background-color:blue; left:200px; top:200px;}\n  75%  {background-color:green; left:0px; top:200px;}\n  100% {background-color:red; left:0px; top:0px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<p>The animation-direction property specifies whether an animation should be played forwards, backwards or in alternate cycles. The following example will run the animation in reverse direction (backwards):</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation_direction2",
       "title":"Run animation in alternate cycles",
       "filename":"trycss3_animation_direction2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  position: relative;\n  animation-name: example;\n  animation-duration: 4s;\n  animation-iteration-count: 2;\n  animation-direction: alternate;  \n}\n\n@keyframes example {\n  0%   {background-color:red; left:0px; top:0px;}\n  25%  {background-color:yellow; left:200px; top:0px;}\n  50%  {background-color:blue; left:200px; top:200px;}\n  75%  {background-color:green; left:0px; top:200px;}\n  100% {background-color:red; left:0px; top:0px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<p>The animation-direction property specifies whether an animation should be played forwards, backwards or in alternate cycles. The following example uses the value \"alternate\" to make the animation run forwards first, then backwards:</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation_speed",
       "title":"Speed curves for animations",
       "filename":"trycss3_animation_speed",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 50px;\n  background-color: red;\n  font-weight: bold;\n  position: relative;\n  animation: mymove 5s infinite;\n}\n\n#div1 {animation-timing-function: linear;}\n#div2 {animation-timing-function: ease;}\n#div3 {animation-timing-function: ease-in;}\n#div4 {animation-timing-function: ease-out;}\n#div5 {animation-timing-function: ease-in-out;}\n\n@keyframes mymove {\n  from {left: 0px;}\n  to {left: 300px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<p>The animation-timing-function property specifies the speed curve of the animation. The following example shows some of the different speed curves that can be used:</p>\n\n<div id=\"div1\">linear</div>\n<div id=\"div2\">ease</div>\n<div id=\"div3\">ease-in</div>\n<div id=\"div4\">ease-out</div>\n<div id=\"div5\">ease-in-out</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_animation5",
       "title":"Animation shorthand property",
       "filename":"trycss3_animation5",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  position: relative;\n  animation: myfirst 5s linear 2s infinite alternate;\n}\n\n@keyframes myfirst {\n  0%   {background-color:red; left:0px; top:0px;}\n  25%  {background-color:yellow; left:200px; top:0px;}\n  50%  {background-color:blue; left:200px; top:200px;}\n  75%  {background-color:green; left:0px; top:200px;}\n  100% {background-color:red; left:0px; top:0px;}\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Animation</h1>\n\n<p>This example uses the shorthand animation property:</p>\n\n<div></div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_tooltip_right",
       "title":"Right tooltip",
       "filename":"trycss_tooltip_right",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  left: 105%;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n</style>\n<body style=\"text-align:center;\">\n\n<h2>Right Tooltip</h2>\n<p>Move the mouse over the text below:</p>\n\n<div class=\"tooltip\">Hover over me\n  <span class=\"tooltiptext\">Tooltip text</span>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_tooltip_left",
       "title":"Left tooltip",
       "filename":"trycss_tooltip_left",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  right: 105%;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n</style>\n<body style=\"text-align:center;\">\n\n<h2>Left Tooltip</h2>\n<p>Move the mouse over the text below:</p>\n\n<div class=\"tooltip\">Hover over me\n  <span class=\"tooltiptext\">Tooltip text</span>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_tooltip_top",
       "title":"Top tooltip",
       "filename":"trycss_tooltip_top",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -60px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n</style>\n<body style=\"text-align:center;\">\n\n<h2>Top Tooltip</h2>\n<p>Move the mouse over the text below:</p>\n\n<div class=\"tooltip\">Hover over me\n  <span class=\"tooltiptext\">Tooltip text</span>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_tooltip_bottom",
       "title":"Bottom tooltip",
       "filename":"trycss_tooltip_bottom",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n  left: 50%;\n  margin-left: -60px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n</style>\n<body style=\"text-align:center;\">\n\n<h2>Bottom Tooltip</h2>\n<p>Move the mouse over the text below:</p>\n\n<div class=\"tooltip\">Hover over me\n  <span class=\"tooltiptext\">Tooltip text</span>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_tooltip_arrow_bottom",
       "title":"Tooltip with arrow",
       "filename":"trycss_tooltip_arrow_bottom",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -60px;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: black transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n</style>\n<body style=\"text-align:center;\">\n\n<h2>Top Tooltip w/ Bottom Arrow</h2>\n\n<div class=\"tooltip\">Hover over me\n  <span class=\"tooltiptext\">Tooltip text</span>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_tooltip_transition",
       "title":"Animated tooltip",
       "filename":"trycss_tooltip_transition",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -60px;\n  \n  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n</style>\n<body style=\"text-align:center;\">\n\n<h2>Fade In Tooltip on Hover</h2>\n<p>When you move the mouse over the text below, the tooltip text will fade in and take 1 second to go from completely invisible to visible.</p>\n\n<div class=\"tooltip\">Hover over me\n  <span class=\"tooltiptext\">Tooltip text</span>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_images_round",
       "title":"Rounded image",
       "filename":"trycss_ex_images_round",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  border-radius: 8px;\n}\n</style>\n</head>\n<body>\n\n<h2>Rounded Image</h2>\n\n<p>Use the border-radius property to create rounded images:</p>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"300\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_images_circle",
       "title":"Circled image",
       "filename":"trycss_ex_images_circle",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  border-radius: 50%;\n}\n</style>\n</head>\n<body>\n\n<h2>Circled Image</h2>\n\n<p>Use the border-radius property to create circled images:</p>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"300\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_images_thumbnail",
       "title":"Thumbnail image",
       "filename":"trycss_ex_images_thumbnail",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px;\n}\n</style>\n</head>\n<body>\n\n<h2>Thumbnail Image</h2>\n\n<p>Use the border property to create thumbnail images:</p>\n\n<img src=\"paris.jpg\" alt=\"Paris\" style=\"width:150px\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_images_thumbnail_link",
       "title":"Thumbnail image as link",
       "filename":"trycss_ex_images_thumbnail_link",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px;\n}\n\nimg:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n</style>\n</head>\n<body>\n\n<h2>Thumbnail Image as Link</h2>\n\n<p>Use the border property to create thumbnail images. Wrap an anchor around the image to use it as a link.</p>\n<p>Hover over the image and click on it to see the effect.</p>\n\n<a target=\"_blank\" href=\"paris.jpg\">\n  <img src=\"paris.jpg\" alt=\"Paris\" style=\"width:150px\">\n</a>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_images_responsive",
       "title":"Responsive image",
       "filename":"trycss_ex_images_responsive",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  max-width: 100%;\n  height: auto;\n}\n</style>\n</head>\n<body>\n\n<h2>Responsive Image</h2>\n\n<p>Responsive images will automatically adjust to fit the size of the screen.</p>\n<p>Resize the browser window to see the effect:</p>\n\n<img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_top_left",
       "title":"Image text (top left corner)",
       "filename":"trycss_image_text_top_left",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.topleft {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the top left corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"topleft\">Top Left</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_top_right",
       "title":"Image text (top right corner)",
       "filename":"trycss_image_text_top_right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.topright {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the top right corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"topright\">Top Right</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_bottom_left",
       "title":"Image text (bottom left corner)",
       "filename":"trycss_image_text_bottom_left",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.bottomleft {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the bottom left corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"bottomleft\">Bottom Left</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_bottom_right",
       "title":"Image text (bottom right corner)",
       "filename":"trycss_image_text_bottom_right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.bottomright {\n  position: absolute;\n  bottom: 8px;\n  right: 16px;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n<p>Add some text to an image in the bottom right corner:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"bottomright\">Bottom Right</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_text_center",
       "title":"Image text (centered)",
       "filename":"trycss_image_text_center",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.container {\n  position: relative;\n}\n\n.center {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n}\n\nimg { \n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n}\n</style>\n</head>\n<body>\n\n<h2>Image Text</h2>\n\n<p>Center text in image:</p>\n\n<div class=\"container\">\n  <img src=\"img_5terre_wide.jpg\" alt=\"Cinque Terre\" width=\"1000\" height=\"300\">\n  <div class=\"center\">Centered</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_images_card",
       "title":"Polaroid images",
       "filename":"trycss_ex_images_card",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {margin:25px;}\n\ndiv.polaroid {\n  width: 80%;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-bottom: 25px;\n}\n\ndiv.container {\n  text-align: center;\n  padding: 10px 20px;\n}\n</style>\n</head>\n<body>\n\n<h2>Responsive Polaroid Images / Cards</h2>\n\n<div class=\"polaroid\">\n  <img src=\"img_5terre.jpg\" alt=\"5 Terre\" style=\"width:100%\">\n  <div class=\"container\">\n  <p>Cinque Terre</p>\n  </div>\n</div>\n\n<div class=\"polaroid\">\n  <img src=\"lights600x400.jpg\" alt=\"Norther Lights\" style=\"width:100%\">\n  <div class=\"container\">\n  <p>Northern Lights</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_filter_grayscale",
       "title":"Grayscale image filter",
       "filename":"trycss3_filter_grayscale",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */\n  filter: grayscale(100%);\n}\n</style>\n</head>\n<body>\n\n<p>Convert the image to grayscale:</p>\n\n<img src=\"pineapple.jpg\" alt=\"Pineapple\" width=\"300\" height=\"300\">\n\n<p><strong>Note:</strong> The filter property is not supported in Internet Explorer.</p>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss_image_modal_js",
       "title":"Advanced - Image Modal with CSS and JavaScript",
       "filename":"trycss_image_modal_js",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n#myImg {\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n#myImg:hover {opacity: 0.7;}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n}\n\n/* Modal Content (image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n}\n\n/* Caption of Modal Image */\n#caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n}\n\n/* Add Animation */\n.modal-content, #caption {  \n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@keyframes zoom {\n  from {transform: scale(0.1)} \n  to {transform: scale(1)}\n}\n\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n  .modal-content {\n    width: 100%;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Image Modal</h2>\n\n<p>Here, we use CSS to create a modal (dialog box) that is hidden by default.</p>\n<p>We use JavaScript to trigger the modal and to display the current image inside the modal when it is clicked on. Also note that we use the value from the image's \"alt\" attribute as an image caption text inside the modal.</p>\n<p>Don't worry if you do not understand the code right away. When you are done with CSS, go to our JavaScript Tutorial to learn more.</p>\n\n<img id=\"myImg\" src=\"img_lights.jpg\" alt=\"Northern Lights, Norway\" width=\"300\" height=\"200\">\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\">\n  <span class=\"close\">&times;</span>\n  <img class=\"modal-content\" id=\"img01\">\n  <div id=\"caption\"></div>\n</div>\n\n<script>\n// Get the modal\nvar modal = document.getElementById('myModal');\n\n// Get the image and insert it inside the modal - use its \"alt\" text as a caption\nvar img = document.getElementById('myImg');\nvar modalImg = document.getElementById(\"img01\");\nvar captionText = document.getElementById(\"caption\");\nimg.onclick = function(){\n  modal.style.display = \"block\";\n  modalImg.src = this.src;\n  captionText.innerHTML = this.alt;\n}\n\n// Get the <span> element that closes the modal\nvar span = document.getElementsByClassName(\"close\")[0];\n\n// When the user clicks on <span> (x), close the modal\nspan.onclick = function() { \n  modal.style.display = \"none\";\n}\n</script>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_reflection_below",
       "title":"Create reflection below the image",
       "filename":"trycss3_reflection_below",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  -webkit-box-reflect: below;\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Image Reflection</h1>\n\n<p>Show the reflection below the image:</p>\n<img src=\"img_tree.png\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_reflection_right",
       "title":"Create reflection to the right of the image",
       "filename":"trycss3_reflection_right",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  -webkit-box-reflect: right;\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Image Reflection</h1>\n\n<p>Show the reflection to the right of the image:</p>\n<img src=\"img_tree.png\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_reflection_offset",
       "title":"Create a gap between the image and the reflection",
       "filename":"trycss3_reflection_offset",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  -webkit-box-reflect: below 20px;\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Image Reflection</h1>\n\n<p>Show the reflection below the image, with a 20 pixels offset:</p>\n<img src=\"img_tree.png\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_reflection_gradient",
       "title":"Create a fade-out effect on the reflection",
       "filename":"trycss3_reflection_gradient",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));\n}\n</style>\n</head>\n<body>\n\n<h1>CSS Image Reflection</h1>\n\n<p>Show the reflection with gradient (to make a fade-out effect):</p>\n<img src=\"img_tree.png\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-fit",
       "title":"Use object-fit: cover",
       "filename":"trycss3_object-fit",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n}\n</style>\n</head>\n<body>\n\n<h2>Using object-fit: cover</h2>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-fit_contain",
       "title":"Use object-fit: contain",
       "filename":"trycss3_object-fit_contain",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  width: 200px;\n  height: 300px;\n  object-fit: contain;\n}\n</style>\n</head>\n<body>\n\n<h2>Using object-fit: contain</h2>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-fit_fill",
       "title":"Use object-fit: fill",
       "filename":"trycss3_object-fit_fill",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  width: 200px;\n  height: 300px;\n  object-fit: fill;\n}\n</style>\n</head>\n<body>\n\n<h2>Using object-fit: fill</h2>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-fit_none",
       "title":"Use object-fit: none",
       "filename":"trycss3_object-fit_none",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  width: 200px;\n  height: 300px;\n  object-fit: none;\n}\n</style>\n</head>\n<body>\n\n<h2>Using object-fit: none</h2>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-fit_scale-down",
       "title":"Use object-fit: scale-down",
       "filename":"trycss3_object-fit_scale-down",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  width: 200px;\n  height: 300px;\n  object-fit: scale-down;\n}\n</style>\n</head>\n<body>\n\n<h2>Using object-fit: scale-down</h2>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-fit_all",
       "title":"All object-fit property values in one example",
       "filename":"trycss3_object-fit_all",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.fill {object-fit: fill;}\n.contain {object-fit: contain;}\n.cover {object-fit: cover;}\n.scale-down {object-fit: scale-down;}\n.none {object-fit: none;}\n</style>\n</head>\n<body>\n\n<h1>The object-fit Property</h1>\n\n<h2>No object-fit:</h2>\n<img src=\"paris.jpg\" alt=\"Paris\" style=\"width:200px;height:300px\">\n\n<h2>object-fit: fill (this is default):</h2>\n<img class=\"fill\" src=\"paris.jpg\" alt=\"Paris\" style=\"width:200px;height:300px\">\n\n<h2>object-fit: contain:</h2>\n<img class=\"contain\" src=\"paris.jpg\" alt=\"Paris\" style=\"width:200px;height:300px\">\n\n<h2>object-fit: cover:</h2>\n<img class=\"cover\" src=\"paris.jpg\" alt=\"Paris\" style=\"width:200px;height:300px\">\n\n<h2>object-fit: scale-down:</h2>\n<img class=\"scale-down\" src=\"paris.jpg\" alt=\"Paris\" style=\"width:200px;height:300px\">\n\n<h2>object-fit: none:</h2>\n<img class=\"none\" src=\"paris.jpg\" alt=\"Paris\" style=\"width:200px;height:300px\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-position",
       "title":"Position the image so that the great old building is in center",
       "filename":"trycss3_object-position",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n  object-position: 80% 100%;\n}\n</style>\n</head>\n<body>\n\n<h2>Using object-position</h2>\n\n<p>Here we will use the object-position property to position the image so that the great old building is in center:</p>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_object-position2",
       "title":"Position the image so that the famous Eiffel Tower is in center",
       "filename":"trycss3_object-position2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nimg {\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n  object-position: 15% 100%;\n}\n</style>\n</head>\n<body>\n\n<h2>Using object-position</h2>\n\n<p>Here we will use the object-position property to position the image so that the famous Eiffel Tower is in center:</p>\n\n<img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_basic",
       "title":"Basic CSS buttons",
       "filename":"trycss_buttons_basic",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n</style>\n</head>\n<body>\n\n<h2>CSS Buttons</h2>\n\n<button>Default Button</button>\n<a href=\"#\" class=\"button\">Link Button</a>\n<button class=\"button\">Button</button>\n<input type=\"button\" class=\"button\" value=\"Input Button\">\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_color",
       "title":"Button colors",
       "filename":"trycss_buttons_color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.button2 {background-color: #008CBA;} /* Blue */\n.button3 {background-color: #f44336;} /* Red */ \n.button4 {background-color: #e7e7e7; color: black;} /* Gray */ \n.button5 {background-color: #555555;} /* Black */\n</style>\n</head>\n<body>\n\n<h2>Button Colors</h2>\n\n<p>Change the background color of a button with the background-color property:</p>\n\n<button class=\"button\">Green</button>\n<button class=\"button button2\">Blue</button>\n<button class=\"button button3\">Red</button>\n<button class=\"button button4\">Gray</button>\n<button class=\"button button5\">Black</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_font",
       "title":"Button sizes",
       "filename":"trycss_buttons_font",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.button1 {font-size: 10px;}\n.button2 {font-size: 12px;}\n.button3 {font-size: 16px;}\n.button4 {font-size: 20px;}\n.button5 {font-size: 24px;}\n</style>\n</head>\n<body>\n\n<h2>Button Sizes</h2>\n\n<p>Change the font size of a button with the font-size property:</p>\n\n<button class=\"button button1\">10px</button>\n<button class=\"button button2\">12px</button>\n<button class=\"button button3\">16px</button>\n<button class=\"button button4\">20px</button>\n<button class=\"button button5\">24px</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_round",
       "title":"Rounded buttons",
       "filename":"trycss_buttons_round",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.button1 {border-radius: 2px;}\n.button2 {border-radius: 4px;}\n.button3 {border-radius: 8px;}\n.button4 {border-radius: 12px;}\n.button5 {border-radius: 50%;}\n</style>\n</head>\n<body>\n\n<h2>Rounded Buttons</h2>\n\n<p>Add rounded corners to a button with the border-radius property:</p>\n\n<button class=\"button button1\">2px</button>\n<button class=\"button button2\">4px</button>\n<button class=\"button button3\">8px</button>\n<button class=\"button button4\">12px</button>\n<button class=\"button button5\">50%</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_border",
       "title":"Colored button borders",
       "filename":"trycss_buttons_border",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.button1 {\n  background-color: white; \n  color: black; \n  border: 2px solid #4CAF50;\n}\n\n.button2 {\n  background-color: white; \n  color: black; \n  border: 2px solid #008CBA;\n}\n\n.button3 {\n  background-color: white; \n  color: black; \n  border: 2px solid #f44336;\n}\n\n.button4 {\n  background-color: white;\n  color: black;\n  border: 2px solid #e7e7e7;\n}\n\n.button5 {\n  background-color: white;\n  color: black;\n  border: 2px solid #555555;\n}\n</style>\n</head>\n<body>\n\n<h2>Colored Button Borders</h2>\n\n<p>Use the border property to add a border to the button:</p>\n\n<button class=\"button button1\">Green</button>\n<button class=\"button button2\">Blue</button>\n<button class=\"button button3\">Red</button>\n<button class=\"button button4\">Gray</button>\n<button class=\"button button5\">Black</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_hover",
       "title":"Hoverable buttons",
       "filename":"trycss_buttons_hover",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.button1 {\n  background-color: white; \n  color: black; \n  border: 2px solid #4CAF50;\n}\n\n.button1:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.button2 {\n  background-color: white; \n  color: black; \n  border: 2px solid #008CBA;\n}\n\n.button2:hover {\n  background-color: #008CBA;\n  color: white;\n}\n\n.button3 {\n  background-color: white; \n  color: black; \n  border: 2px solid #f44336;\n}\n\n.button3:hover {\n  background-color: #f44336;\n  color: white;\n}\n\n.button4 {\n  background-color: white;\n  color: black;\n  border: 2px solid #e7e7e7;\n}\n\n.button4:hover {background-color: #e7e7e7;}\n\n.button5 {\n  background-color: white;\n  color: black;\n  border: 2px solid #555555;\n}\n\n.button5:hover {\n  background-color: #555555;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<h2>Hoverable Buttons</h2>\n\n<p>Use the :hover selector to change the style of the button when you move the mouse over it.</p>\n<p><strong>Tip:</strong> Use the transition-duration property to determine the speed of the \"hover\" effect:</p>\n\n<button class=\"button button1\">Green</button>\n<button class=\"button button2\">Blue</button>\n<button class=\"button button3\">Red</button>\n<button class=\"button button4\">Gray</button>\n<button class=\"button button5\">Black</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_shadow",
       "title":"Shadow buttons",
       "filename":"trycss_buttons_shadow",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.4s; /* Safari */\n  transition-duration: 0.4s;\n}\n\n.button1 {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.button2:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n}\n</style>\n</head>\n<body>\n\n<h2>Shadow Buttons</h2>\n\n<p>Use the box-shadow property to add shadows to the button:</p>\n\n<button class=\"button button1\">Shadow Button</button>\n<button class=\"button button2\">Shadow on Hover</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_disabled",
       "title":"Disabled buttons",
       "filename":"trycss_buttons_disabled",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n</style>\n</head>\n<body>\n\n<h2>Disabled Button</h2>\n\n<p>Use the opacity property to add some transparency to a button (make it look disabled):</p>\n\n<button class=\"button\">Normal Button</button>\n<button class=\"button disabled\">Disabled Button</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_width",
       "title":"Button width",
       "filename":"trycss_buttons_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.button1 {width: 250px;}\n.button2 {width: 50%;}\n.button3 {width: 100%;}\n</style>\n</head>\n<body>\n\n<h2>Set Button Widths</h2>\n\n<p>Use the width property to change the width of the button:</p>\n\n<button class=\"button button1\">250px</button><br>\n<button class=\"button button2\">50%</button><br>\n<button class=\"button button3\">100%</button>\n\n<p><strong>Tip:</strong> Use pixels if you want to set a fixed width and use percent for responsive buttons (e.g. 50% of its parent element). Resize the browser window to see the effect.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_group",
       "title":"Button groups",
       "filename":"trycss_buttons_group",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.btn-group .button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  float: left;\n}\n\n.btn-group .button:hover {\n  background-color: #3e8e41;\n}\n</style>\n</head>\n<body>\n\n<h2>Button Groups</h2>\n\n<p>Remove margins and float the buttons to create a button group:</p>\n\n<div class=\"btn-group\">\n  <button class=\"button\">Button</button>\n  <button class=\"button\">Button</button>\n  <button class=\"button\">Button</button>\n  <button class=\"button\">Button</button>\n</div>\n\n<p style=\"clear:both\"><br>Remember to clear floats after, or else will this p element also float next to the buttons.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_group_border",
       "title":"Bordered button group",
       "filename":"trycss_buttons_group_border",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.btn-group .button {\n  background-color: #4CAF50; /* Green */\n  border: 1px solid green;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  float: left;\n}\n\n.btn-group .button:not(:last-child) {\n  border-right: none; /* Prevent double borders */\n}\n\n.btn-group .button:hover {\n  background-color: #3e8e41;\n}\n</style>\n</head>\n<body>\n\n<h2>Bordered Button Group</h2>\n\n<p>Add borders to create a bordered button group:</p>\n\n<div class=\"btn-group\">\n  <button class=\"button\">Button</button>\n  <button class=\"button\">Button</button>\n  <button class=\"button\">Button</button>\n  <button class=\"button\">Button</button>\n</div>\n\n<p style=\"clear:both\"><br>Remember to clear floats after, or else will this p element also float next to the buttons.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_animate1",
       "title":"Animated Button (Hover Effect)",
       "filename":"trycss_buttons_animate1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button:hover span {\n  padding-right: 25px;\n}\n\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n</style>\n</head>\n<body>\n\n<h2>Animated Button</h2>\n\n<button class=\"button\" style=\"vertical-align:middle\"><span>Hover </span></button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_animate2",
       "title":"Animated Button (Ripple Effect)",
       "filename":"trycss_buttons_animate2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  position: relative;\n  background-color: #4CAF50;\n  border: none;\n  font-size: 28px;\n  color: #FFFFFF;\n  padding: 20px;\n  width: 200px;\n  text-align: center;\n  transition-duration: 0.4s;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.button:after {\n  content: \"\";\n  background: #f1f1f1;\n  display: block;\n  position: absolute;\n  padding-top: 300%;\n  padding-left: 350%;\n  margin-left: -20px !important;\n  margin-top: -120%;\n  opacity: 0;\n  transition: all 0.8s\n}\n\n.button:active:after {\n  padding: 0;\n  margin: 0;\n  opacity: 1;\n  transition: 0s\n}\n</style>\n</head>\n<body>\n\n<h2>Animated Button - Ripple Effect</h2>\n\n<button class=\"button\">Click Me</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_buttons_animate3",
       "title":"Animated Button (Pressed Effect)",
       "filename":"trycss_buttons_animate3",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.button {\n  display: inline-block;\n  padding: 15px 25px;\n  font-size: 24px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n}\n\n.button:hover {background-color: #3e8e41}\n\n.button:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n</style>\n</head>\n<body>\n\n<h2>Animated Button - \"Pressed Effect\"</h2>\n\n<button class=\"button\">Click Me</button>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination",
       "title":"Simple pagination",
       "filename":"trycss_ex_pagination",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n</style>\n</head>\n<body>\n\n<h2>Simple Pagination</h2>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_active",
       "title":"Active and hoverable pagination",
       "filename":"trycss_ex_pagination_active",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n</style>\n</head>\n<body>\n\n<h2>Active and Hoverable Pagination</h2>\n\n<p>Move the mouse over the numbers.</p>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a class=\"active\" href=\"#\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_active_round",
       "title":"Rounded active and hoverable pagination",
       "filename":"trycss_ex_pagination_active_round",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n  border-radius: 5px;\n}\n\n.pagination a:hover:not(.active) {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n</style>\n</head>\n<body>\n\n<h2>Rounded Active and Hover Buttons</h2>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\" class=\"active\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_transition",
       "title":"Hoverable transition effect",
       "filename":"trycss_ex_pagination_transition",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n</style>\n</head>\n<body>\n\n<h2>Transition Effect on Hover</h2>\n\n<p>Move the mouse over the numbers.</p>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\" class=\"active\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_border",
       "title":"Bordered pagination",
       "filename":"trycss_ex_pagination_border",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n  border: 1px solid #ddd;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n  border: 1px solid #4CAF50;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n</style>\n</head>\n<body>\n\n<h2>Pagination with Borders</h2>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\" class=\"active\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_border_round",
       "title":"Rounded bordered pagination",
       "filename":"trycss_ex_pagination_border_round",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  border: 1px solid #ddd;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n  border: 1px solid #4CAF50;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n\n.pagination a:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.pagination a:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n</style>\n</head>\n<body>\n\n<h2>Pagination with Rounded Borders</h2>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a class=\"active\" href=\"#\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_margin",
       "title":"Pagination with space between links",
       "filename":"trycss_ex_pagination_margin",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n  border: 1px solid #ddd;\n  margin: 0 4px;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n  border: 1px solid #4CAF50;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n</style>\n</head>\n<body>\n\n<h2>Pagination with Margins</h2>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\" class=\"active\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_size",
       "title":"Pagination size",
       "filename":"trycss_ex_pagination_size",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n  border: 1px solid #ddd;\n  font-size: 22px;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n  border: 1px solid #4CAF50;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n</style>\n</head>\n<body>\n\n<h2>Pagination Size</h2>\n\n<p>Change the font-size property to make the pagination smaller or bigger.</p>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\" class=\"active\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_margin",
       "title":"Pagination with space between links",
       "filename":"trycss_ex_pagination_margin",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n  border: 1px solid #ddd;\n  margin: 0 4px;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n  border: 1px solid #4CAF50;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n</style>\n</head>\n<body>\n\n<h2>Pagination with Margins</h2>\n\n<div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\" class=\"active\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_ex_pagination_center",
       "title":"Centered pagination",
       "filename":"trycss_ex_pagination_center",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.center {\n  text-align: center;\n}\n\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n  border: 1px solid #ddd;\n  margin: 0 4px;\n}\n\n.pagination a.active {\n  background-color: #4CAF50;\n  color: white;\n  border: 1px solid #4CAF50;\n}\n\n.pagination a:hover:not(.active) {background-color: #ddd;}\n</style>\n</head>\n<body>\n\n<h2>Centered Pagination</h2>\n\n<div class=\"center\">\n  <div class=\"pagination\">\n  <a href=\"#\">&laquo;</a>\n  <a href=\"#\">1</a>\n  <a href=\"#\" class=\"active\">2</a>\n  <a href=\"#\">3</a>\n  <a href=\"#\">4</a>\n  <a href=\"#\">5</a>\n  <a href=\"#\">6</a>\n  <a href=\"#\">&raquo;</a>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_breadcrumbs",
       "title":"Breadcrumbs",
       "filename":"trycss_breadcrumbs",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nul.breadcrumb {\n  padding: 8px 16px;\n  list-style: none;\n  background-color: #eee;\n}\n\nul.breadcrumb li {display: inline;}\n\nul.breadcrumb li+li:before {\n  padding: 8px;\n  color: black;\n  content: \"/\\00a0\";\n}\n\nul.breadcrumb li a {color: green;}\n</style>\n</head>\n<body>\n\n<h2>Breadcrumb Pagination</h2>\n\n<ul class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Pictures</a></li>\n  <li><a href=\"#\">Summer 15</a></li>\n  <li>Italy</li>\n</ul>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-count",
       "title":"Create multiple columns",
       "filename":"trycss3_column-count",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.newspaper {\n  column-count: 3;\n}\n</style>\n</head>\n<body>\n\n<h1>Create Multiple Columns</h1>\n\n<div class=\"newspaper\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-gap",
       "title":"Specify the gap between columns",
       "filename":"trycss3_column-gap",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.newspaper {\n  column-count: 3;\n  column-gap: 40px;\n}\n</style>\n</head>\n<body>\n\n<h1>Specify the Gap Between Columns</h1>\n\n<div class=\"newspaper\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. \n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-rule-style",
       "title":"Specify the style of the rule between columns",
       "filename":"trycss3_column-rule-style",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.newspaper {\n  column-count: 3;\n  column-gap: 40px;\n  column-rule-style: solid;\n}\n</style>\n</head>\n<body>\n\n<h1>Add a Rule Between the Columns</h1>\n\n<div class=\"newspaper\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-rule-width",
       "title":"Specify the width of the rule between columns",
       "filename":"trycss3_column-rule-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.newspaper {\n  column-count: 3;\n  column-gap: 40px;\n  column-rule-style: solid;\n  column-rule-width: 1px;\n}\n</style>\n</head>\n<body>\n\n<h1>Set the Rule Width</h1>\n\n<div class=\"newspaper\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-rule-color",
       "title":"Specify the color of the rule between columns",
       "filename":"trycss3_column-rule-color",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.newspaper {\n  column-count: 3;\n  column-gap: 40px;\n  column-rule-style: solid;\n  column-rule-width: 1px;\n  column-rule-color: lightblue;\n}\n</style>\n</head>\n<body>\n\n<h1>Set the Rule Color</h1>\n\n<div class=\"newspaper\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-rule",
       "title":"Specify the width, style and color of the rule between columns",
       "filename":"trycss3_column-rule",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.newspaper {\n  column-count: 3;\n  column-gap: 40px;\n  column-rule: 1px solid lightblue;\n}\n</style>\n</head>\n<body>\n\n<h1>Use the column-rule Shorthand Property</h1>\n\n<div class=\"newspaper\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-span",
       "title":"Specify how many columns an element should span across",
       "filename":"trycss3_column-span",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.newspaper {\n  column-count: 3;\n  column-gap: 40px;\n  column-rule: 1px solid lightblue;\n}\n\nh2 {\n  column-span: all;\n}\n</style>\n</head>\n<body>\n\n<div class=\"newspaper\">\n<h2>Lorem Ipsum Dolor Sit Amet</h2>\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_column-width",
       "title":"Specify a suggested, optimal width for the columns",
       "filename":"trycss3_column-width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.newspaper {\n  column-width: 100px;\n}\n</style>\n</head>\n<body>\n\n<h1>Specify The Column Width</h1>\n\n<div class=\"newspaper\">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_resize_width",
       "title":"Let a user resize the width of an element",
       "filename":"trycss3_resize_width",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  border: 2px solid;\n  padding: 20px; \n  width: 300px;\n  resize: horizontal;\n  overflow: auto;\n}\n</style>\n</head>\n<body>\n\n<h1>The resize Property</h1>\n\n<div>\n  <p>Let the user resize only the width of this div element.</p>\n  <p>To resize: Click and drag the bottom right corner of this div element.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_resize_height",
       "title":"Let a user resize the height of an element",
       "filename":"trycss3_resize_height",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  border: 2px solid;\n  padding: 20px; \n  width: 300px;\n  resize: vertical;\n  overflow: auto;\n}\n</style>\n</head>\n<body>\n\n<h1>The resize Property</h1>\n\n<div>\n  <p>Let the user resize only the height of this div element.</p>\n  <p>To resize: Click and drag the bottom right corner of this div element.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_resize",
       "title":"Let a user resize both the width and height of an element",
       "filename":"trycss3_resize",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv {\n  border: 2px solid;\n  padding: 20px; \n  width: 300px;\n  resize: both;\n  overflow: auto;\n}\n</style>\n</head>\n<body>\n\n<h1>The resize Property</h1>\n\n<div>\n  <p>Let the user resize both the height and the width of this div element.</p>\n  <p>To resize: Click and drag the bottom right corner of this div element.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_outline-offset",
       "title":"Add space between an outline and the border of an element",
       "filename":"trycss3_outline-offset",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \ndiv.ex1 {\n  margin: 20px;\n  border: 1px solid black;\n  outline: 4px solid red;\n  outline-offset: 15px;\n} \n\ndiv.ex2 {\n  margin: 10px;\n  border: 1px solid black;\n  outline: 5px dashed blue;\n  outline-offset: 5px;\n} \n</style>\n</head>\n<body>\n<h1>The outline-offset Property</h1>\n\n<div class=\"ex1\">This div has a 4 pixels solid red outline 15 pixels outside the border edge.</div>\n<br>\n\n<div class=\"ex2\">This div has a 5 pixels dashed blue outline 5 pixels outside the border edge.</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_var",
       "title":"Using the var() function",
       "filename":"trycss3_var",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n:root {\n  --blue: #1e90ff;\n  --white: #ffffff; \n}\n\nbody {\n  background-color: var(--blue);\n}\n\nh2 {\n  border-bottom: 2px solid var(--blue);\n}\n\n.container {\n  color: var(--blue);\n  background-color: var(--white);\n  padding: 15px;\n}\n\nbutton {\n  background-color: var(--white);\n  color: var(--blue);\n  border: 1px solid var(--blue);\n  padding: 5px;\n}\n</style>\n</head>\n<body>\n\n<h1>Using the var() Function</h1>\n\n<div class=\"container\">\n  <h2>Lorem Ipsum</h2>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</p>\n  <p>\n    <button>Yes</button>\n    <button>No</button>\n  </p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_var2",
       "title":"Using the var() function to insert several custom property values",
       "filename":"trycss3_var2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n:root {\n  --blue: #6495ed;\n  --white: #faf0e6; \n}\n\nbody {\n  background-color: var(--blue);\n}\n\nh2 {\n  border-bottom: 2px solid var(--blue);\n}\n\n.container {\n  color: var(--blue);\n  background-color: var(--white);\n  padding: 15px;\n}\n\nbutton {\n  background-color: var(--white);\n  color: var(--blue);\n  border: 1px solid var(--blue);\n  padding: 5px;\n}\n</style>\n</head>\n<body>\n\n<h1>Using the var() Function</h1>\n\n<div class=\"container\">\n  <h2>Lorem Ipsum</h2>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</p>\n  <p>\n    <button>Yes</button>\n    <button>No</button>\n  </p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-sizing_old",
       "title":"Width of elements without box-sizing",
       "filename":"trycss3_box-sizing_old",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.div1 {\n  width: 300px;\n  height: 100px;\n  border: 1px solid blue;\n}\n\n.div2 {\n  width: 300px;\n  height: 100px;  \n  padding: 50px;\n  border: 1px solid red;\n}\n</style>\n</head>\n<body>\n\n<h1>Without box-sizing</h1>\n\n<div class=\"div1\">This div is smaller (width is 300px and height is 100px).</div>\n<br>\n<div class=\"div2\">This div is bigger (width is also 300px and height is 100px).</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-sizing_new",
       "title":"Width of elements with box-sizing",
       "filename":"trycss3_box-sizing_new",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.div1 {\n  width: 300px;\n  height: 100px;\n  border: 1px solid blue;\n  box-sizing: border-box;\n}\n\n.div2 {\n  width: 300px;\n  height: 100px;  \n  padding: 50px;\n  border: 1px solid red;\n  box-sizing: border-box;\n}\n</style>\n</head>\n<body>\n\n<h1>With box-sizing</h1>\n\n<div class=\"div1\">Both divs are the same size now!</div>\n<br>\n<div class=\"div2\">Hooray!</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_box-sizing_all",
       "title":"Form elements + box-sizing",
       "filename":"trycss3_box-sizing_all",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  margin: 0;\n}\n\n* {\n  box-sizing: border-box;\n} \n\ninput, textarea {\n  width: 100%;\n}\n</style>\n</head>\n<body>\n\n<form action=\"/action_page.php\">\n  First name:<br>\n  <input type=\"text\" name=\"firstname\" value=\"Mickey\"><br>\n  Last name:<br>\n  <input type=\"text\" name=\"lastname\" value=\"Mouse\"><br>\n  Comments:<br>\n  <textarea name=\"message\" rows=\"5\" cols=\"30\">\n  </textarea>\n  <br><br>\n  <input type=\"submit\" value=\"Submit\">\n</form> \n\n<p><strong>Tip:</strong> Try to remove the box-sizing property from the style element and look what happens.\nNotice that the width of input, textarea, and submit button will go outside of the screen.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_flexline",
       "title":"Flexbox with three flex items",
       "filename":"trycss3_flexbox_flexline",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_flexline_rtl",
       "title":"Flexbox with three flex items - rtl direction",
       "filename":"trycss3_flexbox_flexline_rtl",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  direction: rtl;\n}\n\n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_direction_row-reverse",
       "title":"flex-direction - row-reverse",
       "filename":"trycss3_flexbox_direction_row-reverse",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_direction_column",
       "title":"flex-direction - column",
       "filename":"trycss3_flexbox_direction_column",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_direction_column-reverse",
       "title":"flex-direction - column-reverse",
       "filename":"trycss3_flexbox_direction_column-reverse",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_justify_flex-end",
       "title":"justify-content - flex-end",
       "filename":"trycss3_flexbox_justify_flex-end",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_justify_center",
       "title":"justify-content - center",
       "filename":"trycss3_flexbox_justify_center",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_justify_space-between",
       "title":"justify-content - space-between",
       "filename":"trycss3_flexbox_justify_space-between",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_justify_space-around",
       "title":"justify-content - space-around",
       "filename":"trycss3_flexbox_justify_space-around",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_align_stretch",
       "title":"align-items - stretch",
       "filename":"trycss3_flexbox_align_stretch",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: stretch;\n  align-items: stretch;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_align_flex-start",
       "title":"align-items - flex-start",
       "filename":"trycss3_flexbox_align_flex-start",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_align_flex-end",
       "title":"align-items - flex-end",
       "filename":"trycss3_flexbox_align_flex-end",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: flex-end;\n  align-items: flex-end;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_align_center",
       "title":"align-items - center",
       "filename":"trycss3_flexbox_align_center",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_align_baseline",
       "title":"align-items - baseline",
       "filename":"trycss3_flexbox_align_baseline",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: baseline;\n  align-items: baseline;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_nowrap",
       "title":"flex-wrap - nowrap",
       "filename":"trycss3_flexbox_nowrap",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  width: 300px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_wrap",
       "title":"flex-wrap - wrap",
       "filename":"trycss3_flexbox_wrap",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_wrap-reverse",
       "title":"flex-wrap - wrap-reverse",
       "filename":"trycss3_flexbox_wrap-reverse",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap-reverse;\n  flex-wrap: wrap-reverse;\n  width: 300px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_align-content",
       "title":"align-content - center",
       "filename":"trycss3_flexbox_align-content",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-align-content: center;\n  align-content: center;\n  width: 300px;\n  height: 300px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_order",
       "title":"Order the flex items",
       "filename":"trycss3_flexbox_order",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n\n.first {\n  -webkit-order: -1;\n  order: -1;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item first\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_margin",
       "title":"Margin-right:auto;",
       "filename":"trycss3_flexbox_margin",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 75px;\n  height: 75px;\n  margin: 10px;\n}\n\n.flex-item:first-child {\n  margin-right: auto;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">flex item 1</div>\n  <div class=\"flex-item\">flex item 2</div>\n  <div class=\"flex-item\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_margin2",
       "title":"Margin:auto; = perfect centering",
       "filename":"trycss3_flexbox_margin2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 75px;\n  height: 75px;\n  margin: auto;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item\">Perfect centering!</div>\n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_align-self",
       "title":"align-self on flex items",
       "filename":"trycss3_flexbox_align-self",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  width: 60px;\n  min-height: 100px;\n  margin: 10px;\n}\n\n.item1 {\n  -webkit-align-self: flex-start;\n  align-self: flex-start;\n}\n.item2 {\n  -webkit-align-self: flex-end;\n  align-self: flex-end;\n}\n\n.item3 {\n  -webkit-align-self: center;\n  align-self: center;\n}\n\n.item4 {\n  -webkit-align-self: baseline;\n  align-self: baseline;\n}\n\n.item5 {\n  -webkit-align-self: stretch;\n  align-self: stretch;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item item1\">flex-start</div>\n  <div class=\"flex-item item2\">flex-end</div>\n  <div class=\"flex-item item3\">center</div>\n  <div class=\"flex-item item4\">baseline</div>\n  <div class=\"flex-item item5\">stretch</div>\n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_flex_number",
       "title":"Specify the length of the flex item, relative to the rest of the flex items",
       "filename":"trycss3_flexbox_flex_number",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style> \n.flex-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 400px;\n  height: 250px;\n  background-color: lightgrey;\n}\n\n.flex-item {\n  background-color: cornflowerblue;\n  margin: 10px;\n}\n\n.item1 {\n  -webkit-flex: 2;\n  flex: 2;\n}\n\n.item2 {\n  -webkit-flex: 1;\n  flex: 1;\n}\n\n.item3 {\n  -webkit-flex: 1;\n  flex: 1;\n}\n</style>\n</head>\n<body>\n\n<div class=\"flex-container\">\n  <div class=\"flex-item item1\">flex item 1</div>\n  <div class=\"flex-item item2\">flex item 2</div>\n  <div class=\"flex-item item3\">flex item 3</div>  \n</div>\n\n</body>\n</html>\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_image_gallery",
       "title":"Create a responsive image gallery with flexbox",
       "filename":"trycss3_flexbox_image_gallery",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial;\n}\n\n.header {\n  text-align: center;\n  padding: 32px;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n\n/* Create four equal columns that sits next to each other */\n.column {\n  flex: 25%;\n  max-width: 25%;\n  padding: 0 4px;\n}\n\n.column img {\n  margin-top: 8px;\n  vertical-align: middle;\n}\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media (max-width: 800px) {\n  .column {\n    flex: 50%;\n    max-width: 50%;\n  }\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media (max-width: 600px) {\n  .column {\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n</style>\n<body>\n\n<!-- Header -->\n<div class=\"header\">\n  <h1>Responsive Image Gallery</h1>\n  <p>Resize the browser window to see the responsive effect.</p>\n</div>\n\n<!-- Photo Grid -->\n<div class=\"row\"> \n  <div class=\"column\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/falls2.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/nature.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mist.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n  </div>\n  \n  <div class=\"column\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/ocean.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mountainskies.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n  </div> \n   \n  <div class=\"column\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/falls2.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/nature.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mist.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n  </div>\n  \n  <div class=\"column\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/ocean.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mountainskies.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_flexbox_website2",
       "title":"Create a responsive website with flexbox",
       "filename":"trycss3_flexbox_website2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n/* Style the body */\nbody {\n  font-family: Arial;\n  margin: 0;\n}\n\n/* Header/logo Title */\n.header {\n  padding: 60px;\n  text-align: center;\n  background: #1abc9c;\n  color: white;\n}\n\n/* Style the top navigation bar */\n.navbar {\n  display: flex;\n  background-color: #333;\n}\n\n/* Style the navigation bar links */\n.navbar a {\n  color: white;\n  padding: 14px 20px;\n  text-decoration: none;\n  text-align: center;\n}\n\n/* Change color on hover */\n.navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n/* Column container */\n.row {  \n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* Create two unequal columns that sits next to each other */\n/* Sidebar/left column */\n.side {\n  flex: 30%;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n\n/* Main column */\n.main {\n  flex: 70%;\n  background-color: white;\n  padding: 20px;\n}\n\n/* Fake image, just for this example */\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n}\n\n/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 700px) {\n  .row, .navbar {   \n    flex-direction: column;\n  }\n}\n</style>\n</head>\n<body>\n\n<!-- Note -->\n<div style=\"background:yellow;padding:5px\">\n  <h4 style=\"text-align:center\">Resize the browser window to see the responsive effect.</h4>\n</div>\n\n<!-- Header -->\n<div class=\"header\">\n  <h1>My Website</h1>\n  <p>With a <b>flexible</b> layout.</p>\n</div>\n\n<!-- Navigation Bar -->\n<div class=\"navbar\">\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n</div>\n\n<!-- The flexible grid (content) -->\n<div class=\"row\">\n  <div class=\"side\">\n    <h2>About Me</h2>\n    <h5>Photo of me:</h5>\n    <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>\n    <h3>More Text</h3>\n    <p>Lorem ipsum dolor sit ame.</p>\n    <div class=\"fakeimg\" style=\"height:60px;\">Image</div><br>\n    <div class=\"fakeimg\" style=\"height:60px;\">Image</div><br>\n    <div class=\"fakeimg\" style=\"height:60px;\">Image</div>\n  </div>\n  <div class=\"main\">\n    <h2>TITLE HEADING</h2>\n    <h5>Title description, Dec 7, 2017</h5>\n    <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n    <p>Some text..</p>\n    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n    <br>\n    <h2>TITLE HEADING</h2>\n    <h5>Title description, Sep 2, 2017</h5>\n    <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n    <p>Some text..</p>\n    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n  </div>\n</div>\n\n<!-- Footer -->\n<div class=\"footer\">\n  <h2>Footer</h2>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_media_queries1",
       "title":"Change the background-color to lightgreen if the viewport is 480px wide or wider",
       "filename":"trycss3_media_queries1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-color: pink;\n}\n\n@media screen and (min-width: 480px) {\n  body {\n    background-color: lightgreen;\n  }\n}\n</style>\n</head>\n<body>\n\n<h1>Resize the browser window to see the effect!</h1>\n<p>The media query will only apply if the media type is screen and the viewport is 480px wide or wider.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss3_media_queries2",
       "title":"Show a menu that will float to the left of the page if the viewport is 480px wide or wider",
       "filename":"trycss3_media_queries2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\n.wrapper {overflow: auto;}\n\n#main {margin-left: 4px;}\n\n#leftsidebar {\n  float: none;\n  width: auto;\n}\n\n#menulist {\n  margin: 0;\n  padding: 0;\n}\n\n.menuitem {\n  background: #CDF0F6;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  list-style-type: none;\n  margin: 4px;\n  padding: 2px;\n}\n\n@media screen and (min-width: 480px) {\n  #leftsidebar {width: 200px; float: left;}\n  #main {margin-left: 216px;}\n}\n</style>\n</head>\n<body>\n\n<div class=\"wrapper\">\n  <div id=\"leftsidebar\">\n    <ul id=\"menulist\">\n      <li class=\"menuitem\">Menu-item 1</li>\n      <li class=\"menuitem\">Menu-item 2</li>\n      <li class=\"menuitem\">Menu-item 3</li>\n      <li class=\"menuitem\">Menu-item 4</li>\n      <li class=\"menuitem\">Menu-item 5</li>\n    </ul>\n  </div>\n  \n  <div id=\"main\">\n    <h1>Resize the browser window to see the effect!</h1>\n    <p>This example shows a menu that will float to the left of the page if the viewport is 480 pixels wide or wider. If the viewport is less than 480 pixels, the menu will be on top of the content.</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_ex1",
       "title":"Set different background colors depending on screen width",
       "filename":"trycss_mediaqueries_ex1",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-color: tan;\n  color: black;\n}\n\n/* On screens that are 992px wide or less, the background color is blue */\n@media screen and (max-width: 992px) {\n  body {\n    background-color: blue;\n    color: white;\n  }\n}\n\n/* On screens that are 600px wide or less, the background color is olive */\n@media screen and (max-width: 600px) {\n  body {\n    background-color: olive;\n    color: white;\n  }\n}\n</style>\n</head>\n<body>\n\n<h1>Resize the browser window to see the effect!</h1>\n<p>By default, the background color of the document is \"tan\". If the screen size is 992px or less, the color will change to \"blue\". If it is 600px or less, it will change to \"olive\".</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_navbar",
       "title":"Responsive navigation menu",
       "filename":"trycss_mediaqueries_navbar",
       "html":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n/* Style the top navigation bar */\n.topnav {\n  overflow: hidden;\n  background-color: #333;\n}\n\n/* Style the topnav links */\n.topnav a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* Change color on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n/* On screens that are 600px wide or less, make the menu links stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .topnav a {\n    float: none;\n    width: 100%;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Responsive navigation menu</h2>\n<p>Resize the browser window to see the effect: When the screen is less than 600px, the navigation menu will be displayed vertically instead of horizontally.</p>\n\n<div class=\"topnav\">\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_ex2",
       "title":"Responsive columns using float",
       "filename":"trycss_mediaqueries_ex2",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n/* Create four equal columns that floats next to each other */\n.column {\n  float: left;\n  width: 25%;\n  padding: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* On screens that are 992px wide or less, go from four columns to two columns */\n@media screen and (max-width: 992px) {\n  .column {\n    width: 50%;\n  }\n}\n\n/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Responsive Four Column Layout</h2>\n<p><strong>Resize the browser window to see the responsive effect.</strong> On screens that are 992px wide or less, the columns will resize from four columns to two columns. On screens that are 600px wide or less, the columns will stack on top of each other instead of next to eachother.</p>\n\n<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <h2>Column 1</h2>\n    <p>Some text..</p>\n  </div>\n  \n  <div class=\"column\" style=\"background-color:#bbb;\">\n    <h2>Column 2</h2>\n    <p>Some text..</p>\n  </div>\n  \n  <div class=\"column\" style=\"background-color:#ccc;\">\n    <h2>Column 3</h2>\n    <p>Some text..</p>\n  </div>\n  \n  <div class=\"column\" style=\"background-color:#ddd;\">\n    <h2>Column 4</h2>\n    <p>Some text..</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_flex",
       "title":"Responsive columns using flexbox",
       "filename":"trycss_mediaqueries_flex",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n/* Container for flexboxes */\n.row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* Create four equal columns */\n.column {\n  flex: 25%;\n  padding: 20px;\n}\n\n/* On screens that are 992px wide or less, go from four columns to two columns */\n@media screen and (max-width: 992px) {\n  .column {\n    flex: 50%;\n  }\n}\n\n/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .row {\n    flex-direction: column;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Responsive Four Column Layout with Flex</h2>\n<p><strong>Resize the browser window to see the responsive effect.</strong> On screens that are 992px wide or less, the columns will resize from four columns to two columns. On screens that are 600px wide or less, the columns will stack on top of each other instead of next to eachother.</p>\n\n<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <h2>Column 1</h2>\n    <p>Some text..</p>\n  </div>\n  \n  <div class=\"column\" style=\"background-color:#bbb;\">\n    <h2>Column 2</h2>\n    <p>Some text..</p>\n  </div>\n  \n  <div class=\"column\" style=\"background-color:#ccc;\">\n    <h2>Column 3</h2>\n    <p>Some text..</p>\n  </div>\n  \n  <div class=\"column\" style=\"background-color:#ddd;\">\n    <h2>Column 4</h2>\n    <p>Some text..</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_hide",
       "title":"Hide elements with media queries",
       "filename":"trycss_mediaqueries_hide",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\ndiv.example {\n  background-color: yellow;\n  padding: 20px;\n}\n\n@media screen and (max-width: 600px) {\n  div.example {\n    display: none;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Hide elements on different screen sizes</h2>\n\n<div class=\"example\">Example DIV.</div>\n\n<p>When the browser's width is 600px wide or less, hide the div element. Resize the browser window to see the effect.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_fontsize",
       "title":"Responsive font size",
       "filename":"trycss_mediaqueries_fontsize",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\ndiv.example {\n  background-color: lightgrey;\n  padding: 20px;\n}\n\n@media screen and (min-width: 600px) {\n  div.example {\n    font-size: 80px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  div.example {\n    font-size: 30px;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Change the font size of an element on different screen sizes</h2>\n\n<div class=\"example\">Example DIV.</div>\n\n<p>When the browser's width is 600px wide or less, set the font-size of DIV to 30px. When it is 601px or wider, set the font-size to 80px. Resize the browser window to see the effect.</p>\n\n</body>\n</html>\n\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_img_gallery",
       "title":"Responsive image gallery",
       "filename":"trycss_mediaqueries_img_gallery",
       "html":"<!DOCTYPE html>\n<html>\n<style>\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial;\n}\n\n.header {\n  text-align: center;\n  padding: 32px;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n\n/* Create four equal columns that sits next to each other */\n.column {\n  flex: 25%;\n  max-width: 25%;\n  padding: 0 4px;\n}\n\n.column img {\n  margin-top: 8px;\n  vertical-align: middle;\n}\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n  .column {\n    flex: 50%;\n    max-width: 50%;\n  }\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n</style>\n<body>\n\n<!-- Header -->\n<div class=\"header\">\n  <h1>Responsive Image Grid</h1>\n  <p>Resize the browser window to see the responsive effect.</p>\n</div>\n\n<!-- Photo Grid -->\n<div class=\"row\"> \n  <div class=\"column\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/falls2.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/nature.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mist.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n  </div>\n  \n  <div class=\"column\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/ocean.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mountainskies.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n  </div> \n   \n  <div class=\"column\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/falls2.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/nature.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mist.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/paris.jpg\" style=\"width:100%\">\n  </div>\n  \n  <div class=\"column\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/ocean.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/mountainskies.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\n    <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_website",
       "title":"Responsive website",
       "filename":"trycss_mediaqueries_website",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n/* Style the body */\nbody {\n  font-family: Arial;\n  margin: 0;\n}\n\n/* Header/logo Title */\n.header {\n  padding: 60px;\n  text-align: center;\n  background: #1abc9c;\n  color: white;\n}\n\n/* Style the top navigation bar */\n.navbar {\n  display: flex;\n  background-color: #333;\n}\n\n/* Style the navigation bar links */\n.navbar a {\n  color: white;\n  padding: 14px 20px;\n  text-decoration: none;\n  text-align: center;\n}\n\n/* Change color on hover */\n.navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n/* Column container */\n.row {  \n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* Create two unequal columns that sits next to each other */\n/* Sidebar/left column */\n.side {\n  flex: 30%;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n\n/* Main column */\n.main {\n  flex: 70%;\n  background-color: white;\n  padding: 20px;\n}\n\n/* Fake image, just for this example */\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n}\n\n/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 700px) {\n  .row, .navbar {   \n    flex-direction: column;\n  }\n}\n</style>\n</head>\n<body>\n\n<!-- Note -->\n<div style=\"background:yellow;padding:5px\">\n  <h4 style=\"text-align:center\">Resize the browser window to see the responsive effect.</h4>\n</div>\n\n<!-- Header -->\n<div class=\"header\">\n  <h1>My Website</h1>\n  <p>With a <b>flexible</b> layout.</p>\n</div>\n\n<!-- Navigation Bar -->\n<div class=\"navbar\">\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n</div>\n\n<!-- The flexible grid (content) -->\n<div class=\"row\">\n  <div class=\"side\">\n    <h2>About Me</h2>\n    <h5>Photo of me:</h5>\n    <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>\n    <h3>More Text</h3>\n    <p>Lorem ipsum dolor sit ame.</p>\n    <div class=\"fakeimg\" style=\"height:60px;\">Image</div><br>\n    <div class=\"fakeimg\" style=\"height:60px;\">Image</div><br>\n    <div class=\"fakeimg\" style=\"height:60px;\">Image</div>\n  </div>\n  <div class=\"main\">\n    <h2>TITLE HEADING</h2>\n    <h5>Title description, Dec 7, 2017</h5>\n    <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n    <p>Some text..</p>\n    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n    <br>\n    <h2>TITLE HEADING</h2>\n    <h5>Title description, Sep 2, 2017</h5>\n    <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n    <p>Some text..</p>\n    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n  </div>\n</div>\n\n<!-- Footer -->\n<div class=\"footer\">\n  <h2>Footer</h2>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_mediaquery_orientation",
       "title":"Change layout of a page depending on the orientation of the browser",
       "filename":"tryresponsive_mediaquery_orientation",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\nbody {\n  background-color: lightgreen;\n}\n\n@media only screen and (orientation: landscape) {\n  body {\n    background-color: lightblue;\n  }\n}\n</style>\n</head>\n<body>\n\n<p>Resize the browser window. When the width of this document is larger than the height, the background color is \"lightblue\", otherwise it is \"lightgreen\".</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_mediaqueries_minmax",
       "title":"Min width to max width",
       "filename":"trycss_mediaqueries_minmax",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n@media screen and (max-width: 900px) and (min-width: 600px) {\n  div.example {\n    font-size: 50px;\n    padding: 50px;\n    border: 8px solid black;\n    background: yellow;\n  }\n}\n</style>\n</head>\n<body>\n\n<h2>Change the appearance of DIV on different screen sizes</h2>\n\n<div class=\"example\">Example DIV.</div>\n\n<p>When the browser's width is between 600 and 900px, change the appearance of DIV. \n<strong>Resize the browser window to see the effect</strong>.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_styles",
       "title":"Responsive grid view",
       "filename":"tryresponsive_styles",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n.row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n[class*=\"col-\"] {\n  float: left;\n  padding: 15px;\n}\n\n.col-1 {width: 8.33%;}\n.col-2 {width: 16.66%;}\n.col-3 {width: 25%;}\n.col-4 {width: 33.33%;}\n.col-5 {width: 41.66%;}\n.col-6 {width: 50%;}\n.col-7 {width: 58.33%;}\n.col-8 {width: 66.66%;}\n.col-9 {width: 75%;}\n.col-10 {width: 83.33%;}\n.col-11 {width: 91.66%;}\n.col-12 {width: 100%;}\n\nhtml {\n  font-family: \"Lucida Sans\", sans-serif;\n}\n\n.header {\n  background-color: #9933cc;\n  color: #ffffff;\n  padding: 15px;\n}\n\n.menu ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.menu li {\n  padding: 8px;\n  margin-bottom: 7px;\n  background-color: #33b5e5;\n  color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n.menu li:hover {\n  background-color: #0099cc;\n}\n</style>\n</head>\n<body>\n\n<div class=\"header\">\n  <h1>Chania</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-3 menu\">\n    <ul>\n      <li>The Flight</li>\n      <li>The City</li>\n      <li>The Island</li>\n      <li>The Food</li>\n    </ul>\n  </div>\n\n  <div class=\"col-9\">\n    <h1>The City</h1>\n    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>\n    <p>Resize the browser window to see how the content respond to the resizing.</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_col-s",
       "title":"Add breakpoints for desktops, laptops and phones",
       "filename":"tryresponsive_col-s",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\n.row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n[class*=\"col-\"] {\n  float: left;\n  padding: 15px;\n}\n\nhtml {\n  font-family: \"Lucida Sans\", sans-serif;\n}\n\n.header {\n  background-color: #9933cc;\n  color: #ffffff;\n  padding: 15px;\n}\n\n.menu ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.menu li {\n  padding: 8px;\n  margin-bottom: 7px;\n  background-color: #33b5e5;\n  color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n.menu li:hover {\n  background-color: #0099cc;\n}\n\n.aside {\n  background-color: #33b5e5;\n  padding: 15px;\n  color: #ffffff;\n  text-align: center;\n  font-size: 14px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n.footer {\n  background-color: #0099cc;\n  color: #ffffff;\n  text-align: center;\n  font-size: 12px;\n  padding: 15px;\n}\n\n/* For mobile phones: */\n[class*=\"col-\"] {\n  width: 100%;\n}\n\n@media only screen and (min-width: 600px) {\n  /* For tablets: */\n  .col-s-1 {width: 8.33%;}\n  .col-s-2 {width: 16.66%;}\n  .col-s-3 {width: 25%;}\n  .col-s-4 {width: 33.33%;}\n  .col-s-5 {width: 41.66%;}\n  .col-s-6 {width: 50%;}\n  .col-s-7 {width: 58.33%;}\n  .col-s-8 {width: 66.66%;}\n  .col-s-9 {width: 75%;}\n  .col-s-10 {width: 83.33%;}\n  .col-s-11 {width: 91.66%;}\n  .col-s-12 {width: 100%;}\n}\n@media only screen and (min-width: 768px) {\n  /* For desktop: */\n  .col-1 {width: 8.33%;}\n  .col-2 {width: 16.66%;}\n  .col-3 {width: 25%;}\n  .col-4 {width: 33.33%;}\n  .col-5 {width: 41.66%;}\n  .col-6 {width: 50%;}\n  .col-7 {width: 58.33%;}\n  .col-8 {width: 66.66%;}\n  .col-9 {width: 75%;}\n  .col-10 {width: 83.33%;}\n  .col-11 {width: 91.66%;}\n  .col-12 {width: 100%;}\n}\n</style>\n</head>\n<body>\n\n<div class=\"header\">\n  <h1>Chania</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-3 col-s-3 menu\">\n    <ul>\n      <li>The Flight</li>\n      <li>The City</li>\n      <li>The Island</li>\n      <li>The Food</li>\n    </ul>\n  </div>\n\n  <div class=\"col-6 col-s-9\">\n    <h1>The City</h1>\n    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>\n  </div>\n\n  <div class=\"col-3 col-s-12\">\n    <div class=\"aside\">\n      <h2>What?</h2>\n      <p>Chania is a city on the island of Crete.</p>\n      <h2>Where?</h2>\n      <p>Crete is a Greek island in the Mediterranean Sea.</p>\n      <h2>How?</h2>\n      <p>You can reach Chania airport from all over Europe.</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <p>Resize the browser window to see how the content respond to the resizing.</p>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_mediaquery_breakpoints",
       "title":"Typical breakpoints",
       "filename":"tryresponsive_mediaquery_breakpoints",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\n.example {\n  padding: 20px;\n  color: white;\n}\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  .example {background: red;}\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  .example {background: green;}\n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n  .example {background: blue;}\n} \n\n/* Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 992px) {\n  .example {background: orange;}\n} \n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n@media only screen and (min-width: 1200px) {\n  .example {background: pink;}\n}\n</style>\n</head>\n<body>\n\n<h2>Typical Media Query Breakpoints</h2>\n<p class=\"example\">Resize the browser window to see how the background color of this paragraph changes on different screen sizes.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_image",
       "title":"Responsive image",
       "filename":"tryresponsive_image",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\nimg {\n  max-width: 100%;\n  height: auto;\n}\n</style>\n</head>\n<body>\n\n<img src=\"img_chania.jpg\" width=\"460\" height=\"345\">\n<p>Resize the browser window to see how the image will scale when the width is less than 460px.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_video",
       "title":"Responsive video",
       "filename":"tryresponsive_video",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n</style>\n</head>\n<body>\n\n<video width=\"400\" controls>\n  <source src=\"mov_bbb.mp4\" type=\"video/mp4\">\n  <source src=\"mov_bbb.ogg\" type=\"video/ogg\">\n  Your browser does not support HTML5 video.\n</video>\n\n<p>Resize the browser window to see how the size of the video player will scale when the width is less than 400px.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_w3css",
       "title":"Responsive framework: W3.CSS",
       "filename":"tryresponsive_w3css",
       "html":"<!DOCTYPE html>\n<html>\n<title>W3.CSS</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<body>\n\n<div class=\"w3-container w3-blue\">\n  <h1>W3Schools Demo</h1> \n  <p>Resize this responsive page!</p> \n</div>\n\n<div class=\"w3-row-padding\">\n  <div class=\"w3-third\">\n    <h2>London</h2>\n    <p>London is the capital city of England.</p>\n    <p>It is the most populous city in the United Kingdom,\n    with a metropolitan area of over 13 million inhabitants.</p>\n  </div>\n\n  <div class=\"w3-third\">\n    <h2>Paris</h2>\n    <p>Paris is the capital of France.</p> \n    <p>The Paris area is one of the largest population centers in Europe,\n    with more than 12 million inhabitants.</p>\n  </div>\n\n  <div class=\"w3-third\">\n    <h2>Tokyo</h2>\n    <p>Tokyo is the capital of Japan.</p>\n    <p>It is the center of the Greater Tokyo Area,\n    and the most populous metropolitan area in the world.</p>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=tryresponsive_bootstrap",
       "title":"Responsive framework: Bootstrap",
       "filename":"tryresponsive_bootstrap",
       "html":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap 5 Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\"></script>\n</head>\n<body>\n\n<div class=\"container-fluid p-5 bg-primary text-white text-center\">\n  <h1>My First Bootstrap Page</h1>\n  <p>Resize this responsive page to see the effect!</p> \n</div>\n  \n<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h3>Column 1</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <h3>Column 2</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <h3>Column 3</h3>        \n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>\n    </div>\n  </div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_grid_layout_named",
       "title":"Grid layout",
       "filename":"trycss_grid_layout_named",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.item1 { grid-area: header; }\n.item2 { grid-area: menu; }\n.item3 { grid-area: main; }\n.item4 { grid-area: right; }\n.item5 { grid-area: footer; }\n\n.grid-container {\n  display: grid;\n  grid-template-areas:\n    'header header header header header header'\n    'menu main main main right right'\n    'menu footer footer footer footer footer';\n  gap: 10px;\n  background-color: #2196F3;\n  padding: 10px;\n}\n\n.grid-container > div {\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  padding: 20px 0;\n  font-size: 30px;\n}\n</style>\n</head>\n<body>\n\n<h1>Grid Layout</h1>\n\n<p>This grid layout contains six columns and three rows:</p>\n\n<div class=\"grid-container\">\n  <div class=\"item1\">Header</div>\n  <div class=\"item2\">Menu</div>\n  <div class=\"item3\">Main</div>  \n  <div class=\"item4\">Right</div>\n  <div class=\"item5\">Footer</div>\n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_grid",
       "title":"Grid elements",
       "filename":"trycss_grid",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  background-color: #2196F3;\n  padding: 10px;\n}\n.grid-item {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<h1>Grid Elements</h1>\n\n<p>A Grid Layout must have a parent element with the <em>display</em> property set to <em>grid</em> or <em>inline-grid</em>.</p>\n\n<p>Direct child element(s) of the grid container automatically becomes grid items.</p>\n\n<div class=\"grid-container\">\n  <div class=\"grid-item\">1</div>\n  <div class=\"grid-item\">2</div>\n  <div class=\"grid-item\">3</div>  \n  <div class=\"grid-item\">4</div>\n  <div class=\"grid-item\">5</div>\n  <div class=\"grid-item\">6</div>  \n  <div class=\"grid-item\">7</div>\n  <div class=\"grid-item\">8</div>\n  <div class=\"grid-item\">9</div>  \n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_grid_grid-column-gap",
       "title":"Grid column gaps",
       "filename":"trycss_grid_grid-column-gap",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.grid-container {\n  display: grid;\n  column-gap: 50px;\n  grid-template-columns: auto auto auto;\n  background-color: #2196F3;\n  padding: 10px;\n}\n\n.grid-item {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<h1>The column-gap Property</h1>\n\n<p>Use the <em>column-gap</em> property to adjust the space between the columns:</p>\n\n<div class=\"grid-container\">\n  <div class=\"grid-item\">1</div>\n  <div class=\"grid-item\">2</div>\n  <div class=\"grid-item\">3</div>  \n  <div class=\"grid-item\">4</div>\n  <div class=\"grid-item\">5</div>\n  <div class=\"grid-item\">6</div>  \n  <div class=\"grid-item\">7</div>\n  <div class=\"grid-item\">8</div>\n  <div class=\"grid-item\">9</div>  \n</div>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_grid_lines",
       "title":"Grid lines",
       "filename":"trycss_grid_lines",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 10px;\n  background-color: #2196F3;\n  padding: 10px;\n}\n\n.grid-container > div {\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  padding: 20px 0;\n  font-size: 30px;\n}\n\n.item1 {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n</style>\n</head>\n<body>\n\n<h1>Grid Lines</h1>\n\n<div class=\"grid-container\">\n  <div class=\"item1\">1</div>\n  <div class=\"item2\">2</div>\n  <div class=\"item3\">3</div>  \n  <div class=\"item4\">4</div>\n  <div class=\"item5\">5</div>\n  <div class=\"item6\">6</div>\n  <div class=\"item7\">7</div>\n  <div class=\"item8\">8</div>  \n</div>\n\n<p>You can refer to line numbers when placing grid items.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_grid_container",
       "title":"Grid container",
       "filename":"trycss_grid_container",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 10px;\n  background-color: #2196F3;\n  padding: 10px;\n}\n\n.grid-container > div {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid black;\n  text-align: center;\n  font-size: 30px;\n}\n</style>\n</head>\n<body>\n\n<h1>Grid Container</h1>\n\n<p>A Grid Container consists of grid items arranged in columns and rows</p>\n\n<div class=\"grid-container\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>  \n  <div>4</div>\n  <div>5</div>\n  <div>6</div>\n  <div>7</div>\n  <div>8</div>\n</div>\n\n<p>Direct child elements(s) of the grid container automatically becomes grid items.</p>\n\n</body>\n</html>\n\n\n"
    },
    {
       "url":"tryit.asp?filename=trycss_grid_item",
       "title":"Grid items",
       "filename":"trycss_grid_item",
       "html":"<!DOCTYPE html>\n<html>\n<head>\n<style>\n.grid-container {\n  display: grid;\n  gap: 10px;\n  background-color: #2196F3;\n  padding: 10px;\n}\n\n.grid-item {\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  padding: 20px;\n  font-size: 30px;\n}\n\n.item1 {\n  grid-column: 1 / span 2;\n  grid-row: 1;\n}\n\n.item2 {\n  grid-column: 3;\n  grid-row: 1 / span 2;\n}\n\n.item5 {\n  grid-column: 1 / span 3;\n  grid-row: 3;\n}\n</style>\n</head>\n<body>\n\n<h1>A Five Items Grid Layout</h1>\n\n<div class=\"grid-container\">\n  <div class=\"grid-item item1\">1</div>\n  <div class=\"grid-item item2\">2</div>\n  <div class=\"grid-item item3\">3</div>  \n  <div class=\"grid-item item4\">4</div>\n  <div class=\"grid-item item5\">5</div>\n</div>\n\n<p>Direct child elements(s) of the grid container automatically becomes grid items.</p>\n\n<p>Item 1, 2, and 5 are set to span multiple columns or rows.</p>\n\n</body>\n</html>\n\n\n"
    }
 ];