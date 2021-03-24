console.log('***** Music Collection *****')


let collection = [];

function addToCollection( title, artist, yearPublished ) {
  let favAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end of object
  collection.push(favAlbum);
  return favAlbum;
} //end addToCollection

console.log( addToCollection( 'These Are The Vistas', 'The Bad Plus', 2003) );
console.log( addToCollection( 'Self Titled', 'Halloween, Alaska', 2003) );
console.log( addToCollection( 'Mutable Set', 'Blake Mills', 2020) );
console.log( addToCollection( 'Please Refrain From Fronting', 'Happy Apple', 2001) );
console.log( addToCollection( 'Free Love', 'Sylvan Esso', 2020) );
console.log( addToCollection( 'Heigh Ho', 'Blake Mills', 2014) );

console.log(collection);
