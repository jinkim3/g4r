// JS code for embedding a GPT Interface
const gpt_iframe_w4bmk8efh9 = document.createElement('iframe');
// Append the button to the question container
qc_g4r_w4bmk8efh9.appendChild(gpt_iframe_w4bmk8efh9);
// Style for the iframe
gpt_iframe_w4bmk8efh9.id = "gpt_iframe_w4bmk8efh9"; // id could be useful later
gpt_iframe_w4bmk8efh9.style.border = "2px solid gray";
gpt_iframe_w4bmk8efh9.style.borderRadius = "10px";
gpt_iframe_w4bmk8efh9.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.3)";
// Function for generating jk code
window.gen_jk_code_w4bmk8efh9 = function(length) {
  let code = "";
  const characters = "ABCDEFGHJKLMNPRTWXY346789";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};
