const {PubSub} = require( 'apollo-server-express')
const {songModel, artistModel} = require('./models/post')
const pubsub = new PubSub()
const resolvers={
    Query:{
        songs: async ()=> await songModel.find(), 
        artists: async ()=> await artistModel.find(), 
        singleSong: async (parent ,args, context , info)=>{
            const {id} = args
            return await songModel.findById(id)
        },
        singleArtist: async (parent ,args, context , info)=>{
            const {id} = args
            return await artistModel.findById(id)
        },
    },
    Song: {
        artist(parent) {
          console.log("songs", parent);
          return artistModel.findById(parent.artistId);
        },
      },
    Artist:{
        songs(parent){
            console.log("artist ====", parent._id)
            return songModel.find({artistId: parent._id})
        }
    },
    Mutation:{
        addSong: async (parent ,args, context , info) =>{
            const {title, duration,genre,artistId} = args.song
            const song = new songModel({title,duration,genre,artistId})
            await song.save()
            pubsub.publish('ADD_SONG', { addSong: song });
            return song
        },
        addArtist: async (parent ,args, context , info) =>{
            const {name, country} = args.artist
            const artist = new artistModel({name,country})
            await artist.save()
            return artist
        },
        updateSong: async (parent ,args, context , info)=>{
            const {title,genre,artistId,duration} = args.update
            const {id} = args
            console.log(title, genre,artistId,duration)
            const upSong = await songModel.findByIdAndUpdate(id ,
                {title,genre, duration,artistId}, {new: true})
            return upSong 
        },
        deleteSong: async (parent ,args, context , info) =>{
            const {id} = args
            await songModel.findByIdAndDelete(id)
            pubsub.publish('DELETE_SONG', { deleteSong: "The song has been deleted" });
            return "The song has been deleted"
        },
    },
    Subscription:{
        addSong:{
            subscribe: () => pubsub.asyncIterator(['ADD_SONG'])
        },
        deleteSong:{
            subscribe: () => pubsub.asyncIterator(['DELETE_SONG'])
        }
    }
}


module.exports = resolvers