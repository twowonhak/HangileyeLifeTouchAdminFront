
export function onSearch(info, data, onOpenFun) {
  info.current = data
  onOpenFun()
}