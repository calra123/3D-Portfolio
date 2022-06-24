import './style.css'
import * as THREE from 'three'
import { Scene } from 'three'

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.5, 1000);

camera.position.setZ(20);

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#main-content')});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


// Geometry
const geometry = new THREE.OctahedronGeometry(1,0);
const material = new THREE.MeshBasicMaterial({color: 0Xffffff});
const CrystalMesh = new THREE.Mesh(geometry, material);
scene.add(CrystalMesh);
renderer.render(scene, camera);

