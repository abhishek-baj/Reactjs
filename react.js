React js -DAY -2
================
 

 JSX must have a trailing slash if it is made of one tag:  
 ========================================================

 >  Unlike standard HTML, elements like input ,img  or  br must close  with  a trailing forward 
    slash  for it to be a valid to jsx.


 >      <input type="email" />// <input type="email"> is a syntax error
 
============================================================
 
 JSX elements with two tags must have a closing tag: 
 ==================================================

> Elements that should have two tags, such as div , main or button , must have
  their closing, second tag in JSX, otherwise it will result in a syntax error.



> <button>Click me</button>// <button> or </button> is a syntax error


=======================================================

How JSX elements are styled?

* Inline styles are written differently as well as compared to plain HTML.

* Inline styles must not be included as a string, but within an object.

* Once again, the style properties that we use must be written in the camel-
  case style.


*       <h1 style={{ color: "blue", fontSize: 22, padding: "0.5em 1em" }}>
         Hello React!
         </h1>;

=====================================================


JSX can be conditionally displayed:
==================================         


> New React developers may be wondering how it is beneficial that React can
  use JavaScript code.

> One simple example if that to conditionally hide or display JSX content, we can
  use any valid JavaScript conditional, like an if statement or switch statement.


>                      const isAuthUser = true;

                       if (isAuthUser) {
                      return <div>Hello user!</div>
                       } else {
                     return <button>Login</button>
                     } 

 ========================================================
 

 JSX cannot be understood by the browser: 
 =======================================  


 > As mentioned above, JSX is not HTML, but composed of JavaScript functions.

 > In fact, writing
                                  <div>Hello React</div>
in JSX is just a more convenient and understandable way of writing code like the following:  

                React.createElement("div", null, "Hello React!")


> Both pieces of code will have the same output of "Hello React".


> To write JSX and have the browser understand this different syntax, we must
   use a transpiler to convert JSX to these function calls.

> The most common transpiler is called Babel.

==========================================================
            COMPONENTS:
            ===========

What are React components?
   
> Instead of just rendering one or another set of JSX elements, we can include
  them within React components.    


> Components are created using what looks like a normal JavaScript function,
  but is different in that it returns JSX elements.


>                 function Greeting() {
                  return <div>Hello React!</div>;
                  }

=======================================================
Why use React components?

> React components allow us to create more complex logic and structures within
  our React application than we would with JSX elements alone.


> Think of React components as our custom React elements that have their own
  functionality.

> functions allow us to create our own functionality and reuse it
   where we like across our application.


> Components are reusable wherever we like across our app and as many times
   as we like.

==============================================================