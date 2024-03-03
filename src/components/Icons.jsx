import PropTypes from "prop-types";

export function IconLogo({ fill = "#000", className }) {
	IconLogo.propTypes = {
		fill: PropTypes.string,
		className: PropTypes.string,
	};
	return (
		<svg
			className={`${className}`}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="117"
			height="31"
			viewBox="0 0 117 31">
			<defs>
				<path id="path-1" d="M0 0L117 0 117 30.3108808 0 30.3108808z"></path>
			</defs>
			<g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
				<g transform="translate(-129 -183)">
					<g transform="translate(129 183)">
						<mask id="mask-2" fill="#fff">
							<use xlinkHref="#path-1"></use>
						</mask>
						<path
							fill={fill}
							d="M21.38 18.227c1.169-1.84 1.781-4.067 1.781-6.474s-.612-4.634-1.78-6.474v12.948zm-3.563 3.408A10.35 10.35 0 0019.6 20.34V3.165a10.35 10.35 0 00-1.782-1.294v19.764zm-3.563 1.316c.624-.125 1.218-.29 1.782-.494V1.048a12.437 12.437 0 00-1.782-.494v22.397zM10.69.273v22.96h.653c.386 0 .76-.017 1.13-.043V.316a15.831 15.831 0 00-1.13-.043h-.653zm-3.563 0v29.74H8.91V.273H7.127zm-3.563 29.74h1.782V.273H3.564v29.74zm-3.564 0h1.782V.273H0v29.74zM115.218 7.73a14.334 14.334 0 00-1.782-2.612v20.05a14.334 14.334 0 001.782-2.611c1.137-2.14 1.782-4.643 1.782-7.414 0-2.77-.645-5.274-1.782-7.413zm-7.127 21.335a14.673 14.673 0 003.564-2.155V3.376a14.678 14.678 0 00-3.564-2.155v27.844zm-5.345 1.221a16.031 16.031 0 003.564-.59V.59A16.04 16.04 0 00102.746 0v30.286zm-5.345-.59a16.04 16.04 0 003.563.59V0a16.04 16.04 0 00-3.563.591v29.104zm-5.345-2.785a14.674 14.674 0 003.563 2.154V1.221a14.674 14.674 0 00-3.563 2.155V26.91zm-1.782-1.743V5.118c-2.223 2.59-3.563 6.031-3.563 10.025 0 3.994 1.34 7.435 3.563 10.025zM73.051.273h-13.66v1.75h19.433c-1.566-1.1-3.543-1.75-5.773-1.75zm7.63 3.499H59.39v1.75h22.364a8.617 8.617 0 00-1.074-1.75zm1.662 3.499H59.39v1.75h23.158a8.9 8.9 0 00-.206-1.75zm.07 3.499H59.392v1.75h22.52a8.747 8.747 0 00.503-1.75zm-1.456 3.499H59.39v1.749h19.938a8.871 8.871 0 001.628-1.75zm-4.597 3.498H59.391v1.75H77.5l-1.14-1.75zm2.279 3.5h-10.31l1.063 1.749h10.386l-1.14-1.75zM59.39 23.015H68.3v-1.75H59.39v1.75zm21.526 1.75H70.455l1.063 1.749h10.539l-1.14-1.75zm-21.526 1.749H68.3v-1.75H59.39v1.75zm23.805 1.749H72.58l1.064 1.75h10.69l-1.14-1.75zm-23.805 1.75H68.3v-1.75H59.39v1.75zM43.355.273h9.503V18.83c0 7.673-5.345 11.48-11.878 11.48s-11.878-3.807-11.878-11.48V.273h9.502v18.558c0 1.487 1.07 2.38 2.376 2.38 1.306 0 2.375-.893 2.375-2.38V.273z"
							mask="url(#mask-2)"></path>
					</g>
				</g>
			</g>
		</svg>
	);
}

export function IconOpenMenu({ stroke = "#000", className }) {
	IconOpenMenu.propTypes = {
		stroke: PropTypes.string,
		className: PropTypes.string,
	};
	return (
		<svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14">
			<path fill="none" stroke={stroke} strokeLinecap="square" strokeWidth="2" d="M1.882 1.5h28.236m-28.236 11h28.236"></path>
		</svg>
	);
}

export function IconCloseMenu({ stroke = "#000", className }) {
	IconCloseMenu.propTypes = {
		stroke: PropTypes.string,
		className: PropTypes.string,
	};
	return (
		<svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path fill="none" stroke={stroke} strokeLinecap="square" strokeWidth="2" d="M1.977 1.977l19.966 19.966m-19.966 0L21.943 1.977"></path>
		</svg>
	);
}

export function IconChevron({ stroke = "#000", className }) {
	IconChevron.propTypes = {
		stroke: PropTypes.string,
		className: PropTypes.string,
	};
	return (
		<svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
			<path fill="none" stroke={stroke} d="M1 1l4.027 4.027L9.054 1"></path>
		</svg>
	);
}
