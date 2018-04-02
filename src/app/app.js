<ion-list>
        <!-- this is the info slides about how to use our app as soon you open it -->
          <ion-slides pager>

              <ion-slide style="background-color: green">
                <h2>Slide 1</h2>
              </ion-slide>
            
              <ion-slide style="background-color: blue">
                <h2>Slide 2</h2>
              </ion-slide>
            
              <ion-slide style="background-color: red">
                <h2>Slide 3</h2>
              </ion-slide>
            
            </ion-slides>
<!-- Profile Login/Create account page -->
// Login screen
const loginHTML = `<main class="login container">
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet text-center heading">
      <h1 class="font-100">Log in or signup</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
      <form class="form">
        <fieldset>
          <input class="block" type="email" name="email" placeholder="email">
        </fieldset>

        <fieldset>
          <input class="block" type="password" name="password" placeholder="password">
        </fieldset>

        <button type="button" id="login" class="button button-primary block signup">
          Log in
        </button>

        <button type="button" id="signup" class="button button-primary block signup">
          Sign up and log in
        </button>
      </form>
    </div>
  </div>
</main>`;
// Add a new user to the list
const addUser = user => {
  const userList = document.querySelector('.user-list');

  if(userList) {
    // Add the user to the list
    userList.insertAdjacentHTML('beforeend', `<li>
      <a class="block relative" href="#">
        <img src="${user.avatar}" alt="" class="avatar">
        <span class="absolute username">${user.email}</span>
      </a>
    </li>`);

    // Update the number of users
    const userCount = document.querySelectorAll('.user-list li').length;

    document.querySelector('.online-count').innerHTML = userCount;
  }
};
// Show the login page
const showLogin = (error = {}) => {
  if(document.querySelectorAll('.login').length) {
    document.querySelector('.heading').insertAdjacentHTML('beforeend', `<p>There was an error: ${error.message}</p>`);
  } else {
    document.getElementById('app').innerHTML = loginHTML;
  }
};
// Find all users
const users = await client.service('users').find();

