{
    // 对象类型
    // ts 就像在写注释，以前写的注释是给程序员看的，ts 写的类型是给编辑器看的，程序员也可以看
    type Person = {
        name: string,
        age: number,
        gender: string,
        hobby: string,
        // sayHi: (content: string) => void
        sayHi(content: string): void
        girlFriend?: string
      }

    let obj1: Person = {
      name: '齐司礼',
      age: 18,
      gender: '男',
      hobby: '圣杯布局',
      sayHi(content) {
        console.log('巴嘎:' + content)
      }
    }

    let obj2: Person = {
      name: '某凡',
      age: 18,
      gender: '男',
      hobby: '喝酒',
      sayHi(content) {
        console.log('巴嘎:' + content)
      }
    }

    obj1.sayHi('ugb')
    obj2.sayHi('ugh')

    // 传统
    if(obj1.girlFriend){
      obj1.girlFriend.concat()
    }
    
    // 优雅
    obj1.girlFriend && obj1.girlFriend.concat()

    // 最新：可选链操作符，前面有才会执行后面的函数
    obj1.girlFriend?.concat()

    // axios({
    //   url: '',
    //   method: 'get' // 其他属性都不是必选项，就可以用 ？可选属性来实现
    //   data: {}
    // })


    type Student = {
        name: string,
        gender: string,        
        score: number,
        height: number,
        hobby: (content: string) => void
      }
}


