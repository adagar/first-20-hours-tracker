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

    <!-- side nav -->
    <ul class="sidenav side-menu" id="side-menu">
        <li><a class="subheader">First 20 Hours - Tracker</a></li>
        <li><a href="/" class="waves-effect">Home</a></li>
        <li><a href="/pages/about.html" class="waves-effect">About</a></li>
        <li><div class="divider"></div></li>
        <li><a href="/pages/contact.html" class="waves-effect">
            <i class="material-icons">mail_outlines</i>contact</a>
        </li>
    </ul>

    <!--skills-->
<div class="skills grey-text text-darken-1">
    <div class="container">
            <h6 class="center">Skills</h6>
    </div>
</div>

    <!--Add Skill Button-->
    <div class="center">
        <a class="btn-floating btn-small add-btn sidenav-trigger" data-target="side-form">
            <i class="material-icons">note_add</i>
        </a>
    </div>

    <!--Add skill side nav-->
    <div id="side-form" class="sidenav side-form">
        <form class="add-skill container section">
            <h6>New Skill</h6>
            <div class="divider"></div>
                <div class="input-field">
                    <input placeholder="e.g. Drawing" id="skill-content" type="text" class="validate">
                    <label for="skill-content">I want to learn:</label>
                </div>
                <div class="input-field">
                    <input placeholder="e.g. Course, Video, Book"id="skill-resource" type="text" class="validate" placeholder="e.g. Class, book, video">
                    <label for="skill-resource">Resources:</label>
                </div>
            <div class="input-field center">
                <button class="btn-small">Start Learning!</button>
            </div>
        </form>
    </div>

    <!--Add session side nav-->
    <div id="side-session-form" class="sidenav side-form">
        <form class="add-session container section">
            <h6>New Session</h6>
            <div class="divider"></div>
            <div>
                <div class="input-field">
                    <input id="practice-content" type="text" class="validate">
                    <label for="practice-content">Today I practiced:</label>
                </div>
                <div class="input-field">
                    <input id="practice-time" type="number" class="validate">
                    <label for="practice-time">Time Practicing:</label>
                    <span class="helper-text">Minutes</span>
                </div>
            </div>
            <div class="input-field center">
                <button class="btn-small">Practice!</button>
            </div>
        </form>
    </div>

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