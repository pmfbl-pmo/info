var scena, kamera, renderer;
var mesh;
var brzina = 0.02;

var sirina  = window.innerWidth;
var visina = window.innerHeight;

function init() {
    scena = new THREE.Scene();
    initCamera();
    initMesh();
    initLights();
    initRenderer();

    document.body.appendChild(renderer.domElement);
}

function initCamera() {
    kamera = new THREE.PerspectiveCamera(30, sirina / visina, 1, 10);
    kamera.position.set(0, 3.5, 5);
    kamera.lookAt(scena.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(sirina, visina);
}

function initLights() {
    var light = new THREE.AmbientLight(0xffffff);
    scena.add(light);
}

function initMesh() {
    var loader = new THREE.JSONLoader();
    loader.load('lopta.json', function(geometrija, materijali) {
    	console.log(materijali);
        mesh = new THREE.Mesh(geometrija, new THREE.MeshFaceMaterial(materijali));
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.75;
    	mesh.translation = geometrija.center(geometrija);
        scena.add(mesh);
    });
	
}

function rotateMesh() {
    if (!mesh) {
        return;
    }
   
    mesh.rotation.x = brzina ;
    mesh.rotation.y -= 0.01 ;
    mesh.rotation.z += 0.02 ;
}

function render() {
    requestAnimationFrame(render);
    rotateMesh();
    renderer.render(scena, kamera);
}

init();
render();