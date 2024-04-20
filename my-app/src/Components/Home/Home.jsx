import React from 'react'
import "./Home.css"
import computerGirl from "./../../Assets/images/Webinar-bro.png"
import netflix from "./../../Assets/logo/netflix.png"
import samplevideo from "./../../Assets/videos/sample.mp4"
import ibm from "./../../Assets/logo/ibm.png"
import meta from "./../../Assets/logo/meta.png"
import samsung from "./../../Assets/logo/samsung.png"
import sony from "./../../Assets/logo/sony.png"
import cisco from "./../../Assets/logo/cisco.png"


const Home = () => {
  return (
    <>
       <section className="home">
           <div className="container">
                <div className="image-container">
                  <img src={computerGirl}/>
                  </div>
                  <div className="text-container">
                    <h1>LEARN FROM THE EXPERT</h1>
                    <h4>Valuable courses at resonable prises</h4>
                    <button>Explore Now</button>
                  </div>
           </div>

           <div className='logo-container'>
              <div className='logos'>
                    <h1>OUR BRANDS</h1>
                <div className='logo'>
                      <img src={netflix}/>
                      <img src={ibm}/>
                      <img src={meta}/>
                      <img src={sony}/>
                      <img src={samsung}/>
                      <img src={cisco}/>
                </div>
              </div>

              <div className="video-container">
                  <div className="video">
                      <video src={samplevideo} autoPlay controls controlsList='nodownload nofullscreen nofullscreen' disablePictureInPicture disableRemotePlayback></video>
                  </div>
              </div>

           </div>


       </section>
    </>
  )
}

export default Home;