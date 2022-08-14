# Boxing Quizzard

This website is a quiz game that will test the online users knowledge about boxing. A boxing fan might be able to answer the questions easily but if the user is not then this game will provide enough challenge to entertain them.

![Screenshot](/assets/images/js_responsive.png)

* # Navigation Bar

  * The naviagtion bar is featured only in one page, it will reset the page when it is clicked.
  * It has a background color of #be2d2d and a color of #ffffff.
  * There is no hover effect applied on this.

  ![homepage_screenshot](/assets/images/home.png)

* # The Landing image

  * The landing image  is selected to synchronized with the game title "Boxing Quizzard".
  * It has an audio effect for the user to play to have a feel of a boxing event and also entertain the online user while playing the Quiz.
  * It is also featured with a Welcome Page/Div for the online user to create a username before it can start playing the game.
  * The game can only start once the online user enters a username.
  * Any value is accepted for the username field to validate input.
  * A  linear-gradient was use for the color combination on the Welcome Page.

  ![Landing_image_screenshot](/assets/images/landing_page.png)

* # The Start Button
  
  * This button displays once the online user create a username and clicks the submit button.
  * By clicking the "Let's box to start the game!", the first question will then be displayed.

  ![screenshot_start_button](/assets/images/start_btn.png)

* # The Score Area

  * This is the area where the online user will see their correct and incorrect answers when a button is clicked.
  * The online user must only  click once to get the exact score .
  * The online user must click the homepage to reset the score back to zero.

  ![screenshot_score_area](/assets/images/score_area.png)

* # The Feedback

  * This paragraph is clickable, it allows the online user to open and close the form container.
  * It is coded using a javascript event listener for easy access to online user to fill up the feedback form.
  * The background color of the feedback form  has two combination of colors using the linear-gradient code in style.css.

  ![feedback](/assets/images/feedback.png)

  ![feedback_form](/assets/images/feedback_form.png)

* # The Question Area

  * The Question Area container opens once the submit button and start button is click by the online user.
  * The user has three choices, if click by the user it will increment the score in the score area.
  * Once the user clicks the any button the border color and question will transform into #be2d2d color effect.

  ![question_container](/assets/images/question_container.png)

  ![question_container1](/assets/images/question_container1.png)

* # The Footer

  * This section has links to social media sites and opens a new tab to allow eeasy navigation for the user.
  * It has a logo of a boxing gloves for the online user to interact and  identify the brand of a company or a website.

  ![footer](/assets/images/footer.png)

# Testing

  * The Boxing Quizzard site was tested manually on Samsung Mobile A21 mobile and Samsung galaxy tablet A7 lite.
  * It was sytled in different screen sizes and are responsive using the chrome developer tools.

  This are the screenshots from the Samsung A21 mobile and Galaxy Tab A7 Lite:

  ![A21_mobile](/assets/images/a21_screenshot.png)
  ![A7_lite](/assets/images/galaxy_a7_lite.png)


# Validator testing

  * HTML

    * Errors were found when passing through the official [W3C validator](https://validator.w3.org/), errors are corrected and returns fine.

  * CSS

    * Error found when passing through the official validator [Jigsaw](https://jigsaw.w3.org/css-validator/),fixed error and reutrn clean after revalidation.

  * JS

    * No errors found but warnings of missing semi-colons and some const variables when passing through [Jshint](https://jshint.com/), semi-colons were corrected but ignore some  of the warnings as I do not have much understanding  of it yet.

* # Accessability

  * I can confirmed that the color and fonts are easy to read in mobile and desktop by running the hompage through lighthouse in devtools.

    * Desktop Accesability Score

      ![Desktop_score](/assets/images/accesability.png)

    * Mobile Acessability Score

      ![Mobile](/assets/images/mobile_accessability.png)  

# Deployment

  * The site was deployed to GitHub pages. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the Settings tab,
    * From the source section drop-down menu, select the Master Branch,
    * After selecting the Master branch, click save,
    * Once the master branch has been selected, the page will be automatically refreshed or can be done manually too and a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://markpm-code.github.io/boxing-quizzard2/





