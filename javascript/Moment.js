(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
           }
           form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
          //Initialize Firebase
          
            const config = {
            apiKey: "AIzaSyAOcnwn6Ft9KRfOP31TeY1x6j66gxMPZIs",
            authDomain: "classroomtest-2d9be.firebaseapp.com",
            databaseURL: "https://classroomtest-2d9be.firebaseio.com",
            projectId: "classroomtest-2d9be",
            storageBucket: "classroomtest-2d9be.appspot.com",
            messagingSenderId: "330491801359",
            appId: "1:330491801359:web:3964b52cf93c716b"
          };

          firebase.initializeApp(config);
  
          var database = firebase.database();