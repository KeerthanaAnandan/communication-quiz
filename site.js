let questions = [
  {
    id: 1,
    question: "I can be very blunt when talking to my partner.",
    answer: "passive",
    options: ["Yes ", "No"],
  },
  {
    id: 2,
    question:
      "I lie to avoid an argument (say nothing is wrong, when something really is)",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 3,
    question: "I often struggle with taking accountability for my actions.",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    question: "Sometimes the way I communicate hurts my partner.",
    answer: "2",
    options: ["Yes ", "No"],
  },
  {
    id: 5,
    question: "My honesty comes across in a very appropriate manner.",
    answer: "2",
    options: ["Yes  ", "No"],
  },
  {
    id: 6,
    question:
      "I take time to understand my partner’s emotions and not just my own.",
    answer: "2",
    options: ["Yes  ", "No"],
  },
  {
    id: 7,
    question: "I am always right",
    answer: "2",
    options: ["Yes ", "No"],
  },
  {
    id: 8,
    question: "Sometimes I rather bury my head in the sand than speak my mind.",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 9,
    question:
      "I can sometimes be indirect (speaking under my breath, making backhanded, sarcastic comments)",
    answer: "2",
    options: ["Yes   ", "No"],
  },
  {
    id: 10,
    question: " Do you repeatedly make excuses to avoid certain people?",
    answer: "2",
    options: ["Yes   ", "No"],
  },
  {
    id: 11,
    question:
      "Do you communicate more non-verbally (body language) than verbally? ",
    answer: "2",
    options: ["Yes   ", "No"],
  },
  {
    id: 12,
    question:
      " I know how to say no and have established healthy boundaries in my life.",
    answer: "2",
    options: ["Yes  ", "No"],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 12;

let passivePoints = 0;
let aggressivePoints = 0;
let assertivePoints = 0;
let passiveagressivePoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  //passive(0)
  if (user_answer === "Yes") {
    passivePoints += 1;
  }
  //aggressive(1)
  else if (user_answer === "Yes ") {
    aggressivePoints += 1;
  }
  //assertive(2)
  else if (user_answer === "Yes  ") {
    assertivePoints += 1;
  }
  //passiveaggressive(3)
  else if (user_answer === "Yes   ") {
    passiveagressivePoints += 1;
  }

  sessionStorage.setItem("passive", passivePoints);
  sessionStorage.setItem("aggressive", aggressivePoints);
  sessionStorage.setItem("assertive", assertivePoints);
  sessionStorage.setItem("passiveaggressive", passiveagressivePoints);
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second] = questions[count].options;
  ///////no of questions

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
 
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
