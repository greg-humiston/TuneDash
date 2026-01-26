export type UserAuthData = {
	id: number;
	email: string;
	password: string;
};

export type UserConfigData = {
	id: number;
	src?: string;
	alt?: string;
	username: string;
	email: string;
	password: string;
}

export type User = {
	id: number;
	userName: string;
	userImageUrl: string;
};

export const MOCK_USER_LIST: UserConfigData[] = [
	{
		id: 123,
		username: 'ya boi',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaAxnKqZgR2HlR_K0IIp-nmeInIsax87EoA&s',
		alt: 'profile-picture',
		email: 'test',
		password: 'test'
	},
	{
		id: 112,
		username: 'ya boim2',
		src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png',
		alt: 'profile-picture',
		email: 'test',
		password: 'test'
	},
	{
		id: 101,
		username: 'ya boi3',
		src: 'https://helloartsy.com/wp-content/uploads/cartoons/how-to-draw-patrick-star/how-to-draw-patrick-star.jpg',
		alt: 'profile-picture',
		email: 'test',
		password: 'test'
	},
	{
		id: 11,
		username: 'ya b4oi',
		src: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Sandy_Cheeks_character.png',
		alt: 'profile-picture',
		email: 'test',
		password: 'test'
	}
];

export const MOCK_ADMIN_USER = '321';
export const MOCK_USER_CONFIG_DATA: UserConfigData = MOCK_USER_LIST[0];

export default {
	MOCK_USER_CONFIG_DATA,
	MOCK_USER_LIST,
};