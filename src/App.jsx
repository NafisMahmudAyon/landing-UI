import { Flex, FlexItem } from "./components/Flex";
import { Grid, GridItem } from "./components/Grid";
import Image from "./components/Image";
import Text from "./components/Text";
import Wrapper from "./components/Wrapper";

function App() {
  var data = [
    {title : "HEllo",excerpt: "Hello excerpt"},
    {title : "World",excerpt: "World excerpt"},
    {title : "Goodbye",excerpt: "Goodbye excerpt"},
    {title : "Bye",excerpt: "Bye excerpt"}

  ]
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
        <Wrapper isLink={true} linkTo="#" style="h-20 w-full bg-gray-950" target="_blank" />
				<Flex
					style="bg-red-400 gap-3"
					// itemStyle="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 "
          >
					{data.map((item, index) => {
						return (
							<FlexItem style="bg-gray-300/60 rounded-md p-3 odd:bg-slate-600 " tagName="span" isLink={true} linkTo="#">
								<Text content={item.title} tagName="h1" />
								<Text content={item.excerpt} tagName="p" />
							</FlexItem>
						);
					})}
				</Flex>
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





