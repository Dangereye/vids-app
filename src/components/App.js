import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [videos, search] = useVideos('ps5 recent');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className='container'>
            <SearchBar onFormSubmit={search} />
            <div className='grid'>
                <div className='left'>
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className='right'>
                    <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                </div>
            </div>
        </div >
    );
}

export default App;