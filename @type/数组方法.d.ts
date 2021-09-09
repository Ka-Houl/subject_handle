// 声明重载
interface Array<T> {
  jForEach: (
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ) => void
}
