'use strict';

// JavaScriptが有効なときだけ使うスタイル（メニューの折りたたみ・表示アニメーション）の目印。
// JavaScriptが無効でも、すべての内容とリンクは表示される。
document.documentElement.classList.add('js');

// スマートフォン幅のナビゲーションを、ボタンで開閉できるようにする
function setupMenu() {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('#site-nav');

  if (!header || !menuButton || !nav) {
    return;
  }

  // 見た目（クラス）・読み上げ（aria-expanded）・ボタンの文字をまとめて切り替える
  function setMenuOpen(isOpen) {
    header.classList.toggle('is-menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  }

  function isMenuOpen() {
    return menuButton.getAttribute('aria-expanded') === 'true';
  }

  menuButton.addEventListener('click', () => {
    setMenuOpen(!isMenuOpen());
  });

  // メニュー内のリンクを選んだら閉じる
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuOpen(false);
    });
  });

  // Tabキーでヘッダーの外へ移動したら閉じる（フォーカスがメニューの下に隠れないように）
  header.addEventListener('focusout', (event) => {
    if (isMenuOpen() && !header.contains(event.relatedTarget)) {
      setMenuOpen(false);
    }
  });

  // Escキーで閉じて、フォーカスをボタンに戻す
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen()) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
}

// 画面に入った要素に is-visible クラスを付けて、フェードインさせる
function setupReveal() {
  const revealItems = document.querySelectorAll('.reveal');

  // 古いブラウザで内容が隠れたままにならないよう、使えない場合はすぐに表示する
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // 一度表示したら監視をやめる
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach((item) => observer.observe(item));
}

setupMenu();
setupReveal();
