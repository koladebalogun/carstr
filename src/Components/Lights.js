const Lights = () => {
    return ( 
        <>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[20,20,25]} intensity={1.5} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512}/>
        <directionalLight position={[0,20,0]} intensity={1.5}/>
        <spotLight intensity={1.5} position={[1000, 0, 0]}/>
        </> 
    );
}
 
export default Lights;