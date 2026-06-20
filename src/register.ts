/* ==== 想要注册的内联桌面 ==== */
export const desktopPathList = [
  'noname1'
]


/* ==== 预览图：优先 preview.{jpg,png}，否则用 wallpapers/ 下的第一张图 ==== */
const previewCodeMap: Record<string, string> = import.meta.glob('./*/preview.{jpg,png,jpeg}', { eager: true, import: 'default', query: '?url' }) as any
const wallpaperCodeMap: Record<string, string> = import.meta.glob('./*/wallpapers/*.{jpg,png,jpeg}', { eager: true, import: 'default', query: '?url' }) as any

function getPreview(path: string): string | undefined {
  for (const key of Object.keys(previewCodeMap)) {
    if (key.startsWith(`./${path}/`)) return previewCodeMap[key]
  }
  for (const key of Object.keys(wallpaperCodeMap)) {
    if (key.startsWith(`./${path}/`)) return wallpaperCodeMap[key]
  }
  return undefined
}

export const desktopPreviewMap: Map<string, string | undefined> = new Map(
  desktopPathList.map(p => [p, getPreview(p)])
)

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
