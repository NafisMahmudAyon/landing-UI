import React, { useEffect, useState } from "react";

const Grid = ({ tagName, style, children }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style ? style : ""} grid grid-cols-3 `}>
			{children}
		</CustomTag>
	);
};

const GridItem = ({ style, children, isLink, linkTo, target, tagName }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(tagName || "div");
		}
	}, [isLink, tagName]);

	return (
		<CustomTag
			className={`itemstyle ${style}`}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}>
			{children}
		</CustomTag>
	);
};

export { Grid, GridItem };
