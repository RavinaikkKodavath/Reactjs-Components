import React from 'react'
import { useState } from 'react'

export default function ButttonEvent() {
    const [status,setStatus] = useState(1);
    const [textcontainer,setTextcontainer] = useState({display:'none'});
    const [imgcontainer,setImgcontainer] = useState({display:'none'});
    const [progressbar,setprogressbar] = useState(1);

var count =1 ;
function Loading(){
 if (count === 100 ){
    setImgcontainer({
        display:'block'
    })
    setTextcontainer({
        display:'block'
    })
 }else{
    count++;
    setStatus(count);
 }
}


function hanldeLoadClick(){
   setTextcontainer({
    display:'block'
   })
   setInterval(Loading,100)

}

  return (
    <div className='container-fluid' ><br></br>
        <button onClick={hanldeLoadClick} className='btn btn-danger'>To Load image click</button>
      <div className='d-flex justify-content-center align-items-center' style={{height:'500px'}}>
        <div className='text-center' style={textcontainer}>
            <progress min="1" max='100' value={progressbar}></progress>
        <div className='spinner-border'>

        </div>

<p>{status} %</p>
<p>Loading</p>
<div style={imgcontainer}>
    <img src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PbdU9SpPL._AC_SX466_.jpg' width='500px' height='400px'></img>
</div>
        </div>
      </div>
    </div>
  )
}
