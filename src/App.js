import { Flex } from '@chakra-ui/react';
import React from 'react';
import Gallery from './components/Gallery';
const App = () => {
	return (
		<Flex w='70%' py='50px' mx='auto'>
			<Gallery />
		</Flex>
	);
};

export default App;
