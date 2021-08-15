import React,{useRef,useState} from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import SideBar from './SideBar'

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
    

    const videoRef=useRef(null)
    const [play,setPlay]=useState(false)


    const OnVideoPress=()=>{
        if(play){
            videoRef.current.pause()
            setPlay(false);
        }else{
            videoRef.current.play()
            setPlay(true);
        }
       
       
    }
    return (
        <div className="video">

          <video
          className="video_player" 
          onClick={OnVideoPress}
          ref={videoRef}
           loop
           
           src={url}>

           </video>
<VideoFooter channel={channel} description={description} song={song}/>

          <SideBar likes={likes} share={shares} messages={messages}/>
            
          
          
        </div>
    )
}

export default Video
