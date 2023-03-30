import './css/info.css'
import { useState, useEffect } from 'react';


function Info() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDKujCbEM-0GpHU03UFlWsnWFt0Kv5XZIU&channelId=UCYWw2P9ZitCiWu49a_mqbRw&part=snippet,id&order=date&maxResults=100")
      .then((r) => r.json())
      .then((data) => setData(data))
  }, [])


  return (
    <div className='Info'>

      <div className="derecha">



      </div>

      <ul>
        { data && data.map((a) => { return <li key={a.items}>{a.items}</li> })}
      </ul>

    </div>
  );
}

export default Info;
