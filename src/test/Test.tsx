export const Test = () => {
	type Reserve = {
		(from: Date, to: Date, destionation: string): void;
		(from: Date, destionation: string): void;
	};

	const reserve: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
		if (toOrDestination instanceof Date && destination !== undefined) {
			console.log('✈️ Round trip:', from, '→', destination, '→', toOrDestination);
		} else if (typeof toOrDestination === 'string') {
			console.log('🚗 One-way trip:', from, '→', toOrDestination);
		}
	};

	reserve(new Date(), 'Bali');
	reserve(new Date(), new Date(), 'Bali');
	return <div>Hello world</div>;
};
