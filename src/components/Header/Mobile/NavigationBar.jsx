import gsap from "gsap";
import { IconLogo, IconOpenMenu, IconCloseMenu, IconChevron } from "../../Icons";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const NavigationBar = ({ toggleMenu, isSideMenu, isDestinationClicked, handleClickDestination }) => {
	NavigationBar.propTypes = {
		toggleMenu: PropTypes.func,
		isSideMenu: PropTypes.bool,
		isDestinationClicked: PropTypes.bool,
		handleClickDestination: PropTypes.func,
	};
	const chevronRef = useRef(null);

	useEffect(() => {
		const chevron = chevronRef.current;
		if (isDestinationClicked) {
			gsap.to(chevron, { rotateX: 0 });
		} else {
			gsap.to(chevron, { rotateX: 180 });
		}
	}, [isDestinationClicked]);

	return (
		<header className={`${isSideMenu ? "bg-black" : "bg-background"} fixed top-0 w-full z-30`}>
			{/* First row of the header */}
			<div className="py-4 border-b border-neutral-500">
				<div className="flex justify-between items-center px-4 ">
					{/* col 1 */}
					<div>
						<IconLogo className={` max-h-6`} fill={`${isSideMenu ? "#fff" : "#000"}`} />
					</div>
					{/* col 2 */}
					<button onClick={toggleMenu}>{isSideMenu ? <IconCloseMenu stroke="#fff" /> : <IconOpenMenu stroke="#000" />}</button>
				</div>
			</div>
			{/* second row of the header */}
			<div className={`${isSideMenu && "text-white"} py-2 w-full border-b border-neutral-500`}>
				<div className="text-xs px-4 flex gap-2">
					<button className="flex gap-2 items-center" onClick={handleClickDestination}>
						<span ref={chevronRef}>
							<IconChevron stroke={isSideMenu ? "#fff" : "#000"} />
						</span>

						<span>Destinations</span>
					</button>
				</div>
			</div>
		</header>
	);
};
