/* ==== 想要注册的内联桌面 ==== */
const desktopPathList = [
  'noname1'
]


/* ==== 内联桌面 ==== */
const desktopCodeMap = import.meta.glob('./*/*.vue')

let inlineDesktopMap: Map<string, any> = new Map()
for (const desktopPath of desktopPathList) {
  const desktop = desktopCodeMap[`./${desktopPath}/View.vue`]
  if (desktop === undefined)
    throw Error(`Desktop code ${desktopPath}/View.vue not exist`)
  inlineDesktopMap.set(desktopPath, desktop)
}
export default inlineDesktopMap
