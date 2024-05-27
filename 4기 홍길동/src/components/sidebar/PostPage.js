import PostList from './PostList.js'

export default function PostPage({ $target, initalState }) {
    const $page = document.createElement('div')
    $page.className = ''
    $target.appendChild($page)

    new PostList({ $target: $page, initalState })
}
