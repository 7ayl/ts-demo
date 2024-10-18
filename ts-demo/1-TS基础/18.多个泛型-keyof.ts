{
  // 多个泛型
  // 需求：定义一个函数，传入一个对象，再传入一个字符串属性名，返回属性值
  // 新语法：keyof O 意思就是 O 的所有属性
  function getProp<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
  }

  const p1 = {
    name: '小一',
    gender: '男'
  }
  const p2 = {
    score: 17,
    hobby: '喝酒'
  }

  const result1 = getProp(p1, 'name')
  // const result2 = getProp(p1, 'age')
  // const result3 = getProp(p1, 'gender')

  getProp<{
    score: number;
    hobby: string;
    }, "score">
    (p2, 'score')
    console.log(result1)
    
    // keyof 常规用法
    type Friend = {
        name: string,
        age: number,
        hobby: string
    }
    let num: keyof Friend = 'hobby'
}