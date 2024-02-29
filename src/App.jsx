import "./App.css";
import { Header } from "./components/organisms/Header";
import { Hero } from "./components/organisms/Hero";
import puroHotelsLodzRoomsSuite001 from "/public/assets/puro_hotels_lodz_rooms_suite_001.webp";
import puroHotelWarsawRoomsLoreta008 from "/public/assets/puro_hotel_warsaw_rooms_loreta_008.webp";

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
				<section className="relative bg-black text-white flex flex-col items-center justify-center h-screen">
					<div id="gallery" className="absolute w-full h-full overflow-hidden">
						<ul className="cards">
							<li>0</li>
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>6</li>
							<li>7</li>
							<li>8</li>
							<li>9</li>
							<li>10</li>
							<li>11</li>
							<li>12</li>
							<li>13</li>
							<li>14</li>
							<li>15</li>
							<li>16</li>
							<li>17</li>
							<li>18</li>
							<li>19</li>
							<li>20</li>
							<li>21</li>
							<li>22</li>
							<li>23</li>
							<li>24</li>
							<li>25</li>
							<li>26</li>
							<li>27</li>
							<li>28</li>
							<li>29</li>
							<li>30</li>
						</ul>
						<div className="actions">
							<button className="prev">Prev</button>
							<button className="next">Next</button>
						</div>
					</div>
				</section>
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

export default App;
