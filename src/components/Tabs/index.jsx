import React, { useState } from "react";

const Tabs = ({ style="", children, active, orientation }) => {
	const [activeTab, setActiveTab] = useState(active || null);

	const handleTabClick = (value) => {
		setActiveTab(value);
	};

	return (
		<div className={`${style} ${orientation === "vertical" ? "!flex" : ""}`}>
			<div
				className={`tabsNavs ${orientation === "vertical" ? "flex-col" : ""}`}>
				{React.Children.map(children, (child) => {
					if (child.type === TabsNav) {
						return React.cloneElement(child, {
							activeTab,
							onTabClick: handleTabClick,
							orientation,
						});
					}
					// if (child.type === TabPanel && child.props.value === activeTab) {
					// 	return child;
					// }
					return null;
				})}
			</div>
			<div className="w-full">
				{React.Children.map(children, (child) => {
					if (child.type === TabPanel && child.props.value === activeTab) {
						return child;
					}
					return null;
				})}
			</div>
		</div>
	);
};

const TabsNav = ({ style="", children, activeTab, onTabClick, orientation }) => {
	return (
		<div
			className={`${style} ${orientation === "vertical" ? "flex-col" : "flex"}`}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					isActive: child.props.value === activeTab,
					onClick: () => onTabClick(child.props.value),
					orientation,
				});
			})}
		</div>
	);
};

const Tab = ({ style="", activeStyle="", value, isActive, onClick, children, orientation }) => {
	return (
		<button
			className={`${style} ${isActive ? activeStyle : ""} ${
				orientation === "vertical" ? "block" : "inline-block"
			}`}
			onClick={onClick}>
			{children}
		</button>
	);
};

const TabPanel = ({ style="", value, children }) => {
	return <div className={` ${style} `}>{children}</div>;
};

export { Tabs, TabsNav, Tab, TabPanel };
