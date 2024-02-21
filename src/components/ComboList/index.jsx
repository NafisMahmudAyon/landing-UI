import React, { useState } from "react";
import Icon from "../Icon";

const ComboList = ({ tagName, style = "", children }) => {
	const [customTag, setCustomTag] = useState(tagName || "ol");
	const CustomTag = customTag.toLowerCase();
	return <CustomTag className={` ${style} `}>{children}</CustomTag>;
};

const ComboListItem = ({ tagName, style = "", children, iconPosition, icon, iconLibrary, iconStyle }) => {
  const [customTag, setCustomTag] = useState(tagName || "li");
	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag className={` ${style} `}>
			{iconPosition == "before" && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
			{children}
			{iconPosition == "after" && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
		</CustomTag>
	);
};

export { ComboList, ComboListItem };
