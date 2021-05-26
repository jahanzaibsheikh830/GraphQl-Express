const  {gql} =  require('apollo-server-express')
const typeDefs = gql `
  type Song {
    id: ID!
    title: String!
    duration: Int!
    genre: String!
    artistId: ID!
    artist: Artist!
 }
 type Artist {
    id: ID!
    name: String!
    country: String!
    songs: [Song]
 }
 input songInput{
  title: String!
  duration: Int!
  genre: String!
  artistId: ID!
 }
 input updateSong{
  title: String!
  duration: Int!
  genre: String!
  artistId: ID!
 }
 input artistInput{
  name: String!
  country: String!
 }
 type Query {
  songs:[Song]
  artists:[Artist]
  singleSong(id: ID!) : Song
  singleArtist(id: ID!) : Artist
}
type Mutation{
  addSong(song: songInput): Song
  addArtist(artist: artistInput): Artist
  updateSong(id: ID!, update: updateSong ): Song
  deleteSong(id: ID!): String
}
type Subscription{
  addSong: Song
  deleteSong: String
}
`
module.exports = typeDefs