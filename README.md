# searchies
 A movie database search site <br>
 ![](https://media.giphy.com/media/5yaou1jFxTV6M/giphy.gif)<br>

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


### Overview

**Searchies** <br>
_https://epic-goldberg-ef1551.netlify.app/_

**Project Description** <br>
"Searchies" is a movie search site which will return movie, actor/actress, film movie details.
<br>

### Wireframes

[https://www.figma.com/file/ptiPJT9kCucBxeUPv9F6UO/Untitled?node-id=0%3A1](url)

<br>

### MVP

**Searchies** will search for movie information from an api and render those results in a list. Using React render-dom, the user will be able to click on a selected item, and the site will render a new component which will give a more detailed description of the search(ed) item(s).

<br>

#### Goals

- _React Class & Function Components._
- _Return API Data from Search Field Input Value._
- _Update DOM with Search Results._
- _Update DOM to Show More Detailed Information About Selected Item._
- _Get better at React State/PreState and Props._
- _Organize Files & Code Based on Components._

<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Will control main site navigation._ |
| AXIOS | _Will access API data ._ |
|   React Slick   | _Will provide site with slideshow function._ |

<br>

#### Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| The Movie DB |      yes     |_https://www.themoviedb.org/_ | _see below_ |


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

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | Class |   Y   |   Y   | _The App will be my main component._               |
|    Header    | Functional |   N   |   Y   | _The header will contain the navigation and logo._               |
|  Search  | Class |   Y  |   Y   | _The search will send data to API which be returned and set in state._       |
|   Search Results    |   Class    |   Y   |   Y   | _The search results will be displayed in card form on page._      |
| Search Detail | Class |   Y   |   Y   | _The search Details will render individual card details._                 |
|    Footer    | Functional |   N   |   Y   | _The footer will show info about site and api(s) used._ |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Search & API    |    H     |     5 hrs      |     5 hrs     |    5 hrs    |
| Search Results Component |    H     |     5 hrs      |    5 hrs     |    5 hrs     |
| Search Details Component |    H     |     5 hrs      |    5 hrs     |    5 hrs     |
| JSX |    M     |     5 hrs      |    7 hrs     |    7 hrs     |
| CSS |    H     |     6 hrs      |    8 hrs     |    8 hrs     |
| Responsive |    H     |     4 hrs      |    5 hrs     |    5 hrs     |
| TOTAL               |          |     35 hrs      |     35 hrs     |     35 hrs     |

<br>

#### Helper Functions

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
|  | _Coming soon._ |

<br>

### Post-MVP

- _Save searches to local storage._
- _CSS Animations._
- _Add video(s)._
- _User sign-in._

<br>

***

## Project Delivery

### Code Showcase
SASS & CSS Grid 
```
.features__wrapper {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 50px repeat(3, 1fr);
	grid-auto-flow: dense;
	grid-auto-rows: 200px;
	@media only screen and (max-width: 799px){
		grid-template-rows: 50px repeat(2, 1fr);
	}
}
```

### Code Issues & Resolutions
As the site came together, I realized I was going to have issues, so midway through the project, I reworked my component structure. Initially, the search and search results components were in the same file. By changing the component structure, I was able to fix the earlier problems I had with passing state and props.
