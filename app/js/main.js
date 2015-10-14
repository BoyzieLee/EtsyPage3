'use strict';

(function () {

  var url = 'http://json-data.herokuapp.com/forms';

  var promise = $.getJSON(url);

  promise.then(function (responseFromServer) {
    doSomething(responseFromServer);
  });

  var template = _.template($('#registration-form').text());
  var templateSelect = _.template($('#language-form').text());

  var doSomething = function doSomething(arrayData) {

    _.each(arrayData, function (item) {

      if (item.options.length > 0) {
        var selectBlock = templateSelect(item);
        $('.container').append(selectBlock);
      } else if (item.type === 'text' || item.type === 'tel' || item.type === 'email' || item.type === 'textarea') {
        var htmlBlock = template(item);
        $('.container').append(htmlBlock);
      };
    });
  };

  // copy data & store in a variable
  // including the Header/Sidebar/Links/Search
  // implement hover events and link the items
  // to their proper Etsy product pages (items only, other links can be just linked to #)
})();