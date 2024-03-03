import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { NavigationBar } from "./NavigationBar";

export const HeaderMobile = () => {
	const [isDestinationClicked, setIsDestinationClicked] = useState(false);
	const mobileMenuRef = useRef(null);
	const boxMenuRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		gsap.set(".mobile-menu", { x: "100%" });
	}, []);

	useEffect(() => {
		const boxMenu = boxMenuRef.current;
		gsap.fromTo(boxMenu, { opacity: 0 }, { opacity: 1, duration: 1 });
	}, [isDestinationClicked]);

	const openMenu = () => {
		setIsOpen(true);
		gsap.to(".mobile-menu", { x: 0, duration: 0.5 });
		document.body.style.overflow = "hidden";
	};
	const closeMenu = () => {
		setIsOpen(false);
		gsap.to(".mobile-menu", { x: "100%", duration: 0.5 });
		document.body.style.overflow = "auto";
	};

	const handleClickDestinationSideMenu = () => {
		setIsDestinationClicked((prev) => !prev);
		openMenu();
	};

	const handleClickDestinationMenu = () => {
		setIsDestinationClicked(true);
		openMenu();
	};
	return (
		<>
			{/* This is the navigation bar */}
			<NavigationBar
				toggleMenu={openMenu}
				isSideMenu={false}
				isDestinationClicked={isDestinationClicked}
				handleClickDestination={handleClickDestinationMenu}
			/>
			{/* This is the side menu */}
			<div ref={mobileMenuRef} id="mobileMenu" className={`mobile-menu fixed top-0 right-0 h-full w-full bg-black z-50 `}>
				<NavigationBar
					toggleMenu={closeMenu}
					isSideMenu={true}
					isDestinationClicked={isDestinationClicked}
					handleClickDestination={handleClickDestinationSideMenu}
				/>
				<ul ref={boxMenuRef} id="box-menu" className="text-white mt-24 px-6 pt-3 text-lg flex flex-col gap-2">
					{!isDestinationClicked ? (
						<>
							<li>Locations</li>
							<li>Eat & Drink</li>
							<li>Brand Philosophy</li>
							<li>Spaces</li>
							<li>Shop</li>
						</>
					) : (
						<>
							<li className="text-xs text-white/70">Poland</li>
							<li>Warsaw</li>
							<li>Gdańsk</li>
							<li>Cracow Kazimierz</li>
							<li>Łódź</li>
							<li>Cracow Old Town</li>
							<li>Poznań</li>
							<li>Wrocław</li>
						</>
					)}
				</ul>
			</div>
		</>
	);
};
