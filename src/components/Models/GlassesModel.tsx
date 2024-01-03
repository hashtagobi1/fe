"use client";

import { OrbitControls, Text, useGLTF } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { GLTF } from "three-stdlib";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

type Props = {};

type GLTFResult = GLTF & {
  nodes: {
    ModSpyTron_MatSpyTron_0: THREE.Mesh;
  };
  materials: {
    MatSpyTron: THREE.MeshStandardMaterial;
  };
  //   animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

const url = "/models/scene.gltf";

const GlassesModel = (props: Props) => {
  function Controls() {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    return <OrbitControls args={[camera, domElement]} />;
  }

  const ref = useRef<THREE.Group>(null);
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <div className="md:w-[50vw] h-[75vh] w-[40vw] border border-black">
      <Canvas className=" ">
        <ambientLight />
        <pointLight position={[5, 5, 5]} intensity={0.3} />
        <pointLight position={[-3, -3, 2]} />
        <Controls />

        <group ref={ref} {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={0.3}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                //   @ts-ignore
                geometry={nodes.ModSpyTron_MatSpyTron_0.geometry}
                material={materials.MatSpyTron}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
            </group>
          </group>
        </group>

        <Text scale={0.3} color={"#000"} position={[0, 2, 2]}>
          Drag Me!
        </Text>
      </Canvas>
    </div>
  );
};

// useGLTF.preload(scene);

export default GlassesModel;
