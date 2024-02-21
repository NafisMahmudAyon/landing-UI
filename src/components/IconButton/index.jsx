import React, { useEffect, useState } from "react";
import Icon from "../Icon";

const IconButton = ({
	tagName,
	style = "",
	text,
	textStyle = "",
	linkStyle = "",
	iconLibrary = "font-awesome",
	icon,
	iconPosition = "beforePrefix",
	iconStyle = "",
	isLink = false,
	linkTo = "#",
	target = "_self",
	prefix,
	prefixStyle = "",
	postfix,
	postfixStyle = "",
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	const [iconX, setIconX] = useState(false);

	return (
		<CustomTag className={` ${style} `}>
			{iconPosition == "beforePrefix" && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
			{prefix && (
				<span
					className={` ${prefixStyle} `}
					dangerouslySetInnerHTML={{ __html: prefix }}
				/>
			)}
			{iconPosition == "afterPrefix" && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
			{isLink && (
				<>
					{iconPosition == "beforeLink" && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}

					<a
						className={` ${textStyle} `}
						{...(isLink && {
							href: linkTo,
							target: target,
						})}>
						{iconPosition == "beforeText" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}
						<span
							className={` ${textStyle} `}
							dangerouslySetInnerHTML={{ __html: text }}
						/>
						{iconPosition == "afterText" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}
					</a>

					{iconPosition == "afterLink" && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}
				</>
			)}

			{!isLink && (
				<>
					{iconPosition == "beforeText" && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}
					<span
						className={` ${textStyle} `}
						dangerouslySetInnerHTML={{ __html: text }}
					/>
					{iconPosition == "afterText" && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}
				</>
			)}

			{iconPosition == "beforePostfix" && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
			{prefix && (
				<span
					className={` ${postfixStyle} `}
					dangerouslySetInnerHTML={{ __html: postfix }}
				/>
			)}
			{iconPosition == "afterPostfix" && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
		</CustomTag>
	);
};

export default IconButton;
