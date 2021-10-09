import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';


const Model = props => {
    const ref = useRef()
    useFrame(()=>{
       ref.current.rotation.y += 0.01;
    
    })
    
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + props.path);

    return ( 
        <>
            <mesh ref={ref} castShadow receiveShadow>
                <primitive object={gltf.scene} 
                scale={new Array(3).fill (4.5)}
                position={[0,4.9,0]}
                />
            </mesh>
        </>
     );
}






 
export default Model;