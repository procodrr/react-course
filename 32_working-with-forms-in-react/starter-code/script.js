const tableRows = document.querySelectorAll('tr')
const contextMenu = document.querySelector('.context-menu')

tableRows.forEach((tableRow, i) => {
  if (!i || i === tableRows.length - 1) return
  tableRow.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    contextMenu.style.cssText = `left: ${e.clientX + 4}px; top: ${
      e.clientY + 4
    }px; display: block;`
  })
})

document.addEventListener('click', () => {
  contextMenu.style.display = 'none'
})
