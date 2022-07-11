L.mapquest.key = 'AYVDxZRQqOAOYd7C8dhpkfauD96LexUy';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('hybrid'),
  zoom: 12
});

// 2. Add control
map.addControl(L.mapquest.control({ position: 'bottomright' }));

// 2.5. Add search
L.mapquest.searchControl({
  searchInput: {
    searchAheadOptions: {
      limit: 6,
      collection: 'address,adminArea,airpot,poi,category,franchise'
    },
    compactResults: true,
    placeholderText: 'Type Away',
    clearTitle: 'Delete the world'
  }
}).addTo(map);

// 3. Add icon
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
  .bindPopup('This is Manchester!')
  .addTo(map);
