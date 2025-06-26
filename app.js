

const greetingEle = document.querySelector(".welcome");
const quotesEle = document.querySelector("p");
const toggle = document.querySelector(".open-close-icon");



toggle.addEventListener('click', function() {
      alert('Button Clicked!');
      });

let currentTime = new Date();
let afterNoon= new Date();
let midnight = new Date();
let evening = new Date();


afterNoon.setHours(12,0,0);
evening.setHours(18,0,0);
midnight.setHours(24,0,0);


if (currentTime >= afterNoon && currentTime <= evening) {
//    const time = new Date().toLocaleTimeString();
   greetingEle.innerText = "Good Afternoon Gracefamily!";
}
else if (currentTime > evening && currentTime <= midnight) {
      greetingEle.innerText = "Good Evening Gracefamily!";
}
else {
      greetingEle.innerText = "Good Morning Gracefamily!"
}


//Peoples qoutes
theDate= new Date();
var day = theDate.getDate();
var textdate = (theDate.getMonth() + 1) + '/' + theDate.getDate() + '/' + theDate.getYear();
ra = theDate.getDate();

var numquotes = 31;
quotes = new Array(numquotes+1);

quotes[1] = "Kind words do not cost much. Yet they accomplish much. \n- Blaise Pascal";
quotes[2] = "The difference between try and triumph is just a little umph. \n- Bonnie Przybylski";
quotes[3] = "When you help others feel important, you help yourself feel important too. \n- David J. Schwartz";
quotes[4] = "Our attitude towards others determines their attitude towards us. \n- Earl Nightingale";
quotes[5] = "It is not fair to ask of others what you are not willing to do yourself. \n- Eleanor Roosevelt";
quotes[6] = "Words of comfort, skillfully administered, are the oldest therapy known to man. \n- Lous Nizer";
quotes[7] = "Never take a person's dignity: it is worth everything to them, and nothing to you. \n- Fran Barron";
quotes[8] = "What do we live for if not to make life less difficult for each other? \n- George Eliot";
quotes[9] = "Always do more than is required of you. \n- George S. Patton";
quotes[10] = "Happiness is a by<br>-product of an effort to make someone else happy. \n- Gretta Palmer";
quotes[11] = "A thousand words will not leave so deep an impression as one deed. \n- Henrik Ibsen";
quotes[12] = "Don't find fault. Find a remedy. \n- Henry Ford";
quotes[13] = "Courteous treatment will make a customer a walking advertisement. \n- James Cash Penney";
quotes[14] = "One kind word can warm three winter months. \n-Japanese Proverb";
quotes[15] = "You don't earn loyalty in a day. You earn loyalty day<br>-by<br>-day. \n- Jeffrey Gitomer";
quotes[16] = "Without caring there can be no quality. \n- Joel Barker";
quotes[17] = "Do right. Do your best. Treat others as you want to be treated. \n- Lou Holtz";
quotes[18] = "There are no traffic jams along the extra mile. \n- Roger Staubach";
quotes[19] = "Politeness goes far, yet costs nothing. \n- Samuel Smiles";
quotes[20] = "To listen closely and reply well is the highest perfection we are able to attain in the art of conversation. \n- Francois de La Rochefoucauld";
quotes[21] = "Be kind and merciful. Let no one ever come to you without coming away better and happier. \n- Mother Teresa";
quotes[22] = "The most important thing in communication is hearing what isn't said. \n- Peter Drucker";
quotes[23] = "Until you understand your customers <br>- deeply and genuinely \n- you cannot truly serve them. <br>- Rasheed Ogunlaru";
quotes[24] = "Seek first to understand. Then to be understood. \n- Stephen Covey";
quotes[25] = "Why wait to be memorable? \n- Anthony Robbins";
quotes[26] = "A smile is a curve that sets things straight. \n- Unknown";
quotes[27] = "A warm smile is the universal language of kindness. \n- William Arthur Ward";
quotes[28] = "Be helpful <br>- even if there's no immediate profit in it. \n- Susan Ward";
quotes[29] = "People expect good service but few are willing to give it. \n- Robert Gately";
quotes[30] = "People will forget what you said. They will forget what you did. But they will never forget how you made them feel. \n- Maya Angelou";
quotes[31] = "If you don't care, your customer never will. \n- Marlene Blaszczyk";

quotesEle.innerText=  quotes[ra];




