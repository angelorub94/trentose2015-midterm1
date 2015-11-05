/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

/*
              <!-- This is just an example, you should load this dynamically -->
              <li id="1" class="current">
                <h3>I'm a man</h3>
              </li> 
              <li id="2">
                <h3>I'm a woman</h3>     
              </li>    
              <li id="3">
                <h3>Hello</h3>     
              </li>
*/

var tmpl = ' <li id="ID" class="current">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';
var correct = 0;
var actual = 0;

function cl_funct(){

    $(".opt-continue").click(function(){
            if($("input[name=iSolution]").val() === data[actual].phrase_de){
             
                correct++;
                return true;
            } 
            actual++;
        })        
    return true;
}

$(document).ready(function(){
    for(actual=0; actual< data.length; actual++){
    var elem = tmpl.replace("ID",actual).replace("SENTENCE",data[actual].phrase_en);
         $(".sentences").html("");
        $(".sentences").html(elem);
        $("input[name=iSolution]").val("");
        cl_funct();
        $(".current").removeClass("current");
    }
    //fine ciclo
    $("#tot-good").text(correct);
    $("#tot").text(data.length);
});







