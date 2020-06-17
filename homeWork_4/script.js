// // 1.
function formTag(name, className, content) {
   let tagNew = document.createElement(name);
   tagNew.className = className;
   tagNew.textContent = content;
   return tagNew;
}

// 2.
let creatP = document.createElement('p');
creatP.textContent = 'Добавили контент трали-вали';
creatP.style.fontSize = "36px";
creatP.style.fontWeight = 'bold';

// 3.
for (let i = 1960; i <= 2020; i++){
    let tagSelect = document.querySelector('select');
    let tagOption = document.createElement('option');
    tagOption.textContent = 1960;
    tagSelect.append(tagOption);
}
