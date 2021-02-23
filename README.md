## Portfolio Theme
For a live demo, see my website, as it uses this theme.
[redyetidev.github.io](https://redyetidev.github.io)
### To Install
1. Fork The Repo
2. Clone the repo using `git clone https://github.com/YOUR_USERNAME/Portfolio-Theme`
  - If you are planning to use this on the `YOURUSERNAME.github.io` page, rename the repo to `YOURUSERNAME.github.io`
3. Modify `_config.yml` with your information
  - Here are the instructions on what to add to the `_config.yml` file:

  ```yaml
  title: The Title Of The Website
  author: Your Name
  avatar: Your Avatar image (See FootNote 1)
  name_color: The color of your name
  email: Your email

  about: A few sentances or so about you. You can use HTML elements. [e.g. <strong>, <b>, <code>, etc]
  description: >
    The description for your website

  projects:
    - Your Projects, Follow the format below; Including the package and website are optional. Add as many as you want
    - { name: "Project", repo: "Project Repo", image: "Project Image", details: "Description (You can use HTML elements)", website: "Website", package: "Package"}

  social_links:
    github: Your GitHub Username

  ```
##### Footnotes
---
1: If you don't know your avatar image, you can get the url by running:
```bash
curl 'https://api.github.com/users/YOUR+USERNAME' -s | grep "avatar_url" | sed 's/"avatar_url": "//' | sed 's/",//'
```
