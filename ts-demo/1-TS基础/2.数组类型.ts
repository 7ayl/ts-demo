{
    // 这是一个块级作用域，用于隔绝不同模块之间的变量
    // let name = ''
    // 数组 -> 函数 -> 对象

    // 数组类型
    // 声明数组的方式1（推荐）
    // let arr = [123, 'abc', true]
    // let arr1 =[12, 456, 789]
    let arr: number[] = [1, 2, 3]
    let arr2: string[] = ['abc', 'def', 'ghi']
    // arr2.forEach(item => item.indexOf())

    // 声明数组的方式2
    let arr3: Array<number> = [1, 2, 3, 4, 5]
}