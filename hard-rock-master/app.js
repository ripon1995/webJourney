function searchSong() {
    const searchText = document.getElementById('search-field').value;
    const url =`https://api.lyrics.ovh/suggest/${searchText}`;
    fetch('https://www.stands4.com/services/v2/lyrics.php')
    .then(response=>response.json())
    .then(data=>console.log(data));
}