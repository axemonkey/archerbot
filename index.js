const { App } = require('@slack/bolt');
const phrasing = require('./data/phrasing');
const responses = require('./data/responses');

// change this to configVars if running locally
const ArcherBot = new App({
	token: process.env.SLACK_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	appToken: process.env.SLACK_APP_TOKEN,
	socketMode: true,
});

const PHRASING_TRIGGER_POINT_VAL = 10;
const CANT_WONT_REGEXP = (/(i|we)\s(cant|can’t|can't)/ig);
const JOIN_RESPONSE = (/wh*?a+t|yes|yeah?|shut.*up|wu+t|no/ig);
const VOWEL_REGEXP = (/a|e|i|o|u|y/ig);
const DANGER_ZONE_REGEXP =
  /((danger|peril|trouble|unsafe|deadly|precarious|risky)+.*(zone|area|place|location|spot|realm|territory|section)+|(zone|area|place|location|spot|realm|territory|section)+.*(danger|peril|trouble|unsafe|deadly|precarious|risky)+)/ig;
const RAMPAGE_REGEXP = /rampage/ig;


const checkForPhrasing = (text) => {
	if (text) {
		return phrasing.isPhrasing(text, PHRASING_TRIGGER_POINT_VAL);
	}
	return false;
};

const checkForDangerZone = (text) => {
	if (text) {
		return DANGER_ZONE_REGEXP.test(text);
	}
	return false;
};

const checkForCantWont = (text) => {
	if (text) {
		return CANT_WONT_REGEXP.test(text);
	}
	return false;
};

const checkForRampage = (text) => {
	if (text) {
		return RAMPAGE_REGEXP.test(text);
	}
	return false;
};

const checkForArcherMention = (text) => {
	if (text) {
		return text.toLowerCase().indexOf('archer') > -1 ||
		  text.toLowerCase().indexOf('sterling') > -1;
	}
	return false;
};

const getResponse = (type) => {
	const responsesOfType = responses()[type];
	const pluckResponse = Math.floor(Math.random() * responsesOfType.length);
	return responsesOfType[pluckResponse];
};

const chance = (percent) => {
  return Math.ceil(Math.random() * 100) <= percent;
};

const getUserById = async (userId) => {
	const user = await ArcherBot.client.users.info({user: userId});
	return user;
};


ArcherBot.message(async ({ message, say }) => {
	if (checkForPhrasing(message.text)) {
		const archerResponse = getResponse('phrasing');
		await say(archerResponse);
	}

	else if (checkForDangerZone(message.text)) {
		const archerResponse = getResponse('dangerZone');
		await say(archerResponse);
	}

	else if (checkForCantWont(message.text)) {
		await say('Can’t or won’t?');
	}

	else if (checkForRampage(message.text)) {
		const archerResponse = getResponse('rampage');
		await say(archerResponse);
	}

	else if (checkForArcherMention(message.text)) {
		const archerResponse = getResponse('random');
		await say(archerResponse);
	}
});

ArcherBot.event('member_joined_channel', async ({ say }) => {
	if (chance(25)) {
		const archerResponse = getResponse('diatribeResponse');
		await say(archerResponse);
	}
	else if (chance(70)) {
		const archerResponse = getResponse('joinEvt');
		await say(archerResponse);
	}
});
ArcherBot.event('member_left_channel', async ({ event, say }) => {
	if (chance(65)) {
		const archerResponse = getResponse('leaveEvt');
		await say(archerResponse);
	}

	if (chance(25)) {
		const { user } = await getUserById(event.user);
		let name;
		if (user.profile && user.profile.first_name) {
			name = user.profile.first_name;
		} else {
			name = user.name;
		}
		if (name) {
			await say(`That is classic ${name}.`);
		}
	}
});





console.log('Starting ArcherBot...');
ArcherBot.start(3000);
