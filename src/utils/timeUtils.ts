/**
 * @description 获取现在时间
 */
export function delayLoading(time = 300) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}