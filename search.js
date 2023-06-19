var recipes = [
  { name: "김치볶음밥", url: "rlaclqhRdmaqkq.html", ingredients: ["김치", "김치볶음밥", "볶음밥"] },
  { name: "계란볶음밥", url: "rPfksqhRdmaqkq.html", ingredients: ["계란", "계란볶음밥", "볶음밥"] },
  { name: "떡볶이볶음밥", url: "EjrqhRdlqhRdmaqkq.html", ingredients: ["떡볶이", "떡볶이볶음밥", "볶음밥"] },
  { name: "치킨마요덮밥", url: "clzlsakdyejvqkq.html", ingredients: ["치킨", "치킨마요", "치킨마요덮밥", "덮밥"] },
  { name: "스팸마요덮밥", url: "tmvoaakdyejvqkq.html", ingredients: ["스팸", "스팸마요", "스팸마요덮밥", "덮밥"] },
  { name: "토마토파스타", url: "xhakxhvktmxk.html", ingredients: ["토마토", "파스타", "토마토파스타"] },
  { name: "크림파스타", url: "zmflavktmxk.html", ingredients: ["크림", "파스타", "크림파스타"] },
  { name: "로제파스타", url: "fhwpvktmxk.html", ingredients: ["로제", "파스타", "로제파스타"] },
  { name: "알리오올리오", url: "dkffldhdhffldh.html", ingredients: ["알리오올리오", "알리오", "올리오"] },
  { name: "잔치국수", url: "wksclrnrtn.html", ingredients: ["잔치", "국수", "잔치국수"] },
  { name: "비빔국수", url: "qlqlarnrtn.html", ingredients: ["비빔", "국수", "비빔국수"] },
  { name: "김치말이국수", url: "rlaclakfdlrnrtn.html", ingredients: ["김치", "국수", "김치말이국수"] },
  { name: "된장찌개", url: "ehlswkdWlro.html", ingredients: ["된장", "찌개", "된장찌개"] },
  { name: "김치찌개", url: "rlaclWlro.html", ingredients: ["김치", "찌개", "김치찌개"] },
  { name: "부대찌개", url: "qneoWlro.html", ingredients: ["부대", "찌개", "부대찌개"] },
  { name: "육개장", url: "dbrrowkd.html", ingredients: ["육개장"] },
  { name: "미역국", url: "aldurrnr.html", ingredients: ["미역", "국", "미역국"] },
  { name: "계란국", url: "rPfksrnr.html", ingredients: ["계란", "국", "계란국"] },
];

function searchRecipe() {
  var searchInput = document.getElementById('search-input').value.toLowerCase();
  var searchResults = document.getElementById('search-results');

  searchResults.innerHTML = '';

  var matchedRecipes = recipes.filter(function(recipe) {
    return recipe.name.toLowerCase().includes(searchInput) || recipe.ingredients.includes(searchInput);
  });

  if (matchedRecipes.length > 0) {
    matchedRecipes.forEach(function(recipe) {
      var recipeLink = document.createElement('a');
      recipeLink.href = recipe.url;
      recipeLink.textContent = recipe.name;

      var recipeElement = document.createElement('div');
      recipeElement.appendChild(recipeLink);
      searchResults.appendChild(recipeElement);
    });
  } else {
    searchResults.innerHTML = '<p>검색 결과가 없습니다.</p>';
  }
}