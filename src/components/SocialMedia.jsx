import React from 'react'

const SocialMedia = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <React_logo/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default SocialMedia