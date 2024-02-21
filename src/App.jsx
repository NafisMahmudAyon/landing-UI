import { ComboList, ComboListItem } from "./components/ComboList";
import { Flex, FlexItem } from "./components/Flex";
import { Grid, GridItem } from "./components/Grid";
import IconButton from "./components/IconButton";
import Image from "./components/Image";
import List from "./components/List";
import Text from "./components/Text";
import Wrapper from "./components/Wrapper";

function App() {
	var data = [
		{ title: "HEllo", excerpt: "Hello excerpt" },
		{ title: "World", excerpt: "World excerpt" },
		{ title: "Goodbye", excerpt: "Goodbye excerpt" },
		{ title: "Bye", excerpt: "Bye excerpt" },
	];
	return (
		<>
			<Wrapper tagName="section">
				<Text
					isLink={true}
					linkTo="#"
					target="_self"
					style="bg-red-500"
					content="<h1 class='bg-blue-500'>hello</h1>"
					tagName="h1"
				/>
				<ComboList style="list-inside list-disc">
					<ComboListItem
						style=" rounded-md p-3 "
						icon='<span class="material-icons ">search</span>'
						iconStyle="text-blue-900"
						iconLibrary="material-icons"
						iconPosition="before">
						<Wrapper style="inline-block">
							<Text content={data[0].title} tagName="h1" />
							<Text content={data[0].excerpt} tagName="p" />
						</Wrapper>
					</ComboListItem>
					<ComboListItem style=" rounded-md p-3 ">
						<Text content={data[1].title} tagName="h1" />
						<Text content={data[1].excerpt} tagName="p" />
					</ComboListItem>
				</ComboList>
				<List list={["a", "b", "c"]} tagName="ol" />
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
				<Wrapper
					isLink={true}
					linkTo="#"
					style="h-20 w-full bg-gray-950"
					target="_blank"
				/>
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
								<Text content={item.title} tagName="h1" />
								<Text content={item.excerpt} tagName="p" />
							</FlexItem>
						);
					})}
				</Flex>
				<Grid
					style="bg-red-600 gap-3"
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
								<Text content={item.title} tagName="h1" />
								<Text content={item.excerpt} tagName="p" />
							</FlexItem>
						);
					})}
				</Grid>
				<Image
					lightBox={true}
					isLink={true}
					linkTo="#"
					lightBoxImageSrc="https://images.pexels.com/photos/630790/pexels-photo-630790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					captionEnabled={true}
				/>
			</Wrapper>
		</>
	);
}

export default App;

