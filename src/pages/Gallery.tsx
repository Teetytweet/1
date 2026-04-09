import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [images, setImages] = useState([
    { id: 1, url: 'https://loremflickr.com/800/800/cat?lock=21', title: 'Tiny Neonate Orphan' },
    { id: 2, url: 'https://loremflickr.com/800/800/kitten?lock=22', title: 'Thriving in Forever Home' },
    { id: 3, url: 'https://loremflickr.com/800/800/cat?lock=23', title: 'Mom and Scared Litter' },
    { id: 4, url: 'https://loremflickr.com/800/800/kitten?lock=24', title: 'Litter Fully Adopted!' },
    { id: 5, url: 'https://loremflickr.com/800/800/cat?lock=25', title: 'Spicy Bonded Kitten Pair' },
    { id: 6, url: 'https://loremflickr.com/800/800/kitten?lock=26', title: 'Bonded Pair Cuddling as Adults' },
  ]);

  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = () => {
    const moreImages = [
      { id: 7, url: 'https://loremflickr.com/800/800/cat?lock=27', title: 'Bottle Baby Feeding' },
      { id: 8, url: 'https://loremflickr.com/800/800/cat?lock=28', title: 'Pill Time to Healthy' },
      { id: 9, url: 'https://loremflickr.com/800/800/kitten?lock=29', title: 'Foster Fail! (Adopted by Foster)' },
    ];
    setImages(prev => [...prev, ...moreImages]);
    setHasMore(false);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-4 text-primary">Foster Success Stories</h1>
      <p className="text-center text-lg text-base-content/70 mb-12 max-w-2xl mx-auto">
        A hand-picked collection of kittens who started in foster homes and have now found their forever families. 
        Adopt, don't shop!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img) => (
          <div key={img.id} className="card bg-base-100 shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
            <figure className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-rose-500">
                ❤️
              </div>
            </figure>
            <div className="card-body bg-base-100/90 backdrop-blur absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-4 text-center">
              <h2 className="card-title justify-center text-primary">{img.title}</h2>
            </div>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="mt-16 text-center">
          <button onClick={handleLoadMore} className="btn btn-secondary btn-wide btn-lg group relative overflow-hidden">
            <span className="relative z-10 font-bold tracking-wide">Load More Fluff</span>
            <div className="absolute right-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
