import React, { Suspense} from 'react';
import { Canvas} from '@react-three/fiber';
import Lights from './Lights';
import HtmlContent from './HtmlContent';
import { Link } from 'react-router-dom';




const BmwM1 = () => {
    return ( 
        <div className='main'>
            <div className="home">
                    <Link className='home' to='/'><h3>HOME</h3></Link>
            </div>
            <div className="garage-container">
                <h1 className='text'>meet the bmw m1</h1>
                <h4 className='sub-txt'>coming soon</h4>
                <Link to='/Bmwm2'>Next</Link>
                <Canvas camera={{position:[0,10,20], fov:30}} colorManagement shadowMap>
                    <Lights/>
                    <Suspense fallback={null}>
                        <HtmlContent/>
                    </Suspense>
                </Canvas>
            </div>
        
        </div>
     );
}
 
export default BmwM1;