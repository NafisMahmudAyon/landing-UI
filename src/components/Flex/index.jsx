// import React, { useState } from "react";

// const Flex = ({ tagName, style, itemTagname, itemStyle, children }) => {
// 	const [customTag, setCustomTag] = useState(tagName || "div"); // *Use prop value or default to "div"
// 	const [itemCustomTag, setItemCustomTag] = useState(itemTagname || "div"); // *Use prop value or default to "div"

// 	const CustomTag = customTag.toLowerCase();
// 	const ItemCustomTag = itemCustomTag.toLowerCase();
// 	return (
// 		<CustomTag className={` ${style ? style : ""} flex gap-2 flex-wrap `}>
// 			{/* {children} */}
// 			{React.Children.map(children, (child) => (
// 				<ItemCustomTag className={` ${itemStyle ? itemStyle : ""} `}>
// 					{child}
// 				</ItemCustomTag>
// 			))}
// 		</CustomTag>
// 	);
// };

// export default Flex;


import React, { useEffect, useState } from "react";

const Flex = ({ tagName, style, children }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style ? style : ""} flex gap-2 flex-wrap `}>
			{children}
		</CustomTag>
	);
};

const FlexItem = ({ style, children, isLink, linkTo, target, tagName }) => {
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

export { Flex, FlexItem };