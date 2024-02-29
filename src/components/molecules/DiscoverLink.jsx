import PropTypes from "prop-types";

export const DiscoverLink = ({ href = "#", content = "fill with content", className = "" }) => {
	DiscoverLink.propTypes = {
		href: PropTypes.string,
		content: PropTypes.string,
		className: PropTypes.string,
	};
	return (
		<a href={href} className={`${className} text-sm font-semibold after:content-['_—']`}>
			{content}
		</a>
	);
};
