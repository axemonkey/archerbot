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
	return phrasing.isPhrasing(text, PHRASING_TRIGGER_POINT_VAL);
};

const checkForDangerZone = (text) => {
	return DANGER_ZONE_REGEXP.test(text);
};

const checkForCantWont = (text) => {
	return CANT_WONT_REGEXP.test(text);
};

const checkForRampage = (text) => {
	return RAMPAGE_REGEXP.test(text);
};

const checkForArcherMention = (text) => {
	return text.toLowerCase().indexOf('archer') > -1 ||
	  text.toLowerCase().indexOf('sterling') > -1;
};

const getResponse = (type) => {
	const responsesOfType = responses()[type];
	const pluckResponse = Math.floor(Math.random() * responsesOfType.length);
	return responsesOfType[pluckResponse];
};


ArcherBot.message(async ({ message, say }) => {
	if (message.text === 'something') {
		await say(`Hello, <@${message.user}>`);
	}

	else if (checkForPhrasing(message.text)) {
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






ArcherBot.start(3000);
