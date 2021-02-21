let passive = sessionStorage.getItem("passive");
let aggressive = sessionStorage.getItem("aggressive");
let assertive = sessionStorage.getItem("assertive");
let passiveaggressive = sessionStorage.getItem("passiveaggressive");

let mess;
let typo;
//passiveaggresive
if (
  passiveaggressive > aggressive &&
  passiveaggressive > assertive &&
  passiveaggressive > passive
) {
  typo = "Your communication style is Passive Aggressive";
  mess = [
    "These type of communicators:",
    "Struggles with accountability",
    "Harbors their emotions, but speak as if everything is fine",
    "Besides, your main intention when you take to IG is to be entertained, not necessarily to interact. This doesn’t mean you don’t like to stay up-to-date on what other people are doing. Of course you do! It’s just that you have no interest in showing others what you're doing, which is why your account is probably private at this moment.",
    "Most like to communicate non-verbally",
  ];
}

//aggressive
else if (
  aggressive > passive &&
  aggressive > assertive &&
  aggressive > passiveaggressive
) {
  typo = "Your communication style is: Aggressive";
  mess = [
    "These type of communicators:",
    "Try to remain in control",
    "Speak with the intent to do harm or hurt their partners feelings.",
    "Can be intimidating",
    "Often speak in a condescending manner",
  ];
}
//assertive
else if (
  assertive > aggressive &&
  assertive > passive &&
  assertive > passiveaggressive
) {
  typo = "Your communication style is Assertive:";
  mess = [
    "These type of communicators:",
    "Understands the needs of their partners",
    "Can set clear boundaries",
    "Confident in the ability to manage conflict",
    "Can speak clearly and in a manner that is understood",
  ];
}
//passive
else if (
  passive > aggressive &&
  passive > assertive &&
  passive > passiveaggressive
) {
  typo = "Your communication style is Passive:";
  mess = [
    "These type of communicators:",
    "Can easily shut down",
    "Avoids expressing their needs",
    "Has their guard up most times (maybe due to fear, past breakups)",
    "May ignore your own personal needs, and sometimes place others’ ahead of yours.",
  ];
}
//passive === assertive
else if (
  assertive == passive &&
  assertive > aggressive &&
  assertive > passiveaggressive
) {
  typo = "Your communication style is Assertive:";
  mess = [
    "These type of communicators:",
    "Understands the needs of their partners",
    "Can set clear boundaries",
    "Confident in the ability to manage conflict",
    "Can speak clearly and in a manner that is understood",
  ];
}
//passive === aggressive
else if (
  passive == aggressive &&
  passive > assertive &&
  passive > passiveaggressive
) {
  typo = "Your communication style is Passive Aggressive";
  mess = [
    "These type of communicators:",
    "Struggles with accountability",
    "Harbors their emotions, but speak as if everything is fine",
    "Besides, your main intention when you take to IG is to be entertained, not necessarily to interact. This doesn’t mean you don’t like to stay up-to-date on what other people are doing. Of course you do! It’s just that you have no interest in showing others what you're doing, which is why your account is probably private at this moment.",
    "Most like to communicate non-verbally",
  ];
}
//passive === passiveaggressive
else if (
  passive == passiveaggressive &&
  passive > assertive &&
  passive > aggressive
) {
  typo = "Your communication style is Passive Aggressive";
  mess = [
    "These type of communicators:",
    "Struggles with accountability",
    "Harbors their emotions, but speak as if everything is fine",
    "Besides, your main intention when you take to IG is to be entertained, not necessarily to interact. This doesn’t mean you don’t like to stay up-to-date on what other people are doing. Of course you do! It’s just that you have no interest in showing others what you're doing, which is why your account is probably private at this moment.",
    "Most like to communicate non-verbally",
  ];
}

//aggressive === assertive
else if (
  aggressive === assertive &&
  assertive > passive &&
  assertive > passiveaggressive
) {
  typo = "Your communication style is: Aggressive";
  mess = [
    "These type of communicators:",
    "Try to remain in control",
    "Speak with the intent to do harm or hurt their partners feelings.",
    "Can be intimidating",
    "Often speak in a condescending manner",
  ];
}

//pasive = ass = agg == passaggg
else if (
  assertive == passiveaggressive &&
  assertive == passive &&
  assertive == aggressive &&
  passiveaggressive == aggressive &&
  passiveaggressive == passive &&
  passive == aggressive
) {
  typo = "Your communication style is: Aggressive";
  mess = [
    "These type of communicators:",
    "Try to remain in control",
    "Speak with the intent to do harm or hurt their partners feelings.",
    "Can be intimidating",
    "Often speak in a condescending manner",
  ];
}

const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = mao;

msgme.innerHTML = mao;
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
