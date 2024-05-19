document.addEventListener('DOMContentLoaded', function() {
  const events = [
    { title: 'Pet Adoption Day', date: '2024-04-25', location: 'Pet Store' ,description:"🐾 Join us for a heartwarming Pet Adoption Day extravaganza! Discover your perfect furry companion and unlock a lifetime of love and joy. Our shelter is buzzing with excitement as we bring together adorable cats, dogs, and other lovable creatures eagerly awaiting their forever homes. From playful pups to cuddly kittens, there's a furry friend for every family. Visit us on Pet Adoption Day and make a difference in a pet's life while enriching your own. Don't miss out on the opportunity to find your new best friend! 🐶🐱"},
    { title: 'Pet Grooming Workshop', date: '2024-05-05', location: 'Pet Store',description:"Unleash your pet's full potential with our exclusive Pet Grooming Workshop! Join us for an immersive experience where you'll learn the art of pampering your furry friends from our expert groomers. From mastering the perfect bath to styling techniques that'll make tails wag, our workshop offers hands-on training tailored to both novice pet parents and seasoned groomers. Discover the joy of bonding with your pet while enhancing their well-being and beauty. Don't miss this opportunity to elevate your grooming skills and create unforgettable moments with your beloved companions. Sign up now and let the transformation begin!" },
    { title: 'Dog Training Class', date: '2024-05-15', location: 'Community Center',description:"Unlock your dog's full potential with our expert-led training classes! Whether you're starting with a new puppy or seeking to refine your adult dog's manners, our classes offer personalized attention and proven techniques to cultivate obedience and strengthen the bond between you and your furry companion. From basic commands to advanced skills, our certified trainers provide a supportive environment where learning is fun and rewarding for both you and your dog. Join us today and unleash your dog's best behavior!" },
    { title: 'Pet Food Sale', date:'2024-7-15',location:'Food Section',description:"Unleash the love with our unbeatable pet food sale! For a limited time, treat your furry friends to premium nutrition at paw-some prices. Whether your pet prefers crunchy kibble or savory wet food, we’ve got their favorites in stock. Hurry in, because these deals are fetching fast and won’t last long! Give your pet the best and save big today!"},
    { title:'Teaching Dog About security',date:'2024-12-29',location:'Ground',description:"Empower your pup with our expert-led dog security training event! Join us for an exciting and informative session where you'll learn to transform your loyal companion into a vigilant guardian. Our professional trainers will cover essential security skills, from alert barking to intruder detection, ensuring your dog is ready to protect your home and loved ones. Don't miss out on this unique opportunity to boost your dog's confidence and security skills. Sign up now and let your dog become the hero you always knew they could be!"},
    { title:'Pet Toys Sale',date:'2024-9-23',location:'Toys Section',description:"Get ready for tail-wagging fun with our incredible pet toy sale! From squeaky toys to interactive puzzles, we have the perfect playtime essentials to keep your pets entertained and happy. Discover a wide variety of durable and engaging toys designed to stimulate their minds and satisfy their playful instincts. Whether your pet loves to fetch, chew, or cuddle, we have something special just for them. Don’t miss out on these fantastic deals – grab your pet's new favorite toy today and watch them light up with joy!"},
    { title:'Feast For Pet',date:'2024-6-24',location:'Food Section',description:"Treat your pets to a gourmet delight with our exclusive Feast for the Pets event! Indulge your furry friends with an array of delectable, nutritious meals that will make their tails wag with excitement. From succulent meats to wholesome grain-free options, our feast features the finest ingredients crafted to pamper every palate. Join us for a day of tasting, fun, and special offers on premium pet foods. It's a culinary celebration you and your pets won't want to miss – because every pet deserves a feast fit for royalty!"},
  ];

  const eventList = document.getElementById('event-list');
  const dateFilter = document.getElementById('date-filter');

  // Function to create event items
  function createEventItem(event) {
    const li = document.createElement('li');
    li.classList.add('event-item');
    li.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> <span class="date">${event.date}</span></p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Description:</strong> ${event.description}</p>
    `;
    return li;
  }

  // Function to render events
  function renderEvents(eventsToRender) {
    eventList.innerHTML = '';
    eventsToRender.forEach(event => {
      const eventItem = createEventItem(event);
      eventList.appendChild(eventItem);
    });
  }

  // Filter events by date
  dateFilter.addEventListener('change', function() {
    const selectedDate = dateFilter.value;
    const filteredEvents = events.filter(event => event.date === selectedDate);
    renderEvents(filteredEvents);
  });

  // Render all events initially
  renderEvents(events);
});
