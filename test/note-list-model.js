(function(exports) {
  console.log("Test to initialize Note with list model");
  function testListModel() {
    var list = new List();

    if(list.notes() === null) {
      throw new Error("no list");
    }
  }
  testListModel();
  console.log("test passes");
})(this);

(function(exports) {
  console.log("Test to addNote to list");
  function testAddNoteToListModel() {
    var list = new List();
    list.addNote('text');

    if(list.notes()[0].text !== 'text') {
      throw new Error("no note added");
    }
  }
  testAddNoteToListModel();
  console.log("test passes");
})(this);
