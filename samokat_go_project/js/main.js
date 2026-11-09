const nav = document.getElementById('nav');

document.getElementById('toggle').addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

document.querySelectorAll('.pick').forEach(b =>
  b.addEventListener('click', () => {
    document.getElementById('model').value = b.dataset.model;
    document.getElementById('rent').scrollIntoView({ behavior: 'smooth' });
  })
);

document.querySelectorAll('.picktariff').forEach(b =>
  b.addEventListener('click', () => {
    document.getElementById('tariff').value = b.dataset.tariff;
    document.getElementById('rent').scrollIntoView({ behavior: 'smooth' });
  })
);

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.replace(/\D/g, '');
  const agree = document.getElementById('agree').checked;
  const result = document.getElementById('result');

  const isValid =
    name.length >= 2 &&
    phone.length >= 10 &&
    document.getElementById('model').value &&
    document.getElementById('tariff').value &&
    agree;

  if (!isValid) {
    result.textContent = 'Проверьте обязательные поля, телефон и согласие.';
    result.style.color = '#b3453d';
    return;
  }

  result.textContent =
    'Данные проверены. Демонстрационный режим: заявка не отправлена и не сохранена.';
  result.style.color = '#4e8522';
});