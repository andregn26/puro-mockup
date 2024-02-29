import { useState, useEffect } from "react";
import { ButtonWithHoverAnimation } from "../molecules/ButtonWithHoverAnimation";
import gsap from "gsap";
import { useWindowSize } from "../../hooks/useWindowSize";
import { IconLogo } from "../Icons";
import openMenu from "/public/assets/Open menu.svg";
import chevronDown from "/public/assets/svgexport-1.svg";

export const Header = () => {
	const { width } = useWindowSize();
	const [isInBeginning, setIsInBeginning] = useState(true);
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const initialHeight = window.innerHeight;

			if (scrollTop >= initialHeight && !animationTriggered) {
				// User scrolled past the initial height and animation hasn't been triggered yet
				setIsInBeginning(false);
				animateHeaderOnScroll();
				setAnimationTriggered(true);
			} else if (scrollTop < initialHeight && animationTriggered) {
				// User scrolled back to the initial height
				setIsInBeginning(true);
				setAnimationTriggered(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [animationTriggered]);

	const animateHeaderOnScroll = () => {
		const header = document.getElementById("animatedHeader");

		gsap.fromTo(
			header,
			{
				opacity: 0,
				y: -100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
			}
		);
	};
	if (width < 1024) {
		return (
			<header className="fixed top-0 w-full bg-background z-50">
				{/* First row of the header */}
				<div className="py-4 border-b border-neutral-500">
					<div className="flex justify-between items-center px-4 ">
						{/* col 1 */}
						<div>
							<IconLogo className={"max-h-6"} />
						</div>
						{/* col 1 */}
						<div>
							<img src={openMenu} alt="" />
						</div>
					</div>
				</div>
				{/* second row of the header */}
				<div className="py-2  w-full  border-b border-neutral-500">
					<div className="text-xs px-4 flex gap-2">
						<img src={chevronDown} alt="" />
						<span>Destinations</span>
					</div>
				</div>
			</header>
		);
	} else {
		return (
			<header
				id="animatedHeader"
				className={`${
					isInBeginning
						? "absolute top-0 w-full z-50 px-8 pt-8 pb-10 bg-gradient-to-b from-black/80 text-white"
						: "fixed top-0 w-full z-50 px-8 py-4 bg-background text-black"
				}`}>
				<div className="flex justify-between items-center">
					<IconLogo className={"max-h-6"} fill={isInBeginning ? "#fff" : "#000"} />

					<div className="flex gap-4 w-full items-center justify-end">
						<ul className="flex gap-3  text-sm">
							<li>Locations</li>
							<li>Eat & Drink</li>
							<li>Brand Philosophy</li>
							<li>Spaces</li>
							<li>Shop</li>
						</ul>
						<ButtonWithHoverAnimation btnText={"Book now"} className={"max-w-24"} />
					</div>
				</div>
			</header>
		);
	}
};
