const editorContent = document.querySelector('.content')

editorContent.innerHTML = localStorage['content'] || defaultContent
let save = () => {
  localStorage['content'] = editorContent.innerHTML
}

editorContent.onkeyup = () => save()
