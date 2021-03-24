console.log('***** Music Collection *****')


let collection = [];

function addToCollection( title, artist, yearPublished ) {
  let album = {
    title: " ",
    artist: " ",
    yearPublished: " "
  } //end of object
  collection.push(album);
  return album;
} //end addToCollection
