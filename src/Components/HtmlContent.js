import {Html} from '@react-three/drei';
import Model from './Model';
import {Section} from './Section';

const HtmlContent = (props) => {
    return ( 
        <Section offset={1} factor={1.5}>
            <group position={[0,13,0]}>
                <mesh  position={[0,2,0]} castShadow receiveShadow>
                <Model path='/bmw_1_series_m_coupe/scene.gltf' castShadow/>
                </mesh>
                <Html fullscreen/>
            </group>
        </Section>
     );
}
 
export default HtmlContent;