{
    // 需求：可选参数
    let str: string = '我真帅对吧'
    console.log(str.slice()) // 从头截到尾：我真帅
    console.log(str.slice(1)) // 从指定索引截取到末尾：真帅对吧
    // 不包头 包尾
    console.log(str.slice(1, 4)) // 从指定索引截取到指定索引：真帅对
    const print = (name: string, gender: string): void => {
        console.log(name, gender)
    }
    print('齐司礼', '男')
}