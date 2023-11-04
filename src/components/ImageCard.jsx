import { Flex, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

const ImageCard = ({ image, ...props }) => {
	return (
		<GridItem
			borderRadius='6px'
			border='1px solid'
			borderColor='gray.400'
			{...props}
		>
			<Image src={image} objectFit='cover' />
		</GridItem>
	);
};

export default ImageCard;