users.data.forEach(addUser);
};
document.addEventListener('click', async ev => {
  switch(ev.target.id) {
  case 'signup': {
    // For signup, create a new user and then log them in
    const credentials = getCredentials();

    // First create the user
    await client.service('users').create(credentials);
    // If successful log them in
    await login(credentials);

    break;
  }
  case 'login': {
    const user = getCredentials();

    await login(user);

    break;
  }
  case 'logout': {
    await client.logout();

    document.getElementById('app').innerHTML = loginHTML;

    break;
  }
}
});
          //these are the profile items
  <!-- <ion-item>
    <ion-label>Age</ion-label>
    <ion-select [(ngModel)]="age">
      <ion-option value="14 - 17">Highschool</ion-option>
      <ion-option value="18+">Beyond Highschool</ion-option>
    </ion-select>
    <ion-label>Gender</ion-label>
    <ion-select [(ngModel)]="gender">
        <ion-option value="male">Male</ion-option>
        <ion-option value="female">Female</ion-option>
      </ion-select>
      <ion-label>Interested Majors</ion-label>
    <ion-select [(ngModel)]="interested majors" multiple="true" cancelText="Nvm" okText="Done">
        <ion-option value="computer sciences"selected="true">Computer Sciences</ion-option>
        <ion-option value="business" selected="true">Business</ion-option>
        <ion-option value="graphic-design">Graphic-Design</ion-option>
      </ion-select>
  </ion-item> -->
        <!-- This should be available on each swipe/page -->
        <ion-menu [content]="content">
            <ion-header>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <button ion-item (click)="openPage(homePage)">
                  Home
                </button>
                <button ion-item (click)="openPage(schoolsPage)">
                  Favorites
                </button>
                <button ion-item (click)="openPage(eventsPage)">
                  Events
                </button>
                <button ion-item (click)="closeMenu()">
                  Close Menu
                </button>
              </ion-list>
            </ion-content>
          </ion-menu>
          
          <ion-nav id="nav" #content [root]="rootPage"></ion-nav>
      <ion-header>
          <ion-navbar>
            <ion-buttons start>
              <button ion-button icon-only>
                <ion-icon name="contact"></ion-icon>
              </button>
            </ion-buttons>
        
            <ion-buttons end>
              <button ion-button icon-only>
                <ion-icon name="search"></ion-icon>
              </button>
            </ion-buttons>
          </ion-navbar>
        </ion-header>
        
        <ion-list>
          <ion-item>
            Left Icon Button
            <button ion-button outline item-end icon-left>
              <ion-icon name="star"></ion-icon>
              Left Icon
            </button>
          </ion-item>
        </ion-list>
        <ion-card>

            <ion-item>
              <ion-avatar item-start>
                <img src="school mascot image png">
              </ion-avatar>
              <h2>Wilmington University</h2>
              <p>??? Miles</p>
            </ion-item>
          
            <img src="img/advance-card-bttf.png">
          
            <ion-card-content>
              <p>Brief summary of school</p>
            </ion-card-content>
            <ion-row>
              <ion-col>
                <button ion-button icon-left clear small>
                  <ion-icon name="heart"></ion-icon>
                  <div>Favorite</div>
                </button>
              </ion-col>
              <ion-col>
                <button ion-button icon-left clear small>
                  <ion-icon name="text"></ion-icon>
                  <div>Views</div>
                </button>
              </ion-col>
              <ion-col center text-center>
              </ion-col>
            </ion-row>
          </ion-card>
          <ion-item>
              <ion-label>Tour Date</ion-label>
              <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>
            </ion-item><ion-list>
            <!-- this is the info slides about how to use our app as soon you open it -->
              <ion-slides pager>
    
                  <ion-slide style="background-color: green">
                    <h2>Slide 1</h2>
                  </ion-slide>
                
                  <ion-slide style="background-color: blue">
                    <h2>Slide 2</h2>
                  </ion-slide>
                
                  <ion-slide style="background-color: red">
                    <h2>Slide 3</h2>
                  </ion-slide>
                
                </ion-slides>
    <!-- Profile Login/Create account page -->
    // Login screen
    const loginHTML = `<main class="login container">
      <div class="row">
        <div class="col-12 col-6-tablet push-3-tablet text-center heading">
          <h1 class="font-100">Log in or signup</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form class="form">
            <fieldset>
              <input class="block" type="email" name="email" placeholder="email">
            </fieldset>
    
            <fieldset>
              <input class="block" type="password" name="password" placeholder="password">
            </fieldset>
    
            <button type="button" id="login" class="button button-primary block signup">
              Log in
            </button>
    
            <button type="button" id="signup" class="button button-primary block signup">
              Sign up and log in
            </button>
          </form>
        </div>
      </div>
    </main>`;
    // Add a new user to the list
    const addUser = user => {
      const userList = document.querySelector('.user-list');
    
      if(userList) {
        // Add the user to the list
        userList.insertAdjacentHTML('beforeend', `<li>
          <a class="block relative" href="#">
            <img src="${user.avatar}" alt="" class="avatar">
            <span class="absolute username">${user.email}</span>
          </a>
        </li>`);
    
        // Update the number of users
        const userCount = document.querySelectorAll('.user-list li').length;
    
        document.querySelector('.online-count').innerHTML = userCount;
      }
    };
    // Show the login page
    const showLogin = (error = {}) => {
      if(document.querySelectorAll('.login').length) {
        document.querySelector('.heading').insertAdjacentHTML('beforeend', `<p>There was an error: ${error.message}</p>`);
      } else {
        document.getElementById('app').innerHTML = loginHTML;
      }
    };
    // Find all users
    const users = await client.service('users').find();
    
    users.data.forEach(addUser);
    };
    document.addEventListener('click', async ev => {
      switch(ev.target.id) {
      case 'signup': {
        // For signup, create a new user and then log them in
        const credentials = getCredentials();
    
        // First create the user
        await client.service('users').create(credentials);
        // If successful log them in
        await login(credentials);
    
        break;
      }
      case 'login': {
        const user = getCredentials();
    
        await login(user);
    
        break;
      }
      case 'logout': {
        await client.logout();
    
        document.getElementById('app').innerHTML = loginHTML;
    
        break;
      }
    }
    });