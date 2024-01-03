export interface VantaDotsOptions {
  el: string;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  backgroundColor: number;
  size: number;
  spacing: number;
  showLines: boolean;
}

export interface VantaEffect {
  destroy: () => void;
}

export interface Vanta {
  DOTS: (options: VantaDotsOptions) => VantaEffect;
}

declare global {
  const VANTA: Vanta;
}
