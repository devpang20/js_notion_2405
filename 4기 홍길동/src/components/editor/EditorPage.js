export default function EditorPage({ $target }) {
    const $page = document.createElement('div')

    $page.innerHTML = `
    <div class="editorDiv">
      <input type="text" class="editorTitle" placeholder="제목없음" />
      <textarea class="editorContent" placeholder="내용을 입력하세요"></textarea>
    </div>`

    $target.appendChild($page)
}
