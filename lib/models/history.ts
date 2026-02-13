import mongoose, {Schema ,models } from "mongoose";


const historySchema = new Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [
    {
      userPrompt: { type: String},
      systemResult: { type: String}
    }
  ],
  limit: { type: Number },

})
  
export default models.History || mongoose.model('History', historySchema)
