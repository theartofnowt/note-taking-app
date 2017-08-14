(function(exports) {
  console.log("Test to initialize Note with list model");
  function testNoteListView() {
    var view = new View(new List());

    if(view.listToHtml() === "<ul><li>Test</li></ul>") {
      throw new Error("no view");
    }
  }
  testNoteListView();
  console.log("test passes");
})(this);
