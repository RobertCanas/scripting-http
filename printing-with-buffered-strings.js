function getAndPrintHTML() {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {
    //var bufferData;
    var bufferDataArray = [];
    response.setEncoding('utf8');

    response.on('data', function(data) {
      //bufferData += data;
      bufferDataArray.push(data);
    });

    response.on('end', function() {
      //console.log(bufferData);
      console.log(bufferDataArray.toString());
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML();