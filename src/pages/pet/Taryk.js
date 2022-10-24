import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
const Taryk = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        scene.add(camera)
        camera.position.set(5, 5, 5);
        camera.lookAt(new THREE.Vector3())
        renderer.setSize(width, height)
        currentRef.appendChild(renderer.domElement)

        //orbit
        const orbitControls = new OrbitControls(camera, renderer.domElement)
        orbitControls.enableDamping = true;

        //resize 

        const resize = () => {
            renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
            camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
            camera.updateProjectionMatrix()
        }

        window.addEventListener("resize", resize)

        //gltf
        // const dracoLoader = new DRACOLoader();
        // dracoLoader.setDecoderPath("./Draco/");
        const gltfLoader = new GLTFLoader();
        // gltfLoader.setDRACOLoader(dracoLoader);

        gltfLoader.load("/ruby.glb", (gltf) => {
            scene.add(gltf.scene)
        })

        const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientalLight);

        const animate = () => {
            orbitControls.update();
            renderer.render(scene, camera)
        }
        animate()
        return () => {
            window.removeEventListener("resize", resize);
            currentRef.removeChild(renderer.domElement)
        }
    }, [])

    return (
        <div className="" ref={mountRef} style={{ width: "100%", height: "100vh" }}>

        </div>
    )
}

export default Taryk;