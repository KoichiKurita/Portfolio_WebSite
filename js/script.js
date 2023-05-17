/*
  実践課題1-2
  ポートフォリオサイト(script.js)
  作成者：リンクス新越谷 栗田幸一
  修正日(初版)：2023.2.17
*/

$(() => {
  //ページ内スクロール
  const height = $(".header").outerHeight();

/*
  【修正】関数定義とjQueryオブジェクトの修正
  ページ内リンクでスムーススクロールできない原因
  アロー関数の処理部分で$(this)を使用しているため。
  アロー関数の内部で$(this)を使用すると、イベントが発生したオブジェクトではなく、Document全体を指すことになる。
  対策は、
  1. アロー関数の引数にeventを指定し、$(this)の代わりに$(event.currentTarget)を使用する。
  2. アロー関数以外の関数定義方法を使用する。(function()による定義など)
  参考：https://rachicom.net/frontend/jquery-this.html
*/
  $('a[href^="#"]').click((event)=> {
    const href = $(event.currentTarget).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - height;

    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
    );
  });

  //ページトップ
  $("#js-page-top").click(() => {
    /* 【修正】animateメソッドの表記ミス修正 (.animait → .animate) */
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
    );
  });
});
