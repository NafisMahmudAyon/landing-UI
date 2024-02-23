import React, { useEffect, useState } from 'react'

const Wrapper = ({ tagName, style="", children, isLink, linkTo, target }) => {
	const [customTag, setCustomTag] = useState(tagName || "div"); // *Use prop value or default to "div"

	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(tagName || "div");
		}
	}, [isLink, tagName]);

	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag
			className={` ${style} block `}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}>
			{children}
		</CustomTag>
	);
};

export default Wrapper