import gsap from 'gsap';

/**
 * @function animateGradientText()
 * Animates any text with the '.gradient-text' class.
 */
export default function animateGradientText() {
  const text = document.querySelectorAll('.gradient-text');
  gsap.to(text, {
    backgroundPosition: '200% 0%',
    ease: 'power1.inOut',
    repeat: -1,
    duration: 3,
    yoyo: true,
  });
}
