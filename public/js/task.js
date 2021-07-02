const self = document.currentScript;
const id = new URLSearchParams(new URL(self.getAttribute("src")).search).get(
    "id"
);

// (function loadXMLDoc() {
//     var xmlhttp = new XMLHttpRequest();

//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == XMLHttpRequest.DONE) {
//             // XMLHttpRequest.DONE == 4
//             if (xmlhttp.status == 200) {
//                 document.getElementById("myDiv").innerHTML =
//                     xmlhttp.responseText;
//             } else if (xmlhttp.status == 400) {
//                 alert("There was an error 400");
//             } else {
//                 alert("something else other than 200 was returned");
//             }
//         }
//     };

//     xmlhttp.open("GET", "ajax_info.txt", true);
//     xmlhttp.send();
// })();

$.ajax({
    url: `localhost:8080/api/page-target/${id}/pattern`,
    context: document.body,
    success: function(response){
      let url = location.href;
      if(response.target_rule && url.match(response.target_rule)) {
          if(response.alert_message) alert(response.alert_message);
          else alert('Default Message')
      }
    }
});
