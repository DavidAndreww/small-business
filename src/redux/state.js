const state = {
  loggedIn: false, 
  listings: [
    {
      name: 'Crux Climbing Center',
      description: 'Rock climbing gym in Austin, Texas. This 22,000 sq. foot facility is stocked with rope climbing, bouldering, strength training areas, fitness and yoga classes, a kids area and a lounge space.',
      address: '121 Pickle Road, Austin, TX 78704',
      lat: '30.227300',
      lng: '-97.763050',
      hours: '11 AM - 11 PM'
    },
    {
      name: 'Austin Bouldering Project',
      description: 'The second largest bouldering gym in Texas, Austin Bouldering Project, or ABP as it\'s often called, is HUGE and great for bouldering, yoga, or hanging out with friends; this is a huge run on sentence.',
      address: '979 Springdale Road, Austin, TX 78702',
      lat: '30.263140',
      lng: '-97.696110',
      hours: '6 AM - 11 PM'
    },
    {
      name: 'North Austin Rock Gym',
      description: 'NARG offers some of the best indoor bouldering angles in the country, including a 24-foot bouldering wall. Their experienced professional instructors are available to help climbers of all ages, from beginners to advanced.',
      address: ' 8300 N Lamar Blvd, Austin, TX 78753',
      lat: '30.351800',
      lng: '-97.707910',
      hours: '11 AM - 11 PM'
    },
    {
      name: 'Mesa Rim Climbing Center',
      description: '50,000 sq. foot gym at I-35 andU.S. 183. Features an array or rope climbing and buldering terrain, 55-foot climbing walls, yoga studio, cardio and weight training areas, a sauna and spa and community rooms.',
      address: '1230 Sheldon Cove Austin, TX 78753',
      hours: 'N/A'
    }

  ],
  isGuest: false,
  mapCoords: []
}

export default state;