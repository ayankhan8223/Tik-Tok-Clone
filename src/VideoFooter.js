import React from 'react'
import "./VideoFooter.css"
import Ticker from 'react-ticker'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
function VideoFooter({channel,description,song}) {
    return (
        <div className="videofooter">
            <div className="videoFooter_text">
              <h3>@{channel}</h3>
              <p>{description}</p>
<div className="VideoFooter_ticker">
        <MusicNoteIcon className="videofooter__icon"/>
         <Ticker mode="smooth">
            {({ index }) => (
            <>
            <p>{song}</p>
              
            </>
             )}
         </Ticker>
</div>

            </div>
  <img className="videoFooter__logo" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
      
    )
}

export default VideoFooter;
