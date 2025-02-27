import WelcomeMessage from "./components/WelcomeMessage";

function MyComponent() {  
  return (
    <div>
      <h1>Hello everyone, I am learning React at ALX!</h1>
    </div>
  );
}
export default MyComponent;

import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Existing component */}
      <WelcomeMessage />

      {/* New components */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import UserProfile from "./components/UserProfile"; // Import the component

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;
