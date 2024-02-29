import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

export const ButtonWithHoverAnimation = ({ btnText, className }) => {
	ButtonWithHoverAnimation.propTypes = {
		btnText: PropTypes.string,
		className: PropTypes.string,
	};
	const buttonRef = useRef(null);

	useEffect(() => {
		const button = buttonRef.current;

		const hoverAnimation = gsap.to(button, {
			scale: 1.05,
			duration: 0.3,
			ease: "power2.in",
			paused: true,
		});
		button.addEventListener("mouseenter", () => hoverAnimation.play());
		button.addEventListener("mouseleave", () => hoverAnimation.reverse());

		return () => {
			button.removeEventListener("mouseenter", () => hoverAnimation.play());
			button.removeEventListener("mouseleave", () => hoverAnimation.reverse());
		};
	}, []);

	return (
		<button ref={buttonRef} className={`${className} bg-black px-2 py-4 w-full text-white text-sm`}>
			{btnText}
		</button>
	);
};
