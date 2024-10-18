{
  // any类型：原则上不推荐使用，只有在迫不得已的时候才可以用一下，否则会变成 AnyScript 失去 TS 类型保护机制
  let a = 10
  let str = 'abc'
  let arr: any = []
  arr.push()

  // 以下情况都应该手动指定类型
  // function fn(a, b) {}
  let b
  b = 10
  b = 'abc'
  b = true

}