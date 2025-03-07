
type DashData = {
	dashId: string;
  title: string;
  description: string;
  dashMode: 'Accelerated' | string;
  isDownVotingEnabled: boolean;
  dashArt: string;
  isListed: boolean;
  totalRounds: number;
  songsPerRound: number;
  numberOfPlayers: number;
  maxNumberOfPlayers: number;
  timeWhenCreated: string;
  timeWhenVotesDue: string;
  timeWhenSubmissionsDue: string;
  maxVotesAllowed: number;
  maxDownVotesAllowed: number;
  hasVotesBeenSubmitted: boolean;
};


export const MOCK_CURRENT_DASH_LIST: DashData[] = [
	{
		dashId: '123',
		title: 'Jamz of the month 24-25',
		description: 'The point of this league is to share what you\'ve been vibing to this month. It doesn\'t have to be a new release or anything, just whatever you\'ve been stuck on enjoying. Also, it should be fun. No negative vibes allowed. Songs are due on the last of the month by 11:30 p.m. voting is due by 6:00 p.m. on the 7th of the following month. At the end of each month we\'ll have a nice lil playlist to kick off the next month. I think it\'ll be a fun way to share what we\'ve all been listening to! Thanks.',
		dashMode: 'Accelerated',
		isDownVotingEnabled: false,
		dashArt: 'https://api.time.com/wp-content/uploads/2019/08/caveman-spongebob-spongegar.png?w=560',
		isListed: false,
		totalRounds: 6,
		songsPerRound: 3,
		numberOfPlayers: 13,
		maxNumberOfPlayers: 22,
		timeWhenCreated: '6 hours',
		timeWhenVotesDue: '8 hours',
		timeWhenSubmissionsDue: '12 hours',
		maxVotesAllowed: 5,
		maxDownVotesAllowed: 0,
		hasVotesBeenSubmitted: true
	}
];

export const MOCK_OPEN_DASH_LIST: DashData[] = [
	{
		dashId: '1234',
		title: 'WORST songs of all time',
		description: 'submit/vote for only terrible songs matching each theme',
		dashMode: 'Accelerated',
		isDownVotingEnabled: false,
		dashArt: 'https://i.pinimg.com/736x/f2/9d/2e/f29d2e21d6064525df1b362b0bbfc292.jpg',
		isListed: true,
		totalRounds: 6,
		songsPerRound: 1,
		numberOfPlayers: 3,
		maxNumberOfPlayers: 20,
		timeWhenCreated: '6 hours',
		timeWhenVotesDue: '8 hours',
		timeWhenSubmissionsDue: '12 hours',
		maxVotesAllowed: 5,
		maxDownVotesAllowed: 0,
		hasVotesBeenSubmitted: true
	},
	{
		dashId: '12345',
		title: 'Three Geniuses: Stevie, Bowie, Prince',
		description: 'A journey through the long and varied careers of the three musical geniuses of the rock era.',
		dashMode: 'Accelerated',
		isDownVotingEnabled: false,
		dashArt: 'https://static.demilked.com/wp-content/uploads/2024/08/funny-spongebob-memes-1.jpeg',
		isListed: true,
		totalRounds: 6,
		songsPerRound: 3,
		numberOfPlayers: 13,
		maxNumberOfPlayers: 22,
		timeWhenCreated: '6 hours',
		timeWhenVotesDue: '8 hours',
		timeWhenSubmissionsDue: '12 hours',
		maxVotesAllowed: 5,
		maxDownVotesAllowed: 0,
		hasVotesBeenSubmitted: true
	},
	{
		dashId: '1234',
		title: 'Jamz of the month 24-25',
		description: 'The point of this league is to share what you\'ve been vibing to this month. It doesn\'t have to be a new release or anything, just whatever you\'ve been stuck on enjoying. Also, it should be fun. No negative vibes allowed. Songs are due on the last of the month by 11:30 p.m. voting is due by 6:00 p.m. on the 7th of the following month. At the end of each month we\'ll have a nice lil playlist to kick off the next month. I think it\'ll be a fun way to share what we\'ve all been listening to! Thanks.',
		dashMode: 'Accelerated',
		isDownVotingEnabled: true,
		dashArt: 'https://imgix.ranker.com/list_img_v2/4235/2844235/original/dark-spongebob-memes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720',
		isListed: true,
		totalRounds: 6,
		songsPerRound: 3,
		numberOfPlayers: 13,
		maxNumberOfPlayers: 22,
		timeWhenCreated: '6 hours',
		timeWhenVotesDue: '8 hours',
		timeWhenSubmissionsDue: '12 hours',
		maxVotesAllowed: 5,
		maxDownVotesAllowed: 5,
		hasVotesBeenSubmitted: true
	}
];

type UserConfigData = {
	src: string;
	alt: string;
}

export const MOCK_USER_CONFIG_DATA: UserConfigData =  {
	src: 'https://musicleague-user-assets.b-cdn.net/users/36638dbece6e4842a28b8e699fb6dfd1/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=976cf530-90a7-4f10-8d01-769e43f95be1&width=300',
	alt: 'profile-picture'
};

export default {
	MOCK_CURRENT_DASH_LIST,
	MOCK_OPEN_DASH_LIST,
	MOCK_USER_CONFIG_DATA
};