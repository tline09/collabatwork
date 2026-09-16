(function () {
  'use strict';
  var burger = document.querySelector('.cw-burger');
  var mob = document.querySelector('.cw-mob');
  if (burger && mob) {
    burger.addEventListener('click', function () {
      var open = mob.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mob.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mob.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var form = document.querySelector('form[data-mailto]');
  if (!form) return;
  var done = document.querySelector('.cw-done');
  var err = form.querySelector('.cw-err');
  var t = JSON.parse(form.getAttribute('data-labels'));
  var draft = '';
  function val(n) { var el = form.elements[n]; return el ? el.value.trim() : ''; }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (val('website')) return;
    var email = val('email'), firma = val('firma');
    if (!(val('name') && firma && val('msg') && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))) {
      err.hidden = false; return;
    }
    err.hidden = true;
    var body = [
      t.name + ': ' + val('name'),
      t.firma + ': ' + firma,
      t.email + ': ' + email,
      t.groesse + ': ' + (val('groesse') || t.none),
      t.thema + ': ' + (val('thema') || t.none),
      '', t.msg + ':', val('msg')
    ].join('\r\n');
    var subject = t.subject + ' – ' + firma;
    draft = subject + '\r\n\r\n' + body;
    window.location.href = 'mailto:' + form.getAttribute('data-mailto') +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    form.hidden = true;
    done.hidden = false;
  });

  var copyBtn = done.querySelector('[data-copy]');
  copyBtn.addEventListener('click', function () {
    var reset = function () {
      copyBtn.textContent = t.copied;
      window.setTimeout(function () { copyBtn.textContent = t.copy; }, 2500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(draft).then(reset, reset);
    } else {
      var ta = document.createElement('textarea');
      ta.value = draft; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta); reset();
    }
  });
  done.querySelector('[data-reset]').addEventListener('click', function () {
    done.hidden = true; form.hidden = false; form.reset();
  });
})();
