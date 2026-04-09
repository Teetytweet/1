import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="text-5xl font-bold text-center mb-6 text-primary">Fostering Resources</h1>
      <p className="text-xl text-center text-base-content/80 mb-12 max-w-2xl mx-auto">
        Whether you're ready to become a foster parent or just looking for ways to advocate, the resources below will give you everything you need to know to save tiny lives!
      </p>

      {/* Kitten Lady Hub */}
      <div className="card bg-base-100 shadow-xl mb-12 border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-3xl mb-4 text-secondary">The Kitten Lady Collection</h2>
          <p className="text-base-content/70 mb-6">Hannah Shaw (The Kitten Lady) is the absolute gold standard for kitten fostering education. Her resources are literally the "Bible of Fostering".</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://www.kittenlady.org/tiny" target="_blank" rel="noreferrer" className="card bg-base-200 hover:shadow-lg transition-shadow group">
              <div className="card-body items-center text-center p-6">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">📘</span>
                <h3 className="font-bold text-lg mb-1">Tiny But Mighty</h3>
                <p className="text-sm">The comprehensive guidebook for fostering neonate kittens.</p>
              </div>
            </a>
            
            <a href="https://www.amazon.com/shop/kittenxlady" target="_blank" rel="noreferrer" className="card bg-base-200 hover:shadow-lg transition-shadow group">
              <div className="card-body items-center text-center p-6">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🛒</span>
                <h3 className="font-bold text-lg mb-1">Amazon Storefront</h3>
                <p className="text-sm">A curated list of essential supplies, formulas, and incubators you should buy.</p>
              </div>
            </a>

            <div className="card bg-base-200 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="card-body items-center text-center p-6">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🧸</span>
                <h3 className="font-bold text-lg mb-1">Children's Books</h3>
                <p className="text-sm">Inspire the next generation with books like "Kitten Lady's Big Book of Little Kittens".</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Online Educational Sites */}
      <div className="card bg-base-100 shadow-xl mb-12 border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-3xl mb-4 text-primary">Educational Sites & Guides</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-base-content/80">
            <li><strong><a href="https://www.kittenlady.org/" className="link link-primary">Kittenlady.org</a></strong> - Detailed instructional videos and articles on weaning, bottle feeding, and litter box training.</li>
            <li><strong><a href="https://www.alleycat.org/" className="link link-primary">Alley Cat Allies</a></strong> - Great guides on Trap-Neuter-Return (TNR) and feral cats.</li>
            <li><strong><a href="https://maddiesfund.org/" className="link link-primary">Maddie's Fund</a></strong> - Free flash classes and fostering apprenticeships online.</li>
            <li><strong><a href="https://bestfriends.org/" className="link link-primary">Best Friends Animal Society</a></strong> - A nationwide network with vast fostering libraries.</li>
          </ul>
        </div>
      </div>

      {/* Alternative Ways to Help */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-base-content mb-3">What if you can't foster?</h2>
          <p className="text-lg text-base-content/80">If you're a teenager like me or live in a place that doesn't allow pets, you can still save lives!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow hover:-translate-y-1 transition-transform">
            <div className="card-body p-6 text-center">
              <h3 className="card-title justify-center text-xl text-primary">Volunteer 🤝</h3>
              <p className="text-base-content/70">Shelters almost always need help cleaning, socializing adult cats, or helping with adoption events.</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow hover:-translate-y-1 transition-transform">
            <div className="card-body p-6 text-center">
              <h3 className="card-title justify-center text-xl text-secondary">Donate 💸</h3>
              <p className="text-base-content/70">Rescues survive on donations! Even small amounts help buy KMR (kitten milk replacer) or pay for emergency vetting.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow hover:-translate-y-1 transition-transform">
            <div className="card-body p-6 text-center">
              <h3 className="card-title justify-center text-xl text-accent">Advocate 📣</h3>
              <p className="text-base-content/70">Share posts of adoptable cats on social media, educate friends about the "Adopt Don't Shop" movement, and sign petitions!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
