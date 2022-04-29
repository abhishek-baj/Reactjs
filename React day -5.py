Reactjs day-5
=============

State and Managing Data :
=======================
 

  * What is state?

  >  State is a concept that refers to how data in our application changes over
     time.

  > The significance of state in React is that it is a way to talk about our data
    separately from the user interface (what the user sees).   


  >  We talk about state management, because we need an effective way to keep
    track of and update data across our components as our user interacts with it.
  
  >  To change our application from static HTML elements to a dynamic one that
     the user can interact with, we need state.

  * Common examples of using state:
     ============================= 


     > We need to manage state often when our user wants to interact with our
       application.

     > When a user types into a form, we keep track of the form state in that
       component.

     > When we fetch data from an API to display to the user (i.e. posts in a blog), we
         need to save that data in state.   
     
     > When we want to change data that a component is receiving from props, we 
       use state to change it instead of mutating the props object.

    *Introduction to React hooks with useState :
     ========================================= 


     > The way to "create" state is React within a particular component is with
       the useState hook.


     > What is a hook? It is very much like a JavaScript function, but can only be used
       in a React function component at the top of the component .

     > We use hooks to "hook into" certain features and useState gives us the ability
        to create and manage state. 

     > useState is an example of a core React hook that comes directly from the React library:
       React.useState  .

     >                  import React from 'react';
                        function Greeting() {
                        const state = React.useState("Hello React");
                     return <div>{state[0]}</div>// displays "Hello React"}
     

     > How does useState work? Like a normal function, we can pass it a starting
       value (i.e. "Hello React").


     > What is returned from useState is an array. To get access to the state variable
      and its value, we can use the first value in that array: state[0] .


    > There is a way to improve how we write this, however. We can use array
      destructuring to get direct access to this state variable and call it what we like,i.e.title.useState
   

    >                                 import React from 'react';
                                      function Greeting() {
                                     const [title] = React.useState("Hello React");
                                     return <div>{title}</div>// displays "Hello React"}


  > What if we want to allow our user to update the greeting they see?


>  If we include a form, a user can type in a new value. However, we need a way
   to update the initial value of our title.


>                                import React from "react";
                                 function Greeting() {
                                 const [title] = React.useState("Hello React");
                                 return (
                                    <div>
                                 <h1>{title}</h1>
                                 <input placeholder="Update title" />
                                 </div>
                                 };

                                }

>  We can do so with the help of the second element in the array that useState
  returns. It is a setter function, to which we can pass whatever value we want
  the new state to be.

> In our case, we want to get the value that is typed into the input when a user
  is in the process of typing. We can get it with the help of React events.  