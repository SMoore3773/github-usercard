/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
  const entryPointINHTML = document.querySelector('.cards');
  console.log(entryPointINHTML);

  
  axios
    .get('https://api.github.com/users/SMoore3773')

    .then( response => {
      // Remember response is an object, response.data is an array.
        console.log(response);
        console.log(response.data);
          let cardDat = response.data;
          entryPointINHTML.appendChild(cardMaker(cardDat));
  })
  .catch( error => {
      console.log("Error:", error);
  })
   
    
    const data = {
      login: "SMoore3773",
      id: 52682117,
      node_id: "MDQ6VXNlcjUyNjgyMTE3",
      avatar_url: "https://avatars2.githubusercontent.com/u/52682117?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/SMoore3773",
      html_url: "https://github.com/SMoore3773",
      followers_url: "https://api.github.com/users/SMoore3773/followers",
      following_url: "https://api.github.com/users/SMoore3773/following{/other_user}",
      gists_url: "https://api.github.com/users/SMoore3773/gists{/gist_id}",
      starred_url: "https://api.github.com/users/SMoore3773/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/SMoore3773/subscriptions",
      organizations_url: "https://api.github.com/users/SMoore3773/orgs",
      repos_url: "https://api.github.com/users/SMoore3773/repos",
      events_url: "https://api.github.com/users/SMoore3773/events{/privacy}",
      received_events_url: "https://api.github.com/users/SMoore3773/received_events",
      type: "User",
      site_admin: false,
      name: "Sam Moore",
      company: null,
      blog: "",
      location: "Maryland",
      email: null,
      hireable: null,
      bio: "Aspiring full stack web developer with backgrounds ranging from public health to fine art and sculpture.",
      public_repos: 21,
      public_gists: 0,
      followers: 2,
      following: 3,
      created_at: "2019-07-08T23:48:02Z",
      updated_at: "2020-01-24T04:22:19Z",
    };
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(name => {
  axios
  .get(`https://api.github.com/users/${name}`)
    .then(response =>{
      let cardDat = response.data;
      entryPointINHTML.appendChild(cardMaker(cardDat));
    })
    .catch(error =>{
      console.log('error',error);
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardMaker(obj){

  //defining card elements
  const card = document.createElement('div');
  const cardImgUser = document.createElement('img');
  const cardInf = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUserName = document.createElement('p');
  const cardLoc = document.createElement('p');
  const cardProf = document.createElement('p');
  const cardProfLnk = document.createElement('a');
  const cardFollowersCt = document.createElement('p');
  const cardFollowingCt = document.createElement('p');
  const cardBio = document.createElement('p');

  //creating structure for elements
  card.appendChild(cardImgUser);
  card.appendChild(cardInf);
  cardInf.appendChild(cardName);
  cardInf.appendChild(cardUserName);
  cardInf.appendChild(cardLoc);
  cardInf.appendChild(cardProf);
  cardInf.appendChild(cardProfLnk);
  cardInf.appendChild(cardFollowersCt);
  cardInf.appendChild(cardFollowingCt);
  cardInf.appendChild(cardBio);

  //adding classes to elements
  card.classList.add('card');
  cardInf.classList.add('card-info');
  cardName.classList.add('name');
  cardUserName.classList.add('username');

  // adding content to the elements
  // cardName.textContent = obj.data.name;
  // cardImgUser.src = obj.data.avatar_url;
  // cardName.textContent = obj.data.name;
  // cardUserName.textContent = obj.data.login;
  // cardLoc.textContent = obj.data.location;
  // cardProf.textContent = 'Profile:';
  // cardProfLnk.textContent = obj.data.html_url;
  // cardProfLnk.href = obj.data.html_url;
  // cardFollowersCt.textContent = `Followers: ${obj.data.followers}`;
  // cardFollowingCt.textContent = `Following: ${obj.data.following}`;
  // cardBio.textContent = obj.data.data.bio;

  cardName.textContent = obj.name;
  cardImgUser.src = obj.avatar_url;
  cardName.textContent = obj.name;
  cardUserName.textContent = obj.login;
  cardLoc.textContent = obj.location;
  cardProf.textContent = 'Profile:';
  cardProfLnk.textContent = obj.html_url;
  cardProfLnk.href = obj.html_url;
  cardFollowersCt.textContent = `Followers: ${obj.followers}`;
  cardFollowingCt.textContent = `Following: ${obj.following}`;
  cardBio.textContent = obj.bio;

console.log(card);
return card;

}


// List of LS Instructors Github username's: 
  // tetondan
  // dustinmyers
  // justsml
  // luishrd
  // bigknell

