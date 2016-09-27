import _ from 'lodash';
import React, { Component } from 'react'; // reference libraries inside the node_modules directory
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// must explicitly reference files for our own component exports
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA1zjtE8DuqwjysYaNvcfIGS_x-Mk9VItk';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('electra junior');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // debounce returns a version of the same function that can only be called
    // once every x milliseconds (the second argument).
    // We can call it as much as we want, but it will only run the function once
    // every period.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // rate throttling
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
