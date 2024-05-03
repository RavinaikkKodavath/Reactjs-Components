import React from 'react'
import { useState } from 'react'

export default function Mouse_over() {
    const [photos] =useState(['images/mobile1.jpg','images/mobile2.jpg','images/mobile3.jpg','images/mobile4.jpg'])
    const [Preview,setPreview] = useState("");

    function handleMouseOver(e){
        setPreview(e.target.src);
    }
  return (
    <div>
      <section className='row mt-2' >
        <nav className='col-2'>
            {
                photos.map(photo =>

                    <div className='mb-2 p-1 border-2 border-primary'>
<img src={photo} onMouseOver={handleMouseOver}/>
                    </div>


                )
            }
        </nav>
        <main className='col-10'>
            <img width="300" className='preview-image' height="300" src={Preview}/>

        </main>

      </section>
    </div>
  )
}
