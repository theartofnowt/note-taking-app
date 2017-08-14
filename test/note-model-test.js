(function(exports) {
  console.log("Test to initialize Note with text, stored in note.text");
  function testNoteModel() {
    var note = new Note("My favourite language is javascript");

    if(note.text !== "My favourite language is javascript") {
      throw new Error("no text");
    }
  }
  testNoteModel();
  console.log("test passes");
})(this);
