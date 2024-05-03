import React,{useState} from 'react'

export default function MouseDrag() {
    const [styleObject,setstyleObject] = useState({'position':'','top':'','left':''})
function handleMouseMove(e){
    setstyleObject({
        'position':'fixed',
        'left':e.clientX + 'px',
        'top':e.clientY + 'px'

    })
}

  return (
    <div>
      <div onMouseMove={handleMouseMove}>
        <div style={{height:'1000px'}}>
            <p>Move your mouse pointer to test
            X = {styleObject.left}  y= {styleObject.top}

            </p>
            <br></br>
         
                    <img style={styleObject} width='500' className='me-2' height='500' src='images/image.gif'></img>
                  
        </div>

      </div>
    </div>
  )
}
