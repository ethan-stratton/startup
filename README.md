TODO: Consider making your navbar stay in place and not increase or decrease in size based on which page the user navigates to

# **Real Estate Finder for Students - Startup Deliverable**

To make it easier to see what changes occurred, I'll write them briefly here:
Added four new html pages besides index.html. They all have links to each other and represent basic functionality of a website with a login page, 
a dashboard, a database and realtime websocket page. Though none of them have functionality yet.

## **Elevator Pitch**

Finding student housing can be a stressful process, especially with so many options and limited time. Our real estate finder simplifies this by offering BYU students a seamless platform to search for affordable, student-friendly apartments, sorted by proximity to campus, budget, and amenities. Integrated with real-time data on availability and pricing, the platform ensures that students get up-to-date listings with secure login and user profiles. It's the perfect solution for college students looking for the best housing in their area without hassle.

## **Key Features**

- **Real-time Apartment Listings**: Students can search for nearby apartments, view real-time availability, and filter by rent, location, and amenities.
- **User Authentication**: Users can create profiles, save their favorite listings, and receive personalized suggestions based on their search history.
- **Persistent Data**: Apartment listings, user profiles, and saved searches are stored in a secure database for future access.
- **WebSocket Support**: Real-time updates on apartment availability and new listings.
- **Responsive Design**: The platform is fully responsive and optimized for both mobile and desktop devices.
- **3rd-Party API Integration**: Real-time maps for apartment locations via Google Maps API, and integration with rental price analytics services.

## **Technology Usage**

### 1. **HTML** 
   - The structure of the site will consist of several key pages:
     - **Home**: Search bar for users to input their location or school name. (so far have a home page w/ no functionality)
     - **Results**: List of apartment results based on search filters. (no searchability yet)
     - **Listing Detail Page**: Detailed view of the apartment with pricing, description, and photos. (.html page available, unimplemented)
     - **User Profile**: A personalized dashboard for each user to manage saved listings and search preferences. (unimplemented outside of login)

### 2. **CSS** (In progress)
   - **Styling**: Clean, modern design using CSS Grid and Flexbox to layout the pages. (added a bunch of CSS for every page, the flexboxes are a little wonky but otherwise things look OK. Some of the navbar links are weird and should be changed down the line. Each page has some consistent CSS styling and it looks a lot better than ebfore.)
   - **Animations**: Subtle animations on hover states for buttons and real-time search filters. (...still no animations yet)
   - **Responsiveness**: Media queries ensure that the site adjusts beautifully on mobile devices and larger screens. (added some @media tags for phones but I've only tested them in a limited capacity. Regardless the beginnings are there)

### 3. **JavaScript** (in progress)
   - **Interactivity**: Handle dynamic search filters (e.g., rent range sliders, proximity to campus), user input validation, and instant search results. ( added some placeholder functionality)
   - **API Integration**: Use JavaScript to call external services such as Google Maps for apartment locations and third-party rental APIs for pricing analytics.
   - **React Framework**: Components will manage dynamic rendering, filtering results, and updating the UI when a new search query is entered.

### 4. **React** (in progress)
   - **Single Page Application**: React will power the front-end, with different components for the home page, search results, listing detail, and user profile.
   - **Routing**: React Router will handle transitions between the pages without requiring full reloads.
   - **State Management**: State will be handled with React’s `useState` and `useEffect` hooks, ensuring that user interactions (e.g., search filters) are reflected across the app.

### 5. **Web Services** (in progress)
   - **Calling External Services**: Utilize Google Maps API for real-time map displays and integrate rental pricing APIs for analyzing average rent costs.
   - **Providing Web Services**: Backend API endpoints will be created for:
     - **Get Listings**: Retrieve a list of available apartments.
     - **Save Listing**: Allow users to save a listing to their profile.
     - **User Authentication**: Register and authenticate users.

### 6. **Authentication** (page available, in progress)
   - **User Registration**: Users can register with their email, username, and password. Their information is stored securely in the database.
   - **Login/Logout**: Session-based authentication, and once logged in, users can view their saved listings and personalized apartment suggestions.
   - **Display User Data**: The user’s name will be displayed in the navigation bar after login.

### 7. **Database** (none yet)
   - **Persistent Data Storage**:
     - **Listings**: Store apartment details (e.g., name, rent, description, location) in the database.
     - **User Profiles**: Store each user’s profile information, saved listings, and search preferences.
     - **Search History**: Track and store users' previous searches to improve personalized recommendations.

### 8. **WebSockets** (none yet)
   - **Real-time Data**: WebSockets will be used to push updates to users about new listings, price changes, and apartment availability.
   - **User Interactions**: Real-time chat for users to ask questions directly to landlords or property managers (if they let themselves become available. Also potential ability to find and contact potential roommates with this system.)

## **Mockup Designs**

Here are the basic sketches for the application layout:

1. **Home Page**:
   - Simple search bar with filters (price range, number of bedrooms, proximity to campus).
   - Featured listings below the search bar.

2. **Results Page**:
   - List of apartments with thumbnail images, short description, and pricing.
   - Interactive map on the side displaying the location of each listing.

3. **Listing Detail Page**:
   - Detailed view of the apartment including a gallery, full description, list of amenities, and contact form.

4. **User Profile Page**:
   - Dashboard for managing saved listings, account settings, and search preferences.

<img width="1095" alt="Screenshot 2024-09-14 at 10 55 05 AM" src="https://github.com/user-attachments/assets/831d66f0-5093-4053-a356-307f7c69f144">


