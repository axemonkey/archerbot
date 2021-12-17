/**
 * Created by cameronriera on 4/21/16.
 * Modified by Clive Murray on 17/12/2021, because that's how you write a date, idiot.
 */

const phrasing = [
  'I swear to god I had something for this.',
  'Damn it, I had something for this!',
  'Uh... Phrasing!',
  'PHRASING!',
  'Oh. My. God. Hello? Are we still doing PHRASING?!',
  "Jesus, Phrasing!",
  'Why are we not still doing phrasing?',
  'Er, phrasing.',
  'Phrasing!\nAlso, has anyone seen Woodhouse?',

  'http://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-10.gif',
  'https://tenor.com/view/archer-sterling-gif-5414245',
  'https://tenor.com/view/archer-phrasing-gif-6179878',
  'https://tenor.com/view/phrasing-words-wording-boom-archer-gif-5458260',
  'https://tenor.com/view/archer-phrasing-gorilla-poko-funny-gif-23015757',
];

const diatribeResponse = [
  'Paging Kenny Loggins because you’re in the *DANGER ZONE!*',
  'Danger zone. Duh!\nHaven’t you ever seen Top Gun? Or like heard of legendary rock singer, songwriter, guitarist Kenny Freakin’ Loggins!?',
  '🎵 DANGER ZONE! 🎵',
  'https://giphy.com/gifs/archer-fx-sterling-cbAb0vWhJqA2k',
  'https://giphy.com/gifs/archer-space-race-danger-zone-xGbA1gRCAj1jW',
  'https://giphy.com/gifs/archer-reactiongifs-mrw-Kz420G0aGw5mU',
  'https://giphy.com/gifs/archer-lana-sterling-7WqaymtUo9qFO',
  'https://tenor.com/view/highfive-archer-cyril-topgun-gif-5655940',
  'https://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-11.gif',
];

const joinEvt = [
  'How -- hey! Just talking about you, and about how this isn’t what it looks like.',
  'IT’S LIKE SEEING THE FACE OF GOD!',
  'Ugh, continuing the circle of WHY BOTHER!',
  'Hah heh Aahahaaa. It thinks it’s people!',
  'Great. Way to keep a low profile.',
  'Well that’s just great.',
  'Oh, c’mon, are you kidding me?! You’re really gonna leave me out here?!',
  //'And now we are all dumber',
  'https://m.popkey.co/0e15f2/47D7R.gif',
  'https://giphy.com/gifs/hulu-fx-archer-l2SpYMbkUKDLKy25i',
  'https://giphy.com/gifs/archerfx-archer-archerfxx-disconcerting-RhfQibBWggMZMLlRdl',
  'https://tenor.com/view/archer-sterling-archer-jesus-christ-can-the-mind-vomit-mind-gif-5069168',
  'https://tenor.com/view/archer-sterling-archer-theres-not-enough-liquor-and-therapy-undo-gif-5180168',
  'https://tenor.com/view/archer-gif-5965699',
  'https://tenor.com/view/archer-yay-excited-gif-5502995',
  'https://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-9.gif',
];

const dangerZoneResponse = [
  'Hey, that’s my line',
  'WOOOOO!!!!',
  'God, I love Kenny Loggins.',
  'https://giphy.com/gifs/archer-skytanic-danger-zone-H8iL56bXGjVE4',
  'https://tenor.com/view/archer-top-gun-jet-drive-parody-gif-5469185',
  'https://tenor.com/view/highfive-archer-cyril-topgun-gif-5655940',
];

const cantWont = ['Can’t or won’t?'];

