$(document).ready(function(){

    firebase.auth().languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      });
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': function() {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      });
      recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaWidgetId = widgetId;
      });
      var recaptchaResponse = grecaptcha.getResponse(window.recaptchaWidgetId);
      var phoneNumber = getPhoneNumberFromUserInput();
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
        });
        
        var code = getCodeFromUserInput();
        confirmationResult.confirm(code).then(function (result) {
          // User signed in successfully.
          var user = result.user;
          // ...
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    
        var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
        firebase.auth().signInWithCredential(credential);
    
    
    
        // Turn off phone auth app verification.
    firebase.auth().settings.appVerificationDisabledForTesting = true;
    
    var phoneNumber = "+523318552447";
    var testVerificationCode = "123456";
    
    // This will render a fake reCAPTCHA as appVerificationDisabledForTesting is true.
    // This will resolve after rendering without app verification.
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    // signInWithPhoneNumber will call appVerifier.verify() which will resolve with a fake
    // reCAPTCHA response.
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          // confirmationResult can resolve with the whitelisted testVerificationCode above.
          return confirmationResult.confirm(testVerificationCode)
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
        });
    
    
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });


});

