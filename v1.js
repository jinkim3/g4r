// JS code for creating a button to access a GPT Interface
// Create a button
var gpt_btn_w4bmk8efh9 = document.createElement('a');
gpt_btn_w4bmk8efh9.id = 'gpt-interface-button';
gpt_btn_w4bmk8efh9.target = '_blank';
gpt_btn_w4bmk8efh9.innerHTML = 'Click HERE';
// Modify the style for the button
gpt_btn_w4bmk8efh9.style.display = 'block';
gpt_btn_w4bmk8efh9.style.width = '200px';
gpt_btn_w4bmk8efh9.style.height = '70px';
gpt_btn_w4bmk8efh9.style.backgroundColor = '#4CAF50';
gpt_btn_w4bmk8efh9.style.marginLeft = 'auto';
gpt_btn_w4bmk8efh9.style.marginRight = 'auto';
gpt_btn_w4bmk8efh9.style.color = 'white';
gpt_btn_w4bmk8efh9.style.padding = '20px 10px';
gpt_btn_w4bmk8efh9.style.textAlign = 'center';
gpt_btn_w4bmk8efh9.style.textDecoration = 'none';
gpt_btn_w4bmk8efh9.style.fontSize = '24px';
gpt_btn_w4bmk8efh9.style.cursor = 'pointer';
gpt_btn_w4bmk8efh9.style.border = 'none';
gpt_btn_w4bmk8efh9.style.borderRadius = '12px';
// Add hover effect
gpt_btn_w4bmk8efh9.addEventListener('mouseover', function() {
    gpt_btn_w4bmk8efh9.style.backgroundColor = '#2D6930';
    gpt_btn_w4bmk8efh9.style.color = 'yellow';
});
gpt_btn_w4bmk8efh9.addEventListener('mouseout', function() {
    gpt_btn_w4bmk8efh9.style.backgroundColor = '#4CAF50';
    gpt_btn_w4bmk8efh9.style.color = 'white';
});
// Append the button to the question container
qc_g4r_w4bmk8efh9.appendChild(gpt_btn_w4bmk8efh9);
// Make the button globally accessible
window.gpt_btn_w4bmk8efh9 = gpt_btn_w4bmk8efh9
// Function for generating jk code
window.gen_jk_code_w4bmk8efh9 = function(length) {
    var code = "";
    const characters = "ABCDEFGHJKLMNPRTWXY346789";
    for (var i = 0; i < 25; i++) {
        code = code + characters.charAt(Math.floor(Math.random() * 25));
    }
    return code;
}
