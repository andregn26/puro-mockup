import "./App.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useWindowSize } from "./hooks/useWindowSize";
import { IconLogo } from "./components/Icons";
import puroHotelInteriorMobile from "/public/assets/puro_hotel_interior_mobile.webp";
import puroHotelsLodzRoomsSuite001 from "/public/assets/puro_hotels_lodz_rooms_suite_001.webp";
import puroHotelWarsawRoomsLoreta008 from "/public/assets/puro_hotel_warsaw_rooms_loreta_008.webp";
import openMenu from "/public/assets/Open menu.svg";
import chevronDown from "/public/assets/svgexport-1.svg";
import puroHotelWarsawInteriors002 from "/public/assets/puro_hotel_warsaw_interiors_002.webp";
import puroHotelWarsawInteriors0021 from "/public/assets/puro_hotel_warsaw_interiors_002 (1).webp";

function App() {
	return (
		<div className="relative font-inter">
			<Header />
			<Hero />
			<main className="bg-background">
				<section className="py-16 px-4 flex flex-col gap-6 md:grid md:grid-areas-layout md:grid-cols-layout md:grid-rows-layout md:pr-0">
					<h2 className="uppercase text-4xl lg:text-[96px] lg:leading-[1.05]  md:grid-in-title ">
						The Puro <br className="hidden lg:inline-block" /> Experience
					</h2>
					<img className="grid-in-image w-full h-full" src={puroHotelsLodzRoomsSuite001} alt="" />
					<div className="flex flex-col gap-8 md:md:grid-in-text lg:max-w-xl md:mt-4">
						<p className="font-light">
							Unique, a little bit quirky, and imbued with a true sense of place. PURO hotels are a refined yet relaxed experience that bring together
							the culture and creativity of each city to create a stay that’s about more than just sleep.
						</p>
						<p className="md:mt-8 text-sm font-semibold">
							<a href="#" className="after:content-['_—']">
								Discover our concept
							</a>
						</p>
					</div>
				</section>
				<section className="bg-black text-white flex flex-col items-center justify-center h-screen">Carossel</section>
				<section className="py-16 px-4 flex flex-col gap-6 md:grid md:grid-areas-layout md:grid-cols-layout md:grid-rows-layout md:pr-0">
					<h2 className="uppercase text-4xl lg:text-[96px] lg:leading-[1.05]  md:grid-in-title ">IMPECCABLE TASTE</h2>
					<img className="grid-in-image w-full h-full" src={puroHotelWarsawRoomsLoreta008} alt="" />
					<div className="flex flex-col gap-8 md:md:grid-in-text lg:max-w-xl md:mt-4">
						<p className="font-light">
							Let your senses run wild at PURO Hotels. Carefully considered to add style and refinement to your stay with us, our restaurants and bars
							take special care to mix the local and global to bring you a truly cosmopolitan and contemporary dining experience.
						</p>
						<p className="md:mt-8 text-sm font-semibold">
							<a href="#" className="after:content-['_—']">
								Discover our restaurants
							</a>
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}

const Header = () => {
	const { width } = useWindowSize();
	// const [headerClasses, setHeaderClasses] = useState("absolute top-0 w-full z-50 px-8 pt-8 pb-10 bg-gradient-to-b from-black/80 text-white");
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

const Hero = () => {
	const [backgroundImage, setBackgroundImage] = useState(puroHotelInteriorMobile);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 767) {
				setBackgroundImage(puroHotelInteriorMobile);
			} else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
				setBackgroundImage(puroHotelWarsawInteriors002);
			} else {
				setBackgroundImage(puroHotelWarsawInteriors0021);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section
			className="relative flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover"
			style={{ backgroundImage: `url("${backgroundImage}")` }}>
			<div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white text-center px-8">
				<h1 className="text-5xl xl:text-6xl font-light uppercase">
					A new way <br /> to stay
				</h1>
				<p className="mt-6 text-sm max-w-md">
					Designed to be an experience. PURO hotels are made to inspire and entertain through sophisticated design and exceptional service.
				</p>
				<ButtonWithHoverAnimation btnText={"Discover our destinations"} className={"max-w-64 mt-8"} />
			</div>
		</section>
	);
};

const ButtonWithHoverAnimation = ({ btnText, className }) => {
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
		<button ref={buttonRef} className={`${className} bg-black px-2 py-4 w-full text-white  text-sm`}>
			{btnText}
		</button>
	);
};

export default App;
