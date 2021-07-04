const self = document.currentScript;
const id = new URLSearchParams(
    new URL(self.getAttribute("src")).search
).get("id");


window.onload = function() {
    jQuery.ajax({
        url: `https://ec2-13-235-95-181.ap-south-1.compute.amazonaws.com/api/page-target/${id}/pattern`,
        context: document.body,
        success: function(response) {
            let url = location.href;
            if (response.target_rule && url.match(response.target_rule)) {
                if (response.alert_message) alert(response.alert_message);
                else alert("Default Message");
            }
        }
    });
};
