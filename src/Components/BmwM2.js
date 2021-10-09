import React, { Suspense} from 'react';
import { Canvas} from '@react-three/fiber';
import Lights from './Lights';
import HTMLContent from './HtmlContent2';
import { Link } from 'react-router-dom';




const BmwM2 = () => {

    return ( 
        <div className='mn'>
            <div className="home">
                    <Link className='home' to='/'><h3>HOME</h3></Link>
            </div>
        <div className="contain">
            <h1 className='txt'>meet the bmw m2</h1>
            <h4 className='sub-txt'>coming soon</h4>
            <Link to='/Bmwm1'>Previous</Link>
            <Canvas camera={{position:[0,10,20], fov:30}}>
                {/* <ambientLight intensity={1.5}/> */}
                <Lights/>
                <Suspense fallback={null}>
                    <HTMLContent/>
                </Suspense>
            </Canvas>
        </div>
        </div>
     );
}
 
export default BmwM2;