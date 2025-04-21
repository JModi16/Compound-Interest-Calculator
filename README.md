
# Compound-Interest-Calculator
Calculate the value of a future investment during a fixed period, from an initial deposit with various factors and conditions  to determine the value of the future investment.

Compound Interest Calculator is a fictional application enabling all investing web users to calculate the growth of their investment with a principal amount using this tool. The primary objective of this site is to provide a clean, intuitive, simple and user friendly functionality for a residential person coming from a non-financial and non-technical background to calculate their future value should they invest their funds into a bank account, building society account, investment fund, shares or equivalent investment product of their desire which provides a return on value 

A common and typical example is an investor investing £5,000 in a high interest bank account paying at the current high rate of 4% per year. In the first year the investment would be valued at £5200. In the second year, let's assume the rate should remain the same at 4%, in year two the value of your investment would be £5408 and so on. If the trend continued for 20 years at the same rate, the future rate would be £11, 393.84. Should the value of your investment increase over a duration, this is known as compounding. 

The tool is not just limited to calculating the compounded future value using your principal investment, annual rate and duration. It also allows you to apply conditions such as the deposits made within a frequency period and withdrawals made over a frequency period and calculate the compound annual growth rate (cagr). With these conditions applied, the higher the deposits, higher the frequency level, would result in the higher the future investment value and higher the cagr. Alternatively, the higher the withdrawal value, higher the withdrawal frequency the lower projected future value and lower cagr. This is  explained below in testing scenarios in this document. The tool enables investors to optionally use deposits and withdrawals. 
![Compound Interest Calculator Brand Logo](documentation/mockupgenerator.png)

