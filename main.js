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
  feedback.textContent = "ブッブー!! GeekSalonは大学生限定のプログラミングスクールだよ!!";
}

// choice1と同じ様にchoice2のonclickイベントの処理を書こう
/* ==この行の下に記述== */
choice2.onclick = function () {
  feedback.textContent = "正解!!GeekSalonはプログラミング初心者でも「楽しくて」「続けられる」「作品を一つ作り上げる」スクールなんだ!!";
}

//choice1と同じ様にchoice3のonclickイベントの処理を書こう
/* ==この行の下に記述== */
choice3.onclick = function () {
  feedback.textContent = "残念!! GeekSalonは全国にあるけど、沖縄と横浜には無いかな";
}
