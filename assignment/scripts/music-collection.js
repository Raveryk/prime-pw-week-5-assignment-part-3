console.log('***** Music Collection *****')


let collection = [];

function addToCollection( title, artist, yearPublished ) {
  let favAlbums = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end of object
  collection.push(favAlbums);
  return favAlbums;
} //end addToCollection

//testing addToCollection

console.log( addToCollection( 'These Are The Vistas', 'The Bad Plus', 2003) );
console.log( addToCollection( 'Self Titled', 'Halloween, Alaska', 2003) );
console.log( addToCollection( 'Mutable Set', 'Blake Mills', 2020) );
console.log( addToCollection( 'Please Refrain From Fronting', 'Happy Apple', 2001) );
console.log( addToCollection( 'Free Love', 'Sylvan Esso', 2020) );
console.log( addToCollection( 'Heigh Ho', 'Blake Mills', 2014) );

console.log(collection); //


function showCollection( array ) {
  console.log( array.length );
  for( let item of array ) {
    console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}.`);
  }
} //end of showCollection

showCollection( collection ); //testing showCollection

function findByArtist( artist ) {
  let artistList = [ ];
  for( let list of collection ) {
    if( artist === list.artist ) {
      artistList.push(list)
    }
  } return artistList;
} //end findByArtist

//test findByArtist

console.log(findByArtist( 'The Bad Plus' ) );
console.log(findByArtist( 'Blake Mills' ) );
console.log(findByArtist( 'Billie Eilish' ) );



//**STRETCH GOALS/////

//**I didn't finish the first part of the stretch goal by the 6PM submission deadline but this is what I had going on at that time. I'm going to keep working on it to see if I can figure it out by this evening.

let newList = [ ];

function search( artist, year ) {
  for( let item of collection ) { //looping through my collection array
    if( artist === item.artist && year === item.yearPublished ) { //if the artist and year arguments are both found in the collection then it will push that item into the newList array.
      newList.push( item );
    } //end of if conditional
    else if ( typeof(artist) === 'undefined' && typeof(year) === 'undefined' ) { //this is to try and seperate the difference between search arguments that didn't match anything in the search function and a search function that was empty without any arguments. If the function arguments are empty it should return the entire collection array.
      return collection;
    } //end of else if conditional
  } return newList; //end of for in loop - this will return the newList array whether or not anything has been pushed into it.
} //end of search



//**FUNCTION TESTS**//

console.log( search( 'Blake Mills', 2020  ));
console.log(newList);
//
// console.log( search( 'Blake Mills', 2010 ));
// console.log(newList);

// console.log( search( 2010 ));
// console.log(newList);

// console.log( search() );





// console.log( search( 'Blake Mills', 2010  ));
// console.log( search( 'Sylvan Esso', 2020  ));


// console.log( search( 'Blake Mills', 2010 ));
// console.log( search( 'Sylvan Esso', 2020 ));

// let album = {
//   title: '',
//   artist: '',
//   yearPublished: 0
// };


// function search( { artist: artist, yearPublished: yearPublished } ) {
//   let newList = [ ];
//   for( let i=0; i<collection.length; i++ ) {
//     if( album.artist === collection[i].artist && album.yearPublished === collection[i].yearPublished ) {
//       newList.push( collection[i] );
//     }
//     //end of if conditional
//     // else {
//     //   return collection;
//     // } //end of else if
//   } return newList;
//   //end of for in loop
// } //end of search
// //
// //
