import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import { S3_BASE_URL } from 'src/constants/commons';
import { useEffect } from 'react';

const DressModel = () => {
  const texture = useLoader(TextureLoader, `${S3_BASE_URL}assets/models/woman_dress/textures/Cotton_Oxford_FCL1PSC011_FRONT_4174_baseColor.png`);
  const colorMap = useLoader(GLTFLoader, `${S3_BASE_URL}assets/models/woman_dress/scene.gltf`);
  const { nodes, materials } = colorMap;
  console.log('colorMap: ', colorMap);
  console.log('materials: ', materials);
  const dress_0 = nodes.dress_Cotton_Oxford_FCL1PSC011_FRONT_4174_0 as any;
  const dress_1 = nodes.dress_Stretch_Denim_FCL1PSD003_FRONT_4181_0 as any;
  

  useEffect(() => {
    if (materials && materials.Cotton_Oxford_FCL1PSC011_FRONT_4174) {
      Object.assign(materials.Cotton_Oxford_FCL1PSC011_FRONT_4174, {  
        map: colorMap, 
      });
    }
  }, [colorMap, materials]);
  // obj.rotateY(0.321111111);
  
  return (
    <group>
      <mesh geometry={dress_0.geometry} scale={0.055} position={[0, -5.17, -3.14]}>
        <meshPhysicalMaterial map={texture} color="grey" />
      </mesh>
      <mesh geometry={dress_1.geometry} scale={0.055} position={[0, -5.17, -3.14]}>
        <meshPhysicalMaterial map={texture} color="black" />
      </mesh>
    </group>
  );
}

export default DressModel;