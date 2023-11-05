import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import ImageCard from './ImageCard';
import { BsImage } from 'react-icons/bs';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Gallery = ({ data }) => {
	return (
		<Droppable droppableId='ROOT' type='group'>
			{provided => (
				<Grid
					{...provided.droppableProps}
					ref={provided.innerRef}
					templateColumns='1fr 1fr 1fr 1fr 1fr'
					templateRows='1fr 1fr 1fr'
					gap='20px'
					p='20px'
				>
					{data.map((item, index) => (
						<Draggable draggableId={data.id} index={index} key={data.id}>
							{provided => (
								<ImageCard
									colSpan={index === 0 ? 2 : 1}
									rowSpan={index === 0 ? 2 : 1}
									key={index}
									image={item.image}
									{...provided.dragHandleProps}
									{...provided.draggableProps}
									ref={provided.innerRef}
								/>
							)}
						</Draggable>
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
			)}
		</Droppable>
	);
};


function StoreList({ name, items, id }) {
	return (
		<Droppable droppableId={id}>
			{provided => (
				<div {...provided.droppableProps} ref={provided.innerRef}>
					<div className='store-container'>
						<h3>{name}</h3>
					</div>
					<div className='items-container'>
						{items.map((item, index) => (
							<Draggable draggableId={item.id} index={index} key={item.id}>
								{provided => (
									<div
										className='item-container'
										{...provided.dragHandleProps}
										{...provided.draggableProps}
										ref={provided.innerRef}
									>
										<h4>{item.name}</h4>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				</div>
			)}
		</Droppable>
	);
}
export default Gallery;
