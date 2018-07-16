var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  this.id = id;
  this.name = name || 'No name given';
};

$.ajaxSetup({
	headers: myHeaders
});

Column.prototype = {
  deleteColumn: function() {
      var self = this;
      $.ajax({
        url: baseUrl + '/column/' + self.id,
        method: 'DELETE',
        success: function(response){
          self.element.remove();
        }
      });
   }

  function setupColumns(columns) {
      columns.forEach(function (column) {
    		var col = new Column(column.id, column.name);
          board.createColumn(col);
          setupCards(col, column.cards);
      });
  }

  function setupCards(col, cards) {
  	cards.forEach(function (card) {
          var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
      	col.createCard(cardObj);
      	function(card) {
  	  		this.element.children('ul').append(card.element);
  			}
    	})
    }
}
