function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = { month: "long", day: "2-digit", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
console.log(formatDate("2024-05-15T15:47:02.702Z"));
export default formatDate;
