import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Zapato from './Zapato'
import styled from 'styled-components';

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;

  @media only screen and (max-width: 768px){
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Zapato/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
    We design products with a strong focus on the both world class design and ensuring your product is a market success.
  </Desc>
  </>
  )
}

export default ProductDesign