import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';


const Model2 = props => {
    const ref = useRef()
    useFrame(()=>{
       ref.current.rotation.y += 0.01;
    
    })
    
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + './bmw_m2/scene.gltf');

    return ( 
        <>
            <mesh ref={ref}>
                <primitive object={gltf.scene} 
                scale={new Array(3).fill (12)}
                position={[0,6,0]}
                />
            </mesh>
        </>
     );
}






 
export default Model2;