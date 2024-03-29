const expressSanitizer = require('express-sanitizer');

  var escaped = htmlEscape('"><script>alert(\'pwn\')</script>');

https://www.npmjs.com/package/express-sanitizer
console.log(escaped);
