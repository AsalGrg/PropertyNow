<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AsalGrg/PropertyNow">
    <img src="https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774856926/PropertyNow_smrgr9.svg" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">PropertyNow</h3>

  <p align="center">
    Explore the best properties in your city with ease. From cozy apartments to luxury villas, we help you discover the perfect place to call home.
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    &middot;
  </p>
</div>


<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

PropertyNow is a real estate application, that lets you browse, and choose favourite properties around you. You can register, login to your account, view your own dashboard. Looking for real estate has never been this easy

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![TailwindCss][Tailwind.css]][Tailwind-url]
- [![Node][Node.js]][Node-url]
- [![Express][Express.js]][Express-url]
- [![Mongo][MongoDB]][MongoDB.url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node
  ```sh
  nvm install v22.15.0
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AsalGrg/PropertyNow.git
   ```
2. Change git remote url to avoid accidental pushes to base project

   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

3. Install NPM packages (For Frontend and Backend seperately)
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To run the application, after installing all the packages, you can enter following commands:

### For Frontend

1. Start the application (use <bold>port: 5173</bold> for no CORS policy issue)
   ```sh
   npm run dev
   ```

### For Backend

1. Start the application (with hot reload)

```sh
 npm run dev
```

2. Start the application (without hot reload)

```sh
 npm start
```

#### Registered User for quick test:

_Username: John Doe_
<br/>
_Password: 12345678_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Application Flow -->

## Application Flow

### Initial Page

At the initial loading of the application, home page will be displayed. In home page there is hero, and properties listing sections. Without login, visitors can can view all the properties listing. The visitors can only view the properties, but cannot add to favorite unless they are logged in.

![PropertyNow Screen Shot][product-screenshot]
![PropertyNow Screen Shot][product-screenshot2]

### Login & Signup Flow

When a user visits the application without being logged in, the navigation bar displays Login and Sign Up options. Visitors can browse and explore properties, but certain features such as favoriting properties are restricted and require authentication.

![PropertyNow Navbar Screen Shot][product-navbar-screenshot]

- #### User Registration

  New users can create an account through the Sign Up page by providing the required information.
  After successful registration, the user is redirected to the Login page to authenticate their account.
  ![PropertyNow Register Screen Shot][product-register-screenshot]
  ![PropertyNow Register Screen Shot][product-register-success-screenshot]

- #### User Login
  Once the user logs in with valid credentials, the system generates a <bold>JWT (JSON Web Token)</bold> for authentication. This token is stored in the user's browser cookies and remains valid for 30 minutes.

After successful login, the user is redirected to the Home page. The navigation bar is then updated to display the user's profile name instead of the Login and Sign Up buttons. From the navbar, the user can also access their Dashboard, where they can manage their account and activities.

The stored JWT is automatically included with subsequent requests, allowing the application to verify the user's identity and grant access to authenticated features such as <bold>adding properties to favorites, dashboard</bold>.
![PropertyNow Login Screen Shot][product-token-screenshot]
![PropertyNow Login Screen Shot][product-login-screenshot]
![PropertyNow Login Screen Shot][product-navbar-logged-screenshot]

### Favorite/Unfavorite Properties

Once a user is logged in, they can view all property listings along with a love (heart) icon displayed on each property card.

- If the property has already been added to the user's favorites, the heart icon appears filled.
  ![PropertyNow Property Favorite Screen Shot][product-property-favorite-screenshot]

- If the property is not in the user's favorites, the heart icon appears unfilled.
  ![PropertyNow Property Normal Screen Shot][product-property-normal-screenshot]

Users can manage their favorite properties directly from the listing page:

<bold>Add to Favorites</bold>: By clicking the unfilled heart icon, the property is added to the user's favorites list and the icon changes to filled, indicating that the property has been favorited.
<bold>Remove from Favorites</bold>: If the property is already in the favorites list, clicking the filled heart icon will remove the property from favorites, and the icon will return to the unfilled state.

This feature allows users to quickly save and manage properties they are interested in for future reference.


### User dashboard

Once a user is logged in, they can access their Dashboard by clicking on their profile name displayed in the navbar.

The Dashboard provides a personalized view where users can manage and review their account information. It includes the following sections:
<bold>User Details</bold>: Displays basic information about the user, such as their name and email.
<bold>Favorite Properties</bold>: Shows a list of all properties that the user has added to their favorites. From this section, users can easily revisit properties they are interested in.

This dashboard acts as a central place for users to view their profile information and manage their saved properties within the application.
![PropertyNow User Dashboard Screen Shot][product-user-dashboard-screenshot]
![PropertyNow User Dashboard 2 Screen Shot][product-user-dashboard-2-screenshot]


## Contact

Your Name - [@linkedIn](https://www.linkedin.com/in/asal-gurung-505951291/) - gurung.asal.06@gamil.com.com

Project Link: [https://github.com/AsalGrg/PropertyNow](https://github.com/AsalGrg/PropertyNow)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/asal-gurung-505951291/
[product-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774857452/Screenshot_2026-03-30_133832_hj4jkn.png
[product-screenshot2]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774857451/Screenshot_2026-03-30_133920_dviejq.png
[product-navbar-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774860993/NavbarInitial_vnu51o.png
[product-register-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774861240/Screenshot_2026-03-30_144519_ylk17l.png
[product-register-success-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774861180/Screenshot_2026-03-30_144416_rer1bw.png
[product-token-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774862757/token_sjvyug.png
[product-login-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774861512/Screenshot_2026-03-30_144951_kvjjwc.png
[product-navbar-logged-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774861712/navbar_wbdj1v.png
[product-property-favorite-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774862073/Screenshot_2026-03-30_145851_i3c4j2.png
[product-property-normal-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774862087/Screenshot_2026-03-30_145926_pwg1wg.png
[product-user-dashboard-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774862516/Screenshot_2026-03-30_150622_pucsk2.png
[product-user-dashboard-2-screenshot]: https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774862523/Screenshot_2026-03-30_150650_asmwnl.png


<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[Node.js]: https://img.shields.io/badge/Node-green?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Tailwind.css]: https://img.shields.io/badge/Tailwind%20css-blue?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[MongoDB]: https://img.shields.io/badge/Mongo%20db-green?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB.url]: https://www.mongodb.com/
