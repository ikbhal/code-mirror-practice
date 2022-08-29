

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