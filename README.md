# Graph my CSV - Frontend
This frontend was created using React.js, D3.js and TanStack Query.  

This app visualizes all possible graphs that can be made from the data in your CSV file.  

It Goes through the following steps:  
- Feeds the CSV Data to Google Gemini Flash 2.0 to generate the optimal relationship between columns.
- That information gets fed to a function to generate graphs using an algorithm based on D3.js
