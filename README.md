In this project, let's build a **Fitness Calculator** by applying the concepts we have learned till now.

### Refer to videos below:

<div style="text-align: center;">
  <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://www.loom.com/share/d688d1c07bce450ca0017e7853e72298?sid=819489a4-0cd2-4eb1-a3c5-28423900b11f" type="video/mp4">
  </video>
</div>
<br/>

### Design Files
For small devices upto the maximum width of 600px and for medium to large devices upto the maximum width of 1200px


### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user, tries to access the Home then the page should be navigated to Login Route
  - When an _authenticated_ user, tries to access the Home,Item Details then the page should be navigated to the respective route
  - When an _authenticated_ user, tries to access the Login Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an _authenticated_ user opens the Home Route
    - Clicks on the **Fitness Workouts** button, then the page should be navigated to the Home Route

- **Fitness Workouts**

  - When an _authenticated_ user opens the Home Route

    - An HTTP GET request should be made to **Profile API URL**
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/jobby-app-profile-failure-lg-output.png) should be displayed
    with empty strings as initial values
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of workouts received from the response
    - When a value is provided in the search input and search icon button is clicked
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of workouts received from the response
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of workouts received from the response
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of workouts received from the response
- **Header**
  - When the **Home** link is clicked, then the page should be navigated to the Home Route

  - When the **Logout** button is clicked, then the page should be navigated to the Login Route

<br/>

**Login API**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Request:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

**Profile API**

#### API: `https://apis.ccbp.in/profile`

#### Method: `GET`

#### Description:

Returns a response containing the profile details

#### Sample Response

```json
{
  "profile_details": {
    "name": "Rahul Attuluri",
    "profile_image_url": "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
    "short_bio": "Lead Software Developer and AI-ML expert"
  }
}
```# FitC
