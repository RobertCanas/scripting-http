function getAndPrintHTML(options) {
  var https = require('https');
  /* Add your code here */
  https.get(options, function(response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var requestOptions2 = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);