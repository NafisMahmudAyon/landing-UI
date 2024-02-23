import React, { useEffect, useState } from "react";
import Icon from "../Icon";

const Accordion = ({ tagName, style = "", children, active, deactivate }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	function generateUniqueId() {
		const randomPart = Math.random().toString(36).substr(2, 9);
		const timestampPart = Date.now().toString(36);
		const uniqueId = "a" + randomPart + timestampPart; 
		return uniqueId;
	}

	const id = generateUniqueId();

	return (
		<CustomTag className={` ${style} `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					id: id,
					active: active,
					deactivate: deactivate,
				});
			})}
		</CustomTag>
	);
};

const AccordionHeader = ({
	tagName,
	style = "",
	activeStyle = "",
	children,
	iconLibrary,
	icon,
	toggleIcon,
	toggleIconLibrary,
	toggleIconStyle,
	iconPosition,
	iconStyle,
	id,
	active,
	deactivate,
	deactivateStyle = "",
	labelStyle = "",
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	const [isActive, setIsActive] = useState(false);

	const toggleExpansion = () => {
		if (!deactivate) {
			setIsActive(!isActive);
			const contentElement = document.querySelector(`#${id}`);
			if (contentElement) {
				contentElement.style.display = !isActive ? "block" : "none";
			}
		}
	};
// const [activeStyles, setActiveStyles] = useState("")
	useEffect(() => {
		if (active) {
			setIsActive(true);
		}
		// setActiveStyles(addExclamationSign(activeStyle))
	}, [active]);
// 	const addExclamationSign = (classNames) => {
// 		return classNames
// 			.split(" ")
// 			.map((className) => `!${className}`)
// 			.join(" ");
// 	};

	return (
		<CustomTag
			className={` ${isActive ? activeStyle : ""} ${
				deactivate ? deactivateStyle : ""
			} ${style}`}
			onClick={toggleExpansion}>
			{iconPosition === "before" && icon && (
				<>
					{!isActive && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}
					{isActive && toggleIcon && (
						<Icon
							iconLibrary={toggleIconLibrary ? toggleIconLibrary : iconLibrary}
							icon={toggleIcon ? toggleIcon : icon}
							iconStyle={toggleIconStyle ? toggleIconStyle : iconStyle}
						/>
					)}
				</>
			)}
			<span className={` ${labelStyle} `}>{children}</span>

			{iconPosition === "after" && icon && (
				<>
					{!isActive && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}
					{isActive && toggleIcon && (
						<Icon
							iconLibrary={toggleIconLibrary}
							icon={toggleIcon}
							iconStyle={toggleIconStyle}
						/>
					)}
				</>
			)}
		</CustomTag>
	);
};

const AccordionDetails = ({
	tagName,
	style = "",
	children,
	id,
	active,
	deactivate,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	useEffect(() => {
		const contentElement = document.querySelector(`#${id}`);
		if (contentElement && !active) {
			contentElement.style.display = "none";
		}
	}, [active]); 


	return (
		<CustomTag id={id} className={` ${style} `}>
			{children}
		</CustomTag>
	);
};

export { Accordion, AccordionHeader, AccordionDetails };
