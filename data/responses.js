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
  'Are we not saying \"Phrasing\" any more? Which, that’s fine, whatever, but if we’re doing a new thing and nobody told me, *that* I’d have a problem with.',
  'What was wrong with \"Phrasing\"?',

  'http://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-10.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGVteDdmb2s2YnFqOHU4eGozZjF5ZW1vZTF3dDYxMXY2NDFndWt2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5ROlkuRjBdWKRGTYTy/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExODB6ZjlycmdoZnZ0MHc1YzFiOGVhb2kyMmVjb3J0dWRuZXgwYXByYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7tuK9itVBsD3q/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDYzN3NwYThzZzV4bjYyc2hvMDZvMTdhcWcyaWd3cDE1bTNtMXhndCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/22p0JIQMkAxqg/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnM1NzFmZTFzNXcxMXMxamJhcHRnZzh3YXBtbml0ZGIxcnJvbmlxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BYhoMtJMQsYVy/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG54M2MzM2tucHA3a2VoaTQyeWJnZjBhd2d2OXhoazRobG5oem9wYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/22p0JIQMkAxqg/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnF1aGFwMTI1OG13cXA1NnczM3o1NzdsZWJta2JlOG5zeGhneW9udSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z75OjWknCTI6k/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnhhczFsaTdiN2d3YnAxamJmbHF4bW84a25iZ2djOTVhNHYybWlmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1j36v2BuzK6vC/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjYzcTBwZWp1MnE1dHpoZm5vMzZ6azJubW93NXQ3YmdodjVuZHZ6NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BmX38GoChnxRe/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExazdpMDJ5YzV0bnY5YTZvcDY0ZzBiNWJ6MzFjcmVhNzlrMzBxYng1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fh4Z6HJh9Yzh6/giphy.gif',
];

const diatribeResponse = [
  'Paging Kenny Loggins because you’re in the *DANGER ZONE!*',
  'Danger zone. Duh!\nHaven’t you ever seen Top Gun?\nOr like heard of legendary rock singer, songwriter, guitarist Kenny Freakin’ Loggins!?',
  '🎵 DANGER ZONE! 🎵',
  'https://giphy.com/gifs/archer-fx-sterling-cbAb0vWhJqA2k',
  'https://giphy.com/gifs/archer-space-race-danger-zone-xGbA1gRCAj1jW',
  'https://giphy.com/gifs/archer-reactiongifs-mrw-Kz420G0aGw5mU',
  'https://giphy.com/gifs/archer-lana-sterling-7WqaymtUo9qFO',
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
  'It’s TV’s Michael Gray!',
  //'And now we are all dumber',
  'https://giphy.com/gifs/hulu-fx-archer-l2SpYMbkUKDLKy25i',
  'https://giphy.com/gifs/archerfx-archer-archerfxx-disconcerting-RhfQibBWggMZMLlRdl',
  'https://www.tvovermind.com/wp-content/uploads/2013/07/Archer-GIFs-9.gif',
];

const dangerZoneResponse = [
  'Hey, that’s my line',
  'WOOOOO!!!!',
  'God, I love Kenny Loggins.',
  '🎵 DANGER ZONE! 🎵',
  'Paging Kenny Loggins because you’re in the *DANGER ZONE!*',
  'https://giphy.com/gifs/archer-skytanic-danger-zone-H8iL56bXGjVE4',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Fsa283MjR4dHVpenhqMHhrNGZlcnJsM25sZDZydDhsNW5tdncwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kz420G0aGw5mU/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzJlbHhsajA4ZGdvZDZnY3JhbWh5M2d1MzFsbnB5emZkY3dpYWc4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cbAb0vWhJqA2k/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnUyZ3lqeGZkMGlxbGJpYmdiNnN2YXdqdGQ0bnpta2QzY285emYybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xGbA1gRCAj1jW/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExODh4MzYwMDR5aWZ4NjRiNjQ1dGgwejhyYmxuYnJkOHRzbDk2NjlzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Uq8YQehOCGWRMtS5UL/giphy.gif',
];

