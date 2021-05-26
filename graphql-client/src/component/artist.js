import React from 'react'
import './style.css'
import { useQuery, gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom'
const GET_ARTIST = gql`
  query GetAllARTIST {
    artists {
        name
        country
        id
        songs{
          title
          duration
          genre
          id
          artistId
        }
    }
  }
`;
const ADD_ARTIST = gql`
    mutation addArtist($name: String!, $country: String!){
      addArtist(artist: {name: $name, country: $country}){
            name
            country
        }
    }
`
function Artist() {
  let name, country
  const { loading, error, data } = useQuery(GET_ARTIST);
  const [addArtist] = useMutation(ADD_ARTIST)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className='container'>
      <h2 className="text-center mt-3">Artist</h2>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <form onSubmit={e => {
            e.preventDefault()
            addArtist({ variables: { name: name.value, country: country.value} })
              .catch(err => {
                console.log("grapghql err", err)
              })
          }}>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control"
                  placeholder="Name" required ref={value => name = value} id="name" />
              </div>
              <div className="col">
                <input type="text" className="form-control"
                  placeholder="Country" required ref={value => country = value} id="country" />
              </div>
            </div><br></br>
            <div>
              <button type='submit' className='btn btn-outline-dark'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        {
          data.artists.map((v, i) => {
            return (
              <div className="col-md-4" key={i}>
                <div className="card py-5 px-5">
                  <h4>Artist Name: {v.name}</h4>
                  <h4>Country: {v.country}</h4>
                  <Link className="btn btn-outline-dark mt-4"
                    to={{ pathname: `/songs/${v.id}`, state: v.songs }}> Songs</Link>
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