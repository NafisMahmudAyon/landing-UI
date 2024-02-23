import {
	Accordion,
	AccordionDetails,
	AccordionHeader,
} from "./components/Accordion";
import { ComboList, ComboListItem } from "./components/ComboList";
import { Flex, FlexItem } from "./components/Flex";
import { Grid, GridItem } from "./components/Grid";
import IconButton from "./components/IconButton";
import Image from "./components/Image";
import ImageGallery from "./components/ImageGallery";
import List from "./components/List";
import { MasonryGrid, MasonryGridItem } from "./components/MasonryGrid";
import { Tab, TabPanel, Tabs, TabsNav } from "./components/Tabs";

import Text from "./components/Text";
import Wrapper from "./components/Wrapper";

function App() {
	const imageUrls = [
		"https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/629162/pexels-photo-629162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/889930/pexels-photo-889930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/165537/pexels-photo-165537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2887497/pexels-photo-2887497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		// "https://via.placeholder.com/700",
	];
	var data = [
		{ title: "HEllo", excerpt: "Hello excerpt" },
		{ title: "World", excerpt: "World excerpt" },
		{ title: "Goodbye", excerpt: "Goodbye excerpt" },
		{ title: "Bye", excerpt: "Bye excerpt" },
	];
	return (
		<>
			<Wrapper tagName="section" style={"p-2"}>
				<Text style="text-center text-4xl font-medium my-4 ">Tabs</Text>
				<Tabs active="3" orientation="horizontal">
					<TabsNav>
						<Tab
							value="1"
							style="bg-blue-500 transition-all duration-500 ease-in-out"
							activeStyle="bg-pink-600">
							Tab 1
						</Tab>
						<Tab
							value="2"
							style="bg-blue-600 transition-all duration-500 ease-in-out"
							activeStyle="bg-pink-600">
							Tab 2
						</Tab>
						<Tab
							value="3"
							style="bg-blue-700 transition-all duration-500 ease-in-out"
							activeStyle="bg-pink-600">
							Tab 3
						</Tab>
					</TabsNav>
					<TabPanel value="1" style="bg-red-500">
						Tab Panel 1
					</TabPanel>
					<TabPanel value="2" style="bg-red-600">
						Tab Panel 2
					</TabPanel>
					<TabPanel value="3" style="bg-red-700">
						Tab Panel 3
					</TabPanel>
				</Tabs>
				<Tabs active="1" orientation="vertical">
					<TabsNav>
						<Tab
							value="1"
							style="bg-blue-500 transition-all duration-500 ease-in-out"
							activeStyle="bg-pink-600">
							Tab 1
						</Tab>
						<Tab
							value="2"
							style="bg-blue-600 transition-all duration-500 ease-in-out"
							activeStyle="bg-pink-600">
							Tab 2
						</Tab>
						<Tab
							value="3"
							style="bg-blue-700 transition-all duration-500 ease-in-out"
							activeStyle="bg-pink-600">
							Tab 3
						</Tab>
					</TabsNav>
					<TabPanel value="1" style="bg-red-500">Tab Panel 1</TabPanel>
					<TabPanel value="2" style="bg-red-500">Tab Panel 2</TabPanel>
					<TabPanel value="3" style="bg-red-500">Tab Panel 3</TabPanel>
				</Tabs>

				<Text style="text-center text-4xl font-medium my-4 ">Accordion</Text>
				<Accordion active={true}>
					<AccordionHeader
						iconLibrary="material-icons"
						icon='<span class="material-icons ">search</span>'
						iconStyle="text-red-500"
						toggleIconStyle={`text-blue-500`}
						toggleIcon='<span class="material-icons ">home</span>'
						iconPosition="before"
						style="bg-red-900 text-white"
						activeStyle="!bg-emerald-900 !text-white"
						deactivateStyle="bg-white text-black">
						Accordion Header
					</AccordionHeader>
					<AccordionDetails style="bg-black text-white">
						hello{" "}
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionHeader
						iconLibrary="material-icons"
						icon='<span class="material-icons ">search</span>'
						iconStyle="text-red-500"
						toggleIconStyle={`text-blue-500`}
						toggleIcon='<span class="material-icons ">home</span>'
						iconPosition="before"
						style="bg-red-900 text-white"
						activeStyle="!bg-emerald-900 !text-white"
						deactivateStyle="bg-white text-black">
						Accordion Header
					</AccordionHeader>
					<AccordionDetails style="bg-black text-white">
						hello{" "}
					</AccordionDetails>
				</Accordion>
				<Accordion deactivate={true} style="mb-4 border-b">
					<AccordionHeader
						iconLibrary="material-icons"
						icon='<span class="material-icons ">search</span>'
						iconStyle="text-red-500"
						toggleIconStyle={`text-blue-500`}
						toggleIcon='<span class="material-icons ">home</span>'
						iconPosition="before"
						style="bg-red-900 text-white"
						// activeStyle="!bg-emerald-900 !text-white"
						deactivateStyle="!bg-slate-300 !text-black">
						Accordion Header
					</AccordionHeader>
					<AccordionDetails style="bg-black text-white">
						hello{" "}
					</AccordionDetails>
				</Accordion>
				<Text style="text-center text-4xl font-medium my-4 ">Masonry Grid</Text>
				<MasonryGrid gutter={20} columnWidth={220} fitWidth={true}>
					{imageUrls.map((imageUrl, index) => (
						<MasonryGridItem key={index}>
							<Image
								src={imageUrl}
								style=""
								lightBox={true}
								// alt={data[index].title}
							/>
						</MasonryGridItem>
					))}
				</MasonryGrid>
				<Text style="text-center text-4xl font-medium my-4 ">
					Image Gallery
				</Text>
				<ImageGallery
					style={"flex  items-center overflow-auto gap-2 "}
					lightBox={true}>
					{imageUrls.map((imageUrl, index) => (
						<Image
							key={index}
							src={imageUrl}
							style="min-w-[300px]"
							// alt={data[index].title}
						/>
					))}
				</ImageGallery>
				<ImageGallery style={"grid grid-cols-3 gap-2 "} lightBox={true}>
					{imageUrls.map((imageUrl, index) => (
						<Image
							key={index}
							src={imageUrl}
							style="min-w-[300px]"
							// alt={data[index].title}
						/>
					))}
				</ImageGallery>
				<Text style="text-center text-4xl font-medium my-4 ">Combo List</Text>
				<ComboList
					icon='<span class="material-icons ">search</span>'
					iconPosition="before">
					<ComboListItem>Item 1</ComboListItem>
					<ComboListItem>Item 2</ComboListItem>
					<ComboListItem icon='<span class="material-icons">home</span>'>
						Item 3
					</ComboListItem>
				</ComboList>

				<ComboList style="list-inside list-disc">
					<ComboListItem
						style=" rounded-md p-3 "
						icon='<span class="material-icons ">search</span>'
						iconStyle="text-blue-900"
						iconLibrary="material-icons"
						iconPosition="before">
						<Wrapper style="inline-block">
							<Text content={data[0].title} tagName="h1">
								{data[0].title}
							</Text>
							<Text tagName="p">{data[0].excerpt} </Text>
						</Wrapper>
					</ComboListItem>
					<ComboListItem style=" rounded-md p-3 ">
						<Text content={data[1].title} tagName="h1">
							{data[0].title}
						</Text>
						<Text tagName="p">{data[1].excerpt} </Text>
					</ComboListItem>
				</ComboList>

				<Text style="text-center text-4xl font-medium my-4 ">List</Text>
				<List list={["a", "b", "c"]} tagName="ol" />
				<Text style="text-center text-4xl font-medium my-4 ">Text</Text>
				<Text
					isLink={true}
					linkTo="#"
					variant="1"
					target="_self"
					style="bg-red-500"
					tagName="">
					<h1 className="text-3xl font-bold ">hello</h1>
				</Text>
				<Text style="text-center text-4xl font-medium my-4 ">Button</Text>
				<IconButton
					icon='<span class="material-icons ">search</span>'
					style=""
					iconStyle="text-blue-900"
					iconLibrary="material-icons"
					iconPosition="beforeText"
					isLink={true}
					linkTo="#"
					prefix="Hello Prefix"
					text="Hello Text"
					textStyle="bg-red-500"
					postfix="Hello postfix"
					prefixStyle="bg-blue-500"
				/>
				<Text style="text-center text-4xl font-medium my-4 ">Wrapper</Text>
				<Wrapper
					isLink={true}
					linkTo="#"
					style="h-20 w-full bg-gray-950"
					target="_blank"
				/>
				<Text style="text-center text-4xl font-medium my-4 ">Flex</Text>
				<Flex
					style="bg-red-400 gap-3"
					// itemStyle="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
				>
					{data.map((item, index) => {
						return (
							<FlexItem
								key={index}
								style="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
								tagName="span"
								isLink={true}
								linkTo="#">
								<Text tagName="h1">{item.title}</Text>
								<Text tagName="p">{item.excerpt}</Text>
							</FlexItem>
						);
					})}
				</Flex>
				<Text style="text-center text-4xl font-medium my-4 ">Grid</Text>
				<Grid
					style="bg-red-600 gap-3"
					// itemStyle="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
				>
					{data.map((item, index) => {
						return (
							<GridItem
								key={index}
								style="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
								tagName="span"
								isLink={true}
								linkTo="#">
								<Text tagName="h1">{item.title}</Text>
								<Text tagName="p">{item.excerpt}</Text>
							</GridItem>
						);
					})}
				</Grid>
				<Text style="text-center text-4xl font-medium my-4 ">Image</Text>
				<Image
					lightBox={true}
					// isLink={true}
					// linkTo="#"
					lightBoxImageSrc="https://images.pexels.com/photos/630790/pexels-photo-630790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					captionEnabled={true}
					lightBoxCaptionEnabled={true}
					lightBoxCaption={"hello world"}
				/>
			</Wrapper>
		</>
	);
}

export default App;










