define(['view/view',
        'chai'],
function(View, chai) {
  var expect = chai.expect;

  describe("view", function() {
    
    it('shoud export constructor', function() {
      expect(View).to.exist;
      expect(View).to.be.a('function');
    });
    
  });
  
  return { name: "test.view" }
});
