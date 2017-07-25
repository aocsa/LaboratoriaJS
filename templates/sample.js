function codeToHtml(string) {	
    var hljs = require('highlight.js');  	
    var md = require('markdown-it')({
        highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +   hljs.highlight(lang, str, true).value +  '</code></pre>';
            } catch (__) {
            
            }
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    }); 	
    var result = md.render(str);
    return result;
}

if (typeof exports !== 'undefined') {
    exports.codeToHtml = codeToHtml;
}
