import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Profile({fullename,bio,profession,mg}) {
    
 const handlename=(fullename)=>(alert('hi '+ fullename));
    return (
    <div>
<img src={mg}/> <br/>
{fullename} <br/>
{bio}<br/>
{profession} <br/><br/>
<button onClick={()=>handlename(fullename)}>Alert</button>


    </div>
  )
}
Profile.defaultProps = {
    fullename: "Taz",
    bio:'bibo',
    profession:'prof',
    mg:'https://th.bing.com/th/id/OIP.8jWjGmCFN5Cu_4GSv8xB5wHaEK?pid=ImgDet&rs=1'
};

Profile.propTypes={
    fullename: propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
}
    