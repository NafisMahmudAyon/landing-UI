import React, { useEffect, useState } from "react";

const Image = ({
	src,
	isLink,
	linkTo,
	target,
	wrapperTag,
	style="",
	imageStyle,
	lightBox,
	altText,
	imageCaption,
	captionEnabled,
	captionStyle,
	lightBoxStyle,
	lightBoxImageStyle,
	lightBoxImageSrc,
	lightBoxCaption,
	lightBoxCaptionEnabled,
	lightBoxCaptionStyle,
	closeButtonStyle,
	lazyLoad,
}) => {
	const [customTag, setCustomTag] = useState(wrapperTag || "div");
	const [isOpen, setIsOpen] = useState(false);
	const [lightboxSrc, setLightboxSrc] = useState("");

	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(wrapperTag || "div");
		}
	}, [isLink, wrapperTag]);

	const openLightbox = () => {
		setLightboxSrc(src);
		setIsOpen(true);
	};

	const closeLightbox = () => {
		setIsOpen(false);
	};

	// const CustomTag = customTag.charAt(0).toUpperCase() + customTag.slice(1);

	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag
			className={` ${style} `}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}>
			<figure className=" flex flex-col items-center">
				<img
					className={` ${
						imageStyle ? imageStyle : ""
					} max-w-full h-auto shadow-lg `}
					src={
						src ||
						"https://images.pexels.com/photos/127428/pexels-photo-127428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					alt={altText || imageCaption || "Description of the image"}
					onClick={linkTo ? undefined : lightBox ? openLightbox : undefined}
				/>
				{captionEnabled && (
					<figcaption
						className={` ${
							captionStyle ? captionStyle : ""
						} text-gray-600 text-sm mt-2 `}>
						{imageCaption || altText || "This is the caption for the image."}
					</figcaption>
				)}
			</figure>
			{isOpen && (
				<div
					className={` ${
						lightBoxStyle ? lightBoxStyle : ""
					} fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center z-20 overflow-auto `}>
					<div className="flex flex-col items-center">
						<button
							className={` ${
								closeButtonStyle ? closeButtonStyle : ""
							} absolute top-0 right-0 m-2 h-8 w-8 flex items-center justify-center bg-red-500 rounded-full text-black hover:bg-gray-200  text-base `}
							onClick={closeLightbox}>
							&times;
						</button>
						<img
							src={
								lightBoxImageSrc ||
								src ||
								"https://images.pexels.com/photos/127428/pexels-photo-127428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							alt={altText || "lightbox"}
							className={` ${
								lightBoxImageStyle ? lightBoxImageStyle : ""
							} max-w-[95%] w-full rounded-md  max-h-full`}
						/>
						{lightBoxCaptionEnabled && (
							<figcaption
								className={` ${
									lightBoxCaptionStyle ? lightBoxCaptionStyle : ""
								} text-gray-400 text-sm mt-2 text-center `}>
								{lightBoxCaption ||
									imageCaption ||
									altText ||
									"This is the caption for the image."}
							</figcaption>
						)}
					</div>
				</div>
			)}
		</CustomTag>
	);
};

export default Image;
