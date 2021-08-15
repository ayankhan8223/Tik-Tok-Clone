import React,{useState} from 'react'
import "./SideBar.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
function SideBar({likes,share,messages}) {
    const [like,setLiked]=useState(false)
    return (
        <div className="VideoSideBar">
            <div className="VideoSideBar__option">
             {(like)?(
                 <FavoriteIcon fontSize="large" onClick= {e => setLiked(false)} />
             ):(
                <FavoriteBorderIcon fontSize="large" onClick= {e => setLiked(true)}/>
             )}
               <p>{like?likes+1:likes}</p>
            </div>
            <div className="VideoSideBar__option">
            <CommentIcon fontSize="large"/>
           <p>{messages}</p>
            </div>
            <div className="VideoSideBar__option">
            <ShareIcon fontSize="large"/>
           <p>{share}</p>
            </div>
            
        </div>
    )
}

export default SideBar
