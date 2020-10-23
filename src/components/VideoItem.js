import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div className='video-item' onClick={() => { onVideoSelect(video) }}>
            <img className='video-image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className='video-content'>
                <h2 className='video-title'>{video.snippet.title}</h2>
            </div>
        </div>
    );
}

export default VideoItem;