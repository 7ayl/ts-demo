{
  // 泛型 - 类型约束

  // 简化写法：调用时可以不加 <类型> TS 会自动推断类型
  // const result: 123 得到的结果是一个字面量类型，其实完全可以用
//   function getId<T>(val: T) {
//     console.log(val.length) // 报错：T 是一个未知的类型，所以无法得知它到底有没有 length
//     return val
//   }
//   const result1 = getId(123)
//   console.log(result1)
  

//   const result2 = getId('abc')
//   const result3 = getId(false)

  let arr: string[] = []

//   // 指定更加明确的类型：T类型的数组，val 确定就是一个数组了，所以可以用 length
//   function getIds<T>(val: T[]) {
//         console.log(val.length) // val：已经明确是一个数组了，所以自然会有数组的所有属性
//         return val
//       }
//   const result = getIds([1, 2, 3])

//   function getId<T>(val: T) {
//     // 类型收缩：比较麻烦
//     if (typeof val === 'string') {
//       console.log(val.length)
//     } else if (typeof val === 'number') {
//       val.toFixed()
//     }
//     return val
//   }

  // 定义接口
  interface ILength {
    length: number
    // sayHii: () => void
  }

  // 添加约束: 给泛型找爸爸
  function getId<T extends ILength>(val: T) {
    val.length
    console.log(val.length) 
    return val
  }
  console.log(getId<string>('abc'))
  // console.log(getId<number>(123))
  // console.log(getId<boolean>(true))
  
}