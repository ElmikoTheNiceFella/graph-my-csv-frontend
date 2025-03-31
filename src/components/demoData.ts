type DataType = [{ 'graph': string, 'y-axis': string, 'x-axis': string, 'relationship': string }[], [string]] 

// Second element is put in an array to be passed by reference, since the string can be huge

export const demoData: DataType = [
  [
    {
      "graph": "bar",
      "x-axis": "Company Name",
      "y-axis": "frequency",
      "relationship": "Shows the distribution of mobile phone models across different companies."
    },
    {
      "graph": "bar",
      "x-axis": "Company Name",
      "y-axis": "Launched Price (USA)",
      "relationship": "Compares the average or median launch prices of phones from different companies in the USA. (Assuming conversion to a numerical value)"
    },
    {
      "graph": "scatter",
      "x-axis": "Mobile Weight",
      "y-axis": "Battery Capacity",
      "relationship": "Examines the relationship between the weight of a mobile phone and its battery capacity.  Heavier phones may or may not have larger batteries."
    },
    {
      "graph": "scatter",
      "x-axis": "RAM",
      "y-axis": "Launched Price (India)",
      "relationship": "Investigates if there's a correlation between the amount of RAM in a phone and its launch price in India. (Assuming conversion to a numerical value)"
    },
    {
      "graph": "scatter",
      "x-axis": "Screen Size",
      "y-axis": "Launched Price (USA)",
      "relationship": "Checks if larger screen sizes are associated with higher launch prices in the USA. (Assuming conversion to a numerical value)"
    },
    {
      "graph": "bar",
      "x-axis": "Processor",
      "y-axis": "frequency",
      "relationship": "Shows the distribution of different mobile phone processors used in the dataset."
    },
    {
      "graph": "line",
      "x-axis": "Launched Year",
      "y-axis": "frequency",
      "relationship": "Shows the trend of number of launched mobile phones over the years."
    },
    {
      "graph": "line",
      "x-axis": "Launched Year",
      "y-axis": "Launched Price (USA)",
      "relationship": "Shows the price trend for mobile phones over the years."
    },
    {
      "graph": "scatterplot",
      "x-axis": "Back Camera",
      "y-axis": "Front Camera",
      "relationship": "Examines the relationship between front camera and back camera resolution."
    },
    {
      "graph": "histogram",
      "x-axis": "Mobile Weight",
      "y-axis": "frequency",
      "relationship": "Displays the distribution of mobile phone weights in the dataset."
    },
    {
      "graph": "histogram",
      "x-axis": "Battery Capacity",
      "y-axis": "frequency",
      "relationship": "Shows the distribution of battery capacities of the mobile phones."
    },
    {
      "graph": "histogram",
      "x-axis": "Screen Size",
      "y-axis": "frequency",
      "relationship": "Shows the distribution of screen sizes of the mobile phones."
    }
  ],
  [`Company Name,Model Name,Mobile Weight,RAM,Front Camera,Back Camera,Processor,Battery Capacity,Screen Size,Launched Price (Pakistan),Launched Price (India),Launched Price (China),Launched Price (USA),Launched Price (Dubai),Launched Year
Apple,iPhone 16 128GB,174g,6GB,12MP,48MP,A17 Bionic,"3,600mAh",6.1 inches,"PKR 224,999","INR 79,999","CNY 5,799",USD 799,"AED 2,799",2024
Apple,iPhone 16 256GB,174g,6GB,12MP,48MP,A17 Bionic,"3,600mAh",6.1 inches,"PKR 234,999","INR 84,999","CNY 6,099",USD 849,"AED 2,999",2024
Apple,iPhone 16 512GB,174g,6GB,12MP,48MP,A17 Bionic,"3,600mAh",6.1 inches,"PKR 244,999","INR 89,999","CNY 6,499",USD 899,"AED 3,199",2024
Apple,iPhone 16 Plus 128GB,203g,6GB,12MP,48MP,A17 Bionic,"4,200mAh",6.7 inches,"PKR 249,999","INR 89,999","CNY 6,199",USD 899,"AED 3,199",2024
Apple,iPhone 16 Plus 256GB,203g,6GB,12MP,48MP,A17 Bionic,"4,200mAh",6.7 inches,"PKR 259,999","INR 94,999","CNY 6,499",USD 949,"AED 3,399",2024
Apple,iPhone 16 Plus 512GB,203g,6GB,12MP,48MP,A17 Bionic,"4,200mAh",6.7 inches,"PKR 274,999","INR 104,999","CNY 6,999",USD 999,"AED 3,599",2024
Apple,iPhone 16 Pro 128GB,206g,6GB,12MP / 4K,50MP + 12MP,A17 Pro,"4,400mAh",6.1 inches,"PKR 284,999","INR 99,999","CNY 6,999",USD 999,"AED 3,499",2024
Apple,iPhone 16 Pro 256GB,206g,8GB,12MP / 4K,50MP + 12MP,A17 Pro,"4,400mAh",6.1 inches,"PKR 294,999","INR 104,999","CNY 7,099","USD 1,049","AED 3,699",2024
Apple,iPhone 16 Pro 512GB,206g,8GB,12MP / 4K,50MP + 12MP,A17 Pro,"4,400mAh",6.1 inches,"PKR 314,999","INR 114,999","CNY 7,499","USD 1,099","AED 3,899",2024
Apple,iPhone 16 Pro Max 128GB,221g,6GB,12MP / 4K,48MP + 12MP,A17 Pro,"4,500mAh",6.7 inches,"PKR 314,999","INR 109,999","CNY 7,499","USD 1,099","AED 3,799",2024
Apple,iPhone 16 Pro Max 256GB,221g,8GB,12MP / 4K,48MP + 12MP,A17 Pro,"4,500mAh",6.7 inches,"PKR 324,999","INR 114,999","CNY 7,799","USD 1,199","AED 3,999",2024
Apple,iPhone 16 Pro Max 512GB,221g,8GB,12MP / 4K,48MP + 12MP,A17 Pro,"4,500mAh",6.7 inches,"PKR 344,999","INR 124,999","CNY 8,199","USD 1,299","AED 4,199",2024
Apple,iPhone 15 128GB,171g,6GB,12MP,48MP,A16 Bionic,"3,200mAh",6.1 inches,"PKR 204,999","INR 74,999","CNY 5,299",USD 799,"AED 2,699",2023
Apple,iPhone 15 256GB,171g,6GB,12MP,48MP,A16 Bionic,"3,200mAh",6.1 inches,"PKR 214,999","INR 79,999","CNY 5,599",USD 849,"AED 2,999",2023
Apple,iPhone 15 512GB,171g,6GB,12MP,48MP,A16 Bionic,"3,200mAh",6.1 inches,"PKR 224,999","INR 89,999","CNY 5,999",USD 949,"AED 3,199",2023
Apple,iPhone 15 Plus 128GB,203g,6GB,12MP,48MP,A16 Bionic,"4,300mAh",6.7 inches,"PKR 234,999","INR 84,999","CNY 5,699",USD 899,"AED 3,199",2023
Apple,iPhone 15 Plus 256GB,203g,6GB,12MP,48MP,A16 Bionic,"4,300mAh",6.7 inches,"PKR 244,999","INR 94,999","CNY 6,199",USD 999,"AED 3,399",2023
Apple,iPhone 15 Plus 512GB,203g,6GB,12MP,48MP,A16 Bionic,"4,300mAh",6.7 inches,"PKR 264,999","INR 104,999","CNY 6,799","USD 1,049","AED 3,599",2023
Apple,iPhone 15 Pro 128GB,206g,6GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,400mAh",6.1 inches,"PKR 274,999","INR 99,999","CNY 6,999","USD 1,099","AED 3,599",2023
Apple,iPhone 15 Pro 256GB,206g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,400mAh",6.1 inches,"PKR 284,999","INR 109,999","CNY 7,299","USD 1,199","AED 3,799",2023
Apple,iPhone 15 Pro 512GB,206g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,400mAh",6.1 inches,"PKR 304,999","INR 119,999","CNY 7,799","USD 1,299","AED 4,199",2023
Apple,iPhone 15 Pro Max 128GB,221g,6GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,500mAh",6.7 inches,"PKR 314,999","INR 114,999","CNY 7,999","USD 1,199","AED 3,899",2023
Apple,iPhone 15 Pro Max 256GB,221g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,500mAh",6.7 inches,"PKR 324,999","INR 124,999","CNY 8,199","USD 1,299","AED 4,199",2023
Apple,iPhone 15 Pro Max 512GB,221g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,500mAh",6.7 inches,"PKR 344,999","INR 134,999","CNY 8,699","USD 1,399","AED 4,399",2023
Apple,iPhone 14 128GB,172g,6GB,12MP,12MP + 12MP,A15 Bionic,"3,200mAh",6.1 inches,"PKR 184,999","INR 69,999","CNY 5,199",USD 799,"AED 2,699",2022
Apple,iPhone 14 256GB,172g,6GB,12MP,12MP + 12MP,A15 Bionic,"3,200mAh",6.1 inches,"PKR 194,999","INR 74,999","CNY 5,599",USD 849,"AED 2,999",2022
Apple,iPhone 14 512GB,172g,6GB,12MP,12MP + 12MP,A15 Bionic,"3,200mAh",6.1 inches,"PKR 204,999","INR 84,999","CNY 5,999",USD 949,"AED 3,199",2022
Apple,iPhone 14 Plus 128GB,203g,6GB,12MP,12MP + 12MP,A15 Bionic,"4,325mAh",6.7 inches,"PKR 204,999","INR 79,999","CNY 5,499",USD 899,"AED 3,199",2022
Apple,iPhone 14 Plus 256GB,203g,6GB,12MP,12MP + 12MP,A15 Bionic,"4,325mAh",6.7 inches,"PKR 214,999","INR 84,999","CNY 5,899",USD 999,"AED 3,399",2022
Apple,iPhone 14 Plus 512GB,203g,6GB,12MP,12MP + 12MP,A15 Bionic,"4,325mAh",6.7 inches,"PKR 224,999","INR 94,999","CNY 6,299","USD 1,049","AED 3,599",2022
Apple,iPhone 14 Pro 128GB,206g,6GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,200mAh",6.1 inches,"PKR 294,999","INR 109,999","CNY 7,199","USD 1,099","AED 3,699",2022
Apple,iPhone 14 Pro 256GB,206g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,200mAh",6.1 inches,"PKR 304,999","INR 119,999","CNY 7,499","USD 1,199","AED 3,899",2022
Apple,iPhone 14 Pro 512GB,206g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,200mAh",6.1 inches,"PKR 324,999","INR 134,999","CNY 7,999","USD 1,299","AED 4,199",2022
Apple,iPhone 14 Pro Max 128GB,221g,6GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,500mAh",6.7 inches,"PKR 324,999","INR 124,999","CNY 8,099","USD 1,199","AED 3,999",2022
Apple,iPhone 14 Pro Max 256GB,221g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,500mAh",6.7 inches,"PKR 344,999","INR 134,999","CNY 8,499","USD 1,299","AED 4,199",2022
Apple,iPhone 14 Pro Max 512GB,221g,8GB,12MP / 4K,48MP + 12MP,A16 Bionic,"4,500mAh",6.7 inches,"PKR 364,999","INR 144,999","CNY 8,999","USD 1,399","AED 4,499",2022
Apple,iPhone 13 mini 128GB,140g,4GB,12MP,12MP,A15 Bionic,"2,438mAh",5.4 inches,"PKR 174,999","INR 69,900","CNY 5,199",USD 699,"AED 2,599",2021
Apple,iPhone 13 mini 256GB,140g,4GB,12MP,12MP,A15 Bionic,"2,438mAh",5.4 inches,"PKR 184,999","INR 74,900","CNY 5,599",USD 799,"AED 2,999",2021
Apple,iPhone 13 mini 512GB,140g,4GB,12MP,12MP,A15 Bionic,"2,438mAh",5.4 inches,"PKR 194,999","INR 84,900","CNY 5,999",USD 899,"AED 3,299",2021
Apple,iPhone 13 128GB,174g,4GB,12MP,12MP + 12MP,A15 Bionic,"3,240mAh",6.1 inches,"PKR 194,999","INR 74,900","CNY 5,499",USD 799,"AED 2,999",2021
Apple,iPhone 13 256GB,174g,4GB,12MP,12MP + 12MP,A15 Bionic,"3,240mAh",6.1 inches,"PKR 204,999","INR 84,900","CNY 5,899",USD 899,"AED 3,199",2021
Apple,iPhone 13 512GB,174g,4GB,12MP,12MP + 12MP,A15 Bionic,"3,240mAh",6.1 inches,"PKR 224,999","INR 94,900","CNY 6,299",USD 999,"AED 3,599",2021
Apple,iPhone 13 Pro 128GB,204g,6GB,12MP / 4K,12MP + 12MP + 12MP,A15 Bionic,"3,095mAh",6.1 inches,"PKR 294,999","INR 119,900","CNY 7,299",USD 999,"AED 3,999",2021
Apple,iPhone 13 Pro 256GB,204g,6GB,12MP / 4K,12MP + 12MP + 12MP,A15 Bionic,"3,095mAh",6.1 inches,"PKR 314,999","INR 129,900","CNY 7,699","USD 1,099","AED 4,199",2021
Apple,iPhone 13 Pro 512GB,204g,6GB,12MP / 4K,12MP + 12MP + 12MP,A15 Bionic,"3,095mAh",6.1 inches,"PKR 344,999","INR 139,900","CNY 8,199","USD 1,199","AED 4,399",2021
Apple,iPhone 13 Pro Max 128GB,238g,6GB,12MP / 4K,12MP + 12MP + 12MP,A15 Bionic,"4,352mAh",6.7 inches,"PKR 324,999","INR 129,900","CNY 8,299","USD 1,099","AED 4,199",2021
Apple,iPhone 13 Pro Max 256GB,238g,6GB,12MP / 4K,12MP + 12MP + 12MP,A15 Bionic,"4,352mAh",6.7 inches,"PKR 354,999","INR 139,900","CNY 8,799","USD 1,199","AED 4,399",2021
Apple,iPhone 13 Pro Max 512GB,238g,6GB,12MP / 4K,12MP + 12MP + 12MP,A15 Bionic,"4,352mAh",6.7 inches,"PKR 384,999","INR 149,900","CNY 9,199","USD 1,399","AED 4,599",2021
Apple,iPhone 12 mini 64GB,135g,4GB,12MP,12MP,A14 Bionic,"2,227mAh",5.4 inches,"PKR 174,999","INR 69,900","CNY 5,199",USD 699,"AED 2,599",2020
Apple,iPhone 12 mini 128GB,135g,4GB,12MP,12MP,A14 Bionic,"2,227mAh",5.4 inches,"PKR 184,999","INR 74,900","CNY 5,599",USD 799,"AED 2,999",2020
Apple,iPhone 12 mini 256GB,135g,4GB,12MP,12MP,A14 Bionic,"2,227mAh",5.4 inches,"PKR 194,999","INR 84,900","CNY 5,999",USD 899,"AED 3,299",2020
Apple,iPhone 12 64GB,164g,4GB,12MP,12MP + 12MP,A14 Bionic,"2,815mAh",6.1 inches,"PKR 194,999","INR 74,900","CNY 5,499",USD 799,"AED 2,999",2020
Apple,iPhone 12 128GB,164g,4GB,12MP,12MP + 12MP,A14 Bionic,"2,815mAh",6.1 inches,"PKR 204,999","INR 84,900","CNY 5,899",USD 899,"AED 3,199",2020
Apple,iPhone 12 256GB,164g,4GB,12MP,12MP + 12MP,A14 Bionic,"2,815mAh",6.1 inches,"PKR 224,999","INR 94,900","CNY 6,299",USD 999,"AED 3,599",2020
Apple,iPhone 12 Pro 128GB,189g,6GB,12MP / 4K,12MP + 12MP + 12MP,A14 Bionic,"2,815mAh",6.1 inches,"PKR 314,999","INR 119,900","CNY 7,299",USD 999,"AED 3,999",2020
Apple,iPhone 12 Pro 256GB,189g,6GB,12MP / 4K,12MP + 12MP + 12MP,A14 Bionic,"2,815mAh",6.1 inches,"PKR 334,999","INR 129,900","CNY 7,699","USD 1,099","AED 4,199",2020
Apple,iPhone 12 Pro 512GB,189g,6GB,12MP / 4K,12MP + 12MP + 12MP,A14 Bionic,"2,815mAh",6.1 inches,"PKR 354,999","INR 139,900","CNY 8,199","USD 1,199","AED 4,399",2020
Apple,iPhone 12 Pro Max 128GB,228g,6GB,12MP / 4K,12MP + 12MP + 12MP,A14 Bionic,"3,687mAh",6.7 inches,"PKR 344,999","INR 129,900","CNY 8,399","USD 1,099","AED 4,199",2020
Apple,iPhone 12 Pro Max 256GB,228g,6GB,12MP / 4K,12MP + 12MP + 12MP,A14 Bionic,"3,687mAh",6.7 inches,"PKR 364,999","INR 139,900","CNY 8,799","USD 1,199","AED 4,399",2020
Apple,iPhone 12 Pro Max 512GB,228g,6GB,12MP / 4K,12MP + 12MP + 12MP,A14 Bionic,"3,687mAh",6.7 inches,"PKR 384,999","INR 149,900","CNY 9,199","USD 1,399","AED 4,599",2020
Apple,iPhone 11 64GB,194g,4GB,12MP,12MP + 12MP,A13 Bionic,"3,110mAh",6.1 inches,"PKR 159,999","INR 64,900","CNY 5,499",USD 699,"AED 2,499",2019
Apple,iPhone 11 128GB,194g,4GB,12MP,12MP + 12MP,A13 Bionic,"3,110mAh",6.1 inches,"PKR 169,999","INR 74,900","CNY 5,899",USD 799,"AED 2,999",2019
Apple,iPhone 11 256GB,194g,4GB,12MP,12MP + 12MP,A13 Bionic,"3,110mAh",6.1 inches,"PKR 179,999","INR 84,900","CNY 6,299",USD 899,"AED 3,299",2019
Apple,iPhone 11 Pro 64GB,188g,4GB,12MP / 4K,12MP + 12MP + 12MP,A13 Bionic,"3,046mAh",5.8 inches,"PKR 219,999","INR 99,900","CNY 6,999",USD 999,"AED 3,799",2019
Apple,iPhone 11 Pro 256GB,188g,4GB,12MP / 4K,12MP + 12MP + 12MP,A13 Bionic,"3,046mAh",5.8 inches,"PKR 239,999","INR 109,900","CNY 7,399","USD 1,099","AED 4,199",2019
Apple,iPhone 11 Pro 512GB,188g,4GB,12MP / 4K,12MP + 12MP + 12MP,A13 Bionic,"3,046mAh",5.8 inches,"PKR 259,999","INR 119,900","CNY 7,999","USD 1,199","AED 4,599",2019
Apple,iPhone 11 Pro Max 64GB,226g,4GB,12MP / 4K,12MP + 12MP + 12MP,A13 Bionic,"3,969mAh",6.5 inches,"PKR 269,999","INR 109,900","CNY 7,799","USD 1,099","AED 4,399",2019
Apple,iPhone 11 Pro Max 256GB,226g,4GB,12MP / 4K,12MP + 12MP + 12MP,A13 Bionic,"3,969mAh",6.5 inches,"PKR 289,999","INR 119,900","CNY 8,199","USD 1,199","AED 4,599",2019
Apple,iPhone 11 Pro Max 512GB,226g,4GB,12MP / 4K,12MP + 12MP + 12MP,A13 Bionic,"3,969mAh",6.5 inches,"PKR 309,999","INR 129,900","CNY 8,799","USD 1,399","AED 4,999",2019
Apple,iPhone X 64GB,174g,3GB,7MP,12MP + 12MP,A11 Bionic,"2,716mAh",5.8 inches,"PKR 164,999","INR 89,900","CNY 8,388",USD 999,"AED 3,799",2017
Apple,iPhone X 256GB,174g,3GB,7MP,12MP + 12MP,A11 Bionic,"2,716mAh",5.8 inches,"PKR 184,999","INR 99,900","CNY 8,788","USD 1,099","AED 4,199",2017
Apple,iPhone XS 64GB,177g,4GB,7MP,12MP + 12MP,A12 Bionic,"2,658mAh",5.8 inches,"PKR 219,999","INR 99,900","CNY 9,188",USD 999,"AED 3,899",2018
Apple,iPhone XS 256GB,177g,4GB,7MP,12MP + 12MP,A12 Bionic,"2,658mAh",5.8 inches,"PKR 239,999","INR 109,900","CNY 9,788","USD 1,099","AED 4,299",2018
Apple,iPhone XS 512GB,177g,4GB,7MP,12MP + 12MP,A12 Bionic,"2,658mAh",5.8 inches,"PKR 259,999","INR 119,900","CNY 10,388","USD 1,299","AED 4,799",2018
Apple,iPhone XS Max 64GB,208g,4GB,7MP,12MP + 12MP,A12 Bionic,"3,174mAh",6.5 inches,"PKR 249,999","INR 109,900","CNY 10,088","USD 1,099","AED 4,399",2018
Apple,iPhone XS Max 256GB,208g,4GB,7MP,12MP + 12MP,A12 Bionic,"3,174mAh",6.5 inches,"PKR 269,999","INR 119,900","CNY 10,688","USD 1,249","AED 4,799",2018
Apple,iPhone XS Max 512GB,208g,4GB,7MP,12MP + 12MP,A12 Bionic,"3,174mAh",6.5 inches,"PKR 289,999","INR 129,900","CNY 11,288","USD 1,399","AED 5,099",2018
Apple,iPhone XR 64GB,194g,3GB,7MP,12MP + 12MP,A12 Bionic,"2,942mAh",6.1 inches,"PKR 149,999","INR 64,900","CNY 6,299",USD 749,"AED 2,699",2018
Apple,iPhone XR 128GB,194g,3GB,7MP,12MP + 12MP,A12 Bionic,"2,942mAh",6.1 inches,"PKR 159,999","INR 74,900","CNY 6,799",USD 799,"AED 3,099",2018
Apple,iPhone XR 256GB,194g,3GB,7MP,12MP + 12MP,A12 Bionic,"2,942mAh",6.1 inches,"PKR 179,999","INR 84,900","CNY 7,299",USD 899,"AED 3,399",2018
Apple,iPad Air 10.9-inch 64GB,458g,4GB,12MP,12MP,A14 Bionic,"7,608mAh",10.9 inches,"PKR 79,999","INR 54,900","CNY 3,299",USD 599,"AED 2,099",2020
Apple,iPad Air 10.9-inch 256GB,458g,4GB,12MP,12MP,A14 Bionic,"7,608mAh",10.9 inches,"PKR 89,999","INR 64,900","CNY 3,699",USD 749,"AED 2,499",2020
Apple,iPad 10.2-inch 32GB,490g,3GB,12MP,8MP,A13 Bionic,"8,612mAh",10.2 inches,"PKR 49,999","INR 29,900","CNY 2,299",USD 329,"AED 1,199",2020
Apple,iPad 10.2-inch 128GB,490g,3GB,12MP,8MP,A13 Bionic,"8,612mAh",10.2 inches,"PKR 59,999","INR 39,900","CNY 2,699",USD 429,"AED 1,499",2020
Apple,iPad Mini 7.9-inch 64GB,300.5g,3GB,7MP,8MP,A12 Bionic,"5,124mAh",7.9 inches,"PKR 69,999","INR 39,900","CNY 3,499",USD 399,"AED 1,499",2019
Apple,iPad Mini 7.9-inch 256GB,300.5g,3GB,7MP,8MP,A12 Bionic,"5,124mAh",7.9 inches,"PKR 79,999","INR 49,900","CNY 3,799",USD 499,"AED 1,799",2019
Apple,iPad Pro 11-inch 128GB,468g,4GB,7MP,12MP + 10MP,A12Z Bionic,"7,812mAh",11 inches,"PKR 149,999","INR 71,900","CNY 6,399",USD 799,"AED 2,799",2020
Apple,iPad Pro 11-inch 256GB,468g,4GB,7MP,12MP + 10MP,A12Z Bionic,"7,812mAh",11 inches,"PKR 169,999","INR 89,900","CNY 7,199",USD 899,"AED 3,199",2020
Apple,iPad Pro 11-inch 512GB,468g,6GB,7MP,12MP + 10MP,A12Z Bionic,"7,812mAh",11 inches,"PKR 189,999","INR 109,900","CNY 7,999","USD 1,099","AED 3,699",2020
Apple,iPad Pro 12.9-inch 128GB,682g,6GB,7MP,12MP + 10MP,A12Z Bionic,"9,720mAh",12.9 inches,"PKR 219,999","INR 94,900","CNY 7,999",USD 999,"AED 3,799",2020
Apple,iPad Pro 12.9-inch 256GB,682g,6GB,7MP,12MP + 10MP,A12Z Bionic,"9,720mAh",12.9 inches,"PKR 239,999","INR 109,900","CNY 8,699","USD 1,099","AED 4,199",2020
Apple,iPad Pro 12.9-inch 512GB,682g,6GB,7MP,12MP + 10MP,A12Z Bionic,"9,720mAh",12.9 inches,"PKR 259,999","INR 119,900","CNY 9,199","USD 1,299","AED 4,599",2020
Apple,iPad Pro 13-inch 128GB,708g,6GB,7MP,12MP + 10MP,A12Z Bionic,"10,307mAh",13 inches,"PKR 259,999","INR 119,900","CNY 8,699","USD 1,099","AED 4,499",2020
Apple,iPad Pro 13-inch 256GB,708g,6GB,7MP,12MP + 10MP,A12Z Bionic,"10,307mAh",13 inches,"PKR 279,999","INR 139,900","CNY 9,199","USD 1,199","AED 4,799",2020
Apple,iPad Pro 13-inch 512GB,708g,6GB,7MP,12MP + 10MP,A12Z Bionic,"10,307mAh",13 inches,"PKR 309,999","INR 159,900","CNY 9,799","USD 1,399","AED 5,299",2020
Apple,iPad Pro 13-inch 1TB,708g,6GB,7MP,12MP + 10MP,A12Z Bionic,"10,307mAh",13 inches,"PKR 359,999","INR 179,900","CNY 10,399","USD 1,599","AED 5,799",2020
Apple,iPad Pro 13-inch 2TB,708g,6GB,7MP,12MP + 10MP,A12Z Bionic,"10,307mAh",13 inches,"PKR 399,999","INR 199,900","CNY 11,199","USD 1,799","AED 6,099",2020
Samsung,Galaxy S24 Ultra 128GB,234g,12GB,12MP,200MP + 12MP,Exynos 2400,5000mAh,6.8 inches,"PKR 450,000","INR 104,900","CNY 7,499","USD 1,199","AED 4,899",2024
Samsung,Galaxy S24 Ultra 256GB,234g,12GB,12MP,200MP + 12MP,Exynos 2400,5000mAh,6.8 inches,"PKR 480,000","INR 114,900","CNY 7,999","USD 1,299","AED 5,099",2024
Samsung,Galaxy S24+ 128GB,196g,8GB,12MP,50MP + 12MP,Exynos 2400,4800mAh,6.6 inches,"PKR 400,000","INR 89,900","CNY 6,199",USD 899,"AED 3,599",2024
Samsung,Galaxy S24+ 256GB,196g,8GB,12MP,50MP + 12MP,Exynos 2400,4800mAh,6.6 inches,"PKR 430,000","INR 99,900","CNY 6,999",USD 999,"AED 3,799",2024
Samsung,Galaxy S24 128GB,168g,8GB,12MP,50MP + 12MP,Exynos 2400,4000mAh,6.1 inches,"PKR 350,000","INR 79,900","CNY 5,799",USD 799,"AED 3,299",2024
Samsung,Galaxy S24 256GB,168g,8GB,12MP,50MP + 12MP,Exynos 2400,4000mAh,6.1 inches,"PKR 380,000","INR 89,900","CNY 6,199",USD 899,"AED 3,499",2024
Samsung,Galaxy S23 Ultra 128GB,228g,12GB,12MP,200MP + 12MP,Snapdragon 8 Gen 2,5000mAh,6.8 inches,"PKR 430,000","INR 99,900","CNY 7,299","USD 1,199","AED 4,599",2023
Samsung,Galaxy S23 Ultra 256GB,228g,12GB,12MP,200MP + 12MP,Snapdragon 8 Gen 2,5000mAh,6.8 inches,"PKR 460,000","INR 109,900","CNY 7,999","USD 1,299","AED 4,899",2023
Samsung,Galaxy S23+ 128GB,196g,8GB,12MP,50MP + 12MP,Snapdragon 8 Gen 2,4700mAh,6.6 inches,"PKR 360,000","INR 79,900","CNY 6,199",USD 899,"AED 3,399",2023
Samsung,Galaxy S23+ 256GB,196g,8GB,12MP,50MP + 12MP,Snapdragon 8 Gen 2,4700mAh,6.6 inches,"PKR 390,000","INR 89,900","CNY 6,799",USD 999,"AED 3,599",2023
Samsung,Galaxy S23 128GB,168g,8GB,12MP,50MP + 12MP,Snapdragon 8 Gen 2,3900mAh,6.1 inches,"PKR 320,000","INR 69,900","CNY 5,499",USD 799,"AED 3,099",2023
Samsung,Galaxy S23 256GB,168g,8GB,12MP,50MP + 12MP,Snapdragon 8 Gen 2,3900mAh,6.1 inches,"PKR 350,000","INR 79,900","CNY 5,999",USD 899,"AED 3,299",2023
Samsung,Galaxy S22 Ultra 128GB,228g,12GB,10MP,108MP + 12MP,Exynos 2200,5000mAh,6.8 inches,"PKR 420,000","INR 94,900","CNY 6,599","USD 1,099","AED 4,499",2022
Samsung,Galaxy S22 Ultra 256GB,228g,12GB,10MP,108MP + 12MP,Exynos 2200,5000mAh,6.8 inches,"PKR 450,000","INR 104,900","CNY 7,199","USD 1,199","AED 4,799",2022
Samsung,Galaxy S22+ 128GB,195g,8GB,10MP,50MP + 12MP,Exynos 2200,4500mAh,6.6 inches,"PKR 350,000","INR 79,900","CNY 5,999",USD 799,"AED 3,299",2022
Samsung,Galaxy S22+ 256GB,195g,8GB,10MP,50MP + 12MP,Exynos 2200,4500mAh,6.6 inches,"PKR 380,000","INR 89,900","CNY 6,499",USD 899,"AED 3,599",2022
Samsung,Galaxy S22 128GB,167g,8GB,10MP,50MP + 12MP,Exynos 2200,3800mAh,6.1 inches,"PKR 300,000","INR 69,900","CNY 5,499",USD 699,"AED 2,999",2022
Samsung,Galaxy S22 256GB,167g,8GB,10MP,50MP + 12MP,Exynos 2200,3800mAh,6.1 inches,"PKR 330,000","INR 79,900","CNY 5,999",USD 799,"AED 3,199",2022
Samsung,Galaxy Z Fold 5 256GB,254g,12GB,10MP,50MP + 12MP,Snapdragon 8 Gen 2,4400mAh,7.6 inches,"PKR 500,000","INR 154,900","CNY 11,999","USD 1,799","AED 6,999",2023
Samsung,Galaxy Z Fold 5 512GB,254g,12GB,10MP,50MP + 12MP,Snapdragon 8 Gen 2,4400mAh,7.6 inches,"PKR 550,000","INR 174,900","CNY 12,999","USD 1,899","AED 7,499",2023
Samsung,Galaxy Z Flip 5 256GB,187g,8GB,12MP,12MP + 12MP,Snapdragon 8 Gen 2,3700mAh,6.7 inches,"PKR 350,000","INR 94,900","CNY 7,999",USD 999,"AED 4,099",2023
Samsung,Galaxy Z Flip 5 512GB,187g,8GB,12MP,12MP + 12MP,Snapdragon 8 Gen 2,3700mAh,6.7 inches,"PKR 380,000","INR 104,900","CNY 8,999","USD 1,099","AED 4,399",2023
Samsung,Galaxy Z Fold 4 256GB,263g,12GB,10MP,50MP + 12MP,Snapdragon 8 Gen 1,4400mAh,7.6 inches,"PKR 480,000","INR 134,900","CNY 10,999","USD 1,799","AED 6,499",2022
Samsung,Galaxy Z Fold 4 512GB,263g,12GB,10MP,50MP + 12MP,Snapdragon 8 Gen 1,4400mAh,7.6 inches,"PKR 530,000","INR 154,900","CNY 11,999","USD 1,899","AED 7,099",2022
Samsung,Galaxy Z Flip 4 256GB,187g,8GB,10MP,12MP + 12MP,Snapdragon 8 Gen 1,3700mAh,6.7 inches,"PKR 320,000","INR 84,900","CNY 6,999",USD 999,"AED 3,799",2022
Samsung,Galaxy Z Flip 4 512GB,187g,8GB,10MP,12MP + 12MP,Snapdragon 8 Gen 1,3700mAh,6.7 inches,"PKR 350,000","INR 94,900","CNY 7,999","USD 1,099","AED 4,099",2022
Samsung,Galaxy A54 128GB,189g,6GB,32MP,50MP + 12MP,Exynos 1380,5000mAh,6.4 inches,"PKR 85,000","INR 27,999","CNY 2,199",USD 399,"AED 1,399",2023
Samsung,Galaxy A54 256GB,189g,6GB,32MP,50MP + 12MP,Exynos 1380,5000mAh,6.4 inches,"PKR 95,000","INR 32,999","CNY 2,499",USD 449,"AED 1,499",2023
Samsung,Galaxy A34 128GB,199g,6GB,13MP,48MP + 8MP,MediaTek Dimensity 1080,5000mAh,6.6 inches,"PKR 75,000","INR 22,999","CNY 1,799",USD 349,"AED 1,299",2023
Samsung,Galaxy A34 256GB,199g,6GB,13MP,48MP + 8MP,MediaTek Dimensity 1080,5000mAh,6.6 inches,"PKR 85,000","INR 27,999","CNY 1,999",USD 399,"AED 1,399",2023
Samsung,Galaxy A24 128GB,195g,6GB,13MP,50MP + 5MP,MediaTek Helio G99,5000mAh,6.5 inches,"PKR 70,000","INR 19,999","CNY 1,599",USD 299,"AED 1,199",2023
Samsung,Galaxy A24 256GB,195g,6GB,13MP,50MP + 5MP,MediaTek Helio G99,5000mAh,6.5 inches,"PKR 80,000","INR 24,999","CNY 1,799",USD 349,"AED 1,299",2023
Samsung,Galaxy A14 128GB,190g,4GB,13MP,50MP + 2MP,Exynos 850,5000mAh,6.6 inches,"PKR 60,000","INR 18,499","CNY 1,499",USD 249,"AED 1,099",2023
Samsung,Galaxy A14 256GB,190g,4GB,13MP,50MP + 2MP,Exynos 850,5000mAh,6.6 inches,"PKR 70,000","INR 21,999","CNY 1,699",USD 299,"AED 1,199",2023
Samsung,Galaxy A04 64GB,188g,4GB,5MP,50MP + 2MP,Exynos 850,5000mAh,6.5 inches,"PKR 50,000","INR 14,999","CNY 1,199",USD 199,AED 899,2022
Samsung,Galaxy A04 128GB,188g,4GB,5MP,50MP + 2MP,Exynos 850,5000mAh,6.5 inches,"PKR 60,000","INR 18,499","CNY 1,399",USD 249,AED 999,2022
Samsung,Galaxy M54 128GB,202g,8GB,32MP,108MP + 8MP,Exynos 1380,6000mAh,6.7 inches,"PKR 95,000","INR 23,999","CNY 2,099",USD 349,"AED 1,299",2023
Samsung,Galaxy M54 256GB,202g,8GB,32MP,108MP + 8MP,Exynos 1380,6000mAh,6.7 inches,"PKR 105,000","INR 26,999","CNY 2,299",USD 399,"AED 1,399",2023
Samsung,Galaxy M34 128GB,199g,6GB,13MP,50MP + 8MP,Exynos 1280,6000mAh,6.5 inches,"PKR 70,000","INR 17,999","CNY 1,699",USD 299,"AED 1,099",2023
Samsung,Galaxy M34 256GB,199g,6GB,13MP,50MP + 8MP,Exynos 1280,6000mAh,6.5 inches,"PKR 80,000","INR 20,999","CNY 1,999",USD 349,"AED 1,199",2023
Samsung,Galaxy M14 128GB,202g,4GB,13MP,50MP + 2MP,Exynos 850,6000mAh,6.6 inches,"PKR 60,000","INR 14,999","CNY 1,399",USD 249,AED 999,2023
Samsung,Galaxy M14 256GB,202g,4GB,13MP,50MP + 2MP,Exynos 850,6000mAh,6.6 inches,"PKR 70,000","INR 17,999","CNY 1,599",USD 299,"AED 1,099",2023
Samsung,Galaxy M04 64GB,188g,4GB,5MP,13MP + 2MP,MediaTek Helio P35,5000mAh,6.5 inches,"PKR 50,000","INR 12,999","CNY 1,099",USD 199,AED 899,2022
Samsung,Galaxy M04 128GB,188g,4GB,5MP,13MP + 2MP,MediaTek Helio P35,5000mAh,6.5 inches,"PKR 60,000","INR 15,999","CNY 1,299",USD 249,AED 999,2022
Samsung,Galaxy F54 128GB,199g,8GB,32MP,108MP + 8MP,Exynos 1380,6000mAh,6.7 inches,"PKR 85,000","INR 23,999","CNY 2,199",USD 349,"AED 1,299",2023
Samsung,Galaxy F54 256GB,199g,8GB,32MP,108MP + 8MP,Exynos 1380,6000mAh,6.7 inches,"PKR 95,000","INR 26,999","CNY 2,399",USD 399,"AED 1,399",2023
Samsung,Galaxy F34 128GB,190g,6GB,13MP,50MP + 8MP,Exynos 1280,6000mAh,6.5 inches,"PKR 70,000","INR 18,999","CNY 1,799",USD 299,"AED 1,099",2023
Samsung,Galaxy F34 256GB,190g,6GB,13MP,50MP + 8MP,Exynos 1280,6000mAh,6.5 inches,"PKR 80,000","INR 21,999","CNY 1,999",USD 349,"AED 1,199",2023
Samsung,Galaxy F14 128GB,198g,4GB,13MP,50MP + 2MP,Exynos 850,6000mAh,6.6 inches,"PKR 60,000","INR 14,999","CNY 1,399",USD 249,AED 999,2023
Samsung,Galaxy F14 256GB,198g,4GB,13MP,50MP + 2MP,Exynos 850,6000mAh,6.6 inches,"PKR 70,000","INR 17,999","CNY 1,599",USD 299,"AED 1,099",2023
Samsung,Galaxy Note 20 Ultra 128GB,208g,12GB,10MP,108MP + 12MP,Exynos 990,4500mAh,6.9 inches,"PKR 180,000","INR 99,999","CNY 7,999","USD 1,299","AED 4,499",2020
Samsung,Galaxy Note 20 Ultra 256GB,208g,12GB,10MP,108MP + 12MP,Exynos 990,4500mAh,6.9 inches,"PKR 200,000","INR 1,04,999","CNY 8,499","USD 1,399","AED 4,999",2020
Samsung,Galaxy Note 20 128GB,192g,8GB,10MP,108MP + 12MP,Exynos 990,4300mAh,6.7 inches,"PKR 150,000","INR 77,999","CNY 6,499",USD 999,"AED 3,999",2020
Samsung,Galaxy Note 20 256GB,192g,8GB,10MP,108MP + 12MP,Exynos 990,4300mAh,6.7 inches,"PKR 170,000","INR 89,999","CNY 7,099","USD 1,099","AED 4,199",2020
Samsung,Galaxy Note 10+ 256GB,196g,12GB,10MP,12MP + 16MP,Exynos 9825,4300mAh,6.8 inches,"PKR 160,000","INR 74,999","CNY 6,299","USD 1,099","AED 3,899",2019
Samsung,Galaxy Note 10+ 512GB,196g,12GB,10MP,12MP + 16MP,Exynos 9825,4300mAh,6.8 inches,"PKR 180,000","INR 84,999","CNY 6,999","USD 1,199","AED 4,199",2019
Samsung,Galaxy Note 10 256GB,168g,8GB,10MP,12MP + 16MP,Exynos 9825,3500mAh,6.3 inches,"PKR 140,000","INR 64,999","CNY 5,699",USD 949,"AED 3,699",2019
Samsung,Galaxy Note 10 128GB,168g,8GB,10MP,12MP + 16MP,Exynos 9825,3500mAh,6.3 inches,"PKR 120,000","INR 59,999","CNY 5,199",USD 899,"AED 3,399",2019
Samsung,Galaxy Xcover 6 Pro 128GB,235g,6GB,13MP,50MP,Exynos 1380,4050mAh,6.6 inches,"PKR 75,000","INR 28,999","CNY 2,299",USD 499,"AED 1,699",2022
Samsung,Galaxy Xcover 5 64GB,172g,4GB,5MP,16MP,Exynos 850,3000mAh,5.3 inches,"PKR 50,000","INR 17,499","CNY 1,299",USD 249,AED 899,2020
Samsung,Galaxy J8 64GB,191g,4GB,16MP,16MP + 5MP,Snapdragon 450,3500mAh,6.0 inches,"PKR 45,000","INR 18,990","CNY 1,699",USD 199,AED 799,2018
Samsung,Galaxy J7 Pro 64GB,181g,3GB,13MP,13MP,Exynos 7870,3600mAh,5.5 inches,"PKR 40,000","INR 18,990","CNY 1,599",USD 179,AED 699,2017
Samsung,Galaxy J6+ 64GB,178g,4GB,8MP,13MP + 5MP,Snapdragon 425,3300mAh,6.0 inches,"PKR 40,000","INR 15,999","CNY 1,499",USD 169,AED 699,2018
Samsung,Galaxy J4 16GB,175g,2GB,5MP,13MP,Exynos 7570,3000mAh,5.5 inches,"PKR 25,000","INR 9,990",CNY 999,USD 129,AED 499,2018
Samsung,Galaxy C9 Pro 64GB,189g,6GB,16MP,16MP + 8MP,Snapdragon 653,4000mAh,6.0 inches,"PKR 65,000","INR 32,990","CNY 3,099",USD 399,"AED 1,299",2016
Samsung,Galaxy C7 Pro 64GB,165g,4GB,16MP,16MP,Snapdragon 625,3300mAh,5.7 inches,"PKR 50,000","INR 22,990","CNY 2,499",USD 299,AED 999,2017
Samsung,Galaxy C5 32GB,143g,4GB,8MP,16MP,Snapdragon 617,2600mAh,5.2 inches,"PKR 40,000","INR 19,990","CNY 1,899",USD 249,AED 799,2016
Samsung,Galaxy W22 5G 256GB,228g,12GB,10MP,108MP + 12MP,Snapdragon 888,4500mAh,7.6 inches,"PKR 280,000","INR 99,999","CNY 10,999","USD 1,499","AED 5,499",2021
Samsung,Galaxy W21 5G 256GB,229g,12GB,10MP,108MP + 12MP,Snapdragon 888,4500mAh,7.6 inches,"PKR 260,000","INR 89,999","CNY 9,999","USD 1,399","AED 4,999",2020
Samsung,Galaxy Tab S9 Ultra 256GB,732g,12GB,12MP + 12MP,13MP + 8MP,Snapdragon 8 Gen 2,11200mAh,14.6 inches,"PKR 350,000","INR 1,14,999","CNY 9,999","USD 1,199","AED 4,499",2023
Samsung,Galaxy Tab S9+ 256GB,586g,12GB,12MP,13MP + 8MP,Snapdragon 8 Gen 2,10090mAh,12.4 inches,"PKR 280,000","INR 99,999","CNY 8,799",USD 999,"AED 3,999",2023
Samsung,Galaxy Tab S9 128GB,498g,8GB,12MP,13MP,Snapdragon 8 Gen 2,8400mAh,11 inches,"PKR 230,000","INR 85,999","CNY 7,299",USD 799,"AED 3,299",2023
Samsung,Galaxy Tab S9 FE 128GB,523g,6GB,12MP,8MP,Exynos 1380,8000mAh,10.9 inches,"PKR 150,000","INR 49,999","CNY 5,499",USD 549,"AED 1,999",2023
Samsung,Galaxy Tab S8 Ultra 256GB,726g,12GB,12MP + 12MP,13MP + 6MP,Snapdragon 8 Gen 1,11200mAh,14.6 inches,"PKR 320,000","INR 1,09,999","CNY 9,499","USD 1,099","AED 4,299",2022
Samsung,Galaxy Tab S8+ 256GB,567g,8GB,12MP,13MP + 6MP,Snapdragon 8 Gen 1,10090mAh,12.4 inches,"PKR 250,000","INR 94,999","CNY 8,299",USD 899,"AED 3,699",2022
Samsung,Galaxy Tab S8 128GB,503g,8GB,12MP,13MP + 6MP,Snapdragon 8 Gen 1,8000mAh,11 inches,"PKR 200,000","INR 74,999","CNY 6,999",USD 699,"AED 2,999",2022
Samsung,Galaxy Tab A9+ 128GB,480g,8GB,5MP,8MP,Snapdragon 695,7040mAh,11 inches,"PKR 100,000","INR 22,999","CNY 1,799",USD 229,AED 899,2023
Samsung,Galaxy Tab A9 64GB,366g,4GB,2MP,8MP,MediaTek Helio G99,5100mAh,8.7 inches,"PKR 75,000","INR 16,999","CNY 1,299",USD 179,AED 699,2023
Samsung,Galaxy Tab A8 64GB,508g,4GB,5MP,8MP,Unisoc T618,7040mAh,10.5 inches,"PKR 68,000","INR 17,999","CNY 1,499",USD 199,AED 799,2022
Samsung,Galaxy Tab A7 Lite 32GB,366g,3GB,2MP,8MP,MediaTek Helio P22T,5100mAh,8.7 inches,"PKR 40,000","INR 11,999",CNY 999,USD 149,AED 599,2021
Samsung,Galaxy Tab Active 5 128GB,433g,6GB,5MP,13MP,Exynos 1380,5050mAh,8 inches,"PKR 150,000","INR 54,999","CNY 3,699",USD 549,"AED 2,199",2024
Samsung,Galaxy Tab Active 4 Pro 128GB,674g,6GB,8MP,13MP,Snapdragon 778G,7600mAh,10.1 inches,"PKR 180,000","INR 64,999","CNY 4,299",USD 649,"AED 2,599",2022
Samsung,Galaxy Tab Active 3 64GB,426g,4GB,5MP,13MP,Exynos 9810,5050mAh,8 inches,"PKR 120,000","INR 44,999","CNY 2,999",USD 499,"AED 1,899",2020
Samsung,Galaxy Tab E 10.1 16GB,490g,1.5GB,2MP,5MP,Spreadtrum SC8830,5000mAh,10.1 inches,"PKR 35,000","INR 9,999",CNY 899,USD 129,AED 499,2016
Samsung,Galaxy Tab E 8.0 16GB,360g,1.5GB,2MP,5MP,Qualcomm MSM8916,5000mAh,8 inches,"PKR 28,000","INR 8,499",CNY 799,USD 99,AED 399,2016
OnePlus,OnePlus 12 256GB,205g,12GB,32MP,50MP + 48MP,Snapdragon 8 Gen 3,5000mAh,6.7 inches,"PKR 219,999","INR 74,999","CNY 5,999",USD 799,"AED 3,199",2024
OnePlus,OnePlus 12R 256GB,203g,12GB,16MP,50MP + 8MP,Snapdragon 8 Gen 2,4500mAh,6.7 inches,"PKR 169,999","INR 49,999","CNY 4,299",USD 699,"AED 2,599",2024
OnePlus,OnePlus 11 256GB,205g,12GB,16MP,50MP + 48MP,Snapdragon 8 Gen 1,5000mAh,6.7 inches,"PKR 179,999","INR 54,999","CNY 4,999",USD 699,"AED 2,799",2023
OnePlus,OnePlus 11R 256GB,202g,12GB,16MP,50MP + 8MP,Snapdragon 8 Gen 1,5000mAh,6.7 inches,"PKR 159,999","INR 44,999","CNY 3,799",USD 599,"AED 2,499",2023
OnePlus,OnePlus Nord 3 256GB,190g,12GB,16MP,50MP + 8MP,MediaTek Dimensity 9000,5000mAh,6.74 inches,"PKR 119,999","INR 34,999","CNY 3,499",USD 499,"AED 1,999",2023
OnePlus,OnePlus Nord CE 3 128GB,179g,8GB,16MP,50MP + 2MP,Snapdragon 782G,5000mAh,6.72 inches,"PKR 85,000","INR 22,999","CNY 2,799",USD 399,"AED 1,499",2023
OnePlus,OnePlus Nord CE 3 Lite 128GB,195g,8GB,16MP,108MP,Snapdragon 695,5000mAh,6.72 inches,"PKR 59,999","INR 17,999","CNY 2,099",USD 299,"AED 1,199",2023
OnePlus,OnePlus Nord N30 5G 128GB,192g,8GB,16MP,64MP + 2MP,MediaTek Dimensity 6020,5000mAh,6.72 inches,"PKR 55,000","INR 16,999","CNY 1,999",USD 249,AED 999,2023
OnePlus,OnePlus Open 256GB,238g,16GB,32MP,48MP + 48MP,Snapdragon 8 Gen 2,4800mAh,7.8 inches,"PKR 299,999","INR 74,999","CNY 6,999","USD 1,099","AED 4,299",2024
OnePlus,OnePlus 10 Pro 256GB,200g,12GB,32MP,50MP + 48MP,Snapdragon 8 Gen 1,5000mAh,6.7 inches,"PKR 199,999","INR 64,999","CNY 4,999",USD 899,"AED 3,299",2022
OnePlus,OnePlus 10T 256GB,203g,12GB,16MP,50MP + 8MP,Snapdragon 8+ Gen 1,4500mAh,6.7 inches,"PKR 179,999","INR 54,999","CNY 4,699",USD 749,"AED 2,899",2022
OnePlus,OnePlus 9 Pro 256GB,192g,12GB,16MP,48MP + 50MP,Snapdragon 888,4500mAh,6.7 inches,"PKR 179,999","INR 59,999","CNY 4,199",USD 699,"AED 2,799",2021
OnePlus,OnePlus 9 128GB,183g,8GB,16MP,48MP + 50MP,Snapdragon 888,4500mAh,6.55 inches,"PKR 149,999","INR 39,999","CNY 3,699",USD 599,"AED 2,299",2021
OnePlus,OnePlus 11 Pro 256GB,204g,16GB,32MP,50MP + 48MP,Snapdragon 8 Gen 2,5000mAh,6.7 inches,"PKR 219,999","INR 74,999","CNY 6,399",USD 899,"AED 3,599",2023
OnePlus,OnePlus Nord 2T 128GB,190g,8GB,32MP,50MP + 8MP,MediaTek Dimensity 1300,4500mAh,6.43 inches,"PKR 69,999","INR 28,999","CNY 2,499",USD 399,"AED 1,699",2022
OnePlus,OnePlus Nord 2 128GB,190g,8GB,32MP,50MP + 8MP,MediaTek Dimensity 1200-AI,4500mAh,6.43 inches,"PKR 59,999","INR 27,999","CNY 2,299",USD 349,"AED 1,499",2021
OnePlus,OnePlus Nord N200 64GB,189g,4GB,16MP,13MP + 2MP,Snapdragon 480,5000mAh,6.49 inches,"PKR 39,999","INR 15,999","CNY 1,199",USD 199,AED 799,2021
OnePlus,OnePlus Nord N100 64GB,185g,4GB,8MP,13MP + 2MP,Qualcomm Snapdragon 460,5000mAh,6.52 inches,"PKR 29,999","INR 12,999","CNY 1,099",USD 179,AED 699,2020
OnePlus,OnePlus 8T Cyberpunk 2077 Edition 256GB,188g,12GB,16MP,48MP + 16MP,Snapdragon 865,4500mAh,6.55 inches,"PKR 139,999","INR 45,999","CNY 3,699",USD 749,"AED 2,999",2020
OnePlus,OnePlus 9T 128GB,192g,8GB,16MP,48MP + 50MP,Snapdragon 888,4500mAh,6.55 inches,"PKR 159,999","INR 49,999","CNY 4,199",USD 649,"AED 2,799",2021
OnePlus,OnePlus 8T 256GB,188g,12GB,16MP,48MP + 16MP,Snapdragon 865,4500mAh,6.55 inches,"PKR 119,999","INR 42,999","CNY 3,499",USD 599,"AED 2,499",2020
OnePlus,OnePlus 10T 5G 256GB,203g,12GB,16MP,50MP + 8MP,Snapdragon 8+ Gen 1,4500mAh,6.7 inches,"PKR 179,999","INR 54,999","CNY 4,699",USD 749,"AED 2,899",2022
OnePlus,OnePlus 9R 5G 128GB,189g,8GB,16MP,48MP + 5MP,Snapdragon 870,4500mAh,6.55 inches,"PKR 159,999","INR 39,999","CNY 3,499",USD 599,"AED 2,499",2021
OnePlus,OnePlus 8 Pro 256GB,199g,12GB,16MP,48MP + 48MP,Snapdragon 865,4510mAh,6.78 inches,"PKR 159,999","INR 54,999","CNY 4,999",USD 749,"AED 2,999",2020
OnePlus,OnePlus 8 128GB,180g,8GB,16MP,48MP + 16MP,Snapdragon 865,4300mAh,6.55 inches,"PKR 119,999","INR 41,999","CNY 3,499",USD 699,"AED 2,499",2020
OnePlus,OnePlus Nord CE 2 Lite 128GB,195g,6GB,16MP,64MP + 2MP,MediaTek Dimensity 900,5000mAh,6.59 inches,"PKR 49,999","INR 19,999","CNY 1,799",USD 249,AED 999,2022
OnePlus,OnePlus Nord CE 2 128GB,173g,8GB,16MP,64MP + 8MP,MediaTek Dimensity 1200,4500mAh,6.43 inches,"PKR 64,999","INR 23,999","CNY 2,499",USD 299,"AED 1,299",2022
OnePlus,OnePlus Nord 1 128GB,184g,6GB,16MP,48MP + 5MP,Snapdragon 765G,4115mAh,6.44 inches,"PKR 49,999","INR 22,999","CNY 2,099",USD 349,"AED 1,499",2020
OnePlus,OnePlus Nord CE 5G 128GB,170g,6GB,16MP,64MP + 8MP,Snapdragon 750G,4500mAh,6.43 inches,"PKR 54,999","INR 24,999","CNY 2,499",USD 299,"AED 1,499",2021
OnePlus,OnePlus Nord 2 5G 128GB,189g,8GB,32MP,50MP + 8MP,MediaTek Dimensity 1200-AI,4500mAh,6.43 inches,"PKR 69,999","INR 27,999","CNY 2,499",USD 399,"AED 1,699",2021
OnePlus,OnePlus Nord N100 5G 64GB,185g,4GB,8MP,13MP + 2MP,Qualcomm Snapdragon 460,5000mAh,6.52 inches,"PKR 29,999","INR 12,999","CNY 1,099",USD 179,AED 699,2020
OnePlus,OnePlus Nord N10 5G 128GB,190g,6GB,16MP,64MP + 8MP,Qualcomm Snapdragon 690,4300mAh,6.49 inches,"PKR 49,999","INR 19,999","CNY 1,799",USD 299,"AED 1,099",2020
OnePlus,OnePlus 8R 128GB,192g,8GB,16MP,48MP + 5MP,Snapdragon 865,4300mAh,6.55 inches,"PKR 119,999","INR 41,999","CNY 3,499",USD 649,"AED 2,499",2020
OnePlus,OnePlus 7R 128GB,190g,6GB,16MP,48MP + 5MP,Snapdragon 855,3700mAh,6.41 inches,"PKR 109,999","INR 38,999","CNY 3,199",USD 599,"AED 2,399",2020
OnePlus,OnePlus 6T McLaren Edition 256GB,185g,10GB,16MP,20MP + 16MP,Snapdragon 845,3700mAh,6.41 inches,"PKR 149,999","INR 50,999","CNY 4,699",USD 799,"AED 3,299",2018
OnePlus,OnePlus 5T Star Wars Edition 128GB,162g,6GB,16MP,16MP + 20MP,Snapdragon 835,3300mAh,6.01 inches,"PKR 89,999","INR 34,999","CNY 3,499",USD 649,"AED 2,499",2017
OnePlus,OnePlus 13R 128GB,210g,8GB,16MP,50MP + 8MP,Snapdragon 8 Gen 2,4500mAh,6.7 inches,"PKR 219,999","INR 74,999","CNY 6,499",USD 849,"AED 3,599",2023
OnePlus,OnePlus 11T 128GB,202g,12GB,32MP,50MP + 48MP,Snapdragon 8 Gen 2,5000mAh,6.7 inches,"PKR 199,999","INR 74,999","CNY 5,999",USD 799,"AED 3,499",2023
OnePlus,OnePlus 10R 128GB,205g,8GB,16MP,50MP + 16MP,MediaTek Dimensity 8100,4500mAh,6.7 inches,"PKR 169,999","INR 49,999","CNY 3,899",USD 599,"AED 2,499",2022
OnePlus,OnePlus 7 Pro 5G 256GB,206g,12GB,16MP,48MP + 8MP,Snapdragon 855,4000mAh,6.67 inches,"PKR 169,999","INR 59,999","CNY 4,699",USD 799,"AED 3,299",2019
OnePlus,OnePlus 6 Special Edition 128GB,177g,6GB,16MP,20MP + 16MP,Snapdragon 845,3300mAh,6.28 inches,"PKR 99,999","INR 37,999","CNY 3,499",USD 599,"AED 2,499",2018
OnePlus,OnePlus 5 Special Edition 128GB,155g,8GB,16MP,20MP + 16MP,Snapdragon 835,3300mAh,5.5 inches,"PKR 94,999","INR 36,999","CNY 3,299",USD 599,"AED 2,399",2017
OnePlus,OnePlus Nord X 128GB,190g,8GB,32MP,64MP + 8MP,Snapdragon 765G,4000mAh,6.44 inches,"PKR 69,999","INR 24,999","CNY 2,499",USD 299,"AED 1,299",2020
OnePlus,OnePlus 8 Pro McLaren Edition 256GB,199g,12GB,16MP,48MP + 8MP,Snapdragon 865,4510mAh,6.78 inches,"PKR 169,999","INR 59,999","CNY 4,999",USD 899,"AED 3,599",2020
OnePlus,OnePlus 8T Cyberpunk Edition 256GB,188g,12GB,16MP,48MP + 16MP,Snapdragon 865,4500mAh,6.55 inches,"PKR 169,999","INR 58,999","CNY 4,699",USD 799,"AED 3,299",2020
OnePlus,OnePlus 7T Pro 5G McLaren Edition 256GB,206g,12GB,16MP,48MP + 8MP,Snapdragon 855,4085mAh,6.67 inches,"PKR 179,999","INR 69,999","CNY 5,299",USD 899,"AED 3,799",2019
OnePlus,OnePlus 15R 128GB,210g,12GB,32MP,50MP + 8MP,Snapdragon 8 Gen 3,5000mAh,6.7 inches,"PKR 229,999","INR 74,999","CNY 6,499",USD 849,"AED 3,699",2023
OnePlus,OnePlus 14+ 128GB,202g,8GB,16MP,64MP + 8MP,Snapdragon 8 Gen 2,4800mAh,6.55 inches,"PKR 199,999","INR 69,999","CNY 5,999",USD 799,"AED 3,499",2023
OnePlus,OnePlus 13 Pro 256GB,215g,12GB,32MP,50MP + 48MP,Snapdragon 8 Gen 2,5000mAh,6.7 inches,"PKR 219,999","INR 74,999","CNY 6,199",USD 899,"AED 3,799",2023
OnePlus,OnePlus 12T 5G 256GB,200g,12GB,16MP,50MP + 8MP,Snapdragon 8 Gen 2,5000mAh,6.7 inches,"PKR 219,999","INR 74,999","CNY 5,899",USD 849,"AED 3,599",2023
OnePlus,OnePlus Pad,550g,8GB,8MP,13MP,MediaTek Dimensity 9000,9510mAh,11.61 inches,"PKR 94,999","INR 39,999","CNY 3,999",USD 499,"AED 1,799",2023
OnePlus,OnePlus Pad 2,550g,8GB,8MP,13MP,MediaTek Dimensity 9000,9510mAh,11.61 inches,"PKR 104,999","INR 44,999","CNY 4,499",USD 549,"AED 1,999",2024
OnePlus,OnePlus Pad Pro,610g,12GB,16MP,50MP,Snapdragon 8 Gen 3,11000mAh,12.4 inches,"PKR 169,999","INR 69,999","CNY 5,999",USD 799,"AED 2,599",2024
Vivo,X200 128GB,223g,12GB,32MP,50MP,Dimensity 9400,6000mAh,6.78 inches,"PKR 199,999","INR 119,999","CNY 6,999",USD 999,"AED 3,699",2024
Vivo,X200 256GB,223g,12GB,32MP,50MP,Dimensity 9400,6000mAh,6.78 inches,"PKR 219,999","INR 129,999","CNY 7,499","USD 1,099","AED 3,999",2024
Vivo,X200 Pro 256GB,223g,16GB,32MP,200MP,Dimensity 9400,6000mAh,6.78 inches,"PKR 229,999","INR 139,999","CNY 7,999","USD 1,199","AED 4,399",2024
Vivo,X200 Pro 512GB,223g,16GB,32MP,200MP,Dimensity 9400,6000mAh,6.78 inches,"PKR 249,999","INR 149,999","CNY 8,499","USD 1,299","AED 4,699",2024
Vivo,X200 Pro Mini 256GB,187g,16GB,32MP,50MP,Dimensity 9400,5700mAh,6.31 inches,"PKR 189,999","INR 109,999","CNY 6,499",USD 949,"AED 3,499",2024
Vivo,V40e 128GB,179g,8GB,44MP,64MP,Snapdragon 778G,4100mAh,6.44 inches,"PKR 79,999","INR 44,999","CNY 2,999",USD 449,"AED 1,649",2024
Vivo,Y200 GT 128GB,190g,12GB,16MP,64MP,Dimensity 1200,5000mAh,6.58 inches,"PKR 69,999","INR 39,999","CNY 2,499",USD 399,"AED 1,499",2024
Vivo,T3 5G 128GB,180g,8GB,16MP,50MP,Snapdragon 870,5000mAh,6.67 inches,"PKR 59,999","INR 34,999","CNY 2,299",USD 349,"AED 1,299",2024
Vivo,Y100 5G 128GB,181g,8GB,16MP,64MP,Dimensity 900,4500mAh,6.38 inches,"PKR 54,999","INR 29,999","CNY 1,999",USD 299,"AED 1,099",2024
Vivo,S18 Pro 256GB,189g,12GB,32MP,108MP,Snapdragon 8 Gen 2,4700mAh,6.56 inches,"PKR 99,999","INR 59,999","CNY 3,999",USD 599,"AED 2,199",2024
Vivo,V30 Pro 128GB,192g,12GB,32MP,64MP,Dimensity 1100,4500mAh,6.44 inches,"PKR 89,999","INR 49,999","CNY 3,499",USD 549,"AED 1,999",2024
Vivo,iQOO 12 256GB,210g,16GB,16MP,50MP,Snapdragon 8 Gen 3,5000mAh,6.78 inches,"PKR 109,999","INR 64,999","CNY 4,499",USD 699,"AED 2,599",2024
Vivo,Z3 64GB,162g,6GB,12MP,16MP,Snapdragon 710,3315mAh,6.3 inches,"PKR 39,999","INR 22,999","CNY 1,699",USD 249,AED 899,2018
Vivo,V9 64GB,150g,4GB,24MP,16MP,Snapdragon 626,3260mAh,6.3 inches,"PKR 34,999","INR 19,999","CNY 1,499",USD 219,AED 799,2018
Vivo,X9 Plus 128GB,199g,6GB,20MP+8MP,16MP,Snapdragon 653,4000mAh,5.88 inches,"PKR 42,999","INR 24,999","CNY 2,199",USD 299,"AED 1,099",2017
Vivo,Y81 32GB,146g,3GB,5MP,13MP,MediaTek Helio P22,3260mAh,6.22 inches,"PKR 22,999","INR 12,999",CNY 999,USD 149,AED 549,2018
Vivo,X5Max 16GB,146g,2GB,5MP,13MP,Snapdragon 615,2300mAh,5.5 inches,"PKR 29,999","INR 16,999","CNY 1,299",USD 199,AED 699,2014
Vivo,V5 Plus 64GB,158g,4GB,20MP+8MP,16MP,Snapdragon 625,3055mAh,5.5 inches,"PKR 39,999","INR 22,999","CNY 1,699",USD 249,AED 899,2017
Vivo,Y95 64GB,163g,4GB,20MP,13MP+2MP,Snapdragon 439,4030mAh,6.22 inches,"PKR 29,999","INR 16,999","CNY 1,299",USD 199,AED 699,2018
Vivo,V3 Max 32GB,168g,4GB,8MP,13MP,Snapdragon 652,3000mAh,5.5 inches,"PKR 24,999","INR 13,999","CNY 1,199",USD 179,AED 649,2016
Vivo,X3S 16GB,153g,1GB,5MP,13MP,MediaTek MT6592,2000mAh,5.0 inches,"PKR 19,999","INR 10,999",CNY 899,USD 139,AED 499,2014
Vivo,Y66 32GB,155g,3GB,16MP,13MP,Snapdragon 430,3000mAh,5.5 inches,"PKR 27,999","INR 14,999","CNY 1,199",USD 179,AED 649,2017
Vivo,V19 128GB,176g,8GB,32MP,48MP,Qualcomm Snapdragon 712,4500mAh,6.44 inches,"PKR 49,999","INR 27,990","CNY 2,799",USD 399,"AED 1,499",2020
Vivo,V19 256GB,176g,8GB,32MP,48MP,Qualcomm Snapdragon 712,4500mAh,6.44 inches,"PKR 54,999","INR 31,990","CNY 3,199",USD 429,"AED 1,599",2020
Vivo,V17 Pro 128GB,201g,8GB,32MP,48MP,Qualcomm Snapdragon 675,4100mAh,6.44 inches,"PKR 54,999","INR 27,990","CNY 2,999",USD 399,"AED 1,499",2019
Vivo,V17 Pro 256GB,201g,8GB,32MP,48MP,Qualcomm Snapdragon 675,4100mAh,6.44 inches,"PKR 59,999","INR 33,990","CNY 3,199",USD 429,"AED 1,599",2019
Vivo,Y12s 64GB,191g,3GB,8MP,13MP,MediaTek Helio P35,5000mAh,6.51 inches,"PKR 18,999","INR 10,990",CNY 899,USD 159,AED 599,2020
Vivo,Y12s 128GB,191g,4GB,8MP,13MP,MediaTek Helio P35,5000mAh,6.51 inches,"PKR 22,999","INR 13,990","CNY 1,099",USD 179,AED 699,2020
Vivo,S1 Pro 128GB,185g,6GB,32MP,48MP,MediaTek Helio P65,4500mAh,6.38 inches,"PKR 39,999","INR 19,990","CNY 2,299",USD 249,AED 999,2019
Vivo,S1 Pro 256GB,185g,6GB,32MP,48MP,MediaTek Helio P65,4500mAh,6.38 inches,"PKR 44,999","INR 24,990","CNY 2,499",USD 269,"AED 1,099",2019
Vivo,Y11 32GB,190g,3GB,8MP,13MP,Qualcomm Snapdragon 439,5000mAh,6.35 inches,"PKR 18,499","INR 10,999",CNY 899,USD 149,AED 599,2019
Vivo,Y11 64GB,190g,3GB,8MP,13MP,Qualcomm Snapdragon 439,5000mAh,6.35 inches,"PKR 22,499","INR 13,490","CNY 1,099",USD 169,AED 649,2019
Vivo,V15 128GB,190g,6GB,32MP,48MP,MediaTek Helio P70,4000mAh,6.53 inches,"PKR 34,999","INR 22,990","CNY 2,199",USD 299,"AED 1,099",2019
Vivo,V15 256GB,190g,6GB,32MP,48MP,MediaTek Helio P70,4000mAh,6.53 inches,"PKR 39,999","INR 26,990","CNY 2,399",USD 319,"AED 1,199",2019
Vivo,X27 Pro 128GB,190g,8GB,32MP,48MP,Qualcomm Snapdragon 710,4000mAh,6.39 inches,"PKR 59,999","INR 35,990","CNY 3,499",USD 499,"AED 1,799",2019
Vivo,X27 Pro 256GB,190g,8GB,32MP,48MP,Qualcomm Snapdragon 710,4000mAh,6.39 inches,"PKR 64,999","INR 39,990","CNY 3,799",USD 549,"AED 1,999",2019
Vivo,Y30 128GB,193g,4GB,8MP,13MP,MediaTek Helio P35,5000mAh,6.47 inches,"PKR 24,999","INR 14,990","CNY 1,499",USD 199,AED 749,2020
Vivo,Y30 64GB,193g,3GB,8MP,13MP,MediaTek Helio P35,5000mAh,6.47 inches,"PKR 19,999","INR 11,990","CNY 1,299",USD 169,AED 649,2020
Vivo,Z1 Pro 64GB,159g,4GB,16MP,16MP,Qualcomm Snapdragon 712,4500mAh,6.53 inches,"PKR 29,999","INR 18,990","CNY 1,799",USD 249,AED 899,2019
Vivo,Z1 Pro 128GB,159g,6GB,16MP,16MP,Qualcomm Snapdragon 712,4500mAh,6.53 inches,"PKR 34,999","INR 22,990","CNY 2,099",USD 299,AED 999,2019
Vivo,X21 128GB,156g,6GB,12MP,12MP,Qualcomm Snapdragon 660,3200mAh,6.28 inches,"PKR 39,999","INR 24,990","CNY 2,299",USD 349,"AED 1,199",2018
Vivo,X21 64GB,156g,4GB,12MP,12MP,Qualcomm Snapdragon 660,3200mAh,6.28 inches,"PKR 34,999","INR 21,990","CNY 1,899",USD 299,AED 999,2018
Vivo,V23e 128GB,172g,8GB,50MP,64MP,MediaTek Helio G96,4050mAh,6.44 inches,"PKR 39,999","INR 20,999","CNY 1,799",USD 299,"AED 1,099",2021
Vivo,V23e 256GB,172g,8GB,50MP,64MP,MediaTek Helio G96,4050mAh,6.44 inches,"PKR 44,999","INR 24,999","CNY 1,999",USD 349,"AED 1,199",2021
Vivo,Y33s 128GB,182g,8GB,16MP,50MP,MediaTek Helio G80,5000mAh,6.58 inches,"PKR 34,999","INR 17,999","CNY 1,699",USD 239,AED 899,2021
Vivo,Y33s 64GB,182g,4GB,16MP,50MP,MediaTek Helio G80,5000mAh,6.58 inches,"PKR 29,999","INR 14,999","CNY 1,299",USD 179,AED 799,2021
Vivo,X60 Pro 256GB,190g,12GB,32MP,48MP,Qualcomm Snapdragon 870,4200mAh,6.56 inches,"PKR 109,999","INR 44,999","CNY 3,999",USD 899,"AED 1,999",2021
Vivo,X60 Pro 512GB,190g,12GB,32MP,48MP,Qualcomm Snapdragon 870,4200mAh,6.56 inches,"PKR 119,999","INR 49,999","CNY 4,199",USD 999,"AED 2,099",2021
Vivo,V20 Pro 128GB,173g,8GB,44MP,64MP,Qualcomm Snapdragon 765G,4000mAh,6.44 inches,"PKR 49,999","INR 25,999","CNY 2,699",USD 499,"AED 1,499",2020
Vivo,V20 Pro 256GB,173g,8GB,44MP,64MP,Qualcomm Snapdragon 765G,4000mAh,6.44 inches,"PKR 54,999","INR 29,999","CNY 2,999",USD 549,"AED 1,699",2020
Vivo,Y75 5G 128GB,179g,8GB,16MP,50MP,MediaTek Dimensity 700,5000mAh,6.58 inches,"PKR 54,999","INR 21,999","CNY 2,199",USD 349,"AED 1,299",2021
Vivo,Y75 5G 256GB,179g,8GB,16MP,50MP,MediaTek Dimensity 700,5000mAh,6.58 inches,"PKR 59,999","INR 25,999","CNY 2,499",USD 399,"AED 1,499",2021
Vivo,Y53s 128GB,190g,6GB,16MP,64MP,MediaTek Helio G80,5000mAh,6.58 inches,"PKR 34,999","INR 16,999","CNY 1,699",USD 229,AED 899,2021
Vivo,Y53s 64GB,190g,6GB,16MP,64MP,MediaTek Helio G80,5000mAh,6.58 inches,"PKR 29,999","INR 13,999","CNY 1,299",USD 179,AED 799,2021
Vivo,V15 Pro 128GB,185g,6GB,32MP,48MP,Qualcomm Snapdragon 675,3700mAh,6.39 inches,"PKR 44,999","INR 25,999","CNY 2,499",USD 399,"AED 1,499",2019
Vivo,V15 Pro 256GB,185g,6GB,32MP,48MP,Qualcomm Snapdragon 675,3700mAh,6.39 inches,"PKR 49,999","INR 29,999","CNY 2,799",USD 449,"AED 1,699",2019
Vivo,X70 Pro 128GB,185g,8GB,32MP,50MP,MediaTek Dimensity 1200,4450mAh,6.56 inches,"PKR 99,999","INR 39,999","CNY 4,299",USD 749,"AED 2,099",2021
Vivo,X70 Pro 256GB,185g,8GB,32MP,50MP,MediaTek Dimensity 1200,4450mAh,6.56 inches,"PKR 109,999","INR 44,999","CNY 4,699",USD 799,"AED 2,299",2021
Vivo,T1 5G 128GB,181g,6GB,16MP,50MP,Qualcomm Snapdragon 695,5000mAh,6.58 inches,"PKR 39,999","INR 17,999","CNY 1,799",USD 269,AED 999,2022
Vivo,T1 5G 256GB,181g,8GB,16MP,50MP,Qualcomm Snapdragon 695,5000mAh,6.58 inches,"PKR 44,999","INR 21,999","CNY 1,999",USD 319,"AED 1,099",2022
Vivo,X30 Pro 128GB,199g,8GB,32MP,64MP,Qualcomm Snapdragon 855,4200mAh,6.44 inches,"PKR 109,999","INR 47,999","CNY 4,599",USD 899,"AED 2,299",2019
Vivo,X30 Pro 256GB,199g,8GB,32MP,64MP,Qualcomm Snapdragon 855,4200mAh,6.44 inches,"PKR 119,999","INR 54,999","CNY 5,199",USD 949,"AED 2,499",2019
Vivo,V27 128GB,182g,8GB,50MP,50MP,MediaTek Dimensity 8200,4600mAh,6.78 inches,"PKR 79,999","INR 29,999","CNY 2,999",USD 599,"AED 1,699",2023
Vivo,V27 256GB,182g,8GB,50MP,50MP,MediaTek Dimensity 8200,4600mAh,6.78 inches,"PKR 84,999","INR 32,999","CNY 3,199",USD 649,"AED 1,899",2023
Vivo,V27 Pro 128GB,182g,8GB,50MP,50MP,MediaTek Dimensity 8200,4600mAh,6.78 inches,"PKR 89,999","INR 34,999","CNY 3,299",USD 699,"AED 1,899",2023
Vivo,V27 Pro 256GB,182g,8GB,50MP,50MP,MediaTek Dimensity 8200,4600mAh,6.78 inches,"PKR 94,999","INR 37,999","CNY 3,499",USD 749,"AED 2,099",2023
Vivo,V25 Pro 128GB,190g,8GB,32MP,64MP,MediaTek Dimensity 1300,4830mAh,6.56 inches,"PKR 79,999","INR 25,999","CNY 2,799",USD 599,"AED 1,599",2022
Vivo,V25 Pro 256GB,190g,8GB,32MP,64MP,MediaTek Dimensity 1300,4830mAh,6.56 inches,"PKR 85,999","INR 29,999","CNY 2,999",USD 649,"AED 1,799",2022
Vivo,X90 Pro 256GB,221g,12GB,32MP,50MP,MediaTek Dimensity 9200,4870mAh,6.78 inches,"PKR 199,999","INR 69,999","CNY 6,999","USD 1,099","AED 3,999",2022
Vivo,X90 Pro 512GB,221g,12GB,32MP,50MP,MediaTek Dimensity 9200,4870mAh,6.78 inches,"PKR 229,999","INR 79,999","CNY 7,499","USD 1,199","AED 4,499",2022
Vivo,Y100 128GB,190g,8GB,16MP,64MP,MediaTek Dimensity 900,4500mAh,6.44 inches,"PKR 59,999","INR 19,999","CNY 1,999",USD 399,"AED 1,199",2023
Vivo,Y100 256GB,190g,8GB,16MP,64MP,MediaTek Dimensity 900,4500mAh,6.44 inches,"PKR 64,999","INR 22,999","CNY 2,199",USD 449,"AED 1,399",2023
Vivo,T2 Series 128GB,190g,8GB,16MP,64MP,Qualcomm Snapdragon 695,4500mAh,6.44 inches,"PKR 49,999","INR 15,999","CNY 1,699",USD 299,AED 999,2023
Vivo,T2 Series 256GB,190g,8GB,16MP,64MP,Qualcomm Snapdragon 695,4500mAh,6.44 inches,"PKR 54,999","INR 18,999","CNY 1,799",USD 349,"AED 1,099",2023
Vivo,V23 5G 128GB,179g,8GB,50MP,64MP,MediaTek Dimensity 920,4200mAh,6.44 inches,"PKR 69,999","INR 27,999","CNY 2,799",USD 499,"AED 1,499",2022
Vivo,V23 5G 256GB,179g,8GB,50MP,64MP,MediaTek Dimensity 920,4200mAh,6.44 inches,"PKR 74,999","INR 32,999","CNY 3,199",USD 549,"AED 1,699",2022
Vivo,X80 256GB,206g,12GB,32MP,50MP,MediaTek Dimensity 9000,4700mAh,6.78 inches,"PKR 179,999","INR 59,999","CNY 5,999",USD 899,"AED 3,499",2022
Vivo,X80 512GB,206g,12GB,32MP,50MP,MediaTek Dimensity 9000,4700mAh,6.78 inches,"PKR 199,999","INR 69,999","CNY 6,499",USD 999,"AED 3,999",2022
Vivo,Y21 128GB,182g,4GB,8MP,13MP,MediaTek Helio P35,5000mAh,6.51 inches,"PKR 29,999","INR 12,999","CNY 1,299",USD 199,AED 699,2021
Vivo,Y21 64GB,182g,4GB,8MP,13MP,MediaTek Helio P35,5000mAh,6.51 inches,"PKR 26,999","INR 9,999","CNY 1,099",USD 179,AED 599,2021
Vivo,Pad 128GB,498g,6GB,8MP,13MP,Snapdragon 870,8040mAh,11 inches,"PKR 64,999","INR 34,999","CNY 2,499",USD 329,"AED 1,199",2022
Vivo,Pad 2 256GB,535g,8GB,8MP,50MP,MediaTek Dimensity 1200,8040mAh,11 inches,"PKR 74,999","INR 39,999","CNY 3,199",USD 399,"AED 1,399",2023
Vivo,Pad Air 128GB,510g,6GB,8MP,13MP,Snapdragon 870,8040mAh,10.4 inches,"PKR 58,999","INR 31,999","CNY 2,199",USD 279,AED 999,2023
Vivo,Pad 3 128GB,500g,6GB,8MP,13MP,Snapdragon 750G,8040mAh,11 inches,"PKR 62,999","INR 34,999","CNY 2,399",USD 349,"AED 1,199",2023
Vivo,Pad 3 Pro 256GB,550g,8GB,8MP,50MP,Snapdragon 888,8040mAh,12.3 inches,"PKR 84,999","INR 45,999","CNY 3,599",USD 449,"AED 1,599",2023
Vivo,Pad 4 Pro 256GB,560g,8GB,8MP,50MP,MediaTek Dimensity 9000,8040mAh,12.9 inches,"PKR 94,999","INR 49,999","CNY 4,299",USD 499,"AED 1,799",2024
iQOO,Pad 128GB,520g,6GB,8MP,13MP,Snapdragon 870,8040mAh,11 inches,"PKR 69,999","INR 37,999","CNY 2,699",USD 349,"AED 1,299",2023
iQOO,Pad 2 256GB,540g,8GB,8MP,50MP,Snapdragon 888,8040mAh,12.3 inches,"PKR 79,999","INR 43,999","CNY 3,499",USD 399,"AED 1,499",2024
iQOO,Pad 2 Pro 256GB,555g,8GB,8MP,50MP,Snapdragon 8 Gen 1,8040mAh,12.3 inches,"PKR 89,999","INR 49,999","CNY 3,899",USD 449,"AED 1,699",2024
Oppo,Find N3 512GB,239g,12GB,32MP,48MP + 64MP + 48MP,Snapdragon 8 Gen 2,4805mAh,7.82 inches,"PKR 299,999","INR 159,999","CNY 9,999","USD 1,399","AED 5,199",2023
Oppo,Find N3 Flip 256GB,198g,12GB,32MP,50MP + 32MP + 48MP,MediaTek Dimensity 9200,4300mAh,6.8 inches,"PKR 199,999","INR 109,999","CNY 6,999",USD 999,"AED 3,699",2023
Oppo,Find X8 Pro 256GB,210g,12GB,32MP,50MP + 50MP + 50MP,Snapdragon 8 Gen 2,5000mAh,6.8 inches,"PKR 249,999","INR 139,999","CNY 8,999","USD 1,299","AED 4,799",2024
Oppo,Find X8 256GB,195g,8GB,32MP,50MP + 50MP,Snapdragon 8 Gen 2,4800mAh,6.7 inches,"PKR 199,999","INR 119,999","CNY 7,499","USD 1,099","AED 4,099",2024
Oppo,Reno13 F 4G 256GB,192g,8GB,32MP,50MP + 8MP + 2MP,MediaTek Helio G100,5800mAh,6.67 inches,"PKR 79,999","INR 44,999","CNY 3,499",USD 499,"AED 1,899",2025
Oppo,Reno13 F 256GB,192g,8GB,32MP,50MP + 8MP + 2MP,MediaTek Helio G100,5800mAh,6.67 inches,"PKR 79,999","INR 44,999","CNY 3,499",USD 499,"AED 1,899",2025
Oppo,Reno13 Pro 512GB,210g,12GB,50MP,50MP + 50MP + 8MP,MediaTek Dimensity 8350,5800mAh,6.83 inches,"PKR 129,999","INR 69,999","CNY 5,999",USD 799,"AED 2,999",2025
Oppo,Reno13 256GB,200g,12GB,50MP,50MP + 8MP,MediaTek Dimensity 8350,5600mAh,6.59 inches,"PKR 99,999","INR 54,999","CNY 4,999",USD 699,"AED 2,599",2025
Oppo,Reno12 F 4G 256GB,187g,8GB,32MP,50MP + 8MP + 2MP,Snapdragon 685,5000mAh,6.7 inches,"PKR 69,999","INR 39,999","CNY 3,199",USD 449,"AED 1,699",2024
Oppo,Reno12 F 256GB,187g,8GB,32MP,50MP + 8MP + 2MP,Snapdragon 685,5000mAh,6.7 inches,"PKR 69,999","INR 39,999","CNY 3,199",USD 449,"AED 1,699",2024
Oppo,Reno12 Pro 512GB,190g,12GB,32MP,50MP + 32MP + 8MP,MediaTek Dimensity 8200,4600mAh,6.74 inches,"PKR 119,999","INR 64,999","CNY 5,499",USD 749,"AED 2,799",2024
Oppo,Reno12 256GB,185g,8GB,32MP,50MP + 8MP,MediaTek Dimensity 7050,5000mAh,6.7 inches,"PKR 89,999","INR 49,999","CNY 3,999",USD 599,"AED 2,199",2024
Oppo,Reno11 F 256GB,185g,8GB,32MP,64MP + 8MP + 2MP,MediaTek Dimensity 7050,5000mAh,6.7 inches,"PKR 79,999","INR 44,999","CNY 3,499",USD 499,"AED 1,899",2024
Oppo,Reno11 Pro 512GB,190g,12GB,32MP,50MP + 32MP + 8MP,MediaTek Dimensity 8200,4600mAh,6.74 inches,"PKR 109,999","INR 59,999","CNY 4,999",USD 699,"AED 2,599",2024
Oppo,A5 Pro 256GB,180g,8GB,16MP,50MP + 2MP,Dimensity 7300,6000mAh,6.7 inches,"PKR 89,999","INR 49,999","CNY 3,999",USD 599,"AED 2,199",2024
Oppo,A5 Pro 512GB,186g,12GB,16MP,50MP + 2MP,Dimensity 7300,6000mAh,6.7 inches,"PKR 99,999","INR 54,999","CNY 4,499",USD 699,"AED 2,499",2024
Oppo,A80 256GB,186g,8GB,8MP,50MP + 2MP,Dimensity 6300,5100mAh,6.67 inches,"PKR 79,999","INR 44,999","CNY 3,499",USD 499,"AED 1,899",2024
Oppo,A3 4G 128GB,186g,4GB,5MP,50MP,Snapdragon 6s 4G Gen 1,5000mAh,6.7 inches,"PKR 59,999","INR 34,999","CNY 2,999",USD 399,"AED 1,499",2024
Oppo,A3x 4G 128GB,186g,4GB,8MP,8MP + 2MP,Snapdragon 6s 4G Gen 1,5100mAh,6.67 inches,"PKR 64,999","INR 36,999","CNY 3,199",USD 449,"AED 1,699",2024
Oppo,A3x 4G 256GB,186g,6GB,8MP,8MP + 2MP,Snapdragon 6s 4G Gen 1,5100mAh,6.67 inches,"PKR 69,999","INR 39,999","CNY 3,499",USD 499,"AED 1,899",2024
Oppo,A3 128GB,186g,4GB,5MP,50MP,Snapdragon 6s 4G Gen 1,5000mAh,6.7 inches,"PKR 59,999","INR 34,999","CNY 2,999",USD 399,"AED 1,499",2024
Oppo,A3x 128GB,186g,4GB,8MP,8MP + 2MP,Snapdragon 6s 4G Gen 1,5100mAh,6.67 inches,"PKR 64,999","INR 36,999","CNY 3,199",USD 449,"AED 1,699",2024
Oppo,A3x 256GB,186g,6GB,8MP,8MP + 2MP,Snapdragon 6s 4G Gen 1,5100mAh,6.67 inches,"PKR 69,999","INR 39,999","CNY 3,499",USD 499,"AED 1,899",2024
Oppo,A3 128GB,186g,4GB,5MP,50MP,Snapdragon 6s 4G Gen 1,5000mAh,6.7 inches,"PKR 59,999","INR 34,999","CNY 2,999",USD 399,"AED 1,499",2024
Oppo,A60 128GB,186g,8GB,8MP,50MP + 2MP,Snapdragon 680 4G,5000mAh,6.67 inches,"PKR 69,999","INR 39,999","CNY 3,199",USD 449,"AED 1,699",2024
Oppo,A60 256GB,186g,8GB,8MP,50MP + 2MP,Snapdragon 680 4G,5000mAh,6.67 inches,"PKR 74,999","INR 42,999","CNY 3,499",USD 499,"AED 1,899",2024
Oppo,K12 Plus 256GB,192g,8GB,16MP,50MP,Snapdragon 7 Gen 3,6400mAh,6.7 inches,"PKR 109,999","INR 59,999","CNY 4,999",USD 699,"AED 2,599",2024
Oppo,K12 Plus 512GB,192g,12GB,16MP,50MP,Snapdragon 7 Gen 3,6400mAh,6.7 inches,"PKR 119,999","INR 64,999","CNY 5,499",USD 799,"AED 2,999",2024
Oppo,F27 128GB,175g,8GB,32MP,64MP + 2MP,Dimensity 7050,5000mAh,6.7 inches,"PKR 79,999","INR 44,999","CNY 3,499",USD 499,"AED 1,899",2024
Oppo,F27 256GB,175g,8GB,32MP,64MP + 2MP,Dimensity 7050,5000mAh,6.7 inches,"PKR 84,999","INR 47,999","CNY 3,799",USD 549,"AED 2,099",2024
Oppo,F27 Pro+ 256GB,177g,8GB,32MP,64MP + 2MP,Dimensity 7050,5000mAh,6.7 inches,"PKR 89,999","INR 49,999","CNY 3,999",USD 599,"AED 2,199",2024
Oppo,F27 Pro+ 512GB,177g,12GB,32MP,64MP + 2MP,Dimensity 7050,5000mAh,6.7 inches,"PKR 99,999","INR 54,999","CNY 4,499",USD 699,"AED 2,499",2024
Oppo,F25 Pro 128GB,173g,8GB,32MP,64MP + 2MP,Snapdragon 778G,4500mAh,6.55 inches,"PKR 74,999","INR 42,999","CNY 3,499",USD 549,"AED 1,999",2023
Oppo,F25 Pro 256GB,173g,8GB,32MP,64MP + 2MP,Snapdragon 778G,4500mAh,6.55 inches,"PKR 79,999","INR 44,999","CNY 3,799",USD 599,"AED 2,199",2023
Oppo,Pad 3 128GB,533g,8GB,8MP,13MP,Dimensity 8350,9510mAh,11.6 inches,"PKR 99,999","INR 54,999","CNY 4,499",USD 699,"AED 2,499",2024
Oppo,Pad 3 256GB,533g,12GB,8MP,13MP,Dimensity 8350,9510mAh,11.6 inches,"PKR 109,999","INR 59,999","CNY 4,999",USD 799,"AED 2,799",2024
Oppo,Pad 3 Pro 256GB,586g,12GB,8MP,13MP,Snapdragon 8 Gen 3,9510mAh,12.1 inches,"PKR 119,999","INR 64,999","CNY 5,499",USD 899,"AED 3,299",2024
Oppo,Pad 3 Pro 512GB,586g,16GB,8MP,13MP,Snapdragon 8 Gen 3,9510mAh,12.1 inches,"PKR 129,999","INR 69,999","CNY 5,999",USD 999,"AED 3,699",2024
Oppo,Pad Neo 128GB,520g,6GB,8MP,13MP,Snapdragon 870,8360mAh,11 inches,"PKR 79,999","INR 44,999","CNY 3,499",USD 499,"AED 1,899",2023
Oppo,Pad Neo 256GB,520g,8GB,8MP,13MP,Snapdragon 870,8360mAh,11 inches,"PKR 89,999","INR 49,999","CNY 3,999",USD 599,"AED 2,199",2023
Oppo,Find X7 Ultra 256GB,221g,12GB,32MP,50MP + 50MP + 50MP,Snapdragon 8 Gen 3,5000mAh,6.82 inches,"PKR 199,999","INR 109,999","CNY 7,999","USD 1,199","AED 4,399",2024
Oppo,Find X7 Ultra 512GB,221g,16GB,32MP,50MP + 50MP + 50MP,Snapdragon 8 Gen 3,5000mAh,6.82 inches,"PKR 219,999","INR 119,999","CNY 8,999","USD 1,299","AED 4,799",2024
Oppo,Find X7 256GB,206g,12GB,32MP,50MP + 50MP + 64MP,Dimensity 9300,5000mAh,6.78 inches,"PKR 179,999","INR 99,999","CNY 6,999","USD 1,099","AED 3,999",2024
Oppo,Find X7 512GB,206g,16GB,32MP,50MP + 50MP + 64MP,Dimensity 9300,5000mAh,6.78 inches,"PKR 199,999","INR 109,999","CNY 7,999","USD 1,199","AED 4,399",2024
Oppo,Find X6 Pro 256GB,218g,12GB,32MP,50MP + 50MP + 50MP,Snapdragon 8 Gen 2,5000mAh,6.82 inches,"PKR 169,999","INR 94,999","CNY 6,499",USD 999,"AED 3,699",2023
Oppo,Find X6 Pro 512GB,218g,16GB,32MP,50MP + 50MP + 50MP,Snapdragon 8 Gen 2,5000mAh,6.82 inches,"PKR 189,999","INR 104,999","CNY 7,499","USD 1,099","AED 4,099",2023
Oppo,Find X6 256GB,207g,12GB,32MP,50MP + 50MP + 50MP,Dimensity 9200,4800mAh,6.74 inches,"PKR 149,999","INR 84,999","CNY 5,999",USD 899,"AED 3,299",2023
Oppo,Find X6 512GB,207g,16GB,32MP,50MP + 50MP + 50MP,Dimensity 9200,4800mAh,6.74 inches,"PKR 169,999","INR 94,999","CNY 6,999",USD 999,"AED 3,699",2023
Oppo,Find X5 Pro 256GB,218g,12GB,32MP,50MP + 50MP + 13MP,Snapdragon 8 Gen 1,5000mAh,6.7 inches,"PKR 159,999","INR 89,999","CNY 5,999",USD 899,"AED 3,299",2022
Oppo,Find X5 Pro 512GB,218g,16GB,32MP,50MP + 50MP + 13MP,Snapdragon 8 Gen 1,5000mAh,6.7 inches,"PKR 179,999","INR 99,999","CNY 6,999",USD 999,"AED 3,699",2022
Oppo,Find X5 256GB,196g,8GB,32MP,50MP + 50MP + 13MP,Snapdragon 888,4800mAh,6.55 inches,"PKR 139,999","INR 79,999","CNY 4,999",USD 799,"AED 2,999",2022
Oppo,Find N2 Flip 256GB,191g,8GB,32MP,50MP + 8MP,Dimensity 9000+,4300mAh,6.8 inches,"PKR 149,999","INR 84,999","CNY 5,999",USD 899,"AED 3,299",2023
Oppo,Find N2 Flip 512GB,191g,12GB,32MP,50MP + 8MP,Dimensity 9000+,4300mAh,6.8 inches,"PKR 169,999","INR 94,999","CNY 6,999",USD 999,"AED 3,699",2023
Oppo,Find N2 256GB,233g,12GB,32MP,50MP + 48MP + 32MP,Snapdragon 8+ Gen 1,4520mAh,7.1 inches,"PKR 179,999","INR 99,999","CNY 6,999","USD 1,099","AED 3,999",2022
Oppo,Reno10 5G 128GB,180g,8GB,32MP,64MP + 32MP + 8MP,Dimensity 7050,"5,000mAh",6.7 inches,"PKR 129,999","INR 38,999","CNY 2,699",USD 499,"AED 1,899",2023
Oppo,Reno10 5G 256GB,180g,8GB,32MP,64MP + 32MP + 8MP,Dimensity 7050,"5,000mAh",6.7 inches,"PKR 149,999","INR 42,999","CNY 2,999",USD 549,"AED 2,099",2023
Oppo,Reno10 Pro 5G 256GB,186g,12GB,32MP,50MP + 32MP + 8MP,Snapdragon 778G,"4,600mAh",6.7 inches,"PKR 169,999","INR 44,999","CNY 3,499",USD 599,"AED 2,299",2023
Oppo,Reno10 Pro+ 5G 256GB,194g,16GB,32MP,50MP + 64MP + 8MP,Snapdragon 8+ Gen 1,"4,700mAh",6.74 inches,"PKR 199,999","INR 54,999","CNY 3,999",USD 699,"AED 2,599",2023
Oppo,Reno9 5G 128GB,174g,8GB,32MP,64MP + 2MP,Snapdragon 778G,"4,500mAh",6.7 inches,"PKR 109,999","INR 32,999","CNY 2,399",USD 449,"AED 1,699",2022
Oppo,Reno9 5G 256GB,174g,12GB,32MP,64MP + 2MP,Snapdragon 778G,"4,500mAh",6.7 inches,"PKR 129,999","INR 36,999","CNY 2,699",USD 499,"AED 1,899",2022
Oppo,Reno9 Pro 5G 256GB,184g,16GB,32MP,50MP + 8MP,Dimensity 8100,"4,500mAh",6.7 inches,"PKR 159,999","INR 42,999","CNY 3,299",USD 599,"AED 2,199",2022
Oppo,Reno9 Pro+ 5G 256GB,192g,16GB,32MP,50MP + 8MP + 2MP,Snapdragon 8+ Gen 1,"4,700mAh",6.7 inches,"PKR 189,999","INR 52,999","CNY 3,799",USD 649,"AED 2,499",2022
Oppo,Reno8 5G 128GB,179g,8GB,32MP,50MP + 8MP + 2MP,Dimensity 1300,"4,500mAh",6.4 inches,"PKR 89,999","INR 29,999","CNY 2,199",USD 399,"AED 1,499",2022
Oppo,Reno8 5G 256GB,179g,12GB,32MP,50MP + 8MP + 2MP,Dimensity 1300,"4,500mAh",6.4 inches,"PKR 99,999","INR 34,999","CNY 2,499",USD 449,"AED 1,699",2022
Oppo,Reno8 Pro 5G 256GB,183g,12GB,32MP,50MP + 8MP + 2MP,Dimensity 8100,"4,500mAh",6.7 inches,"PKR 129,999","INR 42,999","CNY 3,099",USD 549,"AED 1,999",2022
Oppo,Reno8 Pro+ 5G 256GB,195g,12GB,32MP,50MP + 8MP + 2MP,Dimensity 8100,"4,500mAh",6.7 inches,"PKR 139,999","INR 46,999","CNY 3,399",USD 599,"AED 2,199",2022
Oppo,Reno7 5G 128GB,173g,8GB,32MP,64MP + 8MP + 2MP,Dimensity 900,"4,500mAh",6.4 inches,"PKR 79,999","INR 28,999","CNY 1,999",USD 349,"AED 1,299",2021
Oppo,Reno7 5G 256GB,173g,12GB,32MP,64MP + 8MP + 2MP,Dimensity 900,"4,500mAh",6.4 inches,"PKR 89,999","INR 32,999","CNY 2,199",USD 399,"AED 1,499",2021
Oppo,Reno7 Pro 5G 256GB,180g,12GB,32MP,50MP + 8MP + 2MP,Dimensity 1200,"4,500mAh",6.55 inches,"PKR 109,999","INR 39,999","CNY 2,799",USD 499,"AED 1,799",2021
Oppo,Reno6 5G 128GB,182g,8GB,32MP,64MP + 8MP + 2MP,Dimensity 900,"4,300mAh",6.43 inches,"PKR 79,999","INR 29,999","CNY 2,399",USD 349,"AED 1,299",2021
Oppo,Reno6 5G 256GB,182g,12GB,32MP,64MP + 8MP + 2MP,Dimensity 900,"4,300mAh",6.43 inches,"PKR 89,999","INR 32,999","CNY 2,699",USD 399,"AED 1,499",2021
Oppo,Reno6 Pro 5G 128GB,177g,8GB,32MP,64MP + 8MP + 2MP + 2MP,Dimensity 1200,"4,500mAh",6.55 inches,"PKR 99,999","INR 39,999","CNY 2,999",USD 449,"AED 1,699",2021
Oppo,Reno6 Pro 5G 256GB,177g,12GB,32MP,64MP + 8MP + 2MP + 2MP,Dimensity 1200,"4,500mAh",6.55 inches,"PKR 109,999","INR 44,999","CNY 3,299",USD 499,"AED 1,899",2021
Oppo,Reno6 Pro+ 5G 256GB,188g,12GB,32MP,50MP + 13MP + 16MP + 2MP,Snapdragon 870,"4,500mAh",6.55 inches,"PKR 129,999","INR 49,999","CNY 3,999",USD 599,"AED 2,199",2021
Oppo,Reno5 5G 128GB,180g,8GB,32MP,64MP + 8MP + 2MP + 2MP,Snapdragon 765G,"4,300mAh",6.43 inches,"PKR 69,999","INR 26,999","CNY 2,099",USD 299,"AED 1,099",2020
Oppo,Reno5 5G 256GB,180g,12GB,32MP,64MP + 8MP + 2MP + 2MP,Snapdragon 765G,"4,300mAh",6.43 inches,"PKR 79,999","INR 29,999","CNY 2,399",USD 349,"AED 1,299",2020
Oppo,Reno5 Pro 5G 128GB,173g,8GB,32MP,64MP + 8MP + 2MP + 2MP,Dimensity 1000+,"4,350mAh",6.55 inches,"PKR 89,999","INR 32,999","CNY 2,799",USD 399,"AED 1,499",2020
Oppo,Reno5 Pro 5G 256GB,173g,12GB,32MP,64MP + 8MP + 2MP + 2MP,Dimensity 1000+,"4,350mAh",6.55 inches,"PKR 99,999","INR 36,999","CNY 3,099",USD 449,"AED 1,699",2020
Oppo,Reno5 Pro+ 5G 256GB,184g,12GB,32MP,50MP + 16MP + 13MP + 2MP,Snapdragon 865,"4,500mAh",6.55 inches,"PKR 119,999","INR 44,999","CNY 3,799",USD 599,"AED 2,099",2020
Oppo,Reno4 5G 128GB,183g,8GB,32MP,48MP + 8MP + 2MP + 2MP,Snapdragon 765G,"4,000mAh",6.43 inches,"PKR 59,999","INR 24,999","CNY 1,899",USD 299,AED 999,2020
Oppo,Reno4 5G 256GB,183g,8GB,32MP,48MP + 8MP + 2MP + 2MP,Snapdragon 765G,"4,000mAh",6.43 inches,"PKR 69,999","INR 26,999","CNY 2,199",USD 349,"AED 1,199",2020
Oppo,Reno4 Pro 5G 256GB,172g,12GB,32MP,48MP + 13MP + 12MP,Snapdragon 765G,"4,000mAh",6.55 inches,"PKR 99,999","INR 39,999","CNY 3,299",USD 499,"AED 1,799",2020
Oppo,Reno3 5G 128GB,181g,8GB,32MP,64MP + 8MP + 2MP + 2MP,Dimensity 1000L,"4,025mAh",6.4 inches,"PKR 49,999","INR 22,999","CNY 1,799",USD 249,AED 899,2019
Oppo,Reno3 5G 256GB,181g,12GB,32MP,64MP + 8MP + 2MP + 2MP,Dimensity 1000L,"4,025mAh",6.4 inches,"PKR 59,999","INR 26,999","CNY 2,099",USD 299,"AED 1,099",2019
Oppo,Reno3 Pro 5G 256GB,171g,12GB,32MP,48MP + 13MP + 8MP + 2MP,Snapdragon 765G,"4,025mAh",6.5 inches,"PKR 79,999","INR 34,999","CNY 3,299",USD 499,"AED 1,799",2019
Oppo,A59 5G 128GB,186g,6GB,8MP,13MP + 2MP,MediaTek Dimensity 6020,"5,000mAh",6.56 inches,"PKR 39,999","INR 14,999","CNY 1,699",USD 199,"AED 1,000",2023
Oppo,A59 5G 256GB,186g,8GB,8MP,13MP + 2MP,MediaTek Dimensity 6020,"5,000mAh",6.56 inches,"PKR 44,999","INR 16,999","CNY 1,899",USD 229,"AED 1,200",2023
Oppo,A58 5G 256GB,188g,8GB,8MP,50MP + 2MP,MediaTek Dimensity 700,"5,000mAh",6.56 inches,"PKR 49,999","INR 19,000","CNY 1,699",USD 249,"AED 1,300",2022
Oppo,A57 5G 128GB,186g,6GB,8MP,13MP + 2MP,MediaTek Dimensity 810,"5,000mAh",6.56 inches,"PKR 34,999","INR 15,999","CNY 1,599",USD 219,"AED 1,100",2022
Oppo,A56 5G 128GB,189g,6GB,8MP,13MP + 2MP,MediaTek Dimensity 700,"5,000mAh",6.5 inches,"PKR 32,999","INR 14,999","CNY 1,499",USD 199,"AED 1,000",2021
Oppo,A55 5G 128GB,186g,6GB,8MP,13MP + 2MP + 2MP,MediaTek Dimensity 700,"5,000mAh",6.5 inches,"PKR 29,999","INR 13,999","CNY 1,399",USD 189,AED 950,2021
Oppo,A54 5G 128GB,190g,6GB,16MP,48MP + 8MP + 2MP + 2MP,Qualcomm Snapdragon 480,"5,000mAh",6.5 inches,"PKR 34,999","INR 15,999","CNY 1,599",USD 219,"AED 1,100",2021
Oppo,A53 5G 128GB,175g,4GB,8MP,16MP + 2MP + 2MP,MediaTek Dimensity 720,"4,040mAh",6.5 inches,"PKR 27,999","INR 12,999","CNY 1,299",USD 179,AED 900,2020
Oppo,A52 5G 128GB,184g,4GB,8MP,12MP + 8MP + 2MP + 2MP,MediaTek Dimensity 720,"4,000mAh",6.5 inches,"PKR 25,999","INR 11,999","CNY 1,199",USD 169,AED 850,2020
Oppo,A51 5G 128GB,186g,4GB,8MP,13MP + 2MP + 2MP,MediaTek Dimensity 700,"4,000mAh",6.5 inches,"PKR 23,999","INR 10,999","CNY 1,099",USD 149,AED 800,2020
Oppo,A50 5G 128GB,185g,4GB,8MP,13MP + 2MP,MediaTek Dimensity 700,"4,000mAh",6.5 inches,"PKR 21,999","INR 9,999",CNY 999,USD 139,AED 750,2020
Oppo,A49 5G 128GB,185g,4GB,8MP,13MP + 2MP,MediaTek Dimensity 700,"4,000mAh",6.5 inches,"PKR 19,999","INR 8,999",CNY 899,USD 129,AED 700,2020
Oppo,A40 128GB,186g,4GB,5MP,50MP,Qualcomm Snapdragon 6s Gen 1,"5,100mAh",6.67 inches,"PKR 39,999","INR 19,999","CNY 1,499",USD 199,"AED 1,000",2024
Oppo,A40 256GB,186g,6GB,5MP,50MP,Qualcomm Snapdragon 6s Gen 1,"5,100mAh",6.67 inches,"PKR 44,999","INR 22,999","CNY 1,799",USD 229,"AED 1,200",2024
Oppo,K11x 128GB,195g,8GB,16MP,108MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.72 inches,"PKR 59,999","INR 18,000","CNY 1,499",USD 199,"AED 1,000",2023
Oppo,K11x 256GB,195g,12GB,16MP,108MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.72 inches,"PKR 64,999","INR 20,000","CNY 1,699",USD 229,"AED 1,200",2023
Oppo,K10x 128GB,195g,6GB,16MP,64MP + 2MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.59 inches,"PKR 54,999","INR 16,990","CNY 1,499",USD 199,"AED 1,000",2022
Oppo,K10x 256GB,195g,8GB,16MP,64MP + 2MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.59 inches,"PKR 59,999","INR 18,990","CNY 1,699",USD 229,"AED 1,200",2022
Oppo,K10 5G 128GB,205g,8GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 8000-Max,"5,000mAh",6.59 inches,"PKR 64,999","INR 19,999","CNY 1,799",USD 249,"AED 1,300",2022
Oppo,K9x 128GB,194g,6GB,16MP,64MP + 2MP + 2MP,MediaTek Dimensity 810,"5,000mAh",6.5 inches,"PKR 49,999","INR 15,999","CNY 1,499",USD 199,"AED 1,000",2021
Oppo,K9x 256GB,194g,8GB,16MP,64MP + 2MP + 2MP,MediaTek Dimensity 810,"5,000mAh",6.5 inches,"PKR 54,999","INR 17,999","CNY 1,699",USD 229,"AED 1,200",2021
Oppo,K9 Pro 5G 128GB,180g,8GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 1200,"4,500mAh",6.43 inches,"PKR 69,999","INR 24,999","CNY 2,199",USD 299,"AED 1,500",2021
Oppo,K9 Pro 5G 256GB,180g,12GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 1200,"4,500mAh",6.43 inches,"PKR 74,999","INR 27,999","CNY 2,499",USD 329,"AED 1,700",2021
Oppo,K9 5G 128GB,172g,8GB,32MP,64MP + 8MP + 2MP,Qualcomm Snapdragon 768G,"4,300mAh",6.43 inches,"PKR 59,999","INR 22,999","CNY 1,999",USD 279,"AED 1,400",2021
Oppo,K9 5G 256GB,172g,8GB,32MP,64MP + 8MP + 2MP,Qualcomm Snapdragon 768G,"4,300mAh",6.43 inches,"PKR 64,999","INR 24,999","CNY 2,199",USD 299,"AED 1,500",2021
Oppo,K7x 128GB,194g,6GB,16MP,48MP + 8MP + 2MP + 2MP,MediaTek Dimensity 720,"5,000mAh",6.5 inches,"PKR 44,999","INR 14,999","CNY 1,499",USD 199,"AED 1,000",2020
Oppo,K7 5G 128GB,180g,8GB,32MP,48MP + 8MP + 2MP + 2MP,Qualcomm Snapdragon 765G,"4,025mAh",6.4 inches,"PKR 49,999","INR 19,999","CNY 1,999",USD 279,"AED 1,400",2020
Oppo,K7 5G 256GB,180g,8GB,32MP,48MP + 8MP + 2MP + 2MP,Qualcomm Snapdragon 765G,"4,025mAh",6.4 inches,"PKR 54,999","INR 21,999","CNY 2,199",USD 299,"AED 1,500",2020
Oppo,K11x 128GB,195g,8GB,16MP,108MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.72 inches,"PKR 59,999","INR 18,000","CNY 1,499",USD 199,"AED 1,000",2023
Oppo,K11x 256GB,195g,12GB,16MP,108MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.72 inches,"PKR 64,999","INR 20,000","CNY 1,699",USD 229,"AED 1,200",2023
Oppo,K11 128GB,184g,8GB,16MP,64MP + 8MP + 2MP,Qualcomm Snapdragon 782G,"5,000mAh",6.7 inches,"PKR 69,999","INR 21,999","CNY 1,899",USD 259,"AED 1,300",2023
Oppo,K11 256GB,184g,12GB,16MP,64MP + 8MP + 2MP,Qualcomm Snapdragon 782G,"5,000mAh",6.7 inches,"PKR 74,999","INR 24,999","CNY 2,199",USD 299,"AED 1,500",2023
Oppo,K10x 128GB,195g,6GB,16MP,64MP + 2MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.59 inches,"PKR 54,999","INR 16,990","CNY 1,499",USD 199,"AED 1,000",2022
Oppo,K10x 256GB,195g,8GB,16MP,64MP + 2MP + 2MP,Qualcomm Snapdragon 695,"5,000mAh",6.59 inches,"PKR 59,999","INR 18,990","CNY 1,699",USD 229,"AED 1,200",2022
Oppo,K10 5G 128GB,205g,8GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 8000-Max,"5,000mAh",6.59 inches,"PKR 64,999","INR 19,999","CNY 1,799",USD 249,"AED 1,300",2022
Oppo,K10 5G 256GB,205g,12GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 8000-Max,"5,000mAh",6.59 inches,"PKR 69,999","INR 22,999","CNY 2,099",USD 279,"AED 1,500",2022
Oppo,K9x 128GB,194g,6GB,16MP,64MP + 2MP + 2MP,MediaTek Dimensity 810,"5,000mAh",6.5 inches,"PKR 49,999","INR 15,999","CNY 1,499",USD 199,"AED 1,000",2021
Oppo,K9x 256GB,194g,8GB,16MP,64MP + 2MP + 2MP,MediaTek Dimensity 810,"5,000mAh",6.5 inches,"PKR 54,999","INR 17,999","CNY 1,699",USD 229,"AED 1,200",2021
Oppo,K9 Pro 5G 128GB,180g,8GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 1200,"4,500mAh",6.43 inches,"PKR 69,999","INR 24,999","CNY 2,199",USD 299,"AED 1,500",2021
Oppo,K9 Pro 5G 256GB,180g,12GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 1200,"4,500mAh",6.43 inches,"PKR 74,999","INR 27,999","CNY 2,499",USD 329,"AED 1,700",2021
Oppo,K9 5G 128GB,172g,8GB,32MP,64MP + 8MP + 2MP,Qualcomm Snapdragon 768G,"4,300mAh",6.43 inches,"PKR 59,999","INR 22,999","CNY 1,999",USD 279,"AED 1,400",2021
Oppo,K9 5G 256GB,172g,8GB,32MP,64MP + 8MP + 2MP,Qualcomm Snapdragon 768G,"4,300mAh",6.43 inches,"PKR 64,999","INR 24,999","CNY 2,199",USD 299,"AED 1,500",2021
Oppo,K7x 128GB,194g,6GB,16MP,48MP + 8MP + 2MP + 2MP,MediaTek Dimensity 720,"5,000mAh",6.5 inches,"PKR 44,999","INR 14,999","CNY 1,499",USD 199,"AED 1,000",2020
Oppo,K7 5G 128GB,180g,8GB,32MP,48MP + 8MP + 2MP + 2MP,Qualcomm Snapdragon 765G,"4,025mAh",6.4 inches,"PKR 49,999","INR 19,999","CNY 1,999",USD 279,"AED 1,400",2020
Realme,GT 7 Pro 128GB,222.8g,12GB,16MP,50MP + 50MP + 8MP,Qualcomm Snapdragon 8 Elite,"6,500mAh",6.78 inches,"PKR 139,999","INR 59,999","CNY 3,400",USD 470,"AED 1,725",2024
Realme,GT 7 Pro 256GB,222.8g,16GB,16MP,50MP + 50MP + 8MP,Qualcomm Snapdragon 8 Elite,"6,500mAh",6.78 inches,"PKR 149,999","INR 65,999","CNY 3,600",USD 500,"AED 1,840",2024
Realme,GT 6 128GB,191g,8GB,32MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 8s Gen 3,"5,500mAh",6.78 inches,"PKR 89,999","INR 37,999","CNY 2,800",USD 380,"AED 1,400",2023
Realme,GT 6 256GB,191g,12GB,32MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 8s Gen 3,"5,500mAh",6.78 inches,"PKR 94,999","INR 39,999","CNY 2,900",USD 400,"AED 1,460",2023
Realme,GT 6 512GB,191g,16GB,32MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 8s Gen 3,"5,500mAh",6.78 inches,"PKR 99,999","INR 41,999","CNY 3,000",USD 420,"AED 1,520",2023
Realme,GT 6T 128GB,191g,8GB,32MP,50MP + 8MP,Qualcomm Snapdragon 7 Plus Gen 3,"5,500mAh",6.78 inches,"PKR 84,999","INR 28,756","CNY 2,700",USD 360,"AED 1,330",2023
Realme,GT 6T 256GB,191g,8GB,32MP,50MP + 8MP,Qualcomm Snapdragon 7 Plus Gen 3,"5,500mAh",6.78 inches,"PKR 89,999","INR 30,999","CNY 2,800",USD 380,"AED 1,400",2023
Realme,14 Pro+ 5G 256GB,184g,12GB,16MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 7s Gen 3,"6,000mAh",6.83 inches,"PKR 94,999","INR 34,999","CNY 2,600",USD 340,"AED 1,250",2025
Realme,14 Pro+ 5G 512GB,184g,12GB,16MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 7s Gen 3,"6,000mAh",6.83 inches,"PKR 99,999","INR 36,999","CNY 2,800",USD 360,"AED 1,320",2025
Realme,14 Pro 5G 128GB,184g,8GB,16MP,50MP + 8MP,MediaTek Dimensity 7300 Energy,"5,800mAh",6.7 inches,"PKR 79,999","INR 29,999","CNY 2,400",USD 320,"AED 1,150",2025
Realme,14 Pro 5G 256GB,184g,8GB,16MP,50MP + 8MP,MediaTek Dimensity 7300 Energy,"5,800mAh",6.7 inches,"PKR 84,999","INR 31,999","CNY 2,500",USD 340,"AED 1,210",2025
Realme,14x 5G 128GB,190g,6GB,16MP,48MP + 2MP + 2MP,Qualcomm Snapdragon 7s Gen 2,"5,500mAh",6.6 inches,"PKR 64,999","INR 24,999","CNY 2,000",USD 270,AED 970,2025
Realme,14x 5G 256GB,190g,8GB,16MP,48MP + 2MP + 2MP,Qualcomm Snapdragon 7s Gen 2,"5,500mAh",6.6 inches,"PKR 69,999","INR 26,999","CNY 2,100",USD 290,"AED 1,030",2025
Realme,13+ 5G 128GB,185g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 7200,"5,000mAh",6.5 inches,"PKR 59,999","INR 22,999","CNY 1,800",USD 250,AED 900,2024
Realme,13+ 5G 256GB,185g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 7200,"5,000mAh",6.5 inches,"PKR 64,999","INR 24,999","CNY 1,900",USD 270,AED 970,2024
Realme,13 5G 128GB,190g,6GB,16MP,50MP + 2MP,MediaTek Dimensity 6100+,"5,000mAh",6.6 inches,"PKR 49,999","INR 18,999","CNY 1,500",USD 220,AED 800,2024
Realme,13 5G 256GB,190g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 6100+,"5,000mAh",6.6 inches,"PKR 54,999","INR 20,999","CNY 1,600",USD 240,AED 860,2024
Realme,13 Pro 5G 128GB,192g,8GB,16MP,50MP + 8MP + 2MP,Qualcomm Snapdragon 7s Gen 2,"5,200mAh",6.7 inches,"PKR 74,999","INR 27,999","CNY 2,200",USD 300,"AED 1,070",2024
Realme,13 Pro 5G 256GB,192g,12GB,16MP,50MP + 8MP + 2MP,Qualcomm Snapdragon 7s Gen 2,"5,200mAh",6.7 inches,"PKR 79,999","INR 29,999","CNY 2,400",USD 320,"AED 1,140",2024
Realme,13 Pro+ 5G 256GB,195g,12GB,32MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 7+ Gen 2,"5,500mAh",6.78 inches,"PKR 94,999","INR 34,999","CNY 2,800",USD 360,"AED 1,320",2024
Realme,13 Pro+ 5G 512GB,195g,16GB,32MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 7+ Gen 2,"5,500mAh",6.78 inches,"PKR 99,999","INR 36,999","CNY 3,000",USD 380,"AED 1,390",2024
Realme,P1 Speed 5G 128GB,185g,8GB,16MP,64MP + 2MP,MediaTek Dimensity 8100,"5,100mAh",6.7 inches,"PKR 54,999","INR 19,999","CNY 1,800",USD 250,AED 900,2024
Realme,P1 Speed 5G 256GB,185g,12GB,16MP,64MP + 2MP,MediaTek Dimensity 8100,"5,100mAh",6.7 inches,"PKR 59,999","INR 21,999","CNY 1,900",USD 270,AED 960,2024
Realme,P2 Pro 5G 256GB,188g,12GB,32MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 7+ Gen 3,"5,500mAh",6.78 inches,"PKR 89,999","INR 32,999","CNY 2,500",USD 340,"AED 1,210",2024
Realme,P2 Pro 5G 512GB,188g,16GB,32MP,50MP + 8MP + 50MP,Qualcomm Snapdragon 7+ Gen 3,"5,500mAh",6.78 inches,"PKR 94,999","INR 34,999","CNY 2,700",USD 360,"AED 1,280",2024
Realme,P1 5G 128GB,184g,6GB,16MP,50MP + 2MP,MediaTek Dimensity 6100+,"5,000mAh",6.6 inches,"PKR 44,999","INR 16,999","CNY 1,400",USD 200,AED 720,2024
Realme,P1 5G 256GB,184g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 6100+,"5,000mAh",6.6 inches,"PKR 49,999","INR 18,999","CNY 1,500",USD 220,AED 780,2024
Realme,P1 Pro 5G 128GB,190g,8GB,16MP,64MP + 2MP,Qualcomm Snapdragon 7s Gen 1,"5,200mAh",6.7 inches,"PKR 59,999","INR 22,999","CNY 1,900",USD 270,AED 960,2024
Realme,P1 Pro 5G 256GB,190g,12GB,16MP,64MP + 2MP,Qualcomm Snapdragon 7s Gen 1,"5,200mAh",6.7 inches,"PKR 64,999","INR 24,999","CNY 2,000",USD 290,"AED 1,020",2024
Realme,Narzo 70 Turbo 5G 128GB,200g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 810,"5,000mAh",6.6 inches,"PKR 54,999","INR 19,999","CNY 1,700",USD 240,AED 860,2024
Realme,Narzo 70 Turbo 5G 256GB,200g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 810,"5,000mAh",6.6 inches,"PKR 59,999","INR 21,999","CNY 1,800",USD 260,AED 920,2024
Realme,Narzo N61 128GB,195g,6GB,16MP,50MP + 2MP,MediaTek Helio G99,"5,000mAh",6.5 inches,"PKR 39,999","INR 14,999","CNY 1,200",USD 180,AED 660,2024
Realme,Narzo N63 128GB,193g,6GB,16MP,50MP + 2MP,MediaTek Helio G88,"5,000mAh",6.5 inches,"PKR 37,999","INR 13,999","CNY 1,100",USD 160,AED 600,2024
Realme,Narzo N65 5G 128GB,198g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 700,"5,000mAh",6.6 inches,"PKR 47,999","INR 17,999","CNY 1,500",USD 210,AED 780,2024
Realme,Narzo 70 5G 128GB,198g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 810,"5,200mAh",6.6 inches,"PKR 52,999","INR 19,499","CNY 1,600",USD 230,AED 830,2024
Realme,C75 128GB,190g,6GB,8MP,50MP + 2MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 37,999","INR 13,999","CNY 1,100",USD 160,AED 600,2024
Realme,C75 256GB,190g,8GB,8MP,50MP + 2MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 42,999","INR 15,999","CNY 1,200",USD 180,AED 660,2024
Realme,C61 128GB,189g,4GB,8MP,50MP + 2MP,Unisoc T612,"5,000mAh",6.5 inches,"PKR 32,999","INR 11,999",CNY 900,USD 130,AED 500,2024
Realme,C67 128GB,195g,6GB,8MP,50MP + 2MP,MediaTek Helio G88,"5,000mAh",6.6 inches,"PKR 39,999","INR 14,999","CNY 1,200",USD 170,AED 620,2024
Realme,C67 256GB,195g,8GB,8MP,50MP + 2MP,MediaTek Helio G88,"5,000mAh",6.6 inches,"PKR 44,999","INR 16,999","CNY 1,300",USD 190,AED 680,2024
Realme,C65 128GB,192g,6GB,8MP,50MP + 2MP,Qualcomm Snapdragon 680,"5,000mAh",6.6 inches,"PKR 37,999","INR 13,999","CNY 1,100",USD 160,AED 600,2024
Realme,C65 256GB,192g,8GB,8MP,50MP + 2MP,Qualcomm Snapdragon 680,"5,000mAh",6.6 inches,"PKR 42,999","INR 15,999","CNY 1,200",USD 180,AED 660,2024
Realme,C63 128GB,191g,6GB,8MP,50MP + 2MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 36,999","INR 13,499","CNY 1,050",USD 150,AED 580,2024
Realme,C55 128GB,189g,6GB,8MP,64MP + 2MP,MediaTek Helio G88,"5,000mAh",6.72 inches,"PKR 39,999","INR 14,999","CNY 1,200",USD 170,AED 620,2023
Realme,C55 256GB,189g,8GB,8MP,64MP + 2MP,MediaTek Helio G88,"5,000mAh",6.72 inches,"PKR 44,999","INR 16,999","CNY 1,300",USD 190,AED 680,2023
Realme,Note 60x 128GB,198g,6GB,16MP,50MP + 2MP,MediaTek Dimensity 6100+,"5,200mAh",6.6 inches,"PKR 47,999","INR 17,999","CNY 1,500",USD 210,AED 780,2024
Realme,Note 60 128GB,196g,6GB,16MP,50MP + 2MP,MediaTek Dimensity 810,"5,200mAh",6.6 inches,"PKR 49,999","INR 18,999","CNY 1,600",USD 220,AED 820,2024
Realme,Note 60 256GB,196g,8GB,16MP,50MP + 2MP,MediaTek Dimensity 810,"5,200mAh",6.6 inches,"PKR 54,999","INR 20,999","CNY 1,700",USD 240,AED 880,2024
Realme,Note 50 128GB,195g,6GB,16MP,50MP + 2MP,MediaTek Helio G99,"5,000mAh",6.5 inches,"PKR 42,999","INR 15,999","CNY 1,200",USD 170,AED 620,2024
Realme,GT 7 128GB,199g,8GB,16MP,50MP + 8MP + 2MP,Qualcomm Snapdragon 8 Gen 2,"5,200mAh",6.8 inches,"PKR 124,999","INR 47,999","CNY 3,200",USD 440,"AED 1,620",2024
Realme,GT 7 256GB,199g,12GB,16MP,50MP + 8MP + 2MP,Qualcomm Snapdragon 8 Gen 2,"5,200mAh",6.8 inches,"PKR 139,999","INR 53,999","CNY 3,600",USD 500,"AED 1,800",2024
Realme,Neo 7 128GB,193g,8GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 8200,"5,000mAh",6.7 inches,"PKR 79,999","INR 30,999","CNY 2,400",USD 330,"AED 1,200",2024
Realme,Neo 7 256GB,193g,12GB,16MP,64MP + 8MP + 2MP,MediaTek Dimensity 8200,"5,000mAh",6.7 inches,"PKR 94,999","INR 36,999","CNY 2,800",USD 380,"AED 1,400",2024
Realme,P2 Pro 5G 128GB,195g,8GB,16MP,50MP + 8MP,MediaTek Dimensity 9200,"5,100mAh",6.7 inches,"PKR 84,999","INR 32,999","CNY 2,500",USD 350,"AED 1,250",2024
Realme,P2 Pro 5G 256GB,195g,12GB,16MP,50MP + 8MP,MediaTek Dimensity 9200,"5,100mAh",6.7 inches,"PKR 99,999","INR 38,999","CNY 2,900",USD 400,"AED 1,400",2024
Realme,Pad 64GB,440g,4GB,8MP,8MP,MediaTek Helio G80,"7,100mAh",10.4 inches,"PKR 57,999","INR 19,999","CNY 1,400",USD 200,AED 740,2021
Realme,Pad 128GB,440g,6GB,8MP,8MP,MediaTek Helio G80,"7,100mAh",10.4 inches,"PKR 64,999","INR 22,999","CNY 1,600",USD 230,AED 850,2021
Realme,Pad 2 128GB,482g,6GB,8MP,8MP,MediaTek Helio G99,"8,360mAh",11.5 inches,"PKR 74,999","INR 27,999","CNY 2,000",USD 280,"AED 1,050",2023
Realme,Pad 2 256GB,482g,8GB,8MP,8MP,MediaTek Helio G99,"8,360mAh",11.5 inches,"PKR 84,999","INR 31,999","CNY 2,300",USD 320,"AED 1,200",2023
Realme,Pad 2 Lite 64GB,466g,4GB,8MP,8MP,MediaTek Helio G85,"7,100mAh",10.4 inches,"PKR 54,999","INR 18,999","CNY 1,300",USD 190,AED 700,2023
Realme,Pad 2 Lite 128GB,466g,6GB,8MP,8MP,MediaTek Helio G85,"7,100mAh",10.4 inches,"PKR 61,999","INR 20,999","CNY 1,500",USD 210,AED 770,2023
Realme,Pad X 64GB,499g,4GB,8MP,13MP,Qualcomm Snapdragon 695,"8,340mAh",11 inches,"PKR 79,999","INR 29,999","CNY 2,200",USD 310,"AED 1,150",2022
Realme,Pad X 128GB,499g,6GB,8MP,13MP,Qualcomm Snapdragon 695,"8,340mAh",11 inches,"PKR 89,999","INR 33,999","CNY 2,500",USD 350,"AED 1,300",2022
Realme,Pad Mini 32GB,372g,3GB,5MP,8MP,Unisoc T616,"6,400mAh",8.7 inches,"PKR 44,999","INR 15,999","CNY 1,100",USD 160,AED 600,2022
Realme,Pad Mini 64GB,372g,4GB,5MP,8MP,Unisoc T616,"6,400mAh",8.7 inches,"PKR 49,999","INR 17,999","CNY 1,300",USD 180,AED 660,2022
Realme,Pad Slim 64GB,440g,4GB,8MP,8MP,MediaTek Helio G80,"7,100mAh",10.4 inches,"PKR 56,999","INR 19,499","CNY 1,350",USD 200,AED 730,2022
Realme,Pad Slim 128GB,440g,6GB,8MP,8MP,MediaTek Helio G80,"7,100mAh",10.4 inches,"PKR 62,999","INR 21,999","CNY 1,550",USD 220,AED 800,2022
Realme,TechLife Pad Neo 64GB,465g,4GB,8MP,8MP,MediaTek Helio G85,"7,200mAh",10.5 inches,"PKR 59,999","INR 20,999","CNY 1,400",USD 210,AED 770,2024
Realme,TechLife Pad Neo 128GB,465g,6GB,8MP,8MP,MediaTek Helio G85,"7,200mAh",10.5 inches,"PKR 64,999","INR 22,999","CNY 1,600",USD 230,AED 850,2024
Xiaomi,Xiaomi 15 Pro 256GB,210g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Snapdragon 8 Elite,"6,100mAh",6.73 inches,"PKR 199,999","INR 89,999","CNY 5,299",USD 799,"AED 3,299",2024
Xiaomi,Xiaomi 15 Pro 512GB,210g,16GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Snapdragon 8 Elite,"6,100mAh",6.73 inches,"PKR 219,999","INR 99,999","CNY 5,799",USD 899,"AED 3,699",2024
Xiaomi,Xiaomi 15 Pro 1TB,210g,16GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Snapdragon 8 Elite,"6,100mAh",6.73 inches,"PKR 239,999","INR 109,999","CNY 6,499",USD 999,"AED 4,099",2024
Xiaomi,Xiaomi 15 256GB,190g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide),Snapdragon 8 Elite,"5,400mAh",6.36 inches,"PKR 179,999","INR 79,999","CNY 4,299",USD 699,"AED 2,899",2024
Xiaomi,Xiaomi 15 512GB,190g,16GB,32MP,50MP (Main) + 50MP (Ultra-wide),Snapdragon 8 Elite,"5,400mAh",6.36 inches,"PKR 199,999","INR 89,999","CNY 4,799",USD 799,"AED 3,299",2024
Xiaomi,Xiaomi 14T Pro 256GB,209g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Dimensity 9300+,"5,000mAh",6.67 inches,"PKR 169,999","INR 74,999","CNY 3,999",USD 634.99,"AED 2,699",2024
Xiaomi,Xiaomi 14T Pro 512GB,209g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Dimensity 9300+,"5,000mAh",6.67 inches,"PKR 189,999","INR 84,999","CNY 4,299",USD 790.77,"AED 2,999",2024
Xiaomi,Xiaomi 14T Pro 1TB,209g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Dimensity 9300+,"5,000mAh",6.67 inches,"PKR 209,999","INR 94,999","CNY 4,799",USD 899,"AED 3,299",2024
Xiaomi,Xiaomi 14T 256GB,195g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide),Dimensity 8300-Ultra,"5,000mAh",6.67 inches,"PKR 149,999","INR 69,999","CNY 3,499",USD 599,"AED 2,499",2024
Xiaomi,Xiaomi 14T 512GB,195g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide),Dimensity 8300-Ultra,"5,000mAh",6.67 inches,"PKR 169,999","INR 79,999","CNY 3,799",USD 699,"AED 2,799",2024
Xiaomi,Xiaomi 14 Pro 256GB,206g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Snapdragon 8 Gen 3,"5,000mAh",6.73 inches,"PKR 189,999","INR 84,999","CNY 4,799",USD 799,"AED 3,299",2023
Xiaomi,Xiaomi 14 Pro 512GB,206g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide) + 50MP (Telephoto),Snapdragon 8 Gen 3,"5,000mAh",6.73 inches,"PKR 209,999","INR 94,999","CNY 5,299",USD 899,"AED 3,699",2023
Xiaomi,Xiaomi 14 256GB,189g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide),Snapdragon 8 Gen 3,"4,610mAh",6.36 inches,"PKR 169,999","INR 74,999","CNY 3,999",USD 699,"AED 2,899",2023
Xiaomi,Xiaomi 14 512GB,189g,12GB,32MP,50MP (Main) + 50MP (Ultra-wide),Snapdragon 8 Gen 3,"4,610mAh",6.36 inches,"PKR 189,999","INR 84,999","CNY 4,499",USD 799,"AED 3,299",2023
Xiaomi,Redmi Note 14 Pro+ 5G 128GB,205g,8GB,16MP,200MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),Snapdragon 7s Gen 3,"5,110mAh",6.67 inches,"PKR 89,999","INR 29,999","CNY 2,499",USD 374.90,"AED 1,499",2024
Xiaomi,Redmi Note 14 Pro+ 5G 256GB,205g,12GB,16MP,200MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),Snapdragon 7s Gen 3,"5,110mAh",6.67 inches,"PKR 99,999","INR 32,999","CNY 2,799",USD 399.00,"AED 1,599",2024
Xiaomi,Redmi Note 14 Pro+ 5G 512GB,205g,16GB,16MP,200MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),Snapdragon 7s Gen 3,"5,110mAh",6.67 inches,"PKR 109,999","INR 35,999","CNY 3,099",USD 429.00,"AED 1,699",2024
Xiaomi,Redmi Note 14 Pro 5G 128GB,195g,8GB,16MP,108MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),MediaTek Dimensity 7300-Ultra,"5,500mAh",6.67 inches,"PKR 79,999","INR 27,999","CNY 2,199",USD 349.00,"AED 1,399",2024
Xiaomi,Redmi Note 14 Pro 5G 256GB,195g,12GB,16MP,108MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),MediaTek Dimensity 7300-Ultra,"5,500mAh",6.67 inches,"PKR 89,999","INR 30,999","CNY 2,499",USD 379.00,"AED 1,499",2024
Xiaomi,Redmi Note 14 Pro 4G 128GB,190g,6GB,16MP,108MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),Qualcomm Snapdragon 732G,"5,000mAh",6.67 inches,"PKR 69,999","INR 24,999","CNY 1,999",USD 299.00,"AED 1,199",2024
Xiaomi,Redmi Note 14 Pro 4G 256GB,190g,8GB,16MP,108MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),Qualcomm Snapdragon 732G,"5,000mAh",6.67 inches,"PKR 79,999","INR 27,999","CNY 2,299",USD 329.00,"AED 1,299",2024
Xiaomi,Redmi Note 14 5G 128GB,185g,6GB,16MP,50MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),MediaTek Dimensity 7025-Ultra,"5,000mAh",6.67 inches,"PKR 59,999","INR 21,999","CNY 1,799",USD 279.00,"AED 1,099",2024
Xiaomi,Redmi Note 14 5G 256GB,185g,8GB,16MP,50MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),MediaTek Dimensity 7025-Ultra,"5,000mAh",6.67 inches,"PKR 69,999","INR 24,999","CNY 2,099",USD 309.00,"AED 1,199",2024
Xiaomi,Redmi Note 14 4G 128GB,180g,4GB,16MP,50MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),Qualcomm Snapdragon 680,"5,000mAh",6.67 inches,"PKR 49,999","INR 18,999","CNY 1,599",USD 249.00,AED 999,2024
Xiaomi,Redmi Note 14 4G 256GB,180g,6GB,16MP,50MP (Main) + 8MP (Ultra-wide) + 2MP (Macro),Qualcomm Snapdragon 680,"5,000mAh",6.67 inches,"PKR 59,999","INR 21,999","CNY 1,899",USD 279.00,"AED 1,099",2024
Xiaomi,Redmi 14C 5G 64GB,195g,4GB,8MP,50MP (Main) + 2MP (Depth),MediaTek Dimensity 700,"5,000mAh",6.5 inches,"PKR 39,999","INR 14,999","CNY 1,299",USD 199.00,AED 799,2024
Xiaomi,Redmi 14C 5G 128GB,195g,6GB,8MP,50MP (Main) + 2MP (Depth),MediaTek Dimensity 700,"5,000mAh",6.5 inches,"PKR 44,999","INR 16,999","CNY 1,499",USD 229.00,AED 899,2024
Lenovo,Legion Y70 128GB,209g,8GB,16MP,50MP,Snapdragon 8+ Gen 1,"5,100mAh",6.67 inches,"PKR 139,999","INR 49,999","CNY 3,299",USD 499,"AED 1,899",2022
Lenovo,Legion Y70 256GB,209g,12GB,16MP,50MP,Snapdragon 8+ Gen 1,"5,100mAh",6.67 inches,"PKR 159,999","INR 54,999","CNY 3,699",USD 549,"AED 2,099",2022
Lenovo,Legion Y70 512GB,209g,16GB,16MP,50MP,Snapdragon 8+ Gen 1,"5,100mAh",6.67 inches,"PKR 179,999","INR 59,999","CNY 4,199",USD 599,"AED 2,299",2022
Lenovo,K14 Plus 64GB,198g,4GB,8MP,48MP,Unisoc T700,"5,000mAh",6.5 inches,"PKR 29,999","INR 10,999","CNY 1,299",USD 199,AED 749,2022
Lenovo,K14 Plus 128GB,198g,6GB,8MP,48MP,Unisoc T700,"5,000mAh",6.5 inches,"PKR 34,999","INR 12,999","CNY 1,499",USD 229,AED 849,2022
Lenovo,K13 Pro 128GB,200g,6GB,16MP,64MP,Snapdragon 662,"5,000mAh",6.8 inches,"PKR 39,999","INR 14,999","CNY 1,699",USD 249,AED 949,2021
Lenovo,K13 32GB,190g,2GB,5MP,13MP,Unisoc SC9863A,"5,000mAh",6.52 inches,"PKR 19,999","INR 7,499",CNY 999,USD 149,AED 549,2021
Lenovo,K13 Note 64GB,200g,4GB,8MP,48MP,Snapdragon 460,"5,000mAh",6.5 inches,"PKR 29,999","INR 11,999","CNY 1,299",USD 199,AED 749,2021
Lenovo,K10 Plus 64GB,172g,4GB,16MP,13MP,Snapdragon 632,"4,050mAh",6.22 inches,"PKR 24,999","INR 10,999","CNY 1,199",USD 179,AED 699,2019
Lenovo,A6 Note 32GB,172g,3GB,5MP,13MP,Helio P22,"4,000mAh",6.09 inches,"PKR 19,999","INR 9,999",CNY 999,USD 149,AED 549,2019
Lenovo,K10 Note 64GB,164g,4GB,16MP,16MP,Snapdragon 710,"4,050mAh",6.3 inches,"PKR 29,999","INR 13,999","CNY 1,499",USD 219,AED 799,2019
Lenovo,K10 Note 128GB,164g,6GB,16MP,16MP,Snapdragon 710,"4,050mAh",6.3 inches,"PKR 34,999","INR 15,999","CNY 1,699",USD 249,AED 899,2019
Lenovo,Z6 Pro 128GB,185g,6GB,32MP,48MP,Snapdragon 855,"4,000mAh",6.39 inches,"PKR 69,999","INR 39,999","CNY 2,899",USD 429,"AED 1,599",2019
Lenovo,Z6 Pro 256GB,185g,8GB,32MP,48MP,Snapdragon 855,"4,000mAh",6.39 inches,"PKR 79,999","INR 44,999","CNY 3,299",USD 479,"AED 1,799",2019
Lenovo,Z5 Pro 64GB,210g,6GB,16MP,16MP,Snapdragon 710,"3,350mAh",6.39 inches,"PKR 49,999","INR 21,400","CNY 1,998",USD 299,"AED 1,099",2018
Motorola,Edge 50 Fusion 128GB,168g,8GB,32MP,50MP,Snapdragon 7 Gen 1,"5,000mAh",6.7 inches,"PKR 139,999","INR 29,999","CNY 2,499",USD 499,"AED 1,899",2024
Motorola,Edge 50 Fusion 256GB,168g,12GB,32MP,50MP,Snapdragon 7 Gen 1,"5,000mAh",6.7 inches,"PKR 159,999","INR 34,999","CNY 2,799",USD 549,"AED 2,099",2024
Motorola,Edge 50 Pro 128GB,186g,8GB,50MP,50MP,Snapdragon 7 Gen 3,"4,500mAh",6.7 inches,"PKR 169,999","INR 34,999","CNY 2,999",USD 549,"AED 2,099",2024
Motorola,Edge 50 Pro 256GB,186g,12GB,50MP,50MP,Snapdragon 7 Gen 3,"4,500mAh",6.7 inches,"PKR 189,999","INR 39,999","CNY 3,299",USD 599,"AED 2,299",2024
Motorola,Razr 128GB,192g,8GB,32MP,50MP,Snapdragon 8+ Gen 1,"3,500mAh","6.7 inches (main), 2.7 inches (external)","PKR 199,999","INR 59,999","CNY 5,999",USD 999,"AED 3,699",2023
Motorola,Razr 256GB,192g,12GB,32MP,50MP,Snapdragon 8+ Gen 1,"3,500mAh","6.7 inches (main), 2.7 inches (external)","PKR 219,999","INR 64,999","CNY 6,499","USD 1,099","AED 3,999",2023
Motorola,G84 5G 128GB,166g,8GB,16MP,50MP,Snapdragon 695,"5,000mAh",6.5 inches,"PKR 79,999","INR 19,999","CNY 1,799",USD 299,"AED 1,099",2023
Motorola,G84 5G 256GB,166g,12GB,16MP,50MP,Snapdragon 695,"5,000mAh",6.5 inches,"PKR 89,999","INR 22,999","CNY 1,999",USD 349,"AED 1,299",2023
Motorola,Moto G Stylus 64GB,195g,4GB,16MP,50MP,MediaTek Helio G88,"5,000mAh",6.8 inches,"PKR 49,999","INR 21,999","CNY 1,499",USD 199,AED 799,2023
Motorola,Moto G Stylus 128GB,195g,6GB,16MP,50MP,MediaTek Helio G88,"5,000mAh",6.8 inches,"PKR 54,999","INR 24,999","CNY 1,699",USD 249,AED 899,2023
Motorola,One Vision 3 128GB,180g,6GB,25MP,48MP,Exynos 9609,"3,500mAh",6.3 inches,"PKR 39,999","INR 19,999","CNY 1,399",USD 299,"AED 1,099",2024
Motorola,One Vision 3 256GB,180g,8GB,25MP,48MP,Exynos 9609,"3,500mAh",6.3 inches,"PKR 44,999","INR 22,999","CNY 1,599",USD 349,"AED 1,299",2024
Motorola,Edge 50 Lite 128GB,170g,6GB,32MP,64MP,Snapdragon 695,"5,000mAh",6.7 inches,"PKR 59,999","INR 27,999","CNY 2,199",USD 399,"AED 1,499",2024
Motorola,Edge 50 Lite 256GB,170g,8GB,32MP,64MP,Snapdragon 695,"5,000mAh",6.7 inches,"PKR 64,999","INR 29,999","CNY 2,399",USD 449,"AED 1,699",2024
Motorola,Moto E40 Plus 64GB,198g,4GB,8MP,48MP,Unisoc T700,"5,000mAh",6.5 inches,"PKR 29,999","INR 11,999","CNY 1,299",USD 199,AED 749,2023
Motorola,Moto E40 Plus 128GB,198g,6GB,8MP,48MP,Unisoc T700,"5,000mAh",6.5 inches,"PKR 34,999","INR 13,999","CNY 1,499",USD 229,AED 849,2023
Motorola,Moto G Power 64GB,206g,4GB,16MP,50MP,Snapdragon 662,"5,000mAh",6.6 inches,"PKR 39,999","INR 17,999","CNY 1,599",USD 249,AED 949,2022
Motorola,Moto G Power 128GB,206g,6GB,16MP,50MP,Snapdragon 662,"5,000mAh",6.6 inches,"PKR 44,999","INR 19,999","CNY 1,799",USD 279,"AED 1,049",2022
Motorola,Moto G Play 32GB,203g,3GB,5MP,13MP,MediaTek Helio G25,"5,000mAh",6.5 inches,"PKR 24,999","INR 9,999",CNY 999,USD 149,AED 549,2022
Motorola,Moto G Play 64GB,203g,4GB,5MP,13MP,MediaTek Helio G25,"5,000mAh",6.5 inches,"PKR 29,999","INR 11,999","CNY 1,199",USD 179,AED 649,2022
Motorola,Moto G75 5G 128GB,205g,8GB,16MP,50MP,Snapdragon 6 Gen 3,"5,000mAh",6.78 inches,"PKR 89,999","INR 34,999","CNY 2,699",USD 320,"AED 1,175",2024
Motorola,Moto G75 5G 256GB,205g,8GB,16MP,50MP,Snapdragon 6 Gen 3,"5,000mAh",6.78 inches,"PKR 99,999","INR 39,999","CNY 2,999",USD 370,"AED 1,350",2024
Motorola,Moto S50 128GB,190g,8GB,32MP,64MP,MediaTek Dimensity 8100,"4,500mAh",6.7 inches,"PKR 79,999","INR 29,999","CNY 2,499",USD 300,"AED 1,100",2024
Motorola,Moto S50 256GB,190g,12GB,32MP,64MP,MediaTek Dimensity 8100,"4,500mAh",6.7 inches,"PKR 89,999","INR 34,999","CNY 2,799",USD 350,"AED 1,275",2024
Motorola,Edge 50 Neo 256GB,171g,8GB,32MP,50MP,MediaTek Dimensity 7300,"4,310mAh",6.4 inches,"PKR 99,999","INR 39,999","CNY 2,999",USD 400,"AED 1,500",2024
Motorola,Edge 50 Neo 512GB,171g,12GB,32MP,50MP,MediaTek Dimensity 7300,"4,310mAh",6.4 inches,"PKR 109,999","INR 44,999","CNY 3,299",USD 450,"AED 1,675",2024
Motorola,Moto G55 128GB,182g,8GB,16MP,50MP,MediaTek Dimensity 7025,"5,000mAh",6.49 inches,"PKR 69,999","INR 26,999","CNY 2,199",USD 270,"AED 1,000",2024
Motorola,Moto G55 256GB,182g,8GB,16MP,50MP,MediaTek Dimensity 7025,"5,000mAh",6.49 inches,"PKR 79,999","INR 29,999","CNY 2,499",USD 320,"AED 1,175",2024
Motorola,Moto G35 128GB,188g,4GB,16MP,50MP,Unisoc T760,"5,000mAh",6.72 inches,"PKR 49,999","INR 18,999","CNY 1,599",USD 200,AED 750,2024
Motorola,Moto G35 256GB,188g,8GB,16MP,50MP,Unisoc T760,"5,000mAh",6.72 inches,"PKR 59,999","INR 22,999","CNY 1,899",USD 250,AED 925,2024
Motorola,Moto G45 128GB,183g,6GB,16MP,50MP,Snapdragon 6s Gen 3,"5,000mAh",6.5 inches,"PKR 59,999","INR 22,999","CNY 1,899",USD 250,AED 925,2024
Motorola,Moto G45 256GB,183g,8GB,16MP,50MP,Snapdragon 6s Gen 3,"5,000mAh",6.5 inches,"PKR 69,999","INR 26,999","CNY 2,199",USD 300,"AED 1,100",2024
Motorola,Edge 50 256GB,180g,8GB,32MP,50MP,Snapdragon 7s Gen 2,"4,700mAh",6.7 inches,"PKR 109,999","INR 44,999","CNY 3,299",USD 450,"AED 1,675",2024
Motorola,Edge 50 512GB,180g,12GB,32MP,50MP,Snapdragon 7s Gen 2,"4,700mAh",6.7 inches,"PKR 119,999","INR 49,999","CNY 3,599",USD 500,"AED 1,850",2024
Motorola,Razr 50 Ultra 512GB,189g,12GB,32MP,50MP,Snapdragon 8+ Gen 1,"4,000mAh","6.9 inches (internal), 4.0 inches (external)","PKR 249,999","INR 99,999","CNY 7,999","USD 1,199","AED 4,399",2024
Motorola,Razr 50 256GB,188g,8GB,32MP,50MP,Snapdragon 7 Gen 1,"3,800mAh","6.7 inches (internal), 3.6 inches (external)","PKR 199,999","INR 79,999","CNY 5,999",USD 999,"AED 3,699",2024
Motorola,Moto G85 128GB,173g,8GB,32MP,50MP,Snapdragon 6s Gen 3,"5,000mAh",6.67 inches,"PKR 79,999","INR 29,999","CNY 2,499",USD 320,"AED 1,175",2024
Motorola,Moto G85 256GB,173g,12GB,32MP,50MP,Snapdragon 6s Gen 3,"5,000mAh",6.67 inches,"PKR 89,999","INR 34,999","CNY 2,799",USD 370,"AED 1,350",2024
Motorola,S50 Neo 256GB,170g,8GB,32MP,50MP,MediaTek Dimensity 7200,"4,300mAh",6.5 inches,"PKR 69,999","INR 26,999","CNY 2,199",USD 300,"AED 1,100",2024
Motorola,S50 Neo 512GB,170g,12GB,32MP,50MP,MediaTek Dimensity 7200,"4,300mAh",6.5 inches,"PKR 79,999","INR 29,999","CNY 2,499",USD 350,"AED 1,275",2024
Motorola,Moto E14 64GB,180g,4GB,8MP,13MP,Unisoc T606,"5,000mAh",6.5 inches,"PKR 29,999","INR 11,999",CNY 999,USD 150,AED 550,2024
Motorola,Moto E14 128GB,180g,4GB,8MP,13MP,Unisoc T606,"5,000mAh",6.5 inches,"PKR 34,999","INR 13,999","CNY 1,199",USD 180,AED 650,2024
Motorola,Edge 256GB,174g,8GB,32MP,50MP,Snapdragon 7s Gen 2,"4,700mAh",6.7 inches,"PKR 109,999","INR 44,999","CNY 3,299",USD 450,"AED 1,675",2024
Motorola,Edge 512GB,174g,12GB,32MP,50MP,Snapdragon 7s Gen 2,"4,700mAh",6.7 inches,"PKR 119,999","INR 49,999","CNY 3,599",USD 500,"AED 1,850",2024
Motorola,Moto X50 Ultra 512GB,198g,12GB,60MP,200MP,Snapdragon 8 Gen 3,"5,000mAh",6.9 inches,"PKR 299,999","INR 119,999","CNY 8,999","USD 1,499","AED 5,499",2024
Motorola,Moto G Stylus 5G 256GB,195g,6GB,16MP,50MP,Snapdragon 6 Gen 1,"5,000mAh",6.8 inches,"PKR 69,999","INR 26,999","CNY 2,199",USD 300,"AED 1,100",2024
Motorola,Moto G Stylus 5G 512GB,195g,8GB,16MP,50MP,Snapdragon 6 Gen 1,"5,000mAh",6.8 inches,"PKR 79,999","INR 29,999","CNY 2,499",USD 350,"AED 1,275",2024
Motorola,Edge 50 Ultra 512GB,198g,12GB,60MP,200MP,Snapdragon 8 Gen 3,"5,000mAh",6.9 inches,"PKR 299,999","INR 119,999","CNY 8,999","USD 1,499","AED 5,499",2024
Motorola,Edge 30 Fusion 128GB,168g,8GB,32MP,50MP,Snapdragon 888+ 5G,"4,400mAh",6.55 inches,"PKR 119,999","INR 49,999","CNY 3,999",USD 699,"AED 2,599",2022
Motorola,Edge 30 Fusion 256GB,168g,12GB,32MP,50MP,Snapdragon 888+ 5G,"4,400mAh",6.55 inches,"PKR 129,999","INR 54,999","CNY 4,299",USD 749,"AED 2,799",2022
Motorola,Edge 30 Neo 128GB,155g,6GB,32MP,64MP,Snapdragon 695 5G,"4,020mAh",6.28 inches,"PKR 89,999","INR 34,999","CNY 2,499",USD 499,"AED 1,799",2022
Motorola,Edge 30 Neo 256GB,155g,8GB,32MP,64MP,Snapdragon 695 5G,"4,020mAh",6.28 inches,"PKR 99,999","INR 39,999","CNY 2,799",USD 549,"AED 1,999",2022
Motorola,Moto G82 5G 128GB,173g,6GB,16MP,50MP,Snapdragon 695 5G,"5,000mAh",6.6 inches,"PKR 64,999","INR 24,999","CNY 1,999",USD 399,"AED 1,499",2022
Motorola,Moto G82 5G 256GB,173g,8GB,16MP,50MP,Snapdragon 695 5G,"5,000mAh",6.6 inches,"PKR 74,999","INR 29,999","CNY 2,299",USD 449,"AED 1,699",2022
Motorola,Moto G62 5G 128GB,184g,4GB,16MP,50MP,Snapdragon 480+ 5G,"5,000mAh",6.5 inches,"PKR 54,999","INR 19,999","CNY 1,599",USD 349,"AED 1,299",2022
Motorola,Moto G62 5G 256GB,184g,6GB,16MP,50MP,Snapdragon 480+ 5G,"5,000mAh",6.5 inches,"PKR 64,999","INR 24,999","CNY 1,899",USD 399,"AED 1,499",2022
Motorola,Moto G42 128GB,175g,4GB,16MP,50MP,Snapdragon 680 4G,"5,000mAh",6.4 inches,"PKR 44,999","INR 16,999","CNY 1,399",USD 299,"AED 1,099",2022
Motorola,Moto G32 128GB,184g,4GB,16MP,50MP,Snapdragon 680 4G,"5,000mAh",6.5 inches,"PKR 39,999","INR 14,999","CNY 1,299",USD 279,AED 999,2022
Motorola,Moto E32s 64GB,185g,3GB,8MP,16MP,MediaTek Helio G37,"5,000mAh",6.5 inches,"PKR 29,999","INR 11,999",CNY 999,USD 199,AED 749,2022
Motorola,Moto E22i 32GB,169g,2GB,5MP,16MP,MediaTek Helio G37,"4,020mAh",6.5 inches,"PKR 24,999","INR 9,999",CNY 899,USD 179,AED 699,2022
Motorola,Moto E22 64GB,169g,4GB,5MP,16MP,MediaTek Helio G37,"4,020mAh",6.5 inches,"PKR 27,999","INR 10,999",CNY 999,USD 199,AED 749,2022
Motorola,Moto G22 64GB,185g,4GB,16MP,50MP,MediaTek Helio G37,"5,000mAh",6.5 inches,"PKR 34,999","INR 12,999","CNY 1,199",USD 249,AED 899,2022
Huawei,P50,181g,8GB,13MP,50MP,Snapdragon 888 4G,"4,100mAh",6.5 inches,"PKR 129,999","INR 59,999","CNY 4,488",USD 699,"AED 2,599",2021
Huawei,P50 Pro,195g,8GB,13MP,50MP,Snapdragon 888 4G,"4,360mAh",6.6 inches,"PKR 149,999","INR 79,999","CNY 5,988",USD 899,"AED 3,299",2021
Huawei,P50 Pocket,190g,8GB,10.7MP,40MP,Snapdragon 888 4G,"4,000mAh",6.9 inches (unfolded),"PKR 199,999","INR 129,999","CNY 8,988","USD 1,299","AED 4,799",2021
Huawei,Mate 40E,188g,8GB,13MP,64MP,Kirin 990E 5G,"4,200mAh",6.5 inches,"PKR 139,999","INR 69,999","CNY 4,599",USD 799,"AED 2,999",2021
Huawei,Mate X2,295g,8GB,16MP,50MP,Kirin 9000 5G,"4,500mAh",8.0 inches (unfolded),"PKR 349,999","INR 249,999","CNY 17,999","USD 2,699","AED 9,999",2021
Huawei,Nova 9,175g,8GB,32MP,50MP,Snapdragon 778G 4G,"4,300mAh",6.57 inches,"PKR 89,999","INR 37,999","CNY 2,699",USD 499,"AED 1,899",2021
Huawei,Nova 9 Pro,186g,8GB,Dual 32MP,50MP,Snapdragon 778G 4G,"4,000mAh",6.72 inches,"PKR 109,999","INR 44,999","CNY 3,499",USD 599,"AED 2,199",2021
Huawei,P50E,181g,8GB,13MP,50MP,Snapdragon 778G 4G,"4,100mAh",6.5 inches,"PKR 119,999","INR 54,999","CNY 4,088",USD 649,"AED 2,399",2022
Huawei,Mate Xs 2,255g,8GB,10.7MP,50MP,Snapdragon 888 4G,"4,600mAh",7.8 inches (unfolded),"PKR 299,999","INR 199,999","CNY 14,999","USD 2,499","AED 8,999",2022
Huawei,Mate 50,202g,8GB,13MP,50MP,Snapdragon 8+ Gen 1 4G,"4,460mAh",6.7 inches,"PKR 169,999","INR 84,999","CNY 6,299",USD 999,"AED 3,699",2022
Huawei,Mate 50 Pro,205g,8GB,13MP,50MP,Snapdragon 8+ Gen 1 4G,"4,700mAh",6.74 inches,"PKR 189,999","INR 99,999","CNY 7,299","USD 1,199","AED 4,399",2022
Huawei,Nova 10,168g,8GB,60MP,50MP,Snapdragon 778G 4G,"4,000mAh",6.67 inches,"PKR 99,999","INR 39,999","CNY 2,699",USD 499,"AED 1,899",2022
Huawei,Nova 10 Pro,191g,8GB,Dual 60MP,50MP,Snapdragon 778G 4G,"4,500mAh",6.78 inches,"PKR 119,999","INR 49,999","CNY 3,499",USD 599,"AED 2,199",2022
Huawei,Nova 10 SE,184g,8GB,16MP,108MP,Snapdragon 680 4G,"4,500mAh",6.67 inches,"PKR 79,999","INR 34,999","CNY 2,299",USD 399,"AED 1,499",2022
Huawei,P60,197g,8GB,13MP,48MP (wide) + 13MP (ultrawide) + 48MP (telephoto),Snapdragon 8+ Gen 1 4G,"4,815mAh",6.67 inches,"PKR 169,999","INR 84,999","CNY 6,988",USD 999,"AED 3,699",2023
Huawei,P60 Pro,200g,8GB / 12GB,13MP,48MP (wide) + 13MP (ultrawide) + 48MP (telephoto),Snapdragon 8+ Gen 1 4G,"4,815mAh",6.67 inches,"PKR 189,999","INR 99,999","CNY 7,988","USD 1,099","AED 4,199",2023
Huawei,P60 Art,206g,8GB / 12GB,13MP,48MP (wide) + 40MP (ultrawide) + 48MP (telephoto),Snapdragon 8+ Gen 1 4G,"5,100mAh",6.73 inches,"PKR 219,999","INR 119,999","CNY 8,988","USD 1,299","AED 4,799",2023
Huawei,Mate X3,239g,12GB,8MP,50MP (wide) + 13MP (ultrawide) + 12MP (periscope telephoto),Snapdragon 8+ Gen 1 4G,"4,800mAh",7.85 inches (unfolded),"PKR 349,999","INR 249,999","CNY 13,999","USD 2,499","AED 9,999",2023
Huawei,Mate 60,209g,12GB,13MP,50MP (wide) + 12MP (ultrawide) + 12MP (telephoto),Kirin 9000S,"4,750mAh",6.7 inches,"PKR 199,999","INR 109,999","CNY 6,999","USD 1,099","AED 4,099",2023
Huawei,Mate 60 Pro,225g,12GB,13MP,50MP (wide) + 40MP (ultrawide) + 48MP (telephoto),Kirin 9000S,"5,000mAh",6.82 inches,"PKR 229,999","INR 129,999","CNY 7,999","USD 1,299","AED 4,699",2023
Huawei,Mate 60 Pro+,235g,12GB,13MP,50MP (wide) + 48MP (ultrawide) + 48MP (telephoto),Kirin 9000S,"5,200mAh",6.82 inches,"PKR 249,999","INR 149,999","CNY 8,999","USD 1,499","AED 5,199",2023
Huawei,Nova 11,168g,8GB,60MP,50MP (wide) + 8MP (ultrawide),Snapdragon 778G 4G,"4,500mAh",6.7 inches,"PKR 89,999","INR 44,999","CNY 2,999",USD 499,"AED 1,899",2023
Huawei,Nova 11 Pro,188g,8GB,60MP (ultrawide) + 8MP (telephoto),50MP (wide) + 8MP (ultrawide),Snapdragon 778G 4G,"4,500mAh",6.78 inches,"PKR 109,999","INR 54,999","CNY 3,499",USD 599,"AED 2,199",2023
Huawei,Nova 11 Ultra,188g,12GB,60MP (ultrawide) + 8MP (telephoto),50MP (wide) + 8MP (ultrawide),Snapdragon 778G 4G,"4,500mAh",6.78 inches,"PKR 129,999","INR 64,999","CNY 3,999",USD 699,"AED 2,499",2023
Huawei,Pura 70,220g,12GB,13MP,50MP + 13MP + 12MP,Kirin 9010,"4,900mAh",6.8 inches,"PKR 169,999","INR 84,999","CNY 6,988",USD 999,"AED 3,699",2024
Huawei,Pura 70 Pro,220g,12GB,13MP,50MP + 12.5MP + 48MP,Kirin 9010,"5,050mAh",6.8 inches,"PKR 189,999","INR 99,999","CNY 7,988","USD 1,099","AED 4,199",2024
Huawei,Pura 70 Pro+,220g,12GB,13MP,50MP + 12.5MP + 48MP,Kirin 9010,"5,050mAh",6.8 inches,"PKR 209,999","INR 114,999","CNY 8,988","USD 1,199","AED 4,699",2024
Huawei,Pura 70 Ultra,226g,16GB,13MP,50MP + 40MP + 50MP,Kirin 9010,"5,200mAh",6.8 inches,"PKR 229,999","INR 129,999","CNY 9,988","USD 1,299","AED 5,199",2024
Huawei,Mate 70,220g,12GB,13MP,50MP + 12MP,Kirin 9010,"4,900mAh",6.7 inches,"PKR 179,999","INR 89,999","CNY 5,499",USD 899,"AED 3,399",2024
Huawei,Mate 70 Pro,220g,12GB,13MP,50MP + 12MP + 40MP,Kirin 9010,"5,000mAh",6.8 inches,"PKR 199,999","INR 104,999","CNY 6,499",USD 999,"AED 3,899",2024
Huawei,Mate 70 Pro+,220g,12GB,13MP,50MP + 12MP + 40MP,Kirin 9010,"5,000mAh",6.8 inches,"PKR 219,999","INR 119,999","CNY 7,499","USD 1,099","AED 4,399",2024
Huawei,Mate X6,241g,12GB,8MP,50MP + 13MP + 12MP,Kirin 9010,"4,800mAh",7.93 inches,"PKR 349,999","INR 249,999","CNY 12,999","USD 2,499","AED 9,999",2024
Huawei,Nova 12,168g,8GB,60MP,50MP + 8MP,Kirin 9000S,"4,500mAh",6.7 inches,"PKR 89,999","INR 44,999","CNY 2,999",USD 499,"AED 1,899",2024
Huawei,Nova 12 Pro,188g,8GB,60MP + 8MP,50MP + 8MP,Kirin 9000S,"4,500mAh",6.78 inches,"PKR 109,999","INR 54,999","CNY 3,499",USD 599,"AED 2,199",2024
Huawei,Mate XT 256GB,245g,12GB,13MP,50MP + 12MP + 48MP,Kirin 9010,"5,000mAh",7.92 inches,"PKR 359,999","INR 259,999","CNY 13,499","USD 2,599","AED 10,499",2024
Huawei,Mate XT 512GB,245g,12GB,13MP,50MP + 12MP + 48MP,Kirin 9010,"5,000mAh",7.92 inches,"PKR 389,999","INR 274,999","CNY 14,499","USD 2,799","AED 11,099",2024
Huawei,Nova 13 256GB,170g,8GB,50MP,50MP + 8MP,Kirin 9000S,"4,600mAh",6.7 inches,"PKR 94,999","INR 47,999","CNY 3,199",USD 529,"AED 1,999",2024
Huawei,Nova 13 512GB,170g,8GB,50MP,50MP + 8MP,Kirin 9000S,"4,600mAh",6.7 inches,"PKR 109,999","INR 54,999","CNY 3,699",USD 599,"AED 2,299",2024
Huawei,Nova 13 Pro 256GB,190g,8GB,60MP + 8MP,50MP + 8MP,Kirin 9000S,"4,600mAh",6.78 inches,"PKR 119,999","INR 59,999","CNY 3,999",USD 649,"AED 2,399",2024
Huawei,Nova 13 Pro 512GB,190g,8GB,60MP + 8MP,50MP + 8MP,Kirin 9000S,"4,600mAh",6.78 inches,"PKR 134,999","INR 67,999","CNY 4,499",USD 729,"AED 2,699",2024
Nokia,G42 5G 128GB,193g,4GB,8MP,50MP,Snapdragon 480+,"5,000mAh",6.56 inches,"PKR 74,999","INR 18,999","CNY 1,499",USD 229,AED 849,2023
Nokia,G20 64GB,197g,4GB,8MP,48MP,MediaTek G35,"5,050mAh",6.52 inches,"PKR 48,999","INR 12,499",CNY 999,USD 169,AED 629,2021
Nokia,G20 128GB,197g,4GB,8MP,48MP,MediaTek G35,"5,050mAh",6.52 inches,"PKR 54,999","INR 13,999","CNY 1,199",USD 189,AED 699,2021
Nokia,C32 64GB,199g,3GB,8MP,50MP,Unisoc SC9863A,"5,000mAh",6.52 inches,"PKR 39,999","INR 9,999",CNY 899,USD 139,AED 499,2023
Nokia,C32 128GB,199g,4GB,8MP,50MP,Unisoc SC9863A,"5,000mAh",6.52 inches,"PKR 44,999","INR 10,999",CNY 999,USD 159,AED 549,2023
Nokia,G21 64GB,190g,4GB,8MP,50MP,Unisoc T606,"5,050mAh",6.5 inches,"PKR 46,999","INR 11,999","CNY 1,099",USD 169,AED 619,2022
Nokia,G21 128GB,190g,6GB,8MP,50MP,Unisoc T606,"5,050mAh",6.5 inches,"PKR 52,999","INR 13,999","CNY 1,299",USD 189,AED 699,2022
Nokia,C22 64GB,190g,2GB,8MP,13MP,Unisoc SC9863A,"5,000mAh",6.5 inches,"PKR 34,999","INR 8,499",CNY 799,USD 119,AED 449,2023
Nokia,C22 128GB,190g,3GB,8MP,13MP,Unisoc SC9863A,"5,000mAh",6.5 inches,"PKR 38,999","INR 9,499",CNY 899,USD 139,AED 499,2023
Nokia,G400 128GB,198g,6GB,16MP,48MP,Snapdragon 480,"5,000mAh",6.58 inches,"PKR 79,999","INR 22,999","CNY 1,799",USD 239,AED 899,2022
Sony,Xperia 1 IV 256GB,185g,12GB,12MP,12MP,Snapdragon 8 Gen 1,"5,000mAh",6.5 inches,"PKR 429,999","INR 119,999","CNY 7,299","USD 1,599","AED 5,799",2022
Sony,Xperia 5 IV 128GB,172g,8GB,12MP,12MP,Snapdragon 8 Gen 1,"5,000mAh",6.1 inches,"PKR 319,999","INR 89,999","CNY 5,999",USD 999,"AED 3,799",2022
Sony,Xperia 10 IV 128GB,161g,6GB,8MP,12MP,Snapdragon 695,"5,000mAh",6.0 inches,"PKR 179,999","INR 49,999","CNY 3,299",USD 499,"AED 1,799",2022
Sony,Xperia 1 V 256GB,187g,12GB,12MP,48MP,Snapdragon 8 Gen 2,"5,000mAh",6.5 inches,"PKR 449,999","INR 124,999","CNY 7,999","USD 1,699","AED 5,999",2023
Sony,Xperia 5 V 128GB,178g,8GB,12MP,48MP,Snapdragon 8 Gen 2,"5,000mAh",6.1 inches,"PKR 339,999","INR 94,999","CNY 6,299","USD 1,099","AED 4,099",2023
Sony,Xperia 10 V 128GB,164g,6GB,8MP,48MP,Snapdragon 695,"5,000mAh",6.1 inches,"PKR 199,999","INR 54,999","CNY 3,699",USD 599,"AED 1,999",2023
Sony,Xperia 1 VI 256GB,190g,12GB,12MP,48MP,Snapdragon 8 Gen 3,"5,000mAh",6.5 inches,"PKR 469,999","INR 129,999","CNY 8,499","USD 1,799","AED 6,199",2024
Sony,Xperia 5 VI 128GB,180g,8GB,12MP,48MP,Snapdragon 8 Gen 3,"5,000mAh",6.1 inches,"PKR 349,999","INR 99,999","CNY 6,599","USD 1,199","AED 4,399",2024
Sony,Xperia 10 VI 128GB,167g,6GB,8MP,48MP,Snapdragon 7 Gen 1,"5,000mAh",6.1 inches,"PKR 209,999","INR 59,999","CNY 3,999",USD 699,"AED 2,199",2024
Nokia,T21,466g,4GB,8MP,8MP,Unisoc T612,8200mAh,10.4 inches,"PKR 52,000","INR 17,999","CNY 1,250","USD 396,22",AED 870,2022
Huawei,MatePad Pro 12.2 512GB,508g,12GB,16MP,"13MP (f/1.8, AF)",Kirin 9000S,"10,100mAh",12.2 inches,"PKR 161,500","INR 49,990","CNY 4,799",USD 999,"AED 2,199",2024
Huawei,MatePad Pro 13.2 512GB,580g,12GB,16MP,"13MP (f/1.8, AF)",Kirin 9000S,"10,100mAh",13.2 inches,"PKR 197,000","INR 58,590","CNY 5,199",USD 877,"AED 2,199",2024
Google,Pixel 3a 64GB,147g,4GB,8MP,12.2MP,Snapdragon 670,"3,000mAh",5.6 inches,"PKR 69,999","INR 39,999","CNY 2,899",USD 399,"AED 1,599",2019
Google,Pixel 3a XL 64GB,167g,4GB,8MP,12.2MP,Snapdragon 670,"3,700mAh",6.0 inches,"PKR 79,999","INR 44,999","CNY 3,299",USD 479,"AED 1,799",2019
Google,Pixel 4 64GB,162g,6GB,8MP,12.2MP,Snapdragon 855,"2,800mAh",5.7 inches,"PKR 119,999","INR 59,999","CNY 4,799",USD 799,"AED 3,199",2019
Google,Pixel 4 XL 64GB,193g,6GB,8MP,12.2MP,Snapdragon 855,"3,700mAh",6.3 inches,"PKR 139,999","INR 69,999","CNY 5,499",USD 899,"AED 3,599",2019
Google,Pixel 4a 128GB,143g,6GB,8MP,12.2MP,Snapdragon 730G,"3,140mAh",5.8 inches,"PKR 89,999","INR 31,999","CNY 2,999",USD 349,"AED 1,399",2020
Google,Pixel 4a 5G 128GB,168g,6GB,8MP,12.2MP,Snapdragon 765G,"3,885mAh",6.2 inches,"PKR 109,999","INR 37,999","CNY 3,799",USD 499,"AED 1,999",2020
Google,Pixel 5 128GB,151g,8GB,8MP,12.2MP,Snapdragon 765G,"4,080mAh",6.0 inches,"PKR 139,999","INR 49,999","CNY 4,599",USD 699,"AED 2,799",2020
Google,Pixel 5a 128GB,183g,6GB,8MP,12.2MP,Snapdragon 765G,"4,680mAh",6.34 inches,"PKR 109,999","INR 42,999","CNY 3,999",USD 449,"AED 1,799",2021
Google,Pixel 6 128GB,207g,8GB,8MP,50MP,Google Tensor,"4,614mAh",6.4 inches,"PKR 159,999","INR 59,999","CNY 5,999",USD 699,"AED 2,999",2021
Google,Pixel 6 Pro 256GB,210g,12GB,11.1MP,50MP,Google Tensor,"5,003mAh",6.71 inches,"PKR 199,999","INR 79,999","CNY 7,199",USD 899,"AED 3,499",2021
Google,Pixel 6a 128GB,178g,6GB,8MP,12.2MP,Google Tensor,"4,410mAh",6.1 inches,"PKR 129,999","INR 43,999","CNY 4,299",USD 449,"AED 1,999",2022
Google,Pixel 7 128GB,197g,8GB,10.8MP,50MP,Google Tensor G2,"4,355mAh",6.3 inches,"PKR 169,999","INR 64,999","CNY 6,199",USD 599,"AED 2,399",2022
Google,Pixel 7 Pro 256GB,212g,12GB,10.8MP,50MP,Google Tensor G2,"5,000mAh",6.7 inches,"PKR 229,999","INR 89,999","CNY 7,999",USD 899,"AED 3,599",2022
Google,Pixel 7a 128GB,193g,8GB,10.8MP,64MP,Google Tensor G2,"4,385mAh",6.1 inches,"PKR 139,999","INR 44,999","CNY 4,599",USD 499,"AED 2,199",2023
Google,Pixel 8 128GB,187g,8GB,10.5MP,50MP,Google Tensor G3,"4,575mAh",6.2 inches,"PKR 179,999","INR 69,999","CNY 6,399",USD 699,"AED 2,799",2023
Google,Pixel 8 Pro 256GB,213g,12GB,10.5MP,50MP,Google Tensor G3,"5,050mAh",6.7 inches,"PKR 249,999","INR 99,999","CNY 8,499",USD 999,"AED 3,999",2023
Google,Pixel 8a 128GB,194g,8GB,10.5MP,64MP,Google Tensor G3,"4,385mAh",6.1 inches,"PKR 149,999","INR 49,999","CNY 4,999",USD 549,"AED 2,399",2024
Google,Pixel 9 128GB,195g,8GB,10.8MP,50MP,Google Tensor G4,"4,600mAh",6.3 inches,"PKR 189,999","INR 74,999","CNY 6,599",USD 799,"AED 3,199",2024
Google,Pixel 9 Pro 256GB,216g,12GB,10.8MP,50MP,Google Tensor G4,"5,050mAh",6.7 inches,"PKR 259,999","INR 109,999","CNY 8,799","USD 1,099","AED 4,199",2024
Google,Pixel 9 Pro XL 512GB,222g,16GB,10.8MP,50MP,Google Tensor G4,"5,250mAh",6.8 inches,"PKR 299,999","INR 129,999","CNY 9,799","USD 1,299","AED 4,999",2024
Google,Pixel 9 Pro Fold 512GB,250g,16GB,10.8MP,50MP,Google Tensor G4,"5,500mAh",7.6 inches,"PKR 399,999","INR 179,999","CNY 13,999","USD 1,799","AED 6,999",2024
Tecno,Spark Go 1S 64GB,190g,4GB,8MP,13MP,MediaTek Helio A22,"5,000mAh",6.6 inches,"PKR 27,999","INR 9,999",CNY 799,USD 129,AED 499,2024
Tecno,Megapad 11 256GB,450g,8GB,13MP,50MP,MediaTek G99,"8,000mAh",11 inches,"PKR 69,999","INR 29,999","CNY 2,499",USD 349,"AED 1,299",2024
Tecno,Pop 9 4G 64GB,195g,3GB,5MP,8MP,Unisoc SC9863A,"5,000mAh",6.52 inches,"PKR 22,999","INR 7,499",CNY 599,USD 99,AED 399,2024
Tecno,Megapad 128GB,420g,6GB,12MP,50MP,MediaTek Helio G80,"7,500mAh",10.9 inches,"PKR 59,999","INR 24,999","CNY 2,299",USD 299,"AED 1,099",2024
Tecno,Camon 30S 256GB,198g,8GB,32MP,50MP,MediaTek Dimensity 810,"5,200mAh",6.8 inches,"PKR 89,999","INR 39,999","CNY 3,199",USD 499,"AED 1,999",2024
Tecno,Spark 30C 5G 128GB,200g,6GB,16MP,50MP,MediaTek Dimensity 6100+,"5,000mAh",6.6 inches,"PKR 39,999","INR 14,999","CNY 1,199",USD 199,AED 749,2024
Tecno,Spark 30 5G 128GB,195g,6GB,16MP,50MP,MediaTek Dimensity 6020,"5,000mAh",6.6 inches,"PKR 42,999","INR 16,999","CNY 1,399",USD 229,AED 849,2024
Tecno,Pop 9 64GB,190g,3GB,5MP,8MP,Unisoc SC9832E,"5,000mAh",6.52 inches,"PKR 21,999","INR 6,999",CNY 549,USD 89,AED 349,2024
Tecno,Spark 30 Pro 256GB,205g,8GB,32MP,50MP,MediaTek Helio G99,"5,200mAh",6.8 inches,"PKR 54,999","INR 19,999","CNY 1,799",USD 269,AED 999,2024
Tecno,Spark 30 128GB,192g,4GB,16MP,50MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 34,999","INR 12,999","CNY 1,099",USD 179,AED 699,2024
Tecno,Phantom V Fold2 512GB,280g,12GB,32MP,64MP,MediaTek Dimensity 9200+,"5,500mAh",7.85 inches,"PKR 399,999","INR 169,999","CNY 12,999","USD 1,799","AED 6,999",2024
Tecno,Phantom V Flip2 256GB,195g,8GB,32MP,50MP,MediaTek Dimensity 8050,"4,300mAh",6.9 inches,"PKR 159,999","INR 79,999","CNY 5,999",USD 999,"AED 3,999",2024
Tecno,Pova 6 Neo 5G 256GB,225g,8GB,16MP,50MP,MediaTek Dimensity 810,"6,000mAh",6.8 inches,"PKR 69,999","INR 29,999","CNY 2,499",USD 349,"AED 1,299",2024
Tecno,Spark 30C 128GB,190g,4GB,16MP,50MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 32,999","INR 11,999",CNY 999,USD 149,AED 599,2024
Tecno,Spark Go 1 64GB,195g,3GB,5MP,8MP,Unisoc SC9863A,"5,000mAh",6.52 inches,"PKR 22,999","INR 7,499",CNY 599,USD 99,AED 399,2024
Tecno,Camon 30S Pro 512GB,202g,12GB,50MP,108MP,MediaTek Dimensity 9200,"5,200mAh",6.9 inches,"PKR 159,999","INR 79,999","CNY 6,999","USD 1,099","AED 4,199",2024
Tecno,Spark 20P 128GB,195g,4GB,16MP,50MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 37,999","INR 13,999","CNY 1,199",USD 179,AED 699,2024
Tecno,Spark 20 Pro 5G 256GB,210g,8GB,32MP,50MP,MediaTek Dimensity 810,"5,200mAh",6.8 inches,"PKR 59,999","INR 24,999","CNY 2,299",USD 329,"AED 1,199",2024
Tecno,Pova 6 Neo 256GB,230g,8GB,16MP,50MP,MediaTek Helio G99,"6,000mAh",6.8 inches,"PKR 55,999","INR 22,999","CNY 1,899",USD 299,"AED 1,099",2024
Tecno,Camon 30 Premier 512GB,210g,12GB,50MP,108MP,MediaTek Dimensity 9200,"5,200mAh",6.9 inches,"PKR 179,999","INR 89,999","CNY 7,499","USD 1,199","AED 4,499",2024
Tecno,Camon 30 Pro 512GB,205g,12GB,50MP,64MP,MediaTek Dimensity 8200,"5,200mAh",6.8 inches,"PKR 129,999","INR 64,999","CNY 5,499",USD 899,"AED 3,299",2024
Tecno,Camon 30 5G 256GB,198g,8GB,32MP,50MP,MediaTek Dimensity 810,"5,000mAh",6.7 inches,"PKR 89,999","INR 39,999","CNY 3,199",USD 499,"AED 1,999",2024
Tecno,Camon 30 128GB,195g,6GB,32MP,50MP,MediaTek Helio G99,"5,000mAh",6.7 inches,"PKR 69,999","INR 29,999","CNY 2,499",USD 349,"AED 1,299",2024
Tecno,Pova 6 Pro 512GB,230g,12GB,32MP,64MP,MediaTek Dimensity 8100,"6,000mAh",6.9 inches,"PKR 159,999","INR 79,999","CNY 6,999","USD 1,099","AED 4,199",2024
Tecno,Spark 20 Pro+ 256GB,210g,8GB,32MP,50MP,MediaTek Helio G99,"5,200mAh",6.8 inches,"PKR 54,999","INR 19,999","CNY 1,799",USD 269,AED 999,2024
Tecno,Spark 20 Pro 128GB,195g,6GB,16MP,50MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 39,999","INR 14,999","CNY 1,199",USD 199,AED 749,2024
Tecno,Spark 20 128GB,192g,4GB,16MP,50MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 34,999","INR 12,999","CNY 1,099",USD 179,AED 699,2024
Tecno,Spark 20C 128GB,190g,4GB,16MP,50MP,MediaTek Helio G85,"5,000mAh",6.6 inches,"PKR 32,999","INR 11,999",CNY 999,USD 149,AED 599,2024
Tecno,Spark Go 2024 64GB,195g,3GB,5MP,8MP,Unisoc SC9863A,"5,000mAh",6.52 inches,"PKR 22,999","INR 7,499",CNY 599,USD 99,AED 399,2024
Tecno,Pop 8 64GB,195g,3GB,5MP,8MP,Unisoc SC9832E,"5,000mAh",6.52 inches,"PKR 21,999","INR 6,999",CNY 549,USD 89,AED 349,2024
Tecno,Camon 20s Pro 5G 512GB,202g,12GB,50MP,108MP,MediaTek Dimensity 9200,"5,200mAh",6.9 inches,"PKR 159,999","INR 79,999","CNY 6,999","USD 1,099","AED 4,199",2024
Tecno,Camon 20s Pro 256GB,202g,12GB,50MP,108MP,MediaTek Dimensity 810,"5,200mAh",6.9 inches,"PKR 129,999","INR 59,999","CNY 4,999",USD 899,"AED 3,499",2024
Tecno,Camon 20s 256GB,200g,8GB,32MP,50MP,MediaTek Helio G99,"5,000mAh",6.7 inches,"PKR 79,999","INR 34,999","CNY 2,799",USD 449,"AED 1,799",2024
Tecno,Camon 20 Premier 512GB,205g,12GB,50MP,108MP,MediaTek Dimensity 8200,"5,200mAh",6.8 inches,"PKR 149,999","INR 74,999","CNY 6,499","USD 1,049","AED 3,999",2024
Tecno,Camon 20 Pro 5G 256GB,200g,8GB,32MP,50MP,MediaTek Dimensity 810,"5,000mAh",6.7 inches,"PKR 89,999","INR 39,999","CNY 3,199",USD 499,"AED 1,999",2024
Tecno,Camon 20 Pro 128GB,198g,6GB,32MP,50MP,MediaTek Helio G99,"5,000mAh",6.7 inches,"PKR 69,999","INR 29,999","CNY 2,499",USD 349,"AED 1,299",2024
Tecno,Camon 20 128GB,195g,6GB,32MP,50MP,MediaTek Helio G99,"5,000mAh",6.7 inches,"PKR 69,999","INR 29,999","CNY 2,499",USD 349,"AED 1,299",2024
Tecno,Pova 5G 512GB,240g,8GB,32MP,50MP,MediaTek Dimensity 900,"6,000mAh",6.9 inches,"PKR 119,999","INR 54,999","CNY 4,499",USD 699,"AED 2,799",2024
Tecno,Pova 5 256GB,230g,8GB,16MP,50MP,MediaTek Helio G99,"6,000mAh",6.8 inches,"PKR 59,999","INR 24,999","CNY 2,299",USD 329,"AED 1,199",2024
Infinix,Xpad,450g,6GB,8MP,13MP,MediaTek Helio G99,"7,000mAh",10.1 inches,"PKR 54,999","INR 21,999","CNY 1,999",USD 299,"AED 1,099",2024
Infinix,Xpad 5G,470g,8GB,16MP,50MP,MediaTek Dimensity 810,"8,000mAh",10.4 inches,"PKR 79,999","INR 29,999","CNY 2,499",USD 399,"AED 1,499",2024
Infinix,Xpad Lite,420g,4GB,5MP,8MP,Unisoc T606,"6,000mAh",9.7 inches,"PKR 39,999","INR 14,999","CNY 1,399",USD 219,AED 799,2024
Infinix,Xpad Pro,480g,12GB,32MP,50MP,MediaTek Dimensity 9200,"9,000mAh",11.0 inches,"PKR 99,999","INR 39,999","CNY 3,499",USD 549,"AED 1,999",2024
Infinix,Hot 50,192g,6GB,8MP,50MP,MediaTek Helio G85,"5,000mAh",6.78 inches,"PKR 39,999","INR 14,999","CNY 1,399",USD 219,AED 799,2024
Infinix,Hot 50i,190g,4GB,8MP,50MP,Unisoc T606,"5,000mAh",6.6 inches,"PKR 32,999","INR 12,499","CNY 1,199",USD 179,AED 699,2024
Infinix,Hot 50 5G,195g,8GB,16MP,50MP,MediaTek Dimensity 810,"5,200mAh",6.78 inches,"PKR 48,999","INR 18,999","CNY 1,799",USD 289,"AED 1,049",2024
Infinix,Hot 50 Pro,194g,8GB,16MP,50MP,MediaTek Helio G99,"5,000mAh",6.8 inches,"PKR 45,999","INR 17,999","CNY 1,699",USD 269,AED 999,2024
Infinix,Hot 50 Pro+,196g,12GB,32MP,108MP,MediaTek Dimensity 9200,"5,300mAh",6.9 inches,"PKR 64,999","INR 24,999","CNY 2,499",USD 379,"AED 1,399",2024
Infinix,GT 20 Pro,198g,12GB,32MP,108MP,MediaTek Dimensity 8200,"5,500mAh",6.9 inches,"PKR 89,999","INR 32,999","CNY 2,999",USD 449,"AED 1,699",2024
Infinix,Note 40X 5G,198g,8GB,32MP,108MP,MediaTek Dimensity 7200,"5,200mAh",6.8 inches,"PKR 64,999","INR 23,999","CNY 2,299",USD 349,"AED 1,299",2024
Infinix,Note 40S,196g,8GB,32MP,50MP,MediaTek Helio G99,"5,000mAh",6.78 inches,"PKR 42,999","INR 16,999","CNY 1,799",USD 279,AED 999,2024
Infinix,Note 40 5G,195g,8GB,32MP,108MP,MediaTek Dimensity 8100,"5,200mAh",6.8 inches,"PKR 54,999","INR 19,999","CNY 1,999",USD 319,"AED 1,099",2024
Infinix,Note 40 Pro 5G,195g,12GB,32MP,108MP,MediaTek Dimensity 9000,"5,300mAh",6.8 inches,"PKR 72,999","INR 27,999","CNY 2,499",USD 399,"AED 1,499",2024
Infinix,Note 40 Racing Edition,196g,12GB,32MP,108MP,MediaTek Dimensity 9200,"5,500mAh",6.9 inches,"PKR 89,999","INR 32,999","CNY 2,999",USD 449,"AED 1,699",2024
Infinix,Hot 40,196g,8GB,32MP,50MP,MediaTek Helio G88,"5,000mAh",6.78 inches,"PKR 35,999","INR 12,499","CNY 1,199",USD 199,AED 749,2023
Infinix,Hot 40i,195g,4GB,8MP,13MP,Unisoc T606,"5,000mAh",6.6 inches,"PKR 28,999","INR 10,999",CNY 999,USD 159,AED 599,2023
Infinix,Hot 40 Pro,195g,8GB,32MP,108MP,MediaTek Helio G99,"5,000mAh",6.78 inches,"PKR 39,999","INR 14,999","CNY 1,399",USD 229,AED 849,2023
Infinix,Zero 40,195g,12GB,50MP,108MP,MediaTek Dimensity 8200,"5,000mAh",6.78 inches,"PKR 69,999","INR 24,999","CNY 2,199",USD 349,"AED 1,299",2024
Infinix,Zero 40 5G,195g,12GB,50MP,108MP,MediaTek Dimensity 8200,"5,000mAh",6.78 inches,"PKR 74,999","INR 27,999","CNY 2,299",USD 379,"AED 1,399",2024
Infinix,Zero Flip,190g,8GB,32MP,108MP,Qualcomm Snapdragon 778G,"4,500mAh",6.7 inches,"PKR 89,999","INR 32,999","CNY 2,499",USD 399,"AED 1,499",2024
Infinix,Note 40,190g,8GB,32MP,108MP,MediaTek Helio G99,"5,000mAh",6.78 inches,"PKR 45,999","INR 17,999","CNY 1,799",USD 279,AED 999,2024
Infinix,Note 40 Pro,190g,12GB,32MP,108MP,MediaTek Dimensity 8100,"5,000mAh",6.78 inches,"PKR 59,999","INR 22,999","CNY 2,199",USD 329,"AED 1,199",2024
Infinix,Hot 30 128GB,196g,8GB,8MP,50MP,MediaTek Helio G88,"5,000mAh",6.78 inches,"PKR 35,999","INR 12,499","CNY 1,199",USD 199,AED 749,2023
Infinix,Hot 30i 128GB,191g,4GB,8MP,13MP,Unisoc T606,"5,000mAh",6.6 inches,"PKR 28,999","INR 10,999",CNY 999,USD 159,AED 599,2023
Infinix,Hot 30i NFC 128GB,191g,4GB,8MP,13MP,Unisoc T606,"5,000mAh",6.6 inches,"PKR 29,999","INR 11,499",CNY 999,USD 159,AED 599,2023
Infinix,Hot 30 Play 128GB,205g,4GB,8MP,16MP,MediaTek Helio G37,"6,000mAh",6.82 inches,"PKR 30,999","INR 11,999","CNY 1,099",USD 179,AED 649,2023
Infinix,Hot 30 5G 128GB,202g,8GB,8MP,50MP,MediaTek Dimensity 810,"5,000mAh",6.78 inches,"PKR 41,999","INR 17,999","CNY 1,499",USD 239,AED 899,2023
Infinix,Zero 30 256GB,185g,8GB,50MP,108MP,MediaTek Dimensity 8020,"5,000mAh",6.78 inches,"PKR 69,999","INR 26,999","CNY 2,199",USD 349,"AED 1,299",2023
Infinix,Zero 30 5G 256GB,185g,12GB,50MP,108MP,MediaTek Dimensity 8020,"5,000mAh",6.78 inches,"PKR 74,999","INR 29,999","CNY 2,299",USD 379,"AED 1,399",2023
Infinix,GT 10 Pro 256GB,187g,8GB,32MP,108MP,MediaTek Dimensity 8050,"5,000mAh",6.67 inches,"PKR 84,999","INR 32,999","CNY 2,599",USD 399,"AED 1,499",2023
Infinix,Hot 12 128GB,195g,6GB,8MP,13MP,MediaTek Helio G85,"5,000mAh",6.82 inches,"PKR 28,999","INR 11,499","CNY 1,099",USD 179,AED 649,2022
Infinix,Hot 12 Play 128GB,209g,4GB,8MP,13MP,Unisoc T610,"6,000mAh",6.82 inches,"PKR 24,999","INR 10,499",CNY 999,USD 159,AED 599,2022
Infinix,Hot 12 Pro 128GB,191g,8GB,8MP,50MP,Unisoc T616,"5,000mAh",6.6 inches,"PKR 31,999","INR 12,999","CNY 1,199",USD 199,AED 749,2022
Infinix,Hot 12i 64GB,190g,4GB,8MP,13MP,MediaTek Helio A22,"5,000mAh",6.6 inches,"PKR 22,999","INR 9,999",CNY 899,USD 139,AED 499,2022
Infinix,Hot 20 128GB,198g,6GB,8MP,50MP,MediaTek Helio G85,"5,000mAh",6.82 inches,"PKR 30,999","INR 12,999","CNY 1,199",USD 199,AED 749,2022
Infinix,Hot 20 Play 128GB,209g,4GB,8MP,13MP,MediaTek Helio G37,"6,000mAh",6.82 inches,"PKR 25,999","INR 10,999",CNY 999,USD 159,AED 599,2022
Infinix,Hot 20s 128GB,202g,8GB,8MP,50MP,MediaTek Helio G96,"5,000mAh",6.78 inches,"PKR 34,999","INR 14,999","CNY 1,399",USD 219,AED 799,2022
Infinix,Hot 20 5G 128GB,204g,6GB,8MP,50MP,MediaTek Dimensity 810,"5,000mAh",6.6 inches,"PKR 38,999","INR 16,999","CNY 1,499",USD 239,AED 899,2022
Infinix,Hot 20i 64GB,195g,4GB,8MP,13MP,MediaTek Helio G25,"5,000mAh",6.6 inches,"PKR 21,999","INR 9,499",CNY 899,USD 139,AED 499,2022
Infinix,Hot 10T 128GB,205g,4GB,8MP,48MP,MediaTek Helio G70,"5,000mAh",6.82 inches,"PKR 23,999","INR 10,499",CNY 999,USD 149,AED 549,2021
Infinix,Hot 10S 128GB,211g,6GB,8MP,48MP,MediaTek Helio G85,"6,000mAh",6.82 inches,"PKR 25,999","INR 11,999","CNY 1,099",USD 169,AED 599,2021
Infinix,Hot 10S NFC 128GB,211g,6GB,8MP,48MP,MediaTek Helio G85,"6,000mAh",6.82 inches,"PKR 26,999","INR 12,499","CNY 1,199",USD 179,AED 649,2021
Infinix,Hot 10 Lite 64GB,195g,3GB,8MP,13MP,MediaTek Helio A25,"5,000mAh",6.6 inches,"PKR 19,999","INR 7,999",CNY 699,USD 109,AED 399,2020
Infinix,Hot 10 Play 64GB,207g,4GB,8MP,13MP,MediaTek Helio G25,"6,000mAh",6.82 inches,"PKR 22,999","INR 9,499",CNY 899,USD 139,AED 499,2021
Infinix,Hot 11 128GB,201g,4GB,8MP,13MP,MediaTek Helio G70,"5,200mAh",6.6 inches,"PKR 24,999","INR 10,999",CNY 999,USD 159,AED 599,2021
Infinix,Hot 11 Play 128GB,209g,4GB,8MP,13MP,MediaTek Helio G35,"6,000mAh",6.82 inches,"PKR 25,999","INR 11,499","CNY 1,099",USD 169,AED 649,2021
Infinix,Hot 11s 128GB,205g,6GB,8MP,50MP,MediaTek Helio G88,"5,000mAh",6.78 inches,"PKR 27,999","INR 12,999","CNY 1,299",USD 189,AED 699,2021
Infinix,Smart HD 32GB,195g,2GB,5MP,8MP,MediaTek Helio A20,"5,000mAh",6.1 inches,"PKR 15,999","INR 5,999",CNY 499,USD 79,AED 299,2020
Infinix,Note 8i 128GB,210g,6GB,8MP,48MP,MediaTek Helio G80,"5,200mAh",6.78 inches,"PKR 29,999","INR 12,999","CNY 1,199",USD 199,AED 749,2020
Infinix,Hot 10 Lite 64GB,195g,3GB,8MP,13MP,MediaTek Helio A25,"5,000mAh",6.6 inches,"PKR 19,999","INR 7,999",CNY 699,USD 109,AED 399,2020
Infinix,Note 8 128GB,210g,6GB,16MP,64MP,MediaTek Helio G80,"5,200mAh",6.95 inches,"PKR 34,999","INR 15,999","CNY 1,499",USD 229,AED 899,2020
Infinix,Zero 8i 128GB,210g,8GB,16MP,48MP,MediaTek Helio G90T,"4,500mAh",6.85 inches,"PKR 39,999","INR 17,999","CNY 1,599",USD 249,AED 999,2020
Infinix,Hot 10 128GB,204g,4GB,8MP,16MP,MediaTek Helio G70,"5,200mAh",6.78 inches,"PKR 24,999","INR 10,999",CNY 999,USD 159,AED 599,2020
Infinix,Zero 8 128GB,205g,8GB,48MP,64MP,MediaTek Helio G90T,"4,500mAh",6.85 inches,"PKR 44,999","INR 19,999","CNY 1,799",USD 279,"AED 1,099",2020
Infinix,Smart 5 64GB,195g,3GB,8MP,13MP,MediaTek Helio A20,"5,000mAh",6.6 inches,"PKR 18,999","INR 7,499",CNY 599,USD 99,AED 349,2020
Honor,9X Lite,175g,4GB,8MP,48MP,Kirin 710F,"3,750mAh",6.5 inches,"PKR 39,999","INR 15,999","CNY 1,499",USD 219,AED 799,2020
Honor,30,185g,8GB,32MP,40MP,Kirin 985 5G,"4,000mAh",6.53 inches,"PKR 74,999","INR 29,999","CNY 2,999",USD 449,"AED 1,599",2020
Honor,30 Pro,190g,8GB,32MP,50MP,Kirin 990 5G,"4,000mAh",6.57 inches,"PKR 94,999","INR 39,999","CNY 3,999",USD 599,"AED 2,199",2020
Honor,30 Pro+,192g,12GB,32MP,50MP,Kirin 990 5G,"4,000mAh",6.57 inches,"PKR 109,999","INR 45,999","CNY 4,499",USD 699,"AED 2,599",2020
Honor,30S,190g,6GB,16MP,64MP,Kirin 820 5G,"4,000mAh",6.5 inches,"PKR 54,999","INR 22,999","CNY 2,299",USD 349,"AED 1,299",2020
Honor,X10,203g,6GB,16MP,40MP,Kirin 820 5G,"4,300mAh",6.63 inches,"PKR 48,999","INR 19,999","CNY 2,099",USD 319,"AED 1,149",2020
Honor,X10 Max,227g,8GB,8MP,48MP,MediaTek Dimensity 800,"5,000mAh",7.09 inches,"PKR 64,999","INR 25,999","CNY 2,499",USD 379,"AED 1,399",2020
Honor,Play 4,213g,6GB,16MP,64MP,MediaTek Dimensity 800,"4,300mAh",6.81 inches,"PKR 49,999","INR 21,999","CNY 2,299",USD 349,"AED 1,249",2020
Honor,Play 4 Pro,213g,8GB,32MP,40MP,Kirin 990 5G,"4,200mAh",6.57 inches,"PKR 74,999","INR 29,999","CNY 3,499",USD 549,"AED 1,999",2020
Honor,10X Lite,206g,4GB,8MP,48MP,Kirin 710A,"5,000mAh",6.67 inches,"PKR 34,999","INR 13,999","CNY 1,499",USD 229,AED 849,2020
Honor,V40,189g,8GB,16MP,50MP,MediaTek Dimensity 1000+,"4,000mAh",6.72 inches,"PKR 89,999","INR 37,999","CNY 3,999",USD 599,"AED 2,199",2021
Honor,50,175g,8GB,32MP,108MP,Qualcomm Snapdragon 778G,"4,300mAh",6.57 inches,"PKR 89,999","INR 37,999","CNY 2,699",USD 549,"AED 2,049",2021
Honor,50 Pro,187g,8GB,32MP,108MP,Qualcomm Snapdragon 778G,"4,000mAh",6.72 inches,"PKR 109,999","INR 44,999","CNY 3,699",USD 649,"AED 2,499",2021
Honor,50 SE,191g,8GB,16MP,108MP,MediaTek Dimensity 900,"4,000mAh",6.78 inches,"PKR 74,999","INR 29,999","CNY 2,399",USD 449,"AED 1,699",2021
Honor,X20,192g,6GB,16MP,64MP,MediaTek Dimensity 900,"4,300mAh",6.67 inches,"PKR 64,999","INR 25,999","CNY 2,299",USD 379,"AED 1,399",2021
Honor,X20 SE,179g,6GB,16MP,64MP,MediaTek Dimensity 700,"4,000mAh",6.6 inches,"PKR 54,999","INR 22,999","CNY 1,799",USD 299,"AED 1,199",2021
Honor,Play 5,179g,8GB,16MP,64MP,MediaTek Dimensity 800U,"3,800mAh",6.53 inches,"PKR 49,999","INR 19,999","CNY 2,099",USD 319,"AED 1,149",2021
Honor,Play 5T,191g,6GB,8MP,13MP,Unisoc T610,"5,000mAh",6.5 inches,"PKR 34,999","INR 14,999","CNY 1,499",USD 219,AED 799,2021
Honor,Magic3,202g,8GB,13MP,50MP,Qualcomm Snapdragon 888,"4,600mAh",6.76 inches,"PKR 159,999","INR 64,999","CNY 4,599",USD 899,"AED 3,299",2021
Honor,Magic3 Pro,213g,8GB,13MP,50MP,Qualcomm Snapdragon 888+,"4,600mAh",6.76 inches,"PKR 189,999","INR 74,999","CNY 5,499","USD 1,099","AED 3,999",2021
Honor,Magic3 Pro+,236g,12GB,13MP,50MP,Qualcomm Snapdragon 888+,"4,600mAh",6.76 inches,"PKR 219,999","INR 84,999","CNY 6,499","USD 1,299","AED 4,599",2021
Honor,60,179g,8GB,32MP,108MP,Qualcomm Snapdragon 778G,"4,800mAh",6.67 inches,"PKR 99,999","INR 41,999","CNY 2,699",USD 549,"AED 2,049",2021
Honor,60 Pro,192g,8GB,50MP,108MP,Qualcomm Snapdragon 778G+,"4,800mAh",6.78 inches,"PKR 124,999","INR 49,999","CNY 3,699",USD 649,"AED 2,599",2021
Honor,60 SE,191g,8GB,16MP,64MP,MediaTek Dimensity 900,"4,300mAh",6.67 inches,"PKR 74,999","INR 29,999","CNY 2,399",USD 449,"AED 1,699",2021
Honor,X30,189g,6GB,16MP,48MP,Qualcomm Snapdragon 695,"4,800mAh",6.81 inches,"PKR 69,999","INR 27,999","CNY 2,099",USD 379,"AED 1,299",2021
Honor,X30i,175g,6GB,16MP,48MP,MediaTek Dimensity 810,"4,000mAh",6.7 inches,"PKR 54,999","INR 22,999","CNY 1,799",USD 299,"AED 1,099",2021
Honor,X30 Max,228g,8GB,8MP,64MP,MediaTek Dimensity 900,"5,000mAh",7.09 inches,"PKR 89,999","INR 35,999","CNY 2,399",USD 499,"AED 1,899",2021
Honor,Play 6,190g,6GB,5MP,13MP,MediaTek MT6762G Helio G25,"5,000mAh",6.52 inches,"PKR 29,999","INR 12,999","CNY 1,199",USD 179,AED 699,2022
Honor,Play 6T,198g,6GB,5MP,13MP,MediaTek Dimensity 700,"5,000mAh",6.74 inches,"PKR 39,999","INR 16,999","CNY 1,499",USD 229,AED 799,2022
Honor,Magic4,199g,8GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 1,"4,800mAh",6.81 inches,"PKR 179,999","INR 72,999","CNY 4,699",USD 899,"AED 3,299",2022
Honor,Magic4 Pro,215g,8GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 1,"4,600mAh",6.81 inches,"PKR 209,999","INR 84,999","CNY 5,499","USD 1,099","AED 3,999",2022
Honor,Magic4 Ultimate,242g,12GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 1,"4,600mAh",6.81 inches,"PKR 249,999","INR 99,999","CNY 6,799","USD 1,299","AED 4,599",2022
Honor,Magic V,288g,12GB,42MP,50MP,Qualcomm Snapdragon 8 Gen 1,"4,750mAh",7.9 inches,"PKR 349,999","INR 149,999","CNY 9,999","USD 1,799","AED 6,599",2022
Honor,70,178g,8GB,32MP,54MP,Qualcomm Snapdragon 778G+,"4,800mAh",6.67 inches,"PKR 119,999","INR 46,999","CNY 2,699",USD 549,"AED 2,099",2022
Honor,70 Pro,192g,8GB,50MP,54MP,MediaTek Dimensity 8000,"4,500mAh",6.78 inches,"PKR 149,999","INR 59,999","CNY 3,699",USD 699,"AED 2,699",2022
Honor,70 Pro+,209g,12GB,50MP,54MP,MediaTek Dimensity 9000,"4,500mAh",6.78 inches,"PKR 179,999","INR 69,999","CNY 4,299",USD 799,"AED 3,199",2022
Honor,X40,172g,6GB,8MP,50MP,Qualcomm Snapdragon 695,"5,100mAh",6.67 inches,"PKR 64,999","INR 26,999","CNY 1,499",USD 299,"AED 1,099",2022
Honor,X40i,175g,6GB,8MP,50MP,MediaTek Dimensity 700,"4,000mAh",6.7 inches,"PKR 49,999","INR 22,999","CNY 1,799",USD 279,AED 999,2022
Honor,Play 7,196g,4GB,5MP,13MP,MediaTek Helio G37,"5,200mAh",6.74 inches,"PKR 29,999","INR 12,499","CNY 1,099",USD 159,AED 599,2023
Honor,Play 7T,199g,6GB,5MP,13MP,MediaTek Dimensity 6020,"5,200mAh",6.74 inches,"PKR 34,999","INR 14,999","CNY 1,299",USD 199,AED 749,2023
Honor,Magic5,204g,8GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 2,"5,100mAh",6.81 inches,"PKR 199,999","INR 79,999","CNY 4,999",USD 999,"AED 3,599",2023
Honor,Magic5 Pro,219g,12GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 2,"5,100mAh",6.81 inches,"PKR 249,999","INR 99,999","CNY 6,199","USD 1,199","AED 4,399",2023
Honor,Magic5 Ultimate,234g,16GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 2,"5,450mAh",6.81 inches,"PKR 299,999","INR 119,999","CNY 7,499","USD 1,399","AED 5,199",2023
Honor,Magic Vs,267g,12GB,16MP,50MP,Qualcomm Snapdragon 8+ Gen 1,"5,000mAh",7.9 inches,"PKR 369,999","INR 149,999","CNY 9,999","USD 1,699","AED 6,199",2023
Honor,80,180g,8GB,32MP,160MP,Qualcomm Snapdragon 782G,"4,800mAh",6.67 inches,"PKR 119,999","INR 46,999","CNY 2,699",USD 549,"AED 2,099",2022
Honor,80 Pro,193g,12GB,50MP,160MP,Qualcomm Snapdragon 8+ Gen 1,"4,800mAh",6.78 inches,"PKR 169,999","INR 69,999","CNY 4,199",USD 799,"AED 3,099",2022
Honor,80 SE,175g,8GB,32MP,64MP,MediaTek Dimensity 900,"4,600mAh",6.67 inches,"PKR 84,999","INR 34,999","CNY 1,999",USD 399,"AED 1,599",2022
Honor,X50,185g,6GB,8MP,108MP,Qualcomm Snapdragon 6 Gen 1,"5,800mAh",6.78 inches,"PKR 74,999","INR 28,999","CNY 1,599",USD 299,"AED 1,099",2023
Honor,X50i,179g,6GB,8MP,100MP,MediaTek Dimensity 6020,"4,500mAh",6.7 inches,"PKR 54,999","INR 21,999","CNY 1,399",USD 249,AED 899,2023
Honor,Play 8,191g,4GB,5MP,13MP,MediaTek Helio G36,"5,000mAh",6.52 inches,"PKR 27,999","INR 11,499",CNY 999,USD 149,AED 549,2023
Honor,Play 8T,195g,6GB,5MP,50MP,MediaTek Dimensity 6100+,"5,200mAh",6.74 inches,"PKR 32,999","INR 13,999","CNY 1,199",USD 189,AED 699,2023
Honor,Magic6,203g,8GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 3,"5,200mAh",6.81 inches,"PKR 219,999","INR 89,999","CNY 5,499","USD 1,099","AED 3,999",2024
Honor,Magic6 Pro,219g,12GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 3,"5,500mAh",6.81 inches,"PKR 269,999","INR 109,999","CNY 6,999","USD 1,299","AED 4,699",2024
Honor,Magic6 Ultimate,234g,16GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 3,"5,550mAh",6.81 inches,"PKR 319,999","INR 129,999","CNY 8,199","USD 1,499","AED 5,499",2024
Honor,Magic V2,231g,12GB,16MP,50MP,Qualcomm Snapdragon 8 Gen 2,"5,000mAh",7.92 inches,"PKR 389,999","INR 159,999","CNY 10,999","USD 1,899","AED 6,999",2024
Honor,90,183g,12GB,50MP,200MP,Qualcomm Snapdragon 7 Gen 1,"5,000mAh",6.7 inches,"PKR 139,999","INR 54,999","CNY 2,999",USD 599,"AED 2,199",2023
Honor,90 Pro,192g,12GB,50MP,200MP,Qualcomm Snapdragon 8+ Gen 1,"5,000mAh",6.78 inches,"PKR 169,999","INR 64,999","CNY 3,999",USD 699,"AED 2,799",2023
Honor,90 SE,175g,8GB,32MP,64MP,MediaTek Dimensity 900,"4,600mAh",6.67 inches,"PKR 84,999","INR 34,999","CNY 1,999",USD 399,"AED 1,599",2023
Honor,X60,185g,6GB,8MP,108MP,Qualcomm Snapdragon 6 Gen 1,"5,800mAh",6.78 inches,"PKR 74,999","INR 28,999","CNY 1,599",USD 299,"AED 1,099",2023
Honor,X60i,179g,6GB,8MP,100MP,MediaTek Dimensity 6020,"4,500mAh",6.7 inches,"PKR 54,999","INR 21,999","CNY 1,399",USD 249,AED 899,2023
Honor,Play 9,191g,4GB,5MP,13MP,MediaTek Helio G36,"5,000mAh",6.52 inches,"PKR 27,999","INR 11,499",CNY 999,USD 149,AED 549,2023
Honor,Play 9T,195g,6GB,5MP,50MP,MediaTek Dimensity 6100+,"5,200mAh",6.74 inches,"PKR 32,999","INR 13,999","CNY 1,199",USD 189,AED 699,2023
Honor,Magic7,203g,8GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 3,"5,200mAh",6.81 inches,"PKR 219,999","INR 89,999","CNY 5,499","USD 1,099","AED 3,999",2024
Honor,Magic7 Pro,219g,12GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 3,"5,500mAh",6.81 inches,"PKR 269,999","INR 109,999","CNY 6,999","USD 1,299","AED 4,699",2024
Honor,Magic7 Ultimate,234g,16GB,12MP,50MP,Qualcomm Snapdragon 8 Gen 3,"5,550mAh",6.81 inches,"PKR 319,999","INR 129,999","CNY 8,199","USD 1,499","AED 5,499",2024
Honor,Magic V3,231g,12GB,16MP,50MP,Qualcomm Snapdragon 8 Gen 2,"5,000mAh",7.92 inches,"PKR 389,999","INR 159,999","CNY 10,999","USD 1,899","AED 6,999",2024
Honor,Pad 6,460g,4GB,2MP,5MP,Qualcomm Snapdragon 662,"5,100mAh",10.1 inches,"PKR 49,999","INR 17,999","CNY 1,299",USD 199,AED 749,2020
Honor,Pad X6,460g,3GB,2MP,5MP,MediaTek MT8768T,"5,100mAh",9.7 inches,"PKR 39,999","INR 14,999",CNY 999,USD 159,AED 599,2020
Honor,Pad 7,460g,4GB,2MP,5MP,MediaTek Helio G80,"5,100mAh",10.1 inches,"PKR 54,999","INR 19,999","CNY 1,399",USD 229,AED 849,2021
Honor,Tablet V7,480g,6GB,8MP,13MP,MediaTek Dimensity 800,"7,250mAh",10.4 inches,"PKR 84,999","INR 34,999","CNY 2,199",USD 399,"AED 1,499",2021
Honor,Tablet V7 Pro,485g,8GB,8MP,13MP,MediaTek Dimensity 1300T,"7,250mAh",11.0 inches,"PKR 109,999","INR 44,999","CNY 2,899",USD 499,"AED 1,799",2021
Honor,Pad 8,520g,6GB,5MP,5MP,Qualcomm Snapdragon 680,"7,250mAh",12.0 inches,"PKR 69,999","INR 24,999","CNY 1,599",USD 299,"AED 1,099",2022
Honor,Pad X8,460g,4GB,2MP,5MP,MediaTek Helio G80,"5,100mAh",10.1 inches,"PKR 44,999","INR 16,999","CNY 1,199",USD 189,AED 699,2022
Honor,Pad X8 Lite,450g,3GB,2MP,5MP,MediaTek MT8786,"5,000mAh",9.7 inches,"PKR 34,999","INR 12,999",CNY 999,USD 149,AED 549,2022
Honor,Pad V8,510g,6GB,5MP,13MP,MediaTek Dimensity 8020,"7,250mAh",11.0 inches,"PKR 94,999","INR 39,999","CNY 2,499",USD 449,"AED 1,599",2023
Honor,Pad V8 Pro,530g,8GB,8MP,13MP,MediaTek Dimensity 9000,"8,500mAh",12.1 inches,"PKR 129,999","INR 54,999","CNY 3,599",USD 649,"AED 2,299",2023
Honor,Pad 9,550g,8GB,8MP,13MP,Qualcomm Snapdragon 6 Gen 1,"8,300mAh",12.1 inches,"PKR 84,999","INR 34,999","CNY 2,299",USD 399,"AED 1,499",2024
Honor,Pad 9 Pro,560g,12GB,8MP,13MP,MediaTek Dimensity 8100,"9,000mAh",12.6 inches,"PKR 109,999","INR 44,999","CNY 2,999",USD 499,"AED 1,799",2024
Honor,Pad X9,495g,6GB,5MP,8MP,Qualcomm Snapdragon 685,"7,250mAh",11.5 inches,"PKR 59,999","INR 22,999","CNY 1,599",USD 299,"AED 1,099",2023
Honor,Pad X8 Pro,460g,4GB,2MP,5MP,MediaTek Helio G80,"5,100mAh",10.1 inches,"PKR 44,999","INR 16,999","CNY 1,199",USD 189,AED 699,2023
Honor,MagicPad 13,590g,12GB,8MP,13MP,Qualcomm Snapdragon 8+ Gen 1,"10,000mAh",13.0 inches,"PKR 149,999","INR 64,999","CNY 3,999",USD 799,"AED 2,999",2023
Honor,MagicPad 2,580g,16GB,12MP,16MP,Qualcomm Snapdragon 8 Gen 2,"10,500mAh",13.2 inches,"PKR 179,999","INR 74,999","CNY 4,499",USD 899,"AED 3,299",2024
Honor,Pad X8a,450g,4GB,2MP,5MP,MediaTek MT8786,"5,000mAh",9.7 inches,"PKR 34,999","INR 12,999",CNY 999,USD 149,AED 549,2023
Honor,Pad X8a Kids Edition,460g,3GB,2MP,5MP,MediaTek MT8786,"5,100mAh",9.7 inches,"PKR 29,999","INR 10,999",CNY 799,USD 129,AED 499,2023
Honor,Pad X9 Pro,505g,8GB,8MP,13MP,Qualcomm Snapdragon 7s Gen 2,"8,000mAh",11.6 inches,"PKR 79,999","INR 29,999","CNY 2,199",USD 399,"AED 1,499",2024
Honor,Pad V9,530g,8GB,8MP,13MP,MediaTek Dimensity 9000,"8,500mAh",12.1 inches,"PKR 129,999","INR 54,999","CNY 3,599",USD 649,"AED 2,299",2024
Honor,Pad GT Pro,610g,12GB,12MP,16MP,Qualcomm Snapdragon 8 Gen 3,"10,500mAh",13.5 inches,"PKR 199,999","INR 84,999","CNY 4,999",USD 999,"AED 3,799",2024
Honor,Pad X10,475g,6GB,5MP,8MP,Qualcomm Snapdragon 685,"8,850mAh",12.1 inches,"PKR 74,999","INR 29,999","CNY 2,299",USD 399,"AED 1,499",2024
Honor,Pad X10 Pro,485g,8GB,8MP,13MP,Qualcomm Snapdragon 7s Gen 2,"9,000mAh",12.6 inches,"PKR 94,999","INR 39,999","CNY 2,999",USD 499,"AED 1,799",2024
Honor,MagicPad 3,590g,12GB,12MP,16MP,Qualcomm Snapdragon 8 Gen 3,"10,500mAh",13.0 inches,"PKR 149,999","INR 64,999","CNY 3,999",USD 799,"AED 2,999",2024
Honor,Pad V10,530g,8GB,8MP,13MP,MediaTek Dimensity 9000,"8,500mAh",12.1 inches,"PKR 129,999","INR 54,999","CNY 3,599",USD 649,"AED 2,299",2024
POCO,F2 Pro 128GB,219g,6GB,20MP,64MP,Snapdragon 865,4700mAh,6.67 inches,"PKR 99,999","INR 37,999","CNY 2,999",USD 499,"AED 1,999",2020
POCO,M2 Pro 64GB,209g,4GB,16MP,48MP,Snapdragon 720G,5000mAh,6.67 inches,"PKR 34,999","INR 13,999","CNY 1,399",USD 199,AED 799,2020
POCO,X3 NFC 128GB,215g,6GB,20MP,64MP,Snapdragon 732G,5160mAh,6.67 inches,"PKR 39,999","INR 16,999","CNY 1,599",USD 229,AED 899,2020
POCO,M3 64GB,198g,4GB,8MP,48MP,Snapdragon 662,6000mAh,6.53 inches,"PKR 24,999","INR 10,999",CNY 999,USD 149,AED 599,2020
POCO,F3 128GB,196g,6GB,20MP,48MP,Snapdragon 870,4520mAh,6.67 inches,"PKR 69,999","INR 29,999","CNY 2,499",USD 349,"AED 1,399",2021
POCO,X3 Pro 128GB,215g,6GB,20MP,48MP,Snapdragon 860,5160mAh,6.67 inches,"PKR 49,999","INR 18,999","CNY 1,799",USD 249,AED 999,2021
POCO,M3 Pro 5G 64GB,190g,4GB,8MP,48MP,MediaTek Dimensity 700,5000mAh,6.5 inches,"PKR 29,999","INR 13,999","CNY 1,199",USD 199,AED 799,2021
POCO,F3 GT 128GB,205g,6GB,16MP,64MP,MediaTek Dimensity 1200,5065mAh,6.67 inches,"PKR 79,999","INR 25,999","CNY 2,299",USD 399,"AED 1,499",2021
POCO,X3 GT 128GB,193g,6GB,16MP,64MP,MediaTek Dimensity 1100,5000mAh,6.6 inches,"PKR 44,999","INR 21,999","CNY 1,899",USD 279,"AED 1,099",2021
POCO,M4 Pro 5G 128GB,195g,4GB,16MP,50MP,MediaTek Dimensity 810,5000mAh,6.6 inches,"PKR 34,999","INR 14,999","CNY 1,499",USD 219,AED 849,2021
POCO,F4 128GB,195g,6GB,20MP,64MP,Snapdragon 870,4500mAh,6.67 inches,"PKR 74,999","INR 27,999","CNY 2,399",USD 349,"AED 1,399",2022
POCO,F4 GT 128GB,210g,8GB,20MP,64MP,Snapdragon 8 Gen 1,4700mAh,6.67 inches,"PKR 99,999","INR 39,999","CNY 3,299",USD 499,"AED 1,999",2022
POCO,X4 Pro 5G 128GB,205g,6GB,16MP,108MP,Snapdragon 695,5000mAh,6.67 inches,"PKR 54,999","INR 18,999","CNY 1,999",USD 299,"AED 1,199",2022
POCO,M4 Pro 128GB,179g,6GB,16MP,64MP,MediaTek Helio G96,5000mAh,6.43 inches,"PKR 39,999","INR 14,999","CNY 1,499",USD 219,AED 849,2022
POCO,M5 128GB,201g,4GB,5MP,50MP,MediaTek Helio G99,5000mAh,6.58 inches,"PKR 29,999","INR 12,499","CNY 1,299",USD 199,AED 799,2022
POCO,M5s 128GB,178.8g,4GB,13MP,64MP,MediaTek Helio G95,5000mAh,6.43 inches,"PKR 34,999","INR 13,999","CNY 1,399",USD 229,AED 899,2022
POCO,F5 128GB,181g,6GB,16MP,64MP,Snapdragon 7+ Gen 2,5000mAh,6.67 inches,"PKR 79,999","INR 29,999","CNY 2,299",USD 349,"AED 1,299",2023
POCO,F5 Pro 256GB,204g,8GB,20MP,64MP,Snapdragon 8+ Gen 1,5160mAh,6.67 inches,"PKR 99,999","INR 39,999","CNY 3,299",USD 499,"AED 1,899",2023
POCO,X5 128GB,189g,6GB,13MP,48MP,Snapdragon 695,5000mAh,6.67 inches,"PKR 54,999","INR 18,999","CNY 1,799",USD 279,"AED 1,099",2023
POCO,X5 Pro 128GB,181g,6GB,16MP,108MP,Snapdragon 778G,5000mAh,6.67 inches,"PKR 64,999","INR 22,999","CNY 2,199",USD 329,"AED 1,199",2023
POCO,M6 64GB,199g,4GB,8MP,50MP,MediaTek Helio G88,5000mAh,6.58 inches,"PKR 29,999","INR 12,999","CNY 1,299",USD 199,AED 799,2023
POCO,M6 Pro 128GB,202g,6GB,8MP,50MP,Snapdragon 4 Gen 1,5000mAh,6.79 inches,"PKR 34,999","INR 14,999","CNY 1,499",USD 219,AED 849,2023
POCO,X6 128GB,193g,6GB,16MP,64MP,MediaTek Dimensity 8100,5000mAh,6.67 inches,"PKR 59,999","INR 21,999","CNY 2,299",USD 349,"AED 1,299",2024
POCO,X6 Pro 256GB,205g,8GB,20MP,108MP,MediaTek Dimensity 8300,5000mAh,6.67 inches,"PKR 69,999","INR 24,999","CNY 2,599",USD 399,"AED 1,499",2024
POCO,F6 128GB,190g,6GB,20MP,64MP,Snapdragon 8 Gen 2,5000mAh,6.67 inches,"PKR 89,999","INR 34,999","CNY 2,999",USD 449,"AED 1,699",2024
POCO,F6 Pro 256GB,210g,8GB,20MP,108MP,Snapdragon 8+ Gen 2,5160mAh,6.67 inches,"PKR 109,999","INR 44,999","CNY 3,499",USD 549,"AED 1,999",2024
POCO,C65 64GB,190g,4GB,5MP,50MP,MediaTek Helio G85,5000mAh,6.5 inches,"PKR 24,999","INR 10,999",CNY 999,USD 149,AED 599,2024
POCO,X7 128GB,195g,6GB,16MP,64MP,MediaTek Dimensity 8200,5000mAh,6.67 inches,"PKR 64,999","INR 22,999","CNY 2,199",USD 329,"AED 1,199",2025
POCO,X7 Pro 256GB,207g,8GB,20MP,108MP,MediaTek Dimensity 8400,6000mAh,6.67 inches,"PKR 79,999","INR 27,999","CNY 2,699",USD 399,"AED 1,499",2025
POCO,M7 5G 128GB,198g,6GB,8MP,50MP,MediaTek Dimensity 7025,5110mAh,6.67 inches,"PKR 39,999","INR 15,999","CNY 1,599",USD 229,AED 899,2024
Poco,Pad 5G 128GB,571g,8GB,8MP,8MP,Snapdragon 7s Gen 2,"10,000mAh",12.1 inches,"PKR 66,220","INR 23,999","CNY 2,099",USD 280,"AED 1,029",2024
Poco,Pad 5G 256GB,571g,8GB,8MP,8MP,Snapdragon 7s Gen 2,"10,000mAh",12.1 inches,"PKR 71,220","INR 25,999","CNY 2,299",USD 300,"AED 1,099",2024
Samsung,Galaxy Z Fold6 256GB,239g,12GB,"10MP, 4MP (UDC)",50MP,Snapdragon 8 Gen 3,4400mAh,7.6 inches,"PKR 604,999","INR 164,999"," 13,999","USD 1,899","AED 7,199",2024
Samsung,Galaxy Z Fold6 512GB,239g,12GB,"10MP, 4MP (UDC)",50MP,Snapdragon 8 Gen 3,4400mAh,7.6 inches,"PKR 544,999","INR 176,999","CNY 15,999",USD 1719,"AED 7,699",2024
Samsung,Galaxy Z Fold6 1TB,239g,12GB,"10MP, 4MP (UDC)",50MP,Snapdragon 8 Gen 3,4400mAh,7.6 inches,Not available,"INR 200,999","CNY 17,999 ","USD 2,259","AED 8,699",2024
`]
]