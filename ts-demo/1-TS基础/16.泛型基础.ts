{
  // 泛型
  // 需求：定义一个 getId 方法，传入一个值，返回这个值,可以传入任意类型
  // any可以解决问题，也可以带来问题：返回值也是any，没有提示了
//   function getId(val: any) {
//     return val
//   }
    
//     console.log(getId('abc'))
//     console.log(getId(123))

//     const result = getId(123)
  // 解决方案：泛型
  // 期望：调用 getID 函数时 来指定传入参数的类型
  // <T>：在声明泛型
  // val: T -> 使用泛型
  // 调用函数时传入泛型指定的具体类型 
//   function getId<T>(val: T) {
//     return val
//   }
  function getId<Type>(val: Type) {
    return val
  }
    
    // console.log(getId<string>('abc'))
    // console.log(getId<number>(123))
    // console.log(getId<boolean>(true))

    // const result = getId<number>(123)
    // const result2 = getId<string>('abc')
    // const result3 = getId<boolean>(false)

    // 简化写法：调用时可以不加 <类型> TS 会自动推断类型
    // const result: 123 得到的结果是一个字面量类型，其实完全可以用
    const result = getId(123)
    const result2 = getId('abc')
    const result3 = getId(false)

    result.toFixed

}