import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import ImageCard from './ImageCard';
import { BsImage } from 'react-icons/bs';

const Gallery = () => {
	const data = [
		{
			image: '/images/image-1.webp',
		},
		{
			image: '/images/image-2.webp',
		},
		{
			image: '/images/image-3.webp',
		},
		{
			image: '/images/image-4.webp',
		},
		{
			image: '/images/image-5.webp',
		},
		{
			image: '/images/image-6.webp',
		},
		{
			image: '/images/image-7.webp',
		},
		{
			image: '/images/image-8.webp',
		},
		{
			image: '/images/image-9.webp',
		},
		{
			image: '/images/image-10.jpeg',
		},
		{
			image: '/images/image-11.jpeg',
		},
	];
	return (
		<Grid
			templateColumns={'1fr 1fr 1fr 1fr 1fr'}
			templateRows='1fr 1fr 1fr'
			gap='20px'
			p='20px'
		>
			{data.map((item, index) => (
				// {index===0 ?(<ImageCard colSpan={2} rowSpan={2}  key={index} image={item.image} />):null)}
				<ImageCard
					colSpan={index === 0 ? 2 : 1}
					rowSpan={index === 0 ? 2 : 1}
					// rowSpan={2}
					key={index}
					image={item.image}
				/>
			))}
			<GridItem
				borderRadius='6px'
				border='1px solid'
				borderColor='gray.400'
				justifyContent='center'
				alignItems='center'
				cursor='pointer'
				userSelect='none'
			>
				<Flex
					direction={'column'}
					justifyContent='center'
					alignItems='center'
					h='100%'
					gap='10px'
				>
					<BsImage />
					<Text>Add Images</Text>
				</Flex>
			</GridItem>
		</Grid>
	);
};

export default Gallery;
