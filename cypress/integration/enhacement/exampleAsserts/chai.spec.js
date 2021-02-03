describe('Test Suite -  Chai examples', () =>{

    it('Test case Henry', () => {
        console.log("Hi, I'm the test case with my friend Daniel");
        let a=1, b=1;
        expect(a).to.be.equals(b);
        expect(a).to.be.an('number').and.to.be.equals(b);
    })
})