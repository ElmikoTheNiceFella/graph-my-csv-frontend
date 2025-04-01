type DataType = [{ 'graph': string, 'y-axis': string, 'x-axis': string, 'relationship': string, 'time-format'?: string|null }[], [string]] 

// Second element is put in an array to be passed by reference, since the string can be huge

export const demoData: DataType = [
  [
    {
      "graph": "scatterplot",
      "x-axis": "YearsExperience",
      "y-axis": "Salary",
      "relationship": "There is likely a positive correlation between years of experience and salary, meaning as experience increases, salary tends to increase. However, the relationship may not be perfectly linear and could plateau at a certain point of experience.",
      "time-format": null
    },
    {
      "graph": "scatterplot",
      "x-axis": "Age",
      "y-axis": "Salary",
      "relationship": "There might be a positive correlation between age and salary in the early to middle years, as experience and career progression increase. However, this may plateau or even slightly decrease in later years as the employee reaches retirement age. The relationship could also be weaker than experience vs salary.",
      "time-format": null
    },
    {
      "graph": "scatterplot",
      "x-axis": "Age",
      "y-axis": "YearsExperience",
      "relationship": "There is a positive correlation. As employees age, so does their years of experience.  This relationship is almost guaranteed, but the rate will vary.",
      "time-format": null
    },
    {
      "graph": "histogram",
      "x-axis": "Salary",
      "y-axis": "frequency",
      "relationship": "This would show the distribution of salaries. You could identify the most common salary ranges, the spread of salaries, and potential skewness (e.g., whether there are many low salaries or very high salaries).",
      "time-format": null
    },
    {
      "graph": "histogram",
      "x-axis": "Age",
      "y-axis": "frequency",
      "relationship": "This would show the distribution of ages. You could see the average age, the spread of ages, and any potential outliers.",
      "time-format": null
    },
    {
      "graph": "histogram",
      "x-axis": "YearsExperience",
      "y-axis": "frequency",
      "relationship": "This would show the distribution of experience. You could see the most common experience levels and the spread.",
    }
  ],
  [`YearsExperience,Age,Salary
1.1,21,39343
1.3,21.5,46205
1.5,21.7,37731
2,22,43525
2.2,22.2,39891
2.9,23,56642
3,23,60150
3.2,23.3,54445
3.2,23.3,64445
3.7,23.6,57189
3.9,23.9,63218
4,24,55794
4,24,56957
4.1,24,57081
4.5,25,61111
4.9,25,67938
5.1,26,66029
5.3,27,83088
5.9,28,81363
6,29,93940
6.8,30,91738
7.1,30,98273
7.9,31,101302
8.2,32,113812
8.7,33,109431
9,34,105582
9.5,35,116969
9.6,36,112635
10.3,37,122391
10.5,38,121872`]
]