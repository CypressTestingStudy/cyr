class Person{
    //static sCount=0 //1
    constructor(name){
       this.name=name; 
       this.sCount++;
    }
       // Método de instancia // 2
    getName(){
     console.log(this.name);
    }
    static sTest(){
      console.log("static method test");
    }
  }
   
  class Man extends Person{
    constructor(name){
      super(name);
      this.sex="male";
    }
  }
  var man=new Man("David");
  man.getName();
  //man.sTest()
  Man.sTest();

  
  