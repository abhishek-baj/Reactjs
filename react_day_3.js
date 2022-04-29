React js day -3
===============

Components are not normal JavaScript functions:
==============================================

>                                 import React from 'react';
                                  import ReactDOM from 'react-dom';
                                  function Greeting() {
                                  return <div>Hello React!</div>;
                                  }

                                  ReactDOM.render(<Greeting />, document.getElementById("root))

> We use the React import to parse the JSX and ReactDOM to render our
  component to a root element with the id of "root."
==================================================

What can components return?

> Components can return valid JSX elements, as well as strings, numbers,
   booleans, the value null , as well as arrays and fragments.



> It is common to return null if we want a component to display nothing.

  
>                             function Greeting() {
                              if (isAuthUser) {
                              return "Hello again!";
                              } else {
                              return null;
                              }

                          }

> Another rule is that JSX elements must be wrapped in one parent element.
  Multiple sibling elements cannot be returned.




> If you need to return multiple elements, but don't need to add another element
  to the DOM (usually for a conditional), you can use a special React component
  called a fragment.  
 


> Fragments can be written as <></> or when your import react into your file,
  with <React.Fragment></React.Fragment>

 
 >                        function Greeting() {
 	                      const isAuthUser = true;
                          if (isAuthUser) {
                          return (
                          <>
                          <h1>Hello again!</h1>
                          <button>Logout</button>
                          </>
                          );
                          } else {
                          return null;
                          }
                          }



 note: that when attempting to return a number of JSX elements
       that are spread over multiple lines, we can return it all using a
       set of parentheses ().

=====================================================================

Components can return other components:
======================================

> The most important thing components can return is other components.

> Below is a basic example of a React application contained with in a component
  called App that returns multiple components:


                                              import React from 'react';
                                              import ReactDOM from 'react-dom';

                                              Layout from './components/Layout'
                                              Navbar from './components/Navbar';
                                              Aside from './components/Aside';
                                              Main from './components/Main';
                                              Footer from './components/Footer';
                                              function App() {
                                              return (
                                              <Layout>
                                              <Navbar />
                                               <Main />
                                              <Aside />
                                              <Footer />
                                              </Layout>
                                              );
                                              }

 =========================================================================
                                              
 JavaScript can be used in JSX using curly braces: 
 ===============================================                                             
 

 > Just as we can use JavaScript variables within our components, we can use
   them directly within our JSX as well.




> There are a few core rules to using dynamic values within JSX, however.



> JSX can accept any primitive values (strings, booleans, numbers), but it will
  not accept plain objects.


> JSX can also include expressions that resolve to these values.  


> For example, conditionals can be included within JSX using the ternary
 operator, since it resolves to a value.





                                  function Greeting() {
                                  const isAuthUser = true;
                                  return <div>{isAuthUser ? "Hello!" : null}</div>;
                                  } 
============================================================================================                                  