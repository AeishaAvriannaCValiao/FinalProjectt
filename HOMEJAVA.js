	 
const quizBox = document.getElementById("quiz-box");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

		   
yesBtn.addEventListener("click", () => {
window.location.href = "quiz.html";
});

		   
noBtn.addEventListener("click", () => {
quizBox.style.display = "none";
});
		
const campaignBox = document.getElementById("campaign-box");
const campaignYesBtn = document.getElementById("campaign-yes-btn");
const campaignNoBtn = document.getElementById("campaign-no-btn");

campaignYesBtn.addEventListener("click", () => {
window.location.href = "SUBPAGESIGN.html";
});

campaignNoBtn.addEventListener("click", () => {
campaignBox.style.display = "none";
});
