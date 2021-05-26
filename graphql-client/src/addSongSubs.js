import React from 'react'
import {useSubscription,gql} from '@apollo/client'
const ADD_SONG =gql`
    subscription addSong{
        addSong{
            title
            duration
            id
            genre
            artistId
            artist{
              name
              country
            }
          }
    }
`

function AddSongSubscription(){
    const {data,error,loading} = useSubscription(ADD_SONG)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>
    console.log(data)
    return(
        <div>
            Subscription
        </div>
    )
}
export default AddSongSubscription