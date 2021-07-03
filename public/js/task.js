const self = document.currentScript;
const id = new URLSearchParams(
    new URL(self.getAttribute("src")).search
).get("id");


window.onload = function() {
    console.log({self}, {id})
    $.ajax({
        url: `ec2-13-235-95-181.ap-south-1.compute.amazonaws.com/api/page-target/${id}/pattern`,
        context: document.body,
        success: function(response) {
            console.log("heyyyyyyyyyy", response, response.data);
            let url = location.href;
            if (response.target_rule && url.match(response.target_rule)) {
                if (response.alert_message) alert(response.alert_message);
                else alert("Default Message");
            }
        }
    });
};
