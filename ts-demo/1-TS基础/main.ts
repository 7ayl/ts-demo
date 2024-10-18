{
  // 泛型接口
  interface Student<T> {
    id: number
    name: T
    hobby: string[]
  }

  let s1: Student<string> = {
    id: 77,
    name: '齐司礼',
    hobby: ['听相声', '赌博']
  }

  const arr1: number[] = [1, 2, 3]
  const arr2: Array<number> = [1, 2, 3]
  const arr3: Array<string> = ['1', '2', '3']

}