"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import GlassesModel from "./GlassesModel";

type Props = {};

const ModelWrapper = (props: Props) => {
  const Glasses = dynamic(
    () => import("./GlassesModel").then((mod) => mod.default),
    { ssr: false }
  );
  return (
    <Suspense fallback={null}>
      <Glasses />
    </Suspense>
  );
};

export default ModelWrapper;
