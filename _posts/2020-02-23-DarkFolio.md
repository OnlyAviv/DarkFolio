---
layout: post
title:  "Welcome to DarkFolio"
description: "How to use DarkFolio"
image: "../assets/avatar.svg"
---

# DarkFolio
### How To Use DarkFolio
<br><br>
# Installation
1. Fork the DarkFolio Repo from [here](https://github.com/redyetidev/DarkFolio)
2. Clone your newly forked repo using this command:
```
git clone https://github.com/Your_Username/DarkFolio
```
3. Done!

# How To Use
Following the instructions below will help you understand how to use and customize DarkFolio.
<br><br>
#### Modifying the `_config.yml` file
The `_config.yml` file looks like the one below
<iframe src="https://redyetidev.github.io/embedCode/sourcecode/index.html?url=https://raw.githubusercontent.com/RedYetiDev/DarkFolio/main/_config.yml&numbers=true" width="100%" height="400"></iframe>

Let's start with the first 5 lines.
```yaml
title: Github User
author: Github User # Your name!
avatar: ../img/avatar.png ## Your Avatar
name_color: Red ##The color of your name
email: Your Email!
```
The `title` is the site title, displayed in every URL.
The `author` is the author, so you. It is the name displayed on the main page
The `avatar` is the author's avatar, to get your GitHub avatar, run
```bash
curl 'https://api.github.com/users/YOUR+USERNAME' -s | grep "avatar_url" | sed 's/"avatar_url": "//' | sed 's/",//'
```

The `name_color` is the color of the displayed name.
Check the example below
<div id="emc_container" style="width: 100%; text-align: center">
  <input id="emc_color" placeholder="Insert Color">
  <button style="btn btn-dark" onclick="emc()">See Example</button>
  <br>
  <br>
  <div style="width: 100%" class="bg-dark d-flex flex-column justify-content-center align-items-center">
      <h1 style="color: white" id="emc_header">Example</h1>
  </div>
  <script>
  function emc() {
    $('#emc_header').text("")
    var $all_msg = $('#emc_header');
    var $wordList = "Hello 👋, I am DarkFolio".split("");
    $wordList[6] = "👋"
    delete $wordList[7]
    $.each($wordList, function(idx, elem) {
      //create a span for the letter and set opacity to 0
      if (idx > 14) {
        var newEL = $("<span/>").text(elem).css({
          opacity: 0,
          color: $("#emc_color").val()
        });
      } else {
        var newEL = $("<span/>").text(elem).css({
          opacity: 0,
        });
      }
      //append it to the welcome message
      newEL.appendTo($all_msg);
      //set the delay on the animation for this element
      newEL.delay(idx * 33);
      //animate the opacity back to full 1
      newEL.animate({
        opacity: 1
      }, 500);
    });
  }
  </script>
</div>
