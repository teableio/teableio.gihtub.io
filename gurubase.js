// Customize widget settings
const widgetSettings = {
    widgetId: "HyiYGqeZ8JUAfudyn-uCFIMsdnk4xnbnjhthVfKkcZY", // Prod
    // widgetId: "3NE0Xlmdd9D5qobonv8LCgheB0tisZcaMwqCG4Bj_Es", // For dev -> http://localhost:3000
    text: "Ask AI", // Optional - Button text
    margins: { bottom: "20px", right: "20px" }, // Optional - Widget positioning
    lightMode: false // Optional - Force light mode
  };
  
  // Load the GuruBase widget
  const guruScript = document.createElement("script");
  guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
  guruScript.defer = true;
  guruScript.id = "guru-widget-id";
  
  // Add widget settings as data attributes
  Object.entries({
    "data-widget-id": widgetSettings.widgetId,
    "data-text": widgetSettings.text,
    "data-margins": JSON.stringify(widgetSettings.margins),
    "data-light-mode": widgetSettings.lightMode
  }).forEach(([key, value]) => {
    guruScript.setAttribute(key, value);
  });
  
  // Append the script to the document
  document.body.appendChild(guruScript);