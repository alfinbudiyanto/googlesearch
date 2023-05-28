function search() {
  let { value } = document.getElementById("searchInput");

  const baseUrl = "https://google.com/search?q=";
  if (!value) value = "github.com";
  location.replace(baseUrl + value);
}
