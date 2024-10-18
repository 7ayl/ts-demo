{
    let str1 = 'Hello TS'
    // const 声明的变量是不可修改的，意味着从始至终都必须是'Hello TS',所以 TS 将其当作一个类型来看，这种类型
    // 就被称为「字面量」类型
    const str2 = 'Hello TS' 

    // 字面量：10 20 'abc' [] {} /^$/
    // 字面量类型：刚刚出现的这些字面量都可以当做类型

    type Direction = '上' | '下' | '左' | '右'
    function changeDirection(direction: Direction) {
      console.log(direction);
    }
    changeDirection('上')

    type Gender = '男' | '女' | '妖'
    function changeGender(gender: Gender) {
      console.log(gender);
    }
    changeGender('男')

    // 总结：字面量类型就是把字面量当做类型来用
  }