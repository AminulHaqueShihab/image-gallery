import { Flex } from '@chakra-ui/react';
import React from 'react';
import Gallary from './components/Gallary.jsx';
const App = () => {
	return (
		<Flex w='70%' py='50px' mx='auto'>
			<Gallary />
		</Flex>
	);
};

export default App;
