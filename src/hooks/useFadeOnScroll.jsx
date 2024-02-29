import { useEffect } from "react";
import gsap from "gsap";

export const useFadeOnScroll = (triggerRef, fadeRef) => {
	useEffect(() => {
		const triggerElement = triggerRef.current;
		const fadeElement = fadeRef.current;

		if (!triggerElement || !fadeElement) return;

		const handleScroll = () => {
			const triggerTop = triggerElement.getBoundingClientRect().top;
			const triggerBottom = triggerElement.getBoundingClientRect().bottom;
			const viewportHeight = window.innerHeight;

			if (triggerTop < viewportHeight && triggerBottom > 0) {
				const progress = 1 - triggerTop / viewportHeight;
				gsap.to(fadeElement, { opacity: progress, duration: 0.5 });
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [triggerRef, fadeRef]);
};
