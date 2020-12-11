import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoListSelect }) => {
	const renderedList = videos.map(video => {
		return <VideoItem key={video.id.videoId} onVideoItemSelect={onVideoListSelect} video={video} />;
	});
	return <div className="ui relaxed list">{renderedList}</div>;
};

export default VideoList;