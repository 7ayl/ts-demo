{
    // 需求：设置函数的参数类型 + 返回值类型
    // 具体：要求传入 number 类型的参数，加完后返回 number 类型的值
    // 程序员和函数之间的互动只有传入参数和返回值，所以为了让代码更少出错，需要对这两个地方进行类型约束
    // 在js中可以用以下方式定义函数，但 ts 中不行，因为 ts 要求我们必须给参数定义类型，而返回值它会自动推断
    // function add(a, b){
    //     return a + b
    // }

    // 函数声明
    // typescript not anyscript
    // function 函数名(参数一: 参数一的类型, 参数二: 参数二的类型): 返回值类型 { 函数体 }
    // function add(a: number, b: number): string {
    //     return a + b + ''
    // }
    // 总结：初级学习阶段建议写全，将来能偷懒则偷懒

    // const result = add(1, 2)
    // console.log(result)
    
    // add('1', '2') // 报错
    // add(true, false) // 报错

    // 函数表达式
    // const fn = function (a: number, b: number): number {
    //     return a + b
    // }

    // 箭头函数
    // 注意事项： 以前箭头函数如果只有一个参数，则可省略小括号，现在不行了
    // 结论：ts中箭头函数必须要小括号
    // const sub = (a: number): number => {
    //     return a
    // }
    // const sub = (a: number, b: number): number => {
    //     return a - b
    // }

    // 函数的类型别名
    type FnType = (a: number, b: number) => number

    // 类型别名通常是给箭头函数 / 函数表达式使用，不会给函数声明使用
    // function add(a, b) {
    //     return a + b
    // }

    const fn: FnType = function (a: number, b: number): number {
        return a + b
    }

    const sub: FnType = (a, b): number => {
        return a - b
    }
}