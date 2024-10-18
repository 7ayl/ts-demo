{
    // 需求: 数组里面可以存数字或字符串
    // 联合类型: |
    let arr: (number | string)[] = [1, 2, 3, 'abc']
    // 注意事项：| 的优先级较低，需要用 () 包裹提升优先级
    // 一旦使用联合类型，说明 arr 中存储的既可能是string 也可能是number,
    // 所以会丢失一部分提示信息(只能提示共有的方法和属性)
    // arr[0].

    let timerId: (number | null) = null
    timerId = setTimeout(() => {}, 1000)

    // const timerId = setTimeout(() => {}, 1000)
}