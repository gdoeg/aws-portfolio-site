
// Grabs HTML element with the ID contactForm 
// Adds evemt listenener for submit button 
// Async allows await inside function for async code 
// like calling a server API
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    
    // stops default reloading 
    // Allows JS to handle form instead of browser to 
    // submit
    e.preventDefault();

  // Creates an object that stores user data
    const formData = {
      name: e.target.name.value, // grabs value of input inside name
      email: e.target.email.value,
      message: e.target.message.value
    };
  
    // Sends network request to API
    const response = await fetch("YOUR_API_GATEWAY_URL", {
        // Indicates that we are sending data to server 
      method: "POST",
      // Servers use this header to parse JSON data
      headers: { "Content-Type": "application/json" },
      // converts formData JS into JSON string which API expects
      body: JSON.stringify(formData)
    });
  
    // Popup notification to user 
    alert("Message sent! ✅");
  });
  