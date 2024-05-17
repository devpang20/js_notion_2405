export default function PostPage({ $target }) {
  const $page = document.createElement("div");
  $page.innerHTML = "sidebar";
  $target.appendChild($page);
}
