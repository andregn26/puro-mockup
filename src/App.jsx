import "./App.css";
import { Header } from "./components/organisms/Header";
import { Hero } from "./components/organisms/Hero";
import puroHotelsLodzRoomsSuite001 from "/public/assets/puro_hotels_lodz_rooms_suite_001.webp";
import puroHotelWarsawRoomsLoreta008 from "/public/assets/puro_hotel_warsaw_rooms_loreta_008.webp";
import puroHotelWroclawInterior005 from "/public/assets/puro_hotel_wroclaw_interior_005.webp";
import { useEffect } from "react";
import gsap from "gsap";
import { DiscoverLink } from "./components/molecules/DiscoverLink";

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
						<p className="md:mt-8">
							<DiscoverLink content={"Discover our concept"} />
						</p>
					</div>
				</section>
				<section className="relative bg-black text-white flex flex-col items-center justify-center">
					<Carousel />
				</section>
				<section className="py-16 px-4 flex flex-col gap-6 md:grid md:grid-areas-layout md:grid-cols-layout md:grid-rows-layout md:pr-0">
					<h2 className="uppercase text-4xl lg:text-[96px] lg:leading-[1.05]  md:grid-in-title ">IMPECCABLE TASTE</h2>
					<img className="grid-in-image w-full h-full" src={puroHotelWarsawRoomsLoreta008} alt="" />
					<div className="flex flex-col gap-8 md:md:grid-in-text lg:max-w-xl md:mt-4">
						<p className="font-light">
							Let your senses run wild at PURO Hotels. Carefully considered to add style and refinement to your stay with us, our restaurants and bars
							take special care to mix the local and global to bring you a truly cosmopolitan and contemporary dining experience.
						</p>
						<p className="md:mt-8">
							<DiscoverLink content="Discover our restaurants" />
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}

const Carousel = () => {
	useEffect(() => {
		const cards = gsap.utils.toArray("#cards li");
		let currentIndex = 0;

		gsap.set(cards, { xPercent: 0, opacity: 1, scale: 1 });

		const nextCard = (index) => {
			gsap.to(cards, {
				xPercent: -100 * index,
				duration: 0.5,
				ease: "back.in(1.7)",
			});
		};

		function handleNextClick() {
			if (currentIndex < cards.length - 1) {
				currentIndex++;
				nextCard(currentIndex);
			}
		}

		function handlePrevClick() {
			if (currentIndex > 0) {
				currentIndex--;
				nextCard(currentIndex);
			}
		}

		document.querySelector(".next").addEventListener("click", handleNextClick);
		document.querySelector(".prev").addEventListener("click", handlePrevClick);

		return () => {
			document.querySelector(".next").removeEventListener("click", handleNextClick);
			document.querySelector(".prev").removeEventListener("click", handlePrevClick);
		};
	}, []);

	return (
		<div id="gallery" className="gallery">
			<ul id="cards" className="cards">
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
			</ul>
			<div className="actions">
				<button className="prev">Prev</button>
				<button className="next">Next</button>
			</div>
		</div>
	);
};

const Card = () => {
	return (
		<div className="w-full h-full">
			<img className="w-full" src={puroHotelWroclawInterior005} alt="" />
			<div className="mx-4 pb-6 border-b border-white/30">
				<p className="mt-12">Poland</p>
				<h3 className="uppercase text-5xl">Poznań</h3>
			</div>
			<div className="mx-4 pb-6 border-b border-white/30">
				<p className="text-sm text-white/80 font-light mt-6">
					Centrally located and minutes away from Kraków’s top restaurants, cafes, shops and historic attractions. PURO Kraków Stare Miasto is a
					design-focused, modern-styled hotel.
				</p>
				<div className="mt-4">
					<DiscoverLink content="Discover more" className={""} />
				</div>
			</div>
		</div>
	);
};

export default App;
