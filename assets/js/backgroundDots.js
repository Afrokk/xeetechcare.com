export default function initBackgroundDots() {
  VANTA.DOTS({
    el: '#render-dots',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 0.5,
    scaleMobile: 1.0,
    color: 0xF97416,
    backgroundColor: 0x111215,
    size: 1.4,
    spacing: 23.0,
    showLines: false,
  });
}