const random = [
  'I’m not saying I invented the turtleneck, but I was the first person to realise its potential as a tactical garment. The tactical turtleneck! The... tactleneck.',
  'Are you kidding? Dude. Bros before apparent threats to national security.',
  'Hey, we’re out here risking our lives every... many of the days!',
  'Lying is like 95% of what I do.',
  'Karate? The Dane Cook of martial arts? No, ISIS agents use Krav Maga.',
  'Hey, I am everybody’s type.',
  'A little of Column \'A\', a little of Column \'B\'.',
  'Do you want ants? Because that’s how you get ants.',
  'WOOOOO!!!!!',
  'READ A BOOK!',
  'IT REMEMBERS ME!',
  'IT DOES KNOW MY NAME!',
  'Name-dropper',
  'Don’t say, \"high function alcoholism\"',
  'Barry? Is that you?',
  'JUST THE TIP!',
  'https://giphy.com/gifs/archerfx-fxx-archerfxx-fxnetworks-dAQnJ2qMmMzA0tqmeG',
  'https://giphy.com/gifs/archer-sterling-bKVmcaeGR8LF6',
  'https://giphy.com/gifs/archer-oc-mr-6pxG2dThniE5G',
  'https://giphy.com/gifs/drinking-archer-n0SYZLVDpJ1ZK',
  'https://giphy.com/gifs/archer-sterling-D6FQLH3DK4lPO',
  'https://giphy.com/gifs/archerfx-archerfxx-hourly-are-you-Vh8A27jp5vYtLqW4CR',
  'https://giphy.com/gifs/archerfx-fxx-archerfxx-fxnetworks-l0RVz7WjhgZLQSgxEV',
  'https://giphy.com/gifs/archer-reaction-akg4zTE3EDmGk',
  'https://giphy.com/gifs/archer-lana-Avu0EklfXa5Ww',
  'https://giphy.com/gifs/archer-boop-annoyed-BUlwrDd97bCYE',
  'https://giphy.com/gifs/archerfx-archer-drop-l1J9RPlgAhn1ox3GM',
  'https://giphy.com/gifs/l0RVz7WjhgZLQSgxEV',
  'https://giphy.com/gifs/archer-reaction-n36PcpdU9bXcQ',
  'https://giphy.com/gifs/archerfx-punch-fxx-archerfxx-JNmjxjfdlnuA4CZWeB',
  'https://tenor.com/view/archer-sterling-archer-drink-drinking-chug-gif-5244712',
]

const rampage = [
  'Did you say rampage!?',
  'RAAAMPAGE!!! WOOOO!',
  'https://tenor.com/view/rampage-archer-gif-4833675',
  'https://giphy.com/gifs/archer-sterling-rampage-eSlPcitchA0Cs',
  'https://tenor.com/view/archer-rampage-revenge-gif-8155725',
]

const leaveEvt = [
  'GOOD RIDDANCE!',
  'At least he died doing what he loved... Getting shot.',
  'Thank God for small miracles!',
  'Okay... Love our little talks!',
  'HOORAY!',
  'https://m.popkey.co/cb43a2/OXWKY.gif',
  'https://giphy.com/gifs/hulu-fx-archer-l2Sqbc3KfIDUxou1W',
  'https://giphy.com/gifs/archerfx-archer-archerfxx-disconcerting-RhfQibBWggMZMLlRdl',
  'https://tenor.com/view/archer-yay-excited-gif-5502995',
  'https://tenor.com/view/archer-typical-frustrating-frustrated-gif-11190638',
  'https://tenor.com/view/archer-gif-9632983\nHere, you were just leaving!',
  'https://tenor.com/view/archer-sterling-archer-pam-poovey-drink-drinking-gif-5121382',
];

const welcomeMsg = 'Was anyone looking for the worlds greatest secret agent?' +
  '\n If not, just say my name `Sterling` or `Archer` and I’ll be there... or not. It’s not like I’m your servant like Woodhouse.';


function buildResponses() {
  return {
    phrasing,
    diatribeResponse,
    dangerZone : dangerZoneResponse,
    random,
    joinEvt,
    leaveEvt,
    rampage,
    cantWont,
    welcomeMsg,
  }
}  

function all() {
  const allResponses = [];

  const responses = buildResponses();

  responses.phrasing.forEach(function (phraseResp) {
    allResponses.push({type: 'PHRASING', text: phraseResp});
  });

  responses.diatribeResponse.forEach(function (joinResp) {
    allResponses.push({type: 'DIATRIBE', text: joinResp});
  });

  responses.joinEvt.forEach(function (joinResp) {
    allResponses.push({type: 'JOIN', text: joinResp});
  });

  responses.leaveEvt.forEach(function (leaveResp) {
    allResponses.push({type: 'LEAVE', text: leaveResp});
  });

  responses.dangerZone.forEach(function (dangerZoneResp) {
    allResponses.push({type: 'DANGER_ZONE', text: dangerZoneResp});
  });

  responses.rampage.forEach(function (rampageResp) {
    allResponses.push({type: 'RAMPAGE', text: rampageResp})
  })

  responses.random.forEach(function (randomResp){
    allResponses.push({type: 'RANDOM', text: randomResp});
  });

  return allResponses;
}

module.exports = function () {
  const responses = buildResponses();
  responses.all = all();
  return responses;
}
