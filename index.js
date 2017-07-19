$( function() {
  var evaluated = false;

  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('sent')  ) {
      document.getElementById("code").innerHTML = '';

      $.get( "src/sample.js", function( data ) {
        console.log (data);
         var notebook = RunKit.createNotebook({
            // the parent element for the new notebook
            element: document.getElementById("code"),

            preamble: "var _ = require(\"lodash\")",

            // specify the source of the notebook
            source: data,

            onResult: function () {

                evaluated = true;
            }
        });

          $( "#code" ).dialog( {
                  show: {
                    effect: "blind",
                    duration: 200
                  },
                  hide: {
                    effect: "explode",
                    duration: 200
                  },
                   width: "90%",
                   maxWidth: "768px",
                   height: "90%",
                   minHeight: "250px"

                }
            );
      });
    }




} );
