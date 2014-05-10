
var camera, scene, renderer, controls;
var geometry, material, mesh;

function init()
{
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );

    camera.position.z = 1000;
    // console.log( 'foobar!', camera );
    scene = new THREE.Scene();
}

function render() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x111144, 1 );
  controls = new THREE.OrbitControls( camera, renderer.domElement );

  document.body.appendChild( renderer.domElement );
}

function animate() {
  console.log( 'empty animate function' );
}