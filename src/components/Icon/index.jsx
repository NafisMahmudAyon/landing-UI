import React, { useEffect } from "react";

const Icon = ({
	// icon = '<span class="material-icons ">search</span>',
	icon,
	iconStyle,
	iconLibrary = "material-icons",
}) => {
	useEffect(() => {
		const link = document.createElement("link");
		link.href = getStylesheetUrl(iconLibrary);
		link.rel = "stylesheet";
		document.head.appendChild(link);
		return () => {
			document.head.removeChild(link);
		};
	}, [iconLibrary]);

	const getStylesheetUrl = (iconLibrary) => {
		switch (iconLibrary) {
			case "material-icons":
				return "https://fonts.googleapis.com/icon?family=Material+Icons";
			case "material-icons-outlined":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
			case "material-icons-round":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
			case "material-icons-sharp":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Sharp";
			case "material-icons-two-tone":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone";
			case "bootstrap-icons":
				return "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
			case "font-awesome":
				return "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

			default:
				return "";
		}
	};
	return (
		<span
			className={` ${iconStyle ? iconStyle : ""} `}
			dangerouslySetInnerHTML={{ __html: icon }}
		/>
	);
};

export default Icon;
