import React, { useState } from "react";

const ImageGallery = ({
	tagName,
	style = "",
	children,
	imageCaption,
	captionEnabled,
	captionStyle,
	lightBox,
	lightBoxStyle,
	lightBoxImageStyle,
	lightBoxImageSrc,
	lightBoxCaption,
	lightBoxCaptionEnabled,
	lightBoxCaptionStyle,
	closeButtonStyle,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag className={` ${style} `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					imageCaption: child.props.imageCaption
						? child.props.imageCaption
						: imageCaption,
					captionEnabled: child.props.captionEnabled
						? child.props.captionEnabled
						: captionEnabled,
					captionStyle: child.props.captionStyle
						? child.props.captionStyle
						: captionStyle,
					lightBox: child.props.lightBox ? child.props.lightBox : lightBox,
					lightBoxStyle: child.props.lightBoxStyle
						? child.props.lightBoxStyle
						: lightBoxStyle,
					lightBoxImageStyle: child.props.lightBoxImageStyle
						? child.props.lightBoxImageStyle
						: lightBoxImageStyle,
					lightBoxImageSrc: child.props.lightBoxImageSrc
						? child.props.lightBoxImageSrc
						: lightBoxImageSrc,
					lightBoxCaption: child.props.lightBoxCaption
						? child.props.lightBoxCaption
						: lightBoxCaption,
					lightBoxCaptionEnabled: child.props.lightBoxCaptionEnabled
						? child.props.lightBoxCaptionEnabled
						: lightBoxCaptionEnabled,
					lightBoxCaptionStyle: child.props.lightBoxCaptionStyle
						? child.props.lightBoxCaptionStyle
						: lightBoxCaptionStyle,
					closeButtonStyle: child.props.closeButtonStyle
						? child.props.closeButtonStyle
						: closeButtonStyle,
				});
			})}
		</CustomTag>
	);
};

export default ImageGallery;
