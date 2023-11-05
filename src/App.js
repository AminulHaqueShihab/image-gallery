import { Flex } from '@chakra-ui/react';
import React from 'react';
import Gallery from './components/Gallery';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';

const data = [
		{
			id: 1,
			image: '/images/image-1.webp',
		},
		{
			id: 2,
			image: '/images/image-2.webp',
		},
		{
			id: 3,
			image: '/images/image-3.webp',
		},
		{
			id: 4,
			image: '/images/image-4.webp',
		},
		{
			id: 5,
			image: '/images/image-5.webp',
		},
		{
			id: 6,
			image: '/images/image-6.webp',
		},
		{
			id: 7,
			image: '/images/image-7.webp',
		},
		{
			id: 8,
			image: '/images/image-8.webp',
		},
		{
			id: 9,
			image: '/images/image-9.webp',
		},
		{
			id: 10,
			image: '/images/image-10.jpeg',
		},
		{
			id: 11,
			image: '/images/image-11.jpeg',
		},
	];

const App = () => {
	const [stores, setStores] = useState(data);

	const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...stores];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
  };
	return (
		<Flex w='70%' py='50px' mx='auto'>
			<DragDropContext onDragEnd={handleDragAndDrop} >
				<Gallery data={data} />
			</DragDropContext>
		</Flex>
	);
};

export default App;
