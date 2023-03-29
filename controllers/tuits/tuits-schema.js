import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        tuit: String,
        likes: Number,
        liked: Boolean,
        handle : String,
        image : String,
        replies : Number,
        retuits : Number,
        time : String,
        title : String,
        topic : String,
        dislikes:Number,
        userName : String,
        disliked: Boolean
    },
    {
        collection: 'tuits'
    }
);

export default schema;