/**
 * ① const 定数 = document.getElementById(HTMLで指定したid)を使って
 *    HTMLの要素をJavaScriptに持ってこよう。
 */

// 1個目のボタンをchoice1で宣言して取得しよう
/* ==この行の下に記述== */
const choice1 = document.getElementById("choice-1");
// 2個目のボタンをchoice2で宣言して取得しよう
/* ==この行の下に記述== */
const choice2 = document.getElementById("choice-2");
// 3個目のボタンをchocie3で宣言して取得しよう
/* ==この行の下に記述== */
const choice3 = document.getElementById("choice-3");
// divタグをfeedbackで宣言して取得しよう
/* ==この行の下に記述== */
const feedback = document.getElementById("feedback");


/**
 * ② onclickイベントを書こう!
 *    JavaScriptではfunction () {} と書けば、関数が宣言されます。
 *    関数の中で、タグ要素.textContentに新しい文を代入しよう!!
 *    (ex. feedback.textContent = "回答"
 */

// choice1のonclickイベントの処理を書こう
/* ==この行の下に記述== */
choice1.onclick = function () {
  feedback.textContent = "不正解";
}

// choice1と同じ様にchoice2のonclickイベントの処理を書こう
/* ==この行の下に記述== */
choice1.onclick = function () {
  feedback.textContent = "正解";
}

//choice1と同じ様にchoice3のonclickイベントの処理を書こう
/* ==この行の下に記述== */
choice1.onclick = function () {
  feedback.textContent = "不正解";
}
