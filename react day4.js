React day-4
===========

Props :
====

*  Components can be passed values using props :

> Data passed to components in JavaScript are called props.

> Props look identical to attributes on plain JSX/HTML elements, but you can
  access their values within the component itself. 


> Props are available in parameters of the component to which they are passed.
  Props are always included as properties of an object . 



>                                  ReactDOM.render(
                                   <Greeting username="John!" />,
                                   document.getElementById("root")
                                   );
                                   function Greeting(props) {
                                   return <h1>Hello {props.username}</h1>;

                       
                                    }


* Props cannot be directly changed:
=================================

> Props must never be directly changed within the child component.

> Another way to say this is that props should never be mutated, since props
  are a plain JavaScript object .


>                          // We cannot modify the props object:function Header(props) {
                            props.username = "Doug";


                            return <h1>Hello {props.username}</h1>;
                            }  

       



 >  Components are consider pure functions. That is, for every
    input, we should be able to expect the same output. This
    means we cannot mutate the props object, only read from it.

 
 > Special props: the children prop :  
 ===================================


 > The children prop is useful if we want to pass elements / components as
   props to other components . 

 
 > The children prop is especially useful for when you want the same component
   (such as a Layout component) to wrap all other components.

 >                                                                       function Layout(props) {
                                                                         return <div className="container">{props.children}</div>;
                                                                         }
                                                                         function IndexPage() {
                                                                         return (
                                                                        <Layout>
                                                                         <Header />
                                                                          <Hero />
                                                                        <Footer />
                                                                        </Layout>
                                                                         );
                                                                         }
                                                                         function AboutPage() {
                                                                         return (
                                                                         <Layout>
                                                                         <About />
                                                                        <Footer />
                                                                         </Layout>
                                                                         );
                                                                         }

                 

 > The benefit of this pattern is that all styles applied to the Layout component
   will be shared with its child components. 



=====================================================================================

Lists and Keys :
==============

> Iterate over arrays in JSX using map: 
  ==================================== 
 

 > Use the .map() function to convert lists of data (arrays) into lists of elements.


 >                                         const people = ["John", "Bob", "Fred"];
                                           const peopleList = people.map((person) => <p>{person}</p>); 



 >.map() can be used for components as well as plain JSX elements.
 


 >                                               function App() {
                                                 const people = ["John", "Bob", "Fred"];
                                                 return (
                                                 <ul>
                                                 {people.map((person) => (
                                                 <Person name={person} />
                                                 ))}
                                                 </ul>
                                                 );
                                                 }
                                                 function Person({ name }) {
                                                 // we access the 'name' prop directly using object destructuringreturn <p>This person's na
                                                 me is: {name}</p>;
                                                 }
                                                 
================================================================

 The importance of keys in lists :
 ===============================
 

 > Each React element within a list of elements needs a special key prop

 >  Keys are essential for React to be able to keep track of each element that is
   being iterated over with the .map() function

> React uses keys to performantly update individual elements when their data
  changes (instead of re-rendering the entire list)

>Keys need to have unique values to be able to identify each of them according
to their key value.



                                        function App() {
                                        const people = [
                                        { id: "Ksy7py", name: "John" },
                                        { id: "6eAdl9", name: "Bob" },
                                        { id: "6eAdl9", name: "Fred" },
                                        ];
                                        return (
                                        <ul>
                                        {people.map((person) => (
                                        <Person key={person.id} name={person.name} />
                                        ))}
                                        </ul>
                                        );
                                        }

=========================================================================