var https = require('https');
module.exports = function getHTML(options, callback) {

  /* Add your code here */
  https.get(options, function(response) {
    var bufferDataArray = [];
    response.setEncoding('utf8');

    response.on('data', function printHTML(html) {
      bufferDataArray.push(html);
    });

    response.on('end', function() {
      callback(bufferDataArray.toString());
      console.log('Response stream complete.');
    });
  });
}

