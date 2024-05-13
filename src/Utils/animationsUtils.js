import gsap from "gsap";

export function applyRevealAnimation(selector) {
  document.querySelectorAll(selector).forEach((elem) => {
    const parent = document.createElement("span");
    const child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

export function animateReveal(selector) {
  const tl = gsap.timeline();
  tl.to(`${selector} .parent .child`, {
    y: "-100",
    duration: 1,
    stagger: 0.1,
    ease: "power2.inOut",
  });
  tl.to(".child span", {
    x: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.inOut",
  });
}
export function loader() {
  const tl = gsap.timeline();

  tl.to(".parent .child", {
    y: "-100%",

    duration: 1,
    stagger: 0.1,
    ease: "power2.inOut",
  });

  tl.to("#loader", {
    height: 0,
    duration: 1,
  });
  tl.to("#green", {
    height: "100vh",
    delay: -1,
    top: 0,
  });
  tl.to("#green", {
    height: 0,
    duration: 1,
  });
  tl.to("#navbar", {
    height: "fit-content",
    duration: 2,
    delay: 0.3,
    stagger: 0.1,
    ease: "power2.inOut",
  });
}
export function rotateAnimation(selector) {
  const elements = document.querySelectorAll(selector);
  gsap.from(elements, {
    rotate: 360,
    duration: 1, // Adjust duration as needed
    ease: "power2.inOut",
  });
}
export function animateUnderline(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((elem) => {
    const underline = document.createElement("span");
    underline.classList.add("underline");
    elem.appendChild(underline);

    elem.addEventListener("mouseenter", () => {
      gsap.to(underline, {
        scaleX: 1,
        ease: "power2.inOut",
        duration: 0.3,
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(underline, {
        scaleX: 0,
        ease: "power2.inOut",
        duration: 0.3,
      });
    });
  });
}
