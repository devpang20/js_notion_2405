export default function PostPage({ $target, initalState }) {
    const $page = document.createElement('div')
    $page.className = 'postList'
    $target.appendChild($page)

    this.state = initalState
    $page.innerHTML = `
  <ul>
    ${this.state.map((row) => `<li>${row.id} / ${row.title}</li>`).join('')}
  </ul>
  `
}
