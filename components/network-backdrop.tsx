"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * Lightweight animated constellation — a nod to the "network behind what's next".
 * Gold nodes drift and link to nearby neighbors on a dark field.
 */
export function NetworkBackdrop({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (canvasElement === null) {
      return;
    }

    const contextElement = canvasElement.getContext("2d");

    if (contextElement === null) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasElement;
    const context: CanvasRenderingContext2D = contextElement;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GOLD = "197, 153, 58";
    const LINK = 150;

    function build() {
      const parent = canvas.parentElement;

      if (parent === null) {
        return;
      }

      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        70,
        Math.max(28, Math.round((width * height) / 22000)),
      );

      nodes = Array.from(
        { length: count },
        (): Node => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6,
        }),
      );
    }

    function frame() {
      context.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
        }

        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        if (a === undefined) {
          continue;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];

          if (b === undefined) {
            continue;
          }

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < LINK) {
            const alpha = (1 - dist / LINK) * 0.22;

            context.strokeStyle = `rgba(${GOLD}, ${alpha})`;

            context.lineWidth = 0.6;

            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        context.beginPath();

        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);

        context.fillStyle = `rgba(${GOLD}, 0.7)`;

        context.fill();
      }

      if (!prefersReduced) {
        raf = requestAnimationFrame(frame);
      }
    }

    build();
    frame();

    const onResize = () => {
      cancelAnimationFrame(raf);
      build();
      frame();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