const ocelot = [
  'BABOU!!!',
  'SERPENTINE, BABOU! SERPENTINE!',
  'You gotta get a tire swing, a tree branch, something. That ocelot is DESPERATE for something to play with. It’s like Meow-schwitz in there',
  'Hear that? They called you \"exotic\".',

  'https://media.giphy.com/media/KYlTGWshxs9fG/giphy.gif',
];

const jazzHands = [
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JrMTVxam01ZmxkOGhpdWYyMHF3cTdjamZrNDYxMWxucTM4eTd3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/142UITjG5GjIRi/giphy.gif',
];

const cantWont = [
  'Can’t or won’t?',
];

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
  'I can’t hear you over the deafening sound of my own AWESOMENESS!',
  'Sour mix? In a margarita? What is this, Auschwitz?',
  'Bloody Mary, full of vodka, blessed are you among cocktails. Pray for me now and at the hour of my death, which I hope is soon. Amen.',
  'Eat a dick, jungle!',
  'Hey, can I order some pie? Or have you single-handedly depleted the Global Strategic Pie Reserves?',
  'Ray forgot the gum!',
  'I WANNA FLY THE TRAIN!',

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
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXhqcXBhajBocW5zbzR3cG5sZzdjdzBscGlxZjZkNWtpaTY5dngwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5zbOuFCA68Cs/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmRiMmw3em4xejFnZ2hndXlwYTNjemJyeHM0eTAzeDYyaDM0eTZmZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D6FQLH3DK4lPO/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmw3ZXJ6cWxqdDRuOTJ4aDFsdGV2ZzVvNTNteTlud21pcG9jODl4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10DVcUchEQUdFu/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzJ6Zm54anh6amh4dDJzeGxsYTFhN3MzcDM3c3N4ZGk1enZta3VkbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OBuQCM5IlgGs/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWxlZ3NnNGFncXFkd3pzbGpiaThoYW00N2RvMnQ0MHFhazZqeWV1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5zbOuFCA68Cs/giphy.gif',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3gwazl6ZHEyOHRmZTlsa253cnMwdWFkbWg1c3EycDllZ2ZiYjJ2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6pxG2dThniE5G/giphy.gif',
]

const rampage = [
  'Did you say rampage!?',
  'RAAAMPAGE!!! WOOOO!',
  'Closet rampage!',
  'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3RxaHR4a3R2MXhjZ2cydjY5eDlzaXM0ajlsczRtdG1xejhtOXphcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A5RAgv4HaIeei05OOP/giphy.gif',
  'https://giphy.com/gifs/archer-sterling-rampage-eSlPcitchA0Cs',
]

const leaveEvt = [
  'GOOD RIDDANCE!',
  'At least he died doing what he loved... Getting shot.',
  'Thank God for small miracles!',
  'Okay... Love our little talks!',
  'HOORAY!',
  'Okay then I guess just pout!',
  'https://giphy.com/gifs/hulu-fx-archer-l2Sqbc3KfIDUxou1W',
  'https://giphy.com/gifs/archerfx-archer-archerfxx-disconcerting-RhfQibBWggMZMLlRdl',
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
    ocelot,
    jazzHands,
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
  });

  responses.random.forEach(function (randomResp){
    allResponses.push({type: 'RANDOM', text: randomResp});
  });

  responses.ocelot.forEach(function (ocelotResp) {
    allResponses.push({ type: 'OCELOT', text: ocelotResp });
  });

  responses.jazzHands.forEach(function (jazzHandsResp) {
    allResponses.push({ type: 'JAZZ_HANDS', text: jazzHandsResp });
  });

  // console.dir(allResponses);
  return allResponses;
}

module.exports = function () {
  const responses = buildResponses();
  responses.all = all();
  return responses;
}
