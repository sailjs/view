define(['view'],
function(View) {

  describe("view", function() {
    
    it('should export constructor', function() {
      expect(View).to.exist;
      expect(View).to.be.a('function');
    });
    
  });
  
  return { name: "test.view" }
});
