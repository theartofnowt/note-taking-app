(function(exports) {
  function testNoteModel() {
    var note = new Note("My favourite language is javascript");

    if(note.text !== "My favourite language is javascript") {
      throw new Error("no text");
    }
  };
  testNoteModel();
})(this);
