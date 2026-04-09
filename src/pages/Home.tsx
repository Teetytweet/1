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
              Hi, I'm Amelia! Promoting the "Adopt, Don't Shop" movement is my biggest passion. 
              Fostering is so important because it provides a safe, nurturing environment for kittens to properly socialize. It also frees up vital space in shelters for other animals and acts as the crucial bridge for vulnerable animals to find their fur-ever homes.
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

      {/* Benefits Section */}
      <div className="mt-24 mb-10 bg-base-200 rounded-3xl p-10 md:p-16 shadow-inner">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary">Benefits of Fostering</h2>
        <p className="text-center text-xl mb-12 text-base-content/70 max-w-2xl mx-auto">Not ready for a 15-year commitment? That's exactly why fostering is perfect for you!</p>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
           <div className="flex-1 space-y-6">
             <div className="flex gap-4">
               <div className="text-4xl bg-white p-3 rounded-xl shadow-sm text-center h-min">⏳</div>
               <div>
                 <h3 className="text-2xl font-bold text-base-content">It's Temporary</h3>
                 <p className="text-base-content/80">Fostering usually only lasts 2 to 8 weeks! You get all the joy of having an adorable kitten without a lifelong commitment. You get to love them, let them go to an amazing family, and quickly move on to save your next litter!</p>
               </div>
             </div>
             
             <div className="flex gap-4">
               <div className="text-4xl bg-white p-3 rounded-xl shadow-sm text-center h-min">💰</div>
               <div>
                 <h3 className="text-2xl font-bold text-base-content">It's Absolutely Free</h3>
                 <p className="text-base-content/80">You don't need to pay for anything! Rescues and animal shelters provide all the necessary supplies—including KMR (kitten milk replacer), food, litter, toys, and 100% of the required veterinary care. Your only job is to provide pure love, space, and time.</p>
               </div>
             </div>
           </div>

           <div className="flex-1">
             <img src="https://loremflickr.com/800/600/kittens?lock=101" alt="Two foster kittens playing" className="rounded-2xl shadow-xl w-full object-cover h-80 transform hover:-rotate-2 transition-transform duration-500" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
