export function formatNumber(value: number) {
  return parseFloat(value.toFixed(2))
}

export function formatValue(value: number) {
  return value.toString().replace('.', ',')
}

export function formatDate(date: string) {
  let partes = date.split('/')
  let dia = partes[0]
  let mes = partes[1]
  let ano = partes[2].substring(2)

  let segunda = dia + '.' + mes + '.' + ano

  return segunda
}
