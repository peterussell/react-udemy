// This syntax means 'import React, then pull out the class 'Component'
// and give it the variable name 'Component'.
// Equivalent to const Component = React.Component;
import React, { Component } from 'react';

// Uses ES6 JavaScript classes, and extend the React Component class.
// Extending React.Component gives us all the functionality of the
// React.Component class, like the render() function

// If we didn't use { Component } we'd have to use 'extends React.Component...' here
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // This is how we define functions in JS classes.
  // All React.Components must have a render() function.
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
    // equaivalent to:
    // return <input onChange={(event) => { console.log(event.target.value); }} />;

    // could also use a class method:
    // return <input onChange={onInputChange} />
    // onInputChange(event) { console.log(event.target.value); }
  }
}

export default SearchBar; // allows other components to use SearchBar

/*
Note on functional vs class-based components:

  Functional components don't extend the React.Component class, they just return JSX.
  They don't generally perform anything too 'intelligent' beyond calculating and returning
  some JSX to be rendered. Functional components *do not have state*.

  Class-based components, on the other hand, extend the React.Component class which
  gives them extra functionality. They must include a render() method which returns
  JSX. They're generally used when you need functionality beyond just rendering
  something - for example, when they need to interact with other components. Class-based
  components *do have state*.

  Both functional and class-based components are used the same way. The .js file they're
  defined in exports the component, which is consumed by importing it and rendering the
  JSX, eg. <SearchBar />

  Examples:

  Functional:

    const SearchBar = () => {
      return <input />;
    }

  Class-based:

    class SearchBar extends Component { // or React.Component - see notes above for more on this
      render() {
        return <input />;
      }
    }
*/
