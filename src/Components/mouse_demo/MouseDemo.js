import React,{useState} from 'react'
import './mouse_demo.css'

export default function MouseDemo() {
    const [photos] = useState(['https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61R81aPtnVL._AC_SX466_.jpg','https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51nOZh45YBL._AC_SX466_.jpg','images/mobile3.jpg','images/mobile4.jpg','images/mobile5.jpg','images/mobile6.jpg',])

    function handleMouseOver(e){
    e.currentTarget.stop();
}
function handleMouseOut(e){
    e.currentTarget.start();
}
  return (
    <div>
      <div className='mt-4'>
        <marquee scrollamount="20" onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            {
                photos.map(photo =>
                    <img width='200' key={photo} className='me-2' height='200' src={photo}></img>
                    )
            }
        </marquee>

      </div>
    </div>
  )
}
