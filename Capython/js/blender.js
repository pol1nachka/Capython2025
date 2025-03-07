let scene, camera, renderer, model;
const stage=document.querySelector('.watch-animation')
function init() {
   // Scene setup
   scene = new THREE.Scene();
   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
   renderer.setSize(window.innerWidth, window.innerHeight);
   // document.body.appendChild(renderer.domElement);
   stage.appendChild(renderer.domElement);


   // Lighting
   const light = new THREE.AmbientLight(0x404040, 2); // Ambient light
   scene.add(light);


   // Load GLB model
   const loader = new THREE.GLTFLoader();
   loader.load("models/serenastopwatch.gltf", (gltf) => {
       console.log('Model loaded:', gltf); // Log the model to see if it loads
       model = gltf.scene;
       scene.add(model);
       model.position.set(0, 0, 0);
       camera.position.z = 5;
       model.scale.set(0.5, 0.5, 0.5);


       // Start animation loop
       animate();
   }, undefined, (error) => {
       console.error('Error loading model:', error); // Log any errors
   });
}


function animate() {
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
}


// Scroll animation (Only rotates on scroll)
window.addEventListener("scroll", () => {
   if (model) {
       let scrollY = window.scrollY / 500; // Adjust speed
       model.rotation.y = scrollY * Math.PI * 2;
   }
});


init();


