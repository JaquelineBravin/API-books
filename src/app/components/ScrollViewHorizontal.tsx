import React from "react";
import { ScrollView, Image } from "react-native";

export const ScrollViewHorizontal = () => {
	const bookCovers: string[] = [
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
	];
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			style={{ flexDirection: "row", marginTop: 10, paddingLeft: 10 }}
		>
			{bookCovers.map((coverUrl, index) => (
				<Image
					key={index}
					source={{ uri: coverUrl }}
					style={{ width: 100, height: 150, marginRight: 10 }}
				/>
			))}
		</ScrollView>
	);
};

export default ScrollViewHorizontal;
