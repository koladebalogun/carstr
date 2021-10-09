import {Html} from '@react-three/drei';
import Model2 from './Model2';
import {Section} from './Section';

const HTMLContent = () => {
    return ( 
        <Section offset={1} factor={1.5}>
            <group position={[0,12,0]}>
                <mesh  position={[0,2,0]}>
                <Model2/>
                </mesh>
                <Html fullscreen>
                </Html>
            </group>
        </Section>
     );
}
 
export default HTMLContent;