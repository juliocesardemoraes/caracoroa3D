import { useState } from "react";
import Spline from "@splinetool/react-spline";
import "./index.css";

const caraId = "1bd7e208-c02d-44ec-80e7-0a746cac3166";
const coroaId = "2b042e4b-9705-4987-a17a-6a339515d277";
const upId = "ff75bc4b-7ee4-4830-a2df-cae20640def0";
let coroa = null;
let cara = null;
let up = null;
let lastState = -1;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const girarMoeda = () => {
  const num = getRandomInt(2);
  // 0 - Cara
  // 1 - Coroa

  if (lastState === num) {
    up?.emitEvent("keyDown");
  }

  if (num === 0) {
    cara?.emitEvent("keyDown");
  } else if (num === 1) {
    coroa?.emitEvent("keyDown");
  }

  lastState = num;
};

const carregarInfo = (splineApp) => {
  cara = splineApp?.findObjectById(caraId);
  coroa = splineApp?.findObjectById(coroaId);
  up = splineApp?.findObjectById(upId);
};

function CaraCoroa() {
  return (
    //Botão pra mostrar cara ou coroa
    <div>
      <h1>Cara ou coroa</h1>
      <Spline
        scene="https://prod.spline.design/Nur21yM-BwSMwSWq/scene.splinecode"
        onLoad={carregarInfo}
      />
      <button onClick={() => girarMoeda()}>CARA OU COROA</button>
    </div>
  );
}

export default CaraCoroa;
