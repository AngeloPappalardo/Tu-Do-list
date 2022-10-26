function addElement() {
    const textArea = document.getElementById('textArea')
    const text = textArea.value;
    if (!text) return;

    const template = document.getElementById('item-template')
    const node = template.content.cloneNode(true);

    const span = node.querySelector('span')
    span.textContent = text;

    const btn = node.querySelector('button')
    btn.addEventListener('click', function() {
        this.parentElement.remove()
    })

    const checkbox = node.querySelector('input')
    checkbox.addEventListener('click', function() {
        const span = this.parentElement.querySelector('span')
        span.classList.toggle('line-through')
    })

    const list = document.getElementById('list')
    list.appendChild(node)
}

function main() {
    const btn = document.getElementById('add-element')
    btn.addEventListener('click', addElement)
}

main();