export function sliceString(string: string) {
  if (string.length > 30) {
    string = string.slice(0, 30) + '...'
  }

  return string
}
