import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function RotatingCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) {
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const faceTexture = textureLoader.load('/melon-boy.JPG');

    const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff6b6b }),
      new THREE.MeshBasicMaterial({ color: 0x4ecdc4 }),
      new THREE.MeshBasicMaterial({ color: 0x45b7d1 }),
      new THREE.MeshBasicMaterial({ color: 0x96ceb4 }),
      new THREE.MeshBasicMaterial({ map: faceTexture }),
      new THREE.MeshBasicMaterial({ color: 0xff9ff3 }),
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    let animationFrameId: number;
    const animate = () => {
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      currentMount.removeChild(renderer.domElement);
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="rotating-cube-container" />;
}