[Please view the live site here](https://jmodi16.github.io/Compound-Interest-Calculator/)  



##Languages Used  
* [Languages Used](#languages-used)
* [User Experience (UX)](#user-experience-ux)
  * [Project Goals](#project-goals)
  * [User Goals](#user-goals)
  * [Site Owner Goals](#site-owner-goals)
  * [User Stories](#user-stories)
* [Design](#design)
  * [Colour](#colour)
  * [Typography](#typography)
  * [Wireframes](#wireframes)
* [Structure](#structure)
* [Technologies Used](#technologies-used)
  * [ Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
* [Testing](#Testing)
  * [Validator-Testing](#validator-testing)
  * [Lighthouse-testing](#lighthouse-testing)
  * [User-Testing-Functionality](#user-testing-functionality)
* [Bugs on Site](#bugs-on-site)
* [Deployment](#deployment)
* [Credits](#credits)
  
\*\[HTML\]   

\*\[CSS3\]  

\*\[JavaScript\]  

\## User Experience (UX)  

###UserStories    ####First Time and Regular Visitor Goals       

1.  As a first time or regular user, coming from a totally non-technical background I want to check the value of my future value using a desired value : Investment amount, rate and select the amount of compound times per year. 
    

2.  As a first time user or regular user, I want to be able to change the investment amount, interest rate and select the amount of compound times per year. 
    

3.  As a first time user or regular user to check the value of my investment, using a desired value : Investment amount, rate and select the amount of compound times per year, deposit amount, select deposit frequency, select the withdrawal amount and select the withdrawal frequency.   
    

4.  As a first time and regular user, I want to be able to reset the previous form, enabling all input fields and future investment results and breakdown value are deleted, enabling the form to be submitted with blank input values. 
    

#### As a Developer, I want to: 

1.  Ensure that all input fields on the form which are mandatory are completed.  
    

2.  Ensure the form is accessible on pc, mobile and tablet devices 
    

3.  Ensure form is accessible on Chrome, Safari and Edge 
    

4.  Ensure the form provides the accurate future value, using the calculation formula in the script.js file. 
    

5.  Ensure the form provides accurate future value ,  using the calculation formula in the  script.js file when deposits and/ or withdrawals are applied or neither are applied. 
    

6.  Ensure the correct compound annual growth rate (cagr) is calculated based within the investment results and investment breakdown. 
    

\### Why I chose this particular idea 

I personally need to plan and would like to help family plan to build up their investment in the future whilst some interest rates for banks and investment funds are quite good enabled me to be keen on this idea. 

   

\### Design, Layout & Structure    

 ####\*\*Fonts\*\*  

I used Primary-color: Green #4CAF50 and font-family: Arial as the primary font which is a simple, easily read and available on all user systems.  Sans-serif is declared as a secondary font to serve as a font fallback. I chose green as primary color because its a positive color when investing.  

\#### \*\*Wireframes\*\*  

INFORMATION TO FOLLOW   

\#### \*\*Structure\*\*    The structure of the site is informed by the scope, user and business goals as well as the principles of IXD (interaction design) to make sure I was conforming to user’s expectations and making everything as intuitive as I could.    The site has a simple structure made up of 1 page, consisting of the following features: \* Form  with a paragraph what the significance of a compound interest calculator is, its importance and function. \* Multiple labels assigned with an input field consisting of: 

*   Full Name (mandatory) 
    

*   Email address (mandatory) 
    

*   Initial Investment (£) (mandatory) 
    

*   Interest Rate (%) (mandatory) 
    

*   Number of Years ) (mandatory) 
    

*   Number of times compounded (mandatory and required to select an option from annually, semi-annually, monthly, weekly and daily) 
    

*   Deposit Amount (£) 
    

*   Deposit Frequency (If selected, required to select an option from annually, semi-annually, monthly, weekly and daily) 
    

*   Withdrawal Amount (£) 
    

*   Withdrawal Frequency (If selected, required to select an option from annually, semi-annually 
    

    

*    Features 
    

*   Scenarios   
    

Scenario 1 

Calculate compound Interest with an initial investment of £22,000, interest rate of 8% per annum, over a 10-year duration and compounded on an annual frequency. The form on the site will be submitted in the following format below.  The function executed in my JavaScript within the event listener attached to the submit event of the form, is used to submit the form. User input values are retrieved by declaring variables         !\[Input Form data\] (documentation/investmentinput(1).png)   

Once ‘Calculate My Investment’ button is selected it produces the following result using a compounding interest logic within the form.addEventListener function to handle form submission, perform validations and calculate results to provide the investment results and breakdown below. 

 !\[Investment Result scenario 1\] (documentation/investment1.png) 

Scenario 2. 

Should the above input values be entered by adding the £1000 per month as a deposit amount and not selecting a deposit frequency, because the deposit value should be greater (>) than 0, a pop up alert is presented below, “to select deposit a valid deposit frequency”  part of a conditional validation check in the depositfrequency loop.  

 !\[Deposit frequency alert\] (documentation/depositfreqalert.png) 

Thereafter, once a deposit frequency is selected, the function within a loop is applied within the submit event listener to calculate, reflect and display a new results with deposits of £1000 per month added over a 10 year period. 

 !\[Investment Result scenario 2\] (documentation/investment2.png) 

You’ll find the CAGR value is different in scenario 2 calculated at 26.74% and in scenario 1 at 8%. The deposits accumulated have changed the cagr value. The investment breakdown table shows investment value, interest earned and deposits have changed over the compounded period. 

Scenario 3 

Carrying on from the same input values as scenario 1 and 2 illustrated above, we now look at entering a withdrawal amount. Should £200 be entered as an amount, but not selecting a withdrawal frequency, we will still receive the popup “Please select a valid withdrawal  frequency” part of the conditional validation check  

 !\[Withdrawal frequency alert\] (documentation/withdrawalfreqalert.png) 

Thereafter, selecting the withdrawal frequency to monthly, it will calculate the adjusted reflect the new future value, with total contributions, total withdrawals, total interest, new investment value over the compounded frequency period. 

 !\[Investment Result Scenario 3\] (documentation/investment3.png) 

You’ll find the CAGR value is different in scenario 3 calculated at 24.55% and in scenario 2 at 26.74%. The withdrawals accumulated have changed the cagr value over the compounded period. 

Scenario 4 

Carrying on from the same values in scenarios 1, 2 and 3 except making an adjustment in the withdrawal amount from £200 to £1500. You will find the an alert is triggered by the return statement , “insufficient funds for withdrawal. Please adjust withdrawal amount and recalculate. This function in the code is executed within the loop as a condition when totalAmount is less than withdrawal amount because the user is trying to withdraw more funds than available.  

 !\[Insufficient Funds alert\](documentation/insufficientfundsalert.png) 

Clicking OK and reentering a lower withdrawal amount and selecting Calculate my Investment resolves the amount with the correct investment result and breakdown calculation. 

Scenario 5 

The reset button below the ‘Calculate my Investment’ button enables all form input details to be cleared, investment results and breakdown results to be cleared” . Please see video attached . This occurs because the reset function is implemented using an event listener attached to the reset button. 

!\[Reset Form\](documentation\\compoundreset.mp4 

\## Technologies Used 

*   \### Frameworks, Libraries & Programs Used 
    

\* W3Schools html tutorials very useful for code example([https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)) 

*   W3Schools css tutorials very useful for code examples([https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)) 
    

*   GitHub is used to store the projects code after being pushed from Git.[GitHub:](https://github.com/) 
    

*   VSCode the main environment to create files and write code for this project 
    

*   Google fonts used to import the 'Inter' Sans Serif' font as the primary font-family, which is used on all pages throughout the project. [Google Fonts:](https://fonts.google.com/) 
    

*   Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes[Font Awesome:](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css) 
    

*   Visual Studio code was the IDE used and within this Git was used for version control by utilizing the terminal to commit changes and Push to GitHub. [VScode:](https://ukc-word-edit.officeapps.live.com/we/documentation/gitdemo.jpeg) 
    

*   Balsamiq was used to create the wireframes to support in the design process.[Balsamiq:](https://balsamiq.com/) 
    

*   Screen reader was the website used to capture screenshot images of my site to add to my readme document [SceenRec](https://screenrec.com/) 
    

\## Deployment 

*   \### Deployment 
    

Github was used as version control. Visual studio code was the IDE used to build the website, code was added and commited in the terminal and then pushed to Github. This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html. 

To deploy this page to GitHub Pages from its , the following steps were taken:  

1.  Open Code Institute workspace \[ Code Institute\] (https://codeinstitute-ide.net/workspaces) 
    

2.  Open the project repository \[GitHub repository\] (https://github.com/JModi16/Compound-Interest-Calculator) 
    

3.  From the menu items near the top of the page, select Settings. 
    

5.  Click on "Pages" in the left hand navigation panel. 
    

6.  Under "Source", choose which branch to deploy. This should be Main for newer repositories 
    

7.  Choose which folder to deploy from, usually "/root". 
    

8.  Click "Save", then wait for it to be deployed. Your URL will be displayed above "Source" 
    

#Credits 

1.  Code Institute - It was a great pleasure to learn HTML, CSS, JavaScript  Participating in the course allows me to develop my frontend and JavaScript development skills. I particularly enjoyed the Love Maths tutorial which inspired me to take on this project. Manuel Perez Romero from Bristol City College for his support and lecturing. 
    

2.  Gareth McGirr - my mentor, was helpful and provided me good ideas and solutions to progress with this project. 
    

3.  Slack community channels - Their support and advise was good. 
    

4.  \[Compound Interest Calculator site\]([https://www.thecalculatorsite.com/](https://www.thecalculatorsite.com/)) This is where I obtained some formulas from and understood their functions. 
    

5.  My online banking portal to understand compounding and generate this idea, \[Halifax\](http://www.halifax.co.uk)

## Validator Testing
### HTML
* One tested using the [W3C Validator](https://validator.w3.org/)
* No errors were encountered. Document checking complete with no errors or warnings.I had a few misplaced closing <div> tags but were removed and adjusted.
* [My W3Validator Testing result](documentation/compoundcalculatorw3.png)
  
### CSS
* [CSS Validator](https://jigsaw.w3.org/css-validator/) was used to test the CSS, and shows no errors.
* [My CSS Check](documentation/compoundcalculator-cssvalidator.png)

### JsHint
* [JSHint](http://https://jshint.com/) was used to test for any validation errors for my script.js.
* Initially 2 errors were presented: 1. TotalAmount variable was decalred twice and 2.declared varible netContributions was not required and had no function in calculation so was removed.Removing these ,
* resolved    the issue.
* [My JSHint Testing](documentation/jshint.png)

## Lighthouse Testing

* Lighthouse testing was performed on all four pages. I was very satisfied with the site results across the site.
*  Performance :  99%
*  Accessibility: 92%
*  Best Practices:100%
*  SEO:           50%
*Lighthouse testing was performed using [Google Chrome Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) extension.
  * [My Lighthouse Testing Results](documentation/compound-lighthouse.png)

  * [Reset Button](documentation/compoundreset.mp4)
