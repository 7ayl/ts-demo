{
    // 作用：给对象约束属性和方法
    // 基础语法：
    // interface 接口名 {
    //    属性名：类型
    // }

    interface IPerson {
        name: string
        age: number
        gender: string
        sayHi: () => void
    }

    const p1: IPerson = {
        name: '顾时夜',
        age: 18,
        gender: '男',
        sayHi() {
          console.log('我是男人')
        }
    } 

    interface IStudent extends IPerson {
        score: number
        sleep: () => void
    }

    const s1: IStudent = {
        name: '顾时夜',
        age: 18,
        gender: '男',
        sayHi() {
          console.log('我是男人')
        },
        score: 59,
        sleep () {
          console.log('他睡了')
        }
    } 

    p1.sayHi()
    s1.sleep()

    // 接口继承，IStudent 具备 IPerson 的所有约束规则

    interface IStudent extends IPerson {
        score: number
        sleep: () => void
    }

    // type 如何 和 interface 一样实现类似继承效果？
    type Person = {
        name: string
        age: number
        gender: string
        sayHi: () => void
    }

    // & 与连接符：既要满足前面的又要满足后面的
    // ｜ 或连接符：满足其中一个即可
    type Student = {
        score: number
        sleep: () => void
    } & Person

    const s2: Student = {
        name: '呵呵',
        age: 18,
        gender: '未知',
        sayHi() {
            console.log('!')
        },
        score:80,
        sleep() {
            console.log('?')
        }
    }

    // type ItemType = string | number

    // type ArrType = string[]

    // interface IStudent {

    // }

    // 总结：interface 和 type 的区别，interface只能约束对象，而 type 可以更灵活的使用
    // 能用type，就用type

    // 接口继承：可以实现让一个接口使用另一个接口的类型约束，实现接口的复用
}


