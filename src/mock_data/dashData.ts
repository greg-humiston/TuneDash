
// additional tab data: rounds, standing, chat
export type CurrentDashData = DashData & {
	currentState: string; // song-selection, voting
	userList: string[];
	adminUser: string;
	// rounds tab
	rounds: RoundsData;

	// standings tab
	standings: Standings;

	// chat tab
	chat: Chat;
};

export type Submission = {
	submissionId: string;
	userId: string;
	submissionValue: string;
};

export type SubmissionList = {
	submissionListId: string;
	submissionList: Submission[];
}

export type Round = {
	roundId: string;
	roundTitle: string;
	roundDescription: string;
};

export type CurrentRound = Round & {
	roundDueDate: string;
	roundStandings: Standings;
	submissionList: SubmissionList; 	
};

export type FutureRound = Round & {
	roundStartDate: string;
};

export type CompletedRound = Round & {
	roundCompletionDate: string;
	roundStandings: Standings;
	submissionList: SubmissionList; 
};

export type RoundsData = {
	roundsDataId: string;
	currentRound: CurrentRound;
	futureRounds: FutureRound[];
	completedRounds: CompletedRound[];
};

export type Standings = {
	standingsId: string;
	standingsUserList: StandingsUser[];
};

export type StandingsUser = {
	userId: string;
	scoreValue: number;
};

export type Chat = {
	chatId: string;
	chatMessageList: ChatMessage[];
};

export type ChatMessage = {
	messageId: string;
	userId: string;
	messageDateAndTime: string;
	// messageEmojiList: string[]; // an array of svg strings?
	messageValue: string;
};

export type NewMessage = {
	userId: string;
	messageValue: string;
};

export type DashData = {
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

export const MOCK_STANDINGS_USER_LIST: StandingsUser[] = [
	{
		userId: '111',
		scoreValue: 150
	},
	{
		userId: '112',
		scoreValue: 140
	},	
	{
		userId: '101',
		scoreValue: 130
	},	
	{
		userId: '11',
		scoreValue: 110
	},
];

export const MOCK_STANDINGS: Standings = {
	standingsId: '321',
	standingsUserList: MOCK_STANDINGS_USER_LIST
};

export const MOCK_SUBMISSION_LIST: Submission[] = [
	{
		submissionId: '111',
		userId: '111',
		submissionValue: ''
	},
	{
		submissionId: '112',
		userId: '112',
		submissionValue: ''
	},
	{
		submissionId: '101',
		userId: '101',
		submissionValue: ''
	},
	{
		submissionId: '11',
		userId: '11',
		submissionValue: ''
	}
];

export const MOCK_SUBMISSION_LIST_DATA: SubmissionList = {
	submissionListId: '5',
	submissionList: MOCK_SUBMISSION_LIST
};

export const MOCK_CURRENT_ROUND: CurrentRound = {
	roundId: '666',
	roundTitle: 'hello world',
	roundDescription: 'hello world oh lordy',
	roundDueDate: '11/16/2026 03:44:05',
	roundStandings: MOCK_STANDINGS,
	submissionList: MOCK_SUBMISSION_LIST_DATA
};

export const MOCK_FUTURE_ROUNDS: FutureRound[] = [
	{
		roundId: '666',
		roundTitle: 'hello world',
		roundDescription: 'hello world oh lordy',
		roundStartDate: '11/16/2026 03:44:05'
	},
	{
		roundId: '777',
		roundTitle: 'hello tour',
		roundDescription: 'hello world oh lordy',
		roundStartDate: '11/16/2026 03:44:05'
	},
	{
		roundId: '888',
		roundTitle: 'hello chair',
		roundDescription: 'hello world oh lordy',
		roundStartDate: '11/16/2026 03:44:05'
	}
];

export const MOCK_COMPLETED_ROUNDS: CompletedRound[] = [
	{
		roundId: '666',
		roundTitle: 'hello world',
		roundDescription: 'hello world oh lordy',
		roundCompletionDate: '11/16/2026 03:44:05',
		roundStandings: MOCK_STANDINGS,
		submissionList: MOCK_SUBMISSION_LIST_DATA
	},
	{
		roundId: '777',
		roundTitle: 'hello world',
		roundDescription: 'hello world oh lordy',
		roundCompletionDate: '11/16/2026 03:44:05',
		roundStandings: MOCK_STANDINGS,
		submissionList: MOCK_SUBMISSION_LIST_DATA
	},
	{
		roundId: '888',
		roundTitle: 'hello world',
		roundDescription: 'hello world oh lordy',
		roundCompletionDate: '11/16/2026 03:44:05',
		roundStandings: MOCK_STANDINGS,
		submissionList: MOCK_SUBMISSION_LIST_DATA
	},
];

export const MOCK_ROUNDS: RoundsData = {
	roundsDataId: '321',
	currentRound: MOCK_CURRENT_ROUND,
	futureRounds:  MOCK_FUTURE_ROUNDS,
	completedRounds: MOCK_COMPLETED_ROUNDS
};

export const MOCK_CHAT_MESSAGE_LIST: ChatMessage[] = [
	{
		messageId: '123',
		userId: '112',
		messageDateAndTime: '11/16/1990 05:55:30 am',
		messageValue: 'this is a test'
		// messageEmojiList
	},
	{
		messageId: '123',
		userId: '111',
		messageDateAndTime: '11/16/1990 05:55:40 am',
		messageValue: 'are you sure?'
		// messageEmojiList
	},
	{
		messageId: '123',
		userId: '112',
		messageDateAndTime: '11/16/1990 05:55:50 am',
		messageValue: 'yes!'
		// messageEmojiList
	}
];

export const MOCK_CHAT: Chat = {
	chatId: '123',
	chatMessageList: MOCK_CHAT_MESSAGE_LIST
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
		dashId: '123456',
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

export default {
	MOCK_CURRENT_DASH_LIST,
	MOCK_OPEN_DASH_LIST
};