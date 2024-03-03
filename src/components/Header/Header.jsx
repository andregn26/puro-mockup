import { useWindowSize } from "../../hooks/useWindowSize";
import { HeaderDesktop } from "./Desktop/HeaderDesktop";
import { HeaderMobile } from "./Mobile/HeaderMobile";

export const Header = () => {
	const { width } = useWindowSize();

	if (width < 1024) {
		return <HeaderMobile />;
	} else {
		return <HeaderDesktop />;
	}
};
