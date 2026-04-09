import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 z-0">
      <div className="hero min-h-[70vh] bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl shadow-2xl overflow-hidden relative group">
        
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 select-none pointer-events-none mix-blend-overlay flex justify-around items-center">
             <div className="w-64 h-64 bg-white rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
             <div className="w-96 h-96 bg-accent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 ease-in-out"></div>
        </div>

        <div className="hero-content text-center text-primary-content z-10 relative">
          <div className="max-w-2xl bg-base-100/90 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20 transform transition-all hover:-translate-y-2 hover:shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-2 leading-tight">
              Adopt, Don't Shop.
            </h1>
            <p className="mb-8 text-xl text-base-content/80 font-medium">
              Hi, I'm Amelia! I'm on a mission to show the world how incredibly rewarding it is to foster kittens and adopt rescue cats. 
              Together, we can save lives and find fur-ever homes for our feline friends.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/gallery" className="btn btn-primary btn-lg shadow-lg hover:shadow-primary/50 transition-all group overflow-hidden relative">
                <span className="relative z-10">Foster Stories</span>
                <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </Link>
              <Link to="/about" className="btn btn-outline btn-primary btn-lg hover:bg-primary/10 transition-all">
                Why Foster?
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-base-content">The Magic of Fostering</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Save A Life", desc: "Every time you foster, you free up critical space in a shelter for another animal in need.", icon: "❤️" },
            { title: "Incredible Growth", desc: "Watch a timid, scared kitten transform into a confident, loving companion.", icon: "🌱" },
            { title: "Pure Joy", desc: "The feeling of helping a rescued cat find their forever family is completely unmatched.", icon: "✨" }
          ].map((feature, i) => (
            <div key={i} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
              <div className="card-body items-center text-center">
                <div className="text-6xl mb-4 bg-primary/10 p-4 rounded-full">{feature.icon}</div>
                <h3 className="card-title text-2xl text-primary">{feature.title}</h3>
                <p className="text-base-content/70">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
