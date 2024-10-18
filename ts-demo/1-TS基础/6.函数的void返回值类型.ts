{
    // 需求：定义一个打印文本的函数，不需要返回值
    // 如果不写 return 我们知道默认返回的是 undefined，但是 ts 给我们类型推断为 void
    // 在 ts 中写: undefined 设置返回值类型的意思是：必须返回一个 undefined
    // ts 给我们提供了一个返回值类型：void 意思就是没有返回值
    const sayHi = (content: string): void => {
        console.log(content)
        
    }

    sayHi('你好世界')
}
