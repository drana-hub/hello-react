function Person(name){
    // it creates a this object with function name keyword before it
    // const this = {} --> which looks like --> Person {} 
    // manipulates this object accordingly 
    console.log(this)
    this.nam = name
    console.log(this)
    // so even if we return anything return from it explicitly, 
    // it doesnt take it into account, return true is of no use here
    return true;
    // and returns us this object by default
    // return this;
}

// By default it starts with a capital letter acc to community coding standards
// Constructor function is instantiated with a new keyword
// const p = new Person('rony')
// console.log(p)



function Cf(name) {
    console.log(this)
    this.name = name;
    this.talk = talk;
    
    function talk(){
        console.log(`I am ${this.name}`)
    };

    let walk = () => {
        console.log(`${this.name} walks`)
    };
    this.walk = walk;
  }
  
  let p = new Cf('ron');
  let q = new Cf('tus');
  p.talk();
  q.talk();
  p.walk();
  q.walk();