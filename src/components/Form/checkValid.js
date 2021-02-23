export function checkValid(obj) {
  if (obj.value) {
    return false
  }

  obj.style.outline = '2px solid red'
  setTimeout(() => obj.removeAttribute('style'), 1000)
  return true
}
export default checkValid
