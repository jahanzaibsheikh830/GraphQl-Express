import React from 'react'
import { gql, useMutation, useSubscription } from '@apollo/client';
import {useParams} from 'react-router-dom'
const ADD_SONG =gql`
    mutation addSong($title: String!, $duration: Int!, $genre: String!, $artistId: ID! ){
        addSong(song: {title: $title, duration: $duration, genre: $genre, artistId: $artistId}){
            title
            duration
            genre
            artistId
        }
    }
`
    const DEL_SONG = gql `
        mutation deleteSong($id: ID!){
            deleteSong(id: $id)
        }
    `   

function Songs(props) {
    let title, duration, genre
    const songsData = props.location.state
    const {id} = useParams()
    const [addSong] = useMutation(ADD_SONG)
    const [deleteSong] = useMutation(DEL_SONG)
    function del(id){
        deleteSong({variables:{id}})
    }
    return (
        <div>
            <div className='container'>
                <h2 className='text-center mt-3'>Songs</h2>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                    <form onSubmit={e=>{
                        e.preventDefault()
                        addSong({variables:{title: title.value, duration: Number(duration.value), genre: genre.value, artistId:id}})
                        .catch(err=>{
                            console.log("grapghql err" , err)
                        })
                        console.log(title.value ,duration.value,genre.value,id)
                    }}>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control"
                                 placeholder="Title" required ref={value => title = value} id="title"/>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control"
                                 placeholder="Duration" required ref={value => duration = value} id="duration"/>
                            </div>
                        </div><br></br>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control"
                                 placeholder="Genre" required ref={value => genre = value} id="genre"/>
                            </div>
                        </div><br></br>
                        <div>
                            <button type='submit' className='btn btn-outline-dark'>Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className='row mt-5'>
                    {
                        songsData && songsData.map((v, i) => {
                            return (
                                <div className='col-md-4' key={i}>
                                    <div className='card py-5 px-5' >
                                        <h4>Song Title: {v.title}</h4>
                                        <h4>Duration: {v.duration}</h4>
                                        <h4>Genre: {v.genre}</h4>
                                        <button className="btn btn-outline-dark" onClick={()=>del(v.id) }>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Songs