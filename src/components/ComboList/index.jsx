import React, { useState } from "react";
import Icon from "../Icon";

const ComboList = ({
	tagName,
	style = "",
	children,
	iconPosition,
	icon,
	iconLibrary,
	iconStyle,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "ol");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style} `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					iconPosition: child.props.iconPosition
						? child.props.iconPosition
						: iconPosition,
					iconLibrary: child.props.iconLibrary
						? child.props.iconLibrary
						: iconLibrary,
					iconStyle: child.props.iconStyle ? child.props.iconStyle : iconStyle,
					icon: child.props.icon ? child.props.icon : icon,
				});
			})}
		</CustomTag>
	);
};

const ComboListItem = ({
	tagName,
	style = "",
	children,
	iconPosition,
	icon,
	iconLibrary,
	iconStyle,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "li");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style} `}>
			{iconPosition === "before" && icon && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
			{children}
			{iconPosition === "after" && icon && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
		</CustomTag>
	);
};

export { ComboList, ComboListItem };
