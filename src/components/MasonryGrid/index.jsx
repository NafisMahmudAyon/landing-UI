import React, { useEffect, useState } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const MasonryGrid = ({
	tagName,
	style = "",
	children,
	itemSelector = ".combo-masonry-item",
	columnWidth,
	percentPosition,
	gutter,
	fitWidth,
	horizontalOrder,
	originLeft,
	originTop,
	resize,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	const [masonryOptions, setMasonryOptions] = useState({
		itemSelector: itemSelector,
	});

	useEffect(() => {
		const updatedOptions = {};

		if (columnWidth !== undefined && columnWidth > 0) {
			updatedOptions.columnWidth = columnWidth;
		}

		if (gutter !== undefined && gutter > 0) {
			updatedOptions.gutter = gutter;
		}
		if (percentPosition !== undefined && percentPosition > 0) {
			updatedOptions.percentPosition = percentPosition;
		}
		if (fitWidth !== undefined && fitWidth > 0) {
			updatedOptions.fitWidth = fitWidth;
		}
		if (horizontalOrder !== undefined && horizontalOrder > 0) {
			updatedOptions.horizontalOrder = horizontalOrder;
		}
		if (originLeft !== undefined && originLeft > 0) {
			updatedOptions.originLeft = originLeft;
		}
		if (originTop !== undefined && originTop > 0) {
			updatedOptions.originTop = originTop;
		}
		if (resize !== undefined && resize > 0) {
			updatedOptions.resize = resize;
		}

		setMasonryOptions((prevOptions) => ({
			...prevOptions,
			...updatedOptions,
		}));
	}, [
		columnWidth,
		percentPosition,
		gutter,
		fitWidth,
		horizontalOrder,
		originLeft,
		originTop,
		resize,
	]);

	useEffect(() => {
		const layoutMasonry = () => {
			const elem = ".combo-masonry";
			const elemX = document.querySelector(elem);
			if (elemX) {
				imagesLoaded(elemX, function () {
					new Masonry(elemX, masonryOptions);
				});
			}
		};

		const timeout = setTimeout(layoutMasonry, 1000);

		return () => clearTimeout(timeout);
	}, [masonryOptions]);

	return (
		<CustomTag className={` ${style} combo-masonry `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					gutter: child.props.gutter
						? child.props.gutter
						: gutter,
					columnWidth: child.props.columnWidth
						? child.props.columnWidth
						: columnWidth,
					// iconStyle: child.props.iconStyle ? child.props.iconStyle : iconStyle,
					// icon: child.props.icon ? child.props.icon : icon,
				});
			})}
		</CustomTag>
	);
};

const MasonryGridItem = ({ tagName, style = "", children, gutter, columnWidth }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	const gutterX = {
		marginBottom: `${gutter}px`,
		width: `${columnWidth}px`,
	};

	return (
		<CustomTag className={` ${style} combo-masonry-item `} style={gutterX}>
			{children}
		</CustomTag>
	);
};

export { MasonryGrid, MasonryGridItem };
