import { gsap } from "gsap";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, SplitText);

const items = document.querySelectorAll('.catalog-preview__grid-item');

const onMouseEnterHandler = (evt) => {
  const item = evt.target;
  item.addEventListener('mouseleave', onMouseLeaveHandler);
  item.classList.add('animation-prepared');

  setTimeout(() => {
    if(item.classList.contains('animation-prepared')) {
      const text = item.querySelector('.catalog-preview__grid-title h3');
      const tl = gsap.timeline({repeat: -1, repeatDelay: 5});
      const  splitText = new SplitText(text, { type: "words,chars" });
      const  chars = splitText.chars;

      gsap.set(text, { perspective: 400 });

      tl.from(chars, {
        duration: .5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.05
      });
    }
  }, 3000);
}

const onMouseLeaveHandler = (evt) => {
  const item = evt.target;
  item.classList.remove('animation-prepared');
}

if(items) {
  items.forEach(item => {
    item.addEventListener('mouseenter', onMouseEnterHandler);
  });
};
