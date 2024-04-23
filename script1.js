document.addEventListener('DOMContentLoaded', function() {
    const events = [
      { title: 'Pet Adoption Day', date: '2024-04-25', location: 'Pet Store' ,description:"🐾 Join us for a heartwarming Pet Adoption Day extravaganza! Discover your perfect furry companion and unlock a lifetime of love and joy. Our shelter is buzzing with excitement as we bring together adorable cats, dogs, and other lovable creatures eagerly awaiting their forever homes. From playful pups to cuddly kittens, there's a furry friend for every family. Visit us on Pet Adoption Day and make a difference in a pet's life while enriching your own. Don't miss out on the opportunity to find your new best friend! 🐶🐱"},
      { title: 'Pet Grooming Workshop', date: '2024-05-05', location: 'Pet Store',description:"Unleash your pet's full potential with our exclusive Pet Grooming Workshop! Join us for an immersive experience where you'll learn the art of pampering your furry friends from our expert groomers. From mastering the perfect bath to styling techniques that'll make tails wag, our workshop offers hands-on training tailored to both novice pet parents and seasoned groomers. Discover the joy of bonding with your pet while enhancing their well-being and beauty. Don't miss this opportunity to elevate your grooming skills and create unforgettable moments with your beloved companions. Sign up now and let the transformation begin!" },
      { title: 'Dog Training Class', date: '2024-05-15', location: 'Community Center',description:"Unlock your dog's full potential with our expert-led training classes! Whether you're starting with a new puppy or seeking to refine your adult dog's manners, our classes offer personalized attention and proven techniques to cultivate obedience and strengthen the bond between you and your furry companion. From basic commands to advanced skills, our certified trainers provide a supportive environment where learning is fun and rewarding for both you and your dog. Join us today and unleash your dog's best behavior!" }
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
  