import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // note: the method of putting the props.video value into a const variable called 'video'
  // automatically using the arguments list is an ES6 thing. It's identical to...
  // const VideoListItem = (props) => { const video = props.video; }
  // and similarly...
  // const onVideoSelect = props.onVideoSelect;

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
