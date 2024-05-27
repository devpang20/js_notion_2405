export default function PostPage({ $target, initalState }) {
    const $page = document.createElement('div')
    $page.className = 'postList'
    $target.appendChild($page)

    //   [
    //     {
    //         id: 1, // Document id
    //         title: '노션을 만들자', // Document title
    //         documents: [
    //             {
    //                 id: 2,
    //                 title: '블라블라',
    //                 documents: [
    //                     {
    //                         id: 3,
    //                         title: '함냐함냐',
    //                         documents: [],
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         id: 4,
    //         title: 'hello!',
    //         documents: [],
    //     },
    // ]

    this.createTreeView = (data) => {
        console.log('createTreeView', data)
        let str = ''

        for (const key in data) {
            if (data[key].documents.length > 0) {
                str += `<li class="dataList">📄 ${data[key].title}
                  <button class="addBtn">➕</button>
                  <button class="delBtn">🗑️</button>
                    <ul>${this.createTreeView(data[key].documents)}</ul>
                  </li>`
            } else {
                str += `<li class="dataList">📄 ${data[key].title}
                  <button class="addBtn">➕</button>
                  <button class="delBtn">🗑️</button>
                </li>`
            }
        }

        return str
    }

    this.state = initalState
    $page.innerHTML = `<ul>
      ${this.state
          .map(
              (document) => `<li class="dataList">📄 ${document.title}
                <butto class="addBtn">➕</button>
                <button class="delBtn">🗑️</button>
              </li>
          ${document.documents.length > 0 ? `<ul>${this.createTreeView(document.documents)}</ul>` : ''}
          `,
          )
          .join('')}
    </ul>
  `
}
