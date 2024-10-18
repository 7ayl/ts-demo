{
    // 需求: 希望 N 个数组里面可以存数字或字符串
    // 联合类型: |
    // 类型别名
    type ArrType = (number | string)[]
    let arr1: ArrType = [1, 2, 3, 'abc']
    let arr2: ArrType = [1, 2, 3, 'abc']
    let arr3: ArrType = [1, 2, 3, 'abc']
    let arr4: ArrType = [1, 2, 3, 'abc']

    // 灵活度很高，可以随意搭配组合使用
    type ItemType = number | string
    let arr5: ItemType[]= [1, 2, 3, 'abc']
    let str1: ItemType = '123'
    str1 = 123

    // 总结： 将一组类型存储到「 变量 」里，用 type 来声明这个特殊的「 变量 」
    // 玩花活儿
    type s = string
    type n = number

    let str2: s = '123'
    let num2: n = 123
}