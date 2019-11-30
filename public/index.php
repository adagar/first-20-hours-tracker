<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>First 20 Hours - Tracker</title>
    <!-- materialize icons, css & js -->
  <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link type="text/css" href="/css/styles.css" rel="stylesheet">
  <script type="text/javascript" src="/js/materialize.min.js"></script>
  <link rel="manifest" href="/manifest.json">

  <!--ios support-->
  <link rel="apple-touch-icon" href="/icons/icons-96x96.png">
  <meta name="apple-mobile-web-app-status-bar" content="#ad3f43">
  <meta name="theme-color" content="#fa7952">
</head>
<body class="yellow lighten-2">
    <?php include "./components/header.html" ?>
    <?php include "./components/sidenav.html" ?>
    <?php include "./components/skills.html" ?>
    <?php include "./components/add-skill.html" ?>
    <?php include "./components/add-session.html" ?>
    
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-firestore.js"></script>
    
    <script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-analytics.js"></script>
    
    <script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyDNMSFYz5NnAkcM9JYJhCcw7Bi-jpYmPow",
        authDomain: "hour-tracker-f3737.firebaseapp.com",
        databaseURL: "https://hour-tracker-f3737.firebaseio.com",
        projectId: "hour-tracker-f3737",
        storageBucket: "hour-tracker-f3737.appspot.com",
        messagingSenderId: "1025199454616",
        appId: "1:1025199454616:web:94d5b34657ea7c73dd93ed",
        measurementId: "G-JGR67TNSQP"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
      firebase.analytics();
    </script>
        <script src="/js/ui.js"></script>
        <script src="/js/app.js"></script>
        <script src="/js/db.js"></script>
</body>
</html>