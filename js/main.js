
// Находим нужную кнопку
const btn = document.querySelector('.btn-toggle');

// Прослушиваем нажатие на кнопку
btn.addEventListener('click', function() {
  // Переключаем (добавляем/удаляем) класс .dark-theme
  document.body.addClass('.dark-theme');  
})

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('.border-2');
    }
  });
}

element.scrollIntoView({behavior:'smooth'});

let options = {
  threshold: [0.5] };
  let observer = new
  IntersectionObserver(onEntry, options);
  let elements = 
  document.querySelectorAll('.border');

  for (let elm of elements) {
    observer.obsere(elm);
  }
