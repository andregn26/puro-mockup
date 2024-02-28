import { useState, useEffect } from "react";

// Custom hook to handle window resize
export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array ensures the effect runs only once when the component mounts

	return windowSize;
};
