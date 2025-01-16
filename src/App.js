import React from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}

export default App;