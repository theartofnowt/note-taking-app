(function(exports) {
  function noteTest() {
    var note = new Note("test");

    if (note.text !== "test") {
      throw new Error("Text not stored in note");
    }
  }
  noteTest();
})(this);
