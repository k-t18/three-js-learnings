const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane
  100 // far clipping plane
);
camera.position.z = 4;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = -1;
scene.add(mesh);

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const materia2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh2 = new THREE.Mesh(geometry2, materia2);
mesh2.position.x = 1;
scene.add(mesh2);

const geometry3 = new THREE.BoxGeometry(1, 1, 1);
const materia3 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh3 = new THREE.Mesh(geometry3, materia3);
mesh3.position.x = -3.5;
scene.add(mesh3);

// mesh.position.x = 0;
// mesh.position.y = -2;
// mesh.position.z = -9;

// Rotation in radians. Rotate the mesh on the x axis
// mesh.rotation.x = 2;
// mesh.rotation.z = 1.8;

const canvas = document.querySelector("#myCanvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

function animate() {
  window.requestAnimationFrame(animate);
  mesh.rotation.z += 1.8;
  mesh2.rotation.z += 1.8;
  mesh3.rotation.z += 1.8;
  // mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// animate();
