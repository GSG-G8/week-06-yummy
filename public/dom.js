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
    const ingeridents = document.createElement('p');
    const preparation = document.createElement('p');
    artcileName.textContent = el.name;
    articleImg.src = el.imgurl;
    ingeridents.textContent = el.ingredients;
    preparation.textContent = el.preparation;
    article.appendChild(artcileName);
    article.appendChild(articleImg);
    article.appendChild(ingeridents);
    article.appendChild(preparation);
    container.appendChild(article);
  });
};


fetch('/recipe').then((res) => res.json()).then((data) => showData(data)).catch(console.log);
