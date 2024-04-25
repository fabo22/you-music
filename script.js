// Sample data for songs (replace with actual data from the music company)
const songs = [
    { title: 'Song 1', image: 'song1.jpg' },
    { title: 'Song 2', image: 'song2.jpg' },
    { title: 'Song 3', image: 'song3.jpg' },
    // Add more songs as needed
];

// Function to populate the song list section with the songs and their images
function populateSongList() {
    const songListSection = document.querySelector('.song-list');
    let songListHTML = '';
    songs.forEach(song => {
        songListHTML += `
            <div class="song">
                <img src="${song.image}" alt="${song.title}">
                <h3>${song.title}</h3>
            </div>
        `;
    });
    songListSection.innerHTML = songListHTML;
}

// Call the function to populate the song list when the page loads
window.onload = populateSongList;
