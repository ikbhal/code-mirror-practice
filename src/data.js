

export const examples =
[
{
    filename: 'trycss_syntax1',
    title: 'CSS syntax',
    html: 
`
<p>Hello World!</p>
<p>These paragraphs are styled with CSS.</p>
<style>
p {
  color: red;
  text-align: center;
} 
</style>
`
},

{
    filename: 'trycss_syntax_element',
    title: 'The element selector',
    html:


`
<p>Every paragraph will be affected by the style.</p>
<p id="para1">Me too!</p>
<p>And me!</p>

<style>
p {
  text-align: center;
  color: red;
} 
</style>
`
},

{

    filename: '',
    title: 'The id selector',
    html :
`
<!DOCTYPE html>
<html>
<head>
<style>
#para1 {
  text-align: center;
  color: red;
}
</style>
</head>
<body>

<p id="para1">Hello World!</p>
<p>This paragraph is not affected by the style.</p>

</body>
</html>
`
},

{
filename: 'trycss_syntax_class',
title:'The class selector (for all elements)',
html:
`
<!DOCTYPE html>
<html>
<head>
<style>
.center {
  text-align: center;
  color: red;
}
</style>
</head>
<body>

<h1 class="center">Red and center-aligned heading</h1>
<p class="center">Red and center-aligned paragraph.</p> 

</body>
</html>
`
},

{

filename: 'trycss_syntax_element_class',
title: 'The class selector (for only <p> elements)',
html:
`
<!DOCTYPE html>
<html>
<head>
<style>
p.center {
  text-align: center;
  color: red;
}
</style>
</head>
<body>

<h1 class="center">This heading will not be affected</h1>
<p class="center">This paragraph will be red and center-aligned.</p> 

</body>
</html>
`
},

{
 filename:'trycss_syntax_element_class2',
 title:'An HTML element that refer to two classes',
 html:
 `
 <!DOCTYPE html>
<html>
<head>
<style>
p.center {
  text-align: center;
  color: red;
}

p.large {
  font-size: 300%;
}
</style>
</head>
<body>

<h1 class="center">This heading will not be affected</h1>
<p class="center">This paragraph will be red and center-aligned.</p>
<p class="center large">This paragraph will be red, center-aligned, and in a large font-size.</p> 

</body>
</html>
 `

},
{
filename:'trycss_syntax_universal',
title:'The universal selector',
html:
`
<!DOCTYPE html>
<html>
<head>
<style>
* {
  text-align: center;
  color: blue;
}
</style>
</head>
<body>

<h1>Hello world!</h1>

<p>Every element on the page will be affected by the style.</p>
<p id="para1">Me too!</p>
<p>And me!</p>

</body>
</html>
`



}



];


/*

<!DOCTYPE html>
<html>
<head>
<style>
p {
  text-align: center;
  color: red;
} 
</style>
</head>
<body>

<p>Every paragraph will be affected by the style.</p>
<p id="para1">Me too!</p>
<p>And me!</p>

</body>
</html>
*/