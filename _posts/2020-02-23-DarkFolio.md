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

Let's start with the first 6 lines.
```yaml
title: Github User
author: Github User # Your name!
avatar: assets/avatar.png ## Your Avatar
baseurl: /
name_color: Red ##The color of your name
email: Your Email!
```
The `title` is the site title, displayed in every URL.

The `author` is the author, so you. It is the name displayed on the main page

The `avatar` is the author's avatar, to get your GitHub avatar, run
```bash
curl 'https://api.github.com/users/YOUR+USERNAME' -s | grep "avatar_url" | sed 's/"avatar_url": "//' | sed 's/",//'
```

The `baseurl` is the path, so, if you publishing your repo to `https://your+username.github.io/DarkFolio`, the `baseurl` would be `DarkFolio`.

The `name_color` is the color of the displayed name.

The `email` is your email, and is not used for anything yet.

Now, for the next 2 lines
```yaml
about: I am a Jekyll Theme by RedYetiDev. I contain a blog page, a index page, and a project page.
description: >
  Your amazing description!
```

The `about` is the little paragraph displayed on the main page.

the `description` is the description to display on Google Search, if you were ever to do that.

Now, for the `projects` section
```yaml
projects:
  - { name: "DarkFolio", repo: "https://github.com/RedYetiDev/DarkFolio", image: "../assets/DarkFolio.svg", website: "https://redyetidev.github.io/DarkFolio", package:"", details: I am a Jekyll Theme by RedYetiDev. I contain a blog page, a index page, and a project page." }
```
The `name` variable is the name of the project
The `repo` variable is the repo of the project
The `image` variable is the image to display, if none specified, a image of an ocean will be used. The path should either begin with `..` or the same thing that you used in `baseurl`. [e.g. ../assets/avatar.png could also be /DarkFolio/assets/avatar.png.]

The `website` variable is the homepage of your project, (Optional)
The `website` variable is the homepage of your project, (Optional)
The `package` variable is a package of the project, [e.g. https://npmjs.com/package/_____]
The `details` variable is a small paragraph to display about your project.
You can repeat these for how ever many projects you have.


Next, `Social Links`

```yaml
social_links:
  github: RedYetiDev
```
The social links currently only supports `github`. Either put your username in this variable or put your username followed by a `/` followed by a repo, [e.g. RedYetiDev, or if I wanted to do the DarkFolio repo `RedYetiDev/DarkFolio`]

Lastly, `permalink`
```yaml
permalink: /:title/
```
The `permalink` specifies how to use links. The reason it is set to `/:title/`, is so the URL of the posts don't look like `/Year/Month/Day/Title`, instead they are `/Title`.
You can change this if you want to change the links to the posts.

#### Creating Posts
To create a new post, add a new file to the `_posts` directory.
The file's name must look like so `YEAR-MONTH-DAY-TITLE.md`.
For example, The year should be 4 digits, [e.g. 2021], the month and day should both be 2 digits [e.g. 02 or 31], and any spaces in the title should be seperated by a dash.

At the top of the file, the following should be present
```yaml
---
layout: post
title:  "Welcome to DarkFolio"
description: "How to use DarkFolio"
image: "../assets/avatar.svg"
---
```
The `layout` should always be set to `post`
The `title` is the title of the post
The `description` is the description of the post
The `image` is the description of the post, it should begin with `..` or your base url. If none specified, the image used will be a image of the ocean.
