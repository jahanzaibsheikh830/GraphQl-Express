import React from 'react'
import './style.css'
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom'
const GET_SONGS = gql`
  query GetAllSongs {
    songs {
        title
          duration
          genre
          id
          artistId
          artist{
            name
            country
            id    
        }
    }
  }
`;

function Artist() {
    const { loading, error, data } = useQuery(GET_SONGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data.songs)
    return (
        <div className='container'>
            <h2 className="text-center mt-3">Songs</h2>
            <div className="row mt-5">
                {
                    data.songs.map((v, i) => {
                        return (
                            <div className="col-md-4">
                                <div className="card py-5 px-5" key={i}>
                                    <h4>Song Title: {v.title}</h4>
                                    <h4>Duration: {v.duration}</h4>
                                    <h4>Genre: {v.genre}</h4>
                                    <h4>Artist: {v.artist.name}</h4>
                                    <h4>Country: {v.artist.country}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Artist