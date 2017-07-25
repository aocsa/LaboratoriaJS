escape = function (str) {
  return str  
        .replace(/[\\]/g, '\\\\')
        .replace(/[\/]/g, '\\/')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t')
        .replace(/[\"]/g, '\\"')
        .replace(/\\'/g, "\\'"); 
};
var counter = 0;
function codeToHtml(string) {	
    var hljs = require('highlight.js');  	
    var md = require('markdown-it')({
        highlight: function (str, lang) {
            var rawCode = escape(str);
            counter++;
            var divID = "code" + counter;
            
            rawCode = '"' + rawCode + '"';
            divID = "'" + divID + "'";
            
            var altura =   (rawCode.split("\\n").length - 1) * 18; 


            /*
            var lastcmd = "<button onclick='myFunction" + counter + "()'>RUN CODE </button> <script>  function myFunction" + counter + "() {  runkitGen('" + rawCode + "') } </script>";
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +   hljs.highlight(lang, str, true).value +  '</code></pre> <br>' + lastcmd;
                } catch (__) {
                
                }
            }
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre> <br>' + lastcmd; */
            //var lastcmd = " <script>     runkitGen(" + divID +  "," + rawCode + ");  </script>";            
            var lastcmd = '<script src="https://embed.runkit.com" data-element-id=' +  divID + ' ></script>'

            return lastcmd + '<div  id='  +  divID +  '>'  +  str + '</div>';
            
        }
    }); 	
    return md.render(string);
}


function codeTddToHtml(string) {	
    var hljs = require('highlight.js');  	
    var md = require('markdown-it')({
        highlight: function (str, lang) {
            var rawCode = escape(str);
            counter++;
            var divID = "code" + counter;
            
            rawCode = '"' + rawCode + '"';
            divID = "'" + divID + "'";
             

            var lastcmd = '<div id=' +  divID + ' </div>'
            
            var scriptCode = "var flask = new CodeFlask;";
            scriptCode += "flask.run(" + divID + ", { language: 'javascript', lineNumbers: true });";
            //scriptCode += "flask.update(" +  rawCode +  ");";
            return lastcmd + '<script>'  +   scriptCode  + '</script>';
            
        }
    }); 	
    return md.render(string);
}


var express = require('express'); 
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');
 
var str = '';
var fs = require('fs')
fs.readFile('../4.md', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  str = data;
});

app.get('/', function (req, res) {
	var ret = codeToHtml(str);
    res.render('index', {title: 'Hello from render',list: ret});
});
 
app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});