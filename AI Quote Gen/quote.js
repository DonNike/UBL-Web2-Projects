const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const generateBtn = document.querySelector(".gen-btn");
const category = document.getElementById("category");
const quoteBox = document.querySelector(".quote-gen p");
const API_KEY = "AIzaSyBqoGdWkQjbMzQb1KpS0JpwdRzmdC41H-4";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

btn.addEventListener('click', function(){
    modal.classList.toggle("show")
})
closeBtn.addEventListener('click', function(){
    modal.classList.remove("show");
})

generateBtn.addEventListener("click", async () => {
    const selectedMood = category.value;
  
    if (!selectedMood) {
      quoteBox.textContent = "Please select a mood to generate a quote.";
      return;
    }
  
    quoteBox.textContent = "Generating quote...";
  
    const prompt = `Give me a fresh and different ${selectedMood} quote in one or two sentences.`;
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });
  
      const data = await response.json();
      const generatedQuote = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
      quoteBox.textContent = generatedQuote || "No quote found. Try again.";
  
    } catch (error) {
      console.error("Error:", error);
      quoteBox.textContent = "Something went wrong. Please try again later.";
    }
  });
  