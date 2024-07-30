import * as Babylon from "@babylonjs/core";

const canvas = document.getElementById('renderCanvas');
const engine = new Babylon.Engine(canvas);

const createScene = function () {
  const scene = new Babylon.Scene(engine);

  return scene;
};
const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});
