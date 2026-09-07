/* Theme toggle. Nothing else on this site needs JS. */

(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function currentTheme() {
    return root.dataset.theme === 'light' ? 'light' : 'dark';
  }

  /* The button names the theme it switches TO, so the label is an instruction
     rather than a status the reader has to decode. */
  function paintToggle() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    toggle.textContent = next === 'light' ? 'Light' : 'Dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    paintToggle();
    /* Private windows and blocked site data throw on write, and the toggle
       must keep working when the preference cannot be saved. */
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });

  paintToggle();
})();
