"use client";

import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const options = {
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    color: { value: ["#6366f1", "#ec4899", "#38bdf8"] },
    links: {
      enable: true,
      color: "#6366f1",
      distance: 130,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    number: {
      value: 45,
      density: { enable: true, area: 900 },
    },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        options={options}
        className="pointer-events-none absolute inset-0 -z-10"
      />
    </ParticlesProvider>
  );
}