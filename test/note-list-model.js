(function(exports) {
  console.log("Test to initialize Note with list model");
  function testListModel() {
    var list = new List();

    if(list.notes !== []) {
      throw new Error("no list");
    }
  }
  testListModel();
  console.log("test passes");
})(this);
