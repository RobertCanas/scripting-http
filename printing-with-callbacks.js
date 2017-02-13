var https = require('https');

function getHTML(options, callback) {

  /* Add your code here */
  https.get(options, function(response) {
    //var bufferData;
    var bufferDataArray = [];
    response.setEncoding('utf8');

    response.on('data', function printHTML(html) {
      //bufferData += data;
      bufferDataArray.push(html);
    });

    response.on('end', function() {
      //console.log(bufferData);
      console.log(bufferDataArray.toString());
      console.log('Response stream complete.');
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

printHTML();
getHTML(requestOptions, printHTML);