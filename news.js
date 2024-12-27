const mongoose = require("mongoose");
const NewSchema = mongoose.Schema(
    {
        headline {
            type: String,
            required: [true,"please enter headline"],
        },
        description {
            type: String,
            required: [true,"please enter description"],
        },
        link {
            type: String,
            required: false,
            default:0,
        },
        img {
            type: String,
            required: false,
            default:0,
        },
    },
    {
        Timestamp: true,
    },
);
const NewsModel = mongoose.model("News",NewSchema);
module.exports = NewsModel;