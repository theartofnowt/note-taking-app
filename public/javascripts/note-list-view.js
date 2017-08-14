function View(list) {
  this._list = list;
}

View.prototype.listToHtml = function() {
  return this._list;
};
