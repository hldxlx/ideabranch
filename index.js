class P{
    constructor(option){
        this.$options = {
            name:"bsom",
            onEa:(res) =>{
                console.log(res)
            },
            ...option
        }
        this.$observer = null
    }
    create(){
        const opt = this.$options;
        opt.onEa(1)
    }
    connect(){
        if(!this.$observer){
            return this
        }
    }
    log(){
        console.log('log')
    }
}
let p1 = new P({age:18});
p1.create()
console.log(p1.$options.age);
let that = p1.connect();
console.log(that,'===7777that');
that.log && that.log()

class C extends P{
    constructor(){
        super({
            cc:'ccc',
            onEa:(res) =>{
                console.log(res,'22222222')
            }
        })
    }
}
let c1 = new C();
console.log(c1.$options);
c1.create()