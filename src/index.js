import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card'; // For CSS Modules
import CardInline from './components/CardInline'; // For Inline Styles

const App = () => {
  return (
    <div>
      <h1>My Card</h1>
      <Card
        title="Nature wallpaper"
        image=" "
        description="Nature wallpaper"
      />
      <CardInline
        title="Sunset"
        image=""
        description="Sunset"
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

