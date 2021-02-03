describe('Test Suite', () =>{

    before('Test suite preconditions', ()=>{

        console.log("Hi, I'm the precondition");

    })
    after('Test suite postconditions', ()=>{

        console.log("Hi, I'm the postcondition");

    })

    beforeEach('Test case preconditions',()=>{

        console.log("Hi, I'm the precondition for each test");

    })

    afterEach('Test case postconditions',()=>{

        console.log("Hi, I'm the postcondition for each test");

    })

    it('Test case', () => {

        console.log("Hi, I'm the test case");

    })

    it('Test case #2', () => {

        console.log("Hi, I'm the test case #2");

    })
})