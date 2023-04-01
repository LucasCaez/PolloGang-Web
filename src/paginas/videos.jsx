import './css/videos.css'
import Barra from '../componentes/barra';
import Footer from '../componentes/footer';
import React, { useEffect, useState } from "react";


function VideosApp() {


  <Barra />
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDKujCbEM-0GpHU03UFlWsnWFt0Kv5XZIU&channelId=UCYWw2P9ZitCiWu49a_mqbRw&part=snippet,id&order=date&maxResults=100")
   // fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAZMQIDv1F8Gwf6DXGc2kM4QyBmUK3gpxE&channelId=UCYWw2P9ZitCiWu49a_mqbRw&part=snippet,id&order=date&maxResults=100")

      .then((r) => r.json())
      .then((data) => setData(data))
  }, [])
  
  let vid
  return (
    <>
<Barra />
      <div className='Info'>
      <h1>NUESTROS VIDEOS</h1>
        

      <div  className="video">
        {    
          data?.items.map((u) => (
              <div key={u.publishedAt} id={u.etag} className="mini">

                <img src={u.snippet.thumbnails.medium.url} />
                <div className="text">
                  <a>{u.snippet.title}</a>
                  <a style={{ fontSize: "0px" }}>{vid = `https://www.youtube.com/watch?v=${u.id.videoId}`}</a><br /><br />
                  <a href={vid} className='btn' >Ver vídeo!</a>
                </div>
              </div>
          )
          )
        }
      </div>
      </div>

<Footer />

    </>
  );
}

export default VideosApp;
