import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { S3_BASE_URL, MODEL_SIZE_DEFAUT } from '../../constants/commons';

interface ModelProps {
  height: number;
  chest: number;
  waist: number;
  hips: number;
}

const WomenModel = (props: ModelProps) => {
  const { height, chest, waist, hips }= props;
  console.log('waist, hips: ', waist, hips);

  const gltf = useLoader(GLTFLoader, `${S3_BASE_URL}assets/models/f_basemesh_v1/scene.gltf`);

  useEffect(() => {
    if (gltf) {
      const scaleX = parseFloat((MODEL_SIZE_DEFAUT.height / height).toFixed(4));
      const scaleZ = parseFloat((chest / MODEL_SIZE_DEFAUT.chest).toFixed(4));
      gltf.scene.scale.set(scaleX, 1, scaleZ);
    }
  }, [gltf, height, chest]);

  return <primitive object={gltf.scene} position={[0, -0.5, -3]} />;
}

export default WomenModel;