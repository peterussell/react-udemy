import React from 'react';

import VideoListItem from './video_list_item';

// We can use a functional component here because we don't need to hold
// any state

// Important note on props: in a *function* based component, props is passed
// as an argument and must be named in the function definition.
//
// In a *class* based component, props is always available via this.props -
// the props are passed to the constructor on the class.
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
      { /* Although videoItems is an array, React notices it's inside a list and will render each one */ }
    </ul>
  );
}

export default VideoList;
