const quizData = [
  {
      question: "1. 피싱 사기를 예방하기 위해 가장 중요한 것은?",
      choices: ["은행 직원에게 전화하기", "출처가 불분명한 링크 클릭", "의심스러운 이메일 삭제", "모르는 사람과 채팅하기"],
      answer: "의심스러운 이메일 삭제"
  },
  {
      question: "2. 안전한 비밀번호를 만드는 방법으로 올바른 것은?",
      choices: ["123456 사용", "비밀번호를 자주 변경", "다른 사이트에서도 동일한 비밀번호 사용", "생일 날짜 사용"],
      answer: "비밀번호를 자주 변경"
  },
  {
      question: "3. 공인인증서를 안전하게 보관하는 방법은?",
      choices: ["USB에 저장하고 분리 보관", "컴퓨터 바탕화면에 저장", "이메일로 전송하여 보관", "공용 컴퓨터에 저장"],
      answer: "USB에 저장하고 분리 보관"
  },
  {
      question: "4. 보안 프로그램을 최신 상태로 유지해야 하는 이유는?",
      choices: ["컴퓨터 속도를 느리게 하기 위해", "바이러스와 악성코드로부터 보호하기 위해", "인터넷 사용을 제한하기 위해", "기록을 지우기 위해"],
      answer: "바이러스와 악성코드로부터 보호하기 위해"
  },
  {
      question: "5. 가짜 웹사이트를 구별하는 방법 중 하나는?",
      choices: ["URL을 주의 깊게 확인한다", "아무 링크나 클릭한다", "웹사이트 디자인만 확인한다", "메일로 받은 링크를 사용한다"],
      answer: "URL을 주의 깊게 확인한다"
  },
  {
      question: "6. 금융사기를 당했을 때 가장 먼저 해야 할 일은?",
      choices: ["경찰에 신고", "친구에게 알림", "인터넷에 게시", "은행에 전화"],
      answer: "경찰에 신고"
  },
  {
      question: "7. 보안 질문의 답변을 설정할 때 가장 중요한 것은?",
      choices: ["쉽게 추측할 수 없는 답변", "친구가 알고 있는 답변", "사실적인 답변", "가장 긴 답변"],
      answer: "쉽게 추측할 수 없는 답변"
  },
  {
      question: "8. 금융 거래 시 안전한 방법은?",
      choices: ["공용 와이파이를 사용", "가정용 와이파이를 사용", "카페 와이파이를 사용", "친구의 핸드폰을 사용"],
      answer: "가정용 와이파이를 사용"
  },
  {
      question: "9. 비밀번호를 저장하는 가장 안전한 방법은?",
      choices: ["종이에 적어 보관", "암호 관리 프로그램 사용", "브라우저에 저장", "친구에게 알려줌"],
      answer: "암호 관리 프로그램 사용"
  },
  {
      question: "10. 이메일로 온 청구서가 의심스러울 때 해야 할 일은?",
      choices: ["청구서에 있는 링크 클릭", "발신자에게 답장", "청구서를 무시", "공식 웹사이트에서 확인"],
      answer: "공식 웹사이트에서 확인"
  },
  {
      question: "11. 개인정보를 보호하는 가장 좋은 방법은?",
      choices: ["공용 컴퓨터에 저장", "비밀번호를 정기적으로 변경", "이메일로 전송", "모든 사이트에 같은 비밀번호 사용"],
      answer: "비밀번호를 정기적으로 변경"
  },
  {
      question: "12. 휴대폰에 설치된 금융 앱을 보호하는 방법은?",
      choices: ["모든 앱에 동일한 비밀번호 사용", "금융 앱을 최신 상태로 유지", "공용 와이파이 사용", "비밀번호를 저장하지 않음"],
      answer: "금융 앱을 최신 상태로 유지"
  },
  {
      question: "13. 인터넷 뱅킹을 사용할 때 피해야 할 행동은?",
      choices: ["안전한 네트워크 사용", "이중 인증 사용", "공용 컴퓨터 사용", "비밀번호 자주 변경"],
      answer: "공용 컴퓨터 사용"
  },
  {
      question: "14. 신용카드 정보를 보호하기 위한 가장 좋은 방법은?",
      choices: ["온라인 쇼핑 시 정보를 저장", "카드 번호를 메모", "카드 사용 후 영수증 버림", "안전한 웹사이트에서만 사용"],
      answer: "안전한 웹사이트에서만 사용"
  },
  {
      question: "15. 가짜 전화번호로 오는 스팸 전화를 막기 위한 방법은?",
      choices: ["모르는 번호는 받지 않음", "즉시 전화를 끊음", "모든 전화를 받음", "전화번호를 인터넷에 게시"],
      answer: "모르는 번호는 받지 않음"
  },
  {
      question: "16. SNS에 개인 정보를 공유할 때 주의할 점은?",
      choices: ["모든 정보를 공유", "친구에게만 공유", "공개로 설정", "다른 사람의 정보를 공유"],
      answer: "친구에게만 공유"
  },
  {
      question: "17. 악성코드로부터 컴퓨터를 보호하는 방법은?",
      choices: ["보안 소프트웨어 설치", "인터넷 사용 안 함", "이메일 열지 않음", "파일 다운로드 안 함"],
      answer: "보안 소프트웨어 설치"
  },
  {
      question: "18. 신분 도용을 방지하기 위한 방법은?",
      choices: ["중요 문서를 잘 보관", "모든 문서를 버림", "개인 정보를 모두 공개", "낮은 보안의 비밀번호 사용"],
      answer: "중요 문서를 잘 보관"
  },
  {
      question: "19. 온라인 쇼핑 시 주의해야 할 점은?",
      choices: ["낮은 가격의 상품만 구매", "공식 웹사이트에서 구매", "모든 사이트에서 구매", "판매자에게 카드 정보 제공"],
      answer: "공식 웹사이트에서 구매"
  },
  {
      question: "20. 보안 위협에 대한 최신 정보를 얻는 방법은?",
      choices: ["보안 뉴스 구독", "친구에게 듣기", "모든 이메일 열기", "보안 소프트웨어 무시"],
      answer: "보안 뉴스 구독"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");
const resultMessage = document.getElementById("result-message");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionContainer.innerHTML = currentQuestion.question;
  choicesContainer.innerHTML = '';
  currentQuestion.choices.forEach(choice => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.onclick = () => selectAnswer(choice);
      choicesContainer.appendChild(button);
  });
}

function selectAnswer(choice) {
  if (choice === quizData[currentQuestionIndex].answer) {
      score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreSpan.innerText = `${score} / ${quizData.length}`;
  let message = "";
  if (score === 20) {
      message = "당신은 전기통신 금융 범죄 박사 !";
  } else if (score >= 15) {
      message = "조금만 더 공부해보아요.";
  } else if (score >= 10) {
      message = "조금 위태 위태 합니다.";
  } else {
      message = "심각한 위험에 처해 있습니다.";
  }
  resultMessage.innerText = message;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("quiz-container").style.display = "block";
  resultContainer.style.display = "none";
  loadQuestion();
}

// Initialize the quiz
loadQuestion();
