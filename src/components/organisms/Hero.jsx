import { useEffect, useState } from "react";

import { ButtonWithHoverAnimation } from "../molecules/ButtonWithHoverAnimation";

import puroHotelWarsawInteriors002 from "/public/assets/puro_hotel_warsaw_interiors_002.webp";
import puroHotelWarsawInteriors0021 from "/public/assets/puro_hotel_warsaw_interiors_002 (1).webp";
import puroHotelInteriorMobile from "/public/assets/puro_hotel_interior_mobile.webp";

export const Hero = () => {
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
