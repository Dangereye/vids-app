import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderVids = videos.map((video) => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
    });

    return (
        <div className='ui list'>
            {renderVids}
        </div>
    )
};

export default VideoList;