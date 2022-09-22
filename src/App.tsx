import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import WomenModel from './components/HumanModel';
import DressModel from './components/DressModel';
import { MODEL_SIZE_DEFAUT } from "./constants/commons";
import './App.css';

function App() {
  const [hips, setHips] = useState(MODEL_SIZE_DEFAUT.hips);
  const [chest, setChest] = useState(MODEL_SIZE_DEFAUT.chest);
  const [waist, setWaist] = useState(MODEL_SIZE_DEFAUT.waist);
  const [height, setHeight] = useState(MODEL_SIZE_DEFAUT.height);

  const onChangeHeight = (e: any) => {
    setHeight(e.target.value);
  }

  const onChangeChest = (e: any) => {
    setChest(e.target.value);
  }

  const onChangeWaist = (e: any) => {
    setWaist(e.target.value);
  }

  const onChangeHips = (e: any) => {
    setHips(e.target.value);
  }

  return (
    <div className="App">
      <section className="preview-container">
        <Canvas>
          <Suspense fallback={null}>
              <WomenModel height={height} chest={chest} waist={waist} hips={hips} />
              <DressModel />
              <OrbitControls />
              <Environment background preset="studio" />
          </Suspense>
        </Canvas>
      </section>
      <section className="config-container">
        <div className="input-wrapper">
          <div className="input-title-wrapper"><span>Height</span><span>{height} cm</span></div>
          <div className="input-control"><input value={height} type="range" id="height" name="height" min="150" max="200" onChange={onChangeHeight} /></div>
        </div>
        <div className="input-wrapper">
          <div className="input-title-wrapper"><span>Chest</span><span>{chest} cm</span></div>
          <div className="input-control"><input value={chest} type="range" id="chest" name="chest" min="72" max="116" onChange={onChangeChest} /></div>
        </div>
        <div className="input-wrapper">
          <div className="input-title-wrapper"><span>Waist</span><span>{waist} cm</span></div>
          <div className="input-control"><input value={waist} type="range" id="waist" name="waist" min="60" max="130" onChange={onChangeWaist} /></div>
        </div>
        <div className="input-wrapper">
          <div className="input-title-wrapper"><span>Hips</span><span>{hips} cm</span></div>
          <div className="input-control"><input value={hips} type="range" id="hips" name="hips" min="80" max="130" onChange={onChangeHips} /></div>
        </div>
      </section>
    </div>
  );
}

export default App;
