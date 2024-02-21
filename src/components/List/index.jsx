import React, { useState } from "react";
import Icon from "../Icon";

const List = ({
	list,
	tagName,
	style = "",
	listStyle = "",
	iconLibrary,
	icon,
	iconStyle = "",
	iconPosition = "before",
}) => {
	const [customTag, setCustomTag] = useState(tagName || "ol");
	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag className={` ${style ? style : ""} `}>
			{list.map((item, index) => {
				return (
					<li key={index} className={` ${listStyle ? listStyle : ""} `}>
						{iconPosition == "before" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}

						<span dangerouslySetInnerHTML={{ __html: item }} />
						{iconPosition == "after" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}
					</li>
				);
			})}
		</CustomTag>
	);
};

export default List;
