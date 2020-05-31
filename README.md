# searchies
 A movie database search site

# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning

> This section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, it's recommended that you copy and paste the raw template code. The content provided is example content ONLY. You must make changes to all sections as they relate to your own project.

<br>

### Overview

**Searchies** 

**Project Description** "Searchies" is a movie search site which will return movie, actor/actress, film movie details._

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Body

![Dummy Link](url)

- Desktop Resource Index

![Dummy Link](url)

- Desktop Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

<br>

### MVP

> The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_ **Searchies** will search for movie information from an api and render those results in a list. Using React render-dom, the user will be able to click on a selected item, and the site will render a new component which will give a more detailed description of the search(ed) item(s)  ._

<br>

#### Goals

- _React class & function components._
- _Return API data from Search field input value._
- _Update DOM with search results._
- _Update DOM to show more detailed information about selected item._
- Get better at React State/PreState and Props_
- _Organize components and code._

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Will control main site navigation._ |
| AXIOS | _Will access API data ._ |
|   React Links   | _Will provide site links between site content._ |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| The Movie DB |      yes     |_https://www.themoviedb.org/_ | _see below_ |
| The Movie DB |      yes     |_https://obdb.com/ _ | _see below_ |

```
JSON data sample from your API goes here.
{
  "adult": false,
  "backdrop_path": "/kN0s7VCXZinNXP9qV0yDHOVrZn3.jpg",
  "belongs_to_collection": {
    "id": 10,
    "name": "Star Wars Collection",
    "poster_path": "/r8Ph5MYXL04Qzu4QBbq2KjqwtkQ.jpg",
    "backdrop_path": "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  "budget": 11000000,
  "genres": [
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
  "id": 11,
  "imdb_id": "tt0076759",
  "original_language": "en",
  "original_title": "Star Wars",
  "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
  "popularity": 58.737,
  "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
  "production_companies": [
    {
      "id": 1,
      "logo_path": "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      "name": "Lucasfilm Ltd.",
      "origin_country": "US"
    },
    {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1977-05-25",
  "revenue": 775398007,
  "runtime": 121,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "A long time ago in a galaxy far, far away...",
  "title": "Star Wars",
  "video": false,
  "vote_average": 8.2,
  "vote_count": 13711
}
```

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ CSS
|__ components/
      |__ App.jsx
      |__ Header.jsx
      |__ Main.jsx
      |__ Search.jsx
      |__ SearchDetail.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Search  | Class |   y  |   y   | _The search will send data to API which be returned and set in state._       |
|   Search Results    |   class    |   y   |   y   | _The search results will be displayed in card form on page._      |
| Search Detail | Class |   y   |   y   | _The search Details will render individual card details._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about site and api(s) used._ |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Search & API    |    H     |     5.5 hrs      |     tbd. hrs     |    tbd. hrs    |
| Search Results Component |    H     |     5 hrs      |    tbd. hrs     |    tbd. hrs     |
| Search Details Component |    H     |     5 hrs      |    tbd. hrs     |    tbd. hrs     |
| JSX |    M     |     5 hrs      |    tbd. hrs     |    tbd. hrs     |
| CSS |    H     |     6 hrs      |    tbd. hrs     |    tbd. hrs     |
| Responsive |    H     |     4 hrs      |    tbd. hrs     |    tbd. hrs     |
| TOTAL               |          |     35.5 hrs      |     tbd. hrs     |     tbd. hrs     |

<br>

#### Helper Functions

> Use this section to document all helper functions, i.e. generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| TBD | _Coming soon._ |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Save searches to local storage._
- _CSS Animations._
_Add video(s)._
_User sign-in._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
code snippet here
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
