/*
const heading  = document.createElement("h1");
heading.innerHTML = "Hello From JavaScript";

const root = document.getElementById('root');
root.appendChild(heading);
*/

// USING REACTDOM WE ARE TRYING TO APPEND THE ELEMENTS TO THE DOM WHERE WE HAVE TWO HEADING ELEMENT AT THE SAME LEVEL HERE WE ARE USING ARRAY OF HEADING ELEMENTS.

/*
<div id="parent">
  <div id="child">
    <h1>Hi I am shabrez</h1>
    <h2>Hi I am 2nd React</h2>
  </div>
</div>
*/

// const parent = React.createElement('div', {id: 'parent'}, 
//     React.createElement('div', {id: 'child'}, 
// [React.createElement('h1', {}, 'Hi I am heading1'), 
// React.createElement('h2', {}, 'Hi I am heading2')]));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);    

/*
<div id="parent">
    <h1>Hi I am shabrez</h1>
</div>
*/
/*
const parent = React.createElement('div', {id: 'parent'},
    React.createElement('h1', {}, 'I am heading' )
 );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
*/

/*
<div id="parent">
    <h1>Hi I am shabrez</h1>
    <p id = "p1">I am Paragraph</p>
</div>
*/

// const parent = React.createElement('div', {id:'parent'}, [React.createElement('h1', {}, 'I am from heading'), React.createElement('p', {id:'p1'}, 'I am paragraph')]);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);

/*
<div id="parent">
  <div class = "child">
    <h1>Hi I am shabrez</h1>
    <h2>Hi I am shabrez</h2>
  </div>  
</div>
*/

const parent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id:'child'}, [React.createElement('h1', {id:'heading'}, 'Hi I am header 1'), React.createElement('h2', {}, 'Hi I am header 2')]));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

