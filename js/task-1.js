function slugify(title) {
  let slug = title.toLowerCase();
  let slugRight = Array.from(slug);
  slugRight = slug.split(" ");
  return slugRight.join("-");
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
