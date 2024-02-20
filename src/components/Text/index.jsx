import React, { useEffect, useState } from "react";

const Text = ({ style, content, tagName, isLink, linkTo, target }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");

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
			className={`${style ? style : ""} block`}
			{...(isLink && {
				href: linkTo,
				target: target,
				
			})}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export default Text;
