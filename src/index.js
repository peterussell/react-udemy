import React from 'react'; // reference libraries inside the node_modules directory
import ReactDOM from 'react-dom';

// must explicitly reference files for our own component exports
import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyA1zjtE8DuqwjysYaNvcfIGS_x-Mk9VItk';

// Create a new component, this component should produce some HTML
const App = () => {
  // Turns into React.createElement(...), which is why we need import React
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
