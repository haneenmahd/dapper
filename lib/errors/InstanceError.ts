class InstanceError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'InstanceError';
		this.message = message;
	}
}

export default InstanceError;
