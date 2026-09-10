import React from "react";
import ReactDOM from "react-dom/client";

const heading1=React.createElement(
  "h1",
  {id:"heading"},
  "Namaste React 🚀"
);

//JSX
//react element
const heading=<h1 id="heading" className="head">Namaste React using JSX 🚀</h1>;
console.log(heading);


// const HeadingComponent1=()=>{
// return <h1 className="heading">Hello React ❤️</h1>
// }

const HeadingComponent2=()=>{
  return(
  <div id="container">
    <Title />
<h1>Hello React ❤️</h1>
</div>)};

const ele=<span>from react</span>;
const title=(<h1>i am title element</h1>);
const number=1000;
const HeadingComponent=()=>(
  <div id="container">
    <h2>{number}</h2>
    <h4>{20+3}</h4>
    {title}
    <Title />
    <Title></Title>
{console.log("hello react")}
<h1>Hello React ❤️</h1>
</div>);

const Title=()=>
(
  <div>
  {ele}
  <h1>Namaste React using Jsx</h1>
  </div>
);

// const fnc1=()=>{(
//   <div id="container">
// <h1>Hello React ❤️</h1>
// </div>)};



const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(<Title />);
root.render(<HeadingComponent />);