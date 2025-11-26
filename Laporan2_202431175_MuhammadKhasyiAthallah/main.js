function togglePenjelasan(element) {
  const penjelasan = element.querySelector('.penjelasan');
  if (!penjelasan.classList.contains('hidden')) {
    if (confirm('Apakah Anda ingin menyembunyikan penjelasan ini?')) {
      penjelasan.classList.add('hidden');
    }
  } else {
    if (confirm('Apakah Anda ingin menampilkan penjelasan ini?')) {
      penjelasan.classList.remove('hidden');
    }
  }
}

function ubahMode() {
  const body = document.body;
  if (body.classList.contains('mode-rapi')) {
    body.classList.remove('mode-rapi');
    body.classList.add('mode-berantakan');
  } else {
    body.classList.remove('mode-berantakan');
    body.classList.add('mode-rapi');
  }
}
