const API_URL = '/api/dash'

export const dashApi = {
	getCurrentDashes: async (userId: number) => {
		const response = await fetch(
			`${API_URL}/currentDashes`, 
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ userId })
			}
		);
		
		if (!response.ok) {
			throw new Error(`Failed to get current dashes for user ${userId}`);
		}
		
		return response.json();
	},
	getCurrentDash: async (dashId: number) => {
		const response = await fetch(
			`${API_URL}/currentDash`, 
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ dashId })
			}
		);
		
		if (!response.ok) {
			throw new Error(`Failed to get current dashes for dash ${dashId}`);
		}
		
		return response.json();
	},
	getOpenDashes: async (userId: number) => {
		const response = await fetch(
			`${API_URL}/openDashes`, 
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ userId })
			}
		);
		
		if (!response.ok) {
			throw new Error(`Failed to get current dashes for user ${userId}`);
		}
		
		return response.json();
	}
};