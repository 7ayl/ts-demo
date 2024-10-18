// 供我们学习 TS 的运行环境
// console.log(123)

// 相当于省略了 :number,会自动进行类型推论,根据初始值来推论
// let age = 18
let age: number = 18
age = 10
age = 60

// age = '20'

console.log(age)

// string是基本数据类型 ts
let username: string = '摩卡'
username.slice

props: {
    msg: {
        type: String // 包装类 vue
    }
}

// 类型注解总结：
// 1.一旦加了类型注解，将来不能将其他类型的值赋予这个变量
// 2.加了之后，代码有提示，在变量后面 . 可以直接看到当前类型所支持的所有属性和方法
 
let bool: boolean = false
bool = true

let gender: undefined = undefined
// gender = '男'

let hobby: null = null
// hobby = 'xx'

