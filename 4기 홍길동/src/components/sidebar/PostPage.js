export default function PostPage({ $target, initalState }) {
  console.log(initalState);
  const $page = document.createElement("div");

  this.state = initalState;
  $page.innerHTML = `
  <ul>
    ${this.state.map((row) => `<li>${row.id} / ${row.title}</li>`).join("")}
  </ul>
  `;
  $target.appendChild($page);
}
