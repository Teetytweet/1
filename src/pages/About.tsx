import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden border border-base-200">
        <figure className="lg:w-1/2 relative group">
          <img 
            src="https://loremflickr.com/800/800/kitten?lock=10" 
            alt="Amelia looking at a cat" 
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opactiy-90">
             <h2 className="text-3xl font-bold text-white mb-0 drop-shadow-md">Amelia's Story</h2>
          </div>
        </figure>
        <div className="card-body lg:w-1/2 p-8 md:p-12">
          <div className="badge badge-primary badge-lg mb-4 font-semibold uppercase tracking-wider p-4">About Me</div>
          
          <div className="prose prose-lg">
            <p className="text-base-content/80 leading-relaxed font-medium">
              Hello there! I'm <strong className="text-primary">Amelia</strong>, and I passionately believe that every animal deserves a loving home.
            </p>
            
            <p className="text-base-content/80 leading-relaxed">
              I started this web project to spread awareness about the importance of the <strong>"Adopt, Don't Shop"</strong> movement. Fostering kittens has been one of the most incredible experiences of my life. It provides crucial socialization for rescues and bridges the gap between shelter and a forever home. By fostering and adopting, we literally save lives.
            </p>

            <div className="divider my-6"></div>

            <h3 className="text-2xl font-bold text-secondary mb-4">My Mission</h3>
            <ul className="space-y-3 mb-6 list-none p-0">
              <li className="flex items-center gap-3">
                <span className="text-2xl bg-secondary/10 p-2 rounded-full">🏠</span> 
                <span>To encourage shelter adoption over buying</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl bg-secondary/10 p-2 rounded-full">🍼</span> 
                <span>To demystify kitten and neonate fostering</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl bg-secondary/10 p-2 rounded-full">💖</span> 
                <span>To give every kitty a fighting chance</span>
              </li>
            </ul>
          </div>
          
          <div className="card-actions justify-end mt-8">
            <a href="mailto:amelia@example.com" className="btn btn-primary shadow-lg hover:shadow-primary/50 transition-all rounded-full px-8">
              Become a Foster 🐾
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
