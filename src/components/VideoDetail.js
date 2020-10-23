import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className='selected-video'>
                <div className='player'>
                    <iframe title='video player' src='' allowFullScreen></iframe>
                </div>
                <div className='info'>
                    <h4 >Loading..</h4>
                    <p>Loading..</p>
                </div>
            </div >
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className='selected-video'>
            <div className='player'>
                <iframe title='video player' src={videoSrc} allowFullScreen></iframe>
            </div>
            <div className='info'>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div >
    );


}
export default VideoDetail;