const container = document.querySelector('#all__recipes');
const clearData = (elementID) => {
  const div = document.getElementById(elementID);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};


const showData = (arr) => {
  clearData('all__recipes');
  arr.map((el) => {
    const article = document.createElement('article');
    const artcileName = document.createElement('h3');
    const articleImg = document.createElement('img');
    const ingeridentsTitle = document.createElement('h3');
    const ingeridents = document.createElement('p');
    const preparationTitle = document.createElement('h3');
    const preparation = document.createElement('p');

    artcileName.textContent = el.name;
    articleImg.src = el.imgurl;
    articleImg.alt = el.name;
    ingeridentsTitle.textContent = 'Ingeridents: ';
    ingeridentsTitle.classList.add('ing-title');
    ingeridents.textContent = el.ingredients;
    ingeridents.classList.add('ing');
    preparationTitle.textContent = 'Preparation: ';
    preparationTitle.classList.add('prep-title');
    preparation.textContent = el.preparation;
    preparation.classList.add('prep');
    article.appendChild(artcileName);
    article.appendChild(articleImg);
    article.appendChild(ingeridentsTitle);
    article.appendChild(ingeridents);
    article.appendChild(preparationTitle);
    article.appendChild(preparation);
    container.appendChild(article);
  });
};


fetch('/recipe').then((res) => res.json()).then((data) => showData(data)).catch(console.log);
