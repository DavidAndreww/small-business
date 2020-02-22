const state = {
  loggedIn: false, 
  listings: [
    {
      name: 'Crux Climbing Center',
      description: 'Rock climbing gym in Austin, Texas. This 22,000 sq. foot facility is stocked with rope climbing, bouldering, strength training areas, fitness and yoga classes, a kids area and a lounge space.',
      address: {
        street: '121 Pickle Road',
        suite: '#100',
        city: 'Austin',
        state: 'Texas',
        zip: 78704,
        lat: null,
        lon: null
      },
      hours: '11 AM - 11 PM'
    },
    {
      name: 'Austin Bouldering Project',
      description: 'The second largest bouldering gym in Texas, Austin Bouldering Project, or ABP as it\'s often called, is HUGE and great for bouldering, yoga, or hanging out with friends; this is a huge run on sentence.',
      address: {
        street: '979 Springdale Road',
        suite: '#150',
        city: 'Austin',
        state: 'Texas',
        zip: 78702,
        lat: null,
        lon: null
      },
      hours: '6 AM - 11 PM'
    },
    {
      name: 'North Austin Rock Gym',
      description: 'NARG offers some of the best indoor bouldering angles in the country, including a 24-foot bouldering wall. Their experienced professional instructors are available to help climbers of all ages, from beginners to advanced.',
      addres: {
        street: '8300 N Lamar Blvd',
        suite: '#102b',
        city: 'Austin',
        state: 'Texas',
        zip: 78753,
        lat: null,
        lon: null
      },
      hours: '11 AM - 11 PM'
    },
    {
      name: 'Mesa Rim Climbing Center',
      description: '50,000 sq. foot gym at I-35 andU.S. 183. Features an array or rope climbing and buldering terrain, 55-foot climbing walls, yoga studio, cardio and weight training areas, a sauna and spa and community rooms.',
      address: {
        street: ' 1230 Sheldon Cove',
        suite: null,
        city: 'Austin',
        state: 'Texas',
        zip: 78753,
        lat: null,
        lon: null
      },
      hours: 'N/A'
    }

  ],
  isGuest: false,
  map: null
}

export default state;