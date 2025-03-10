const axios = require('axios');
const { sendMessage } = require('../handles/message');

module.exports = {
  name: "shoti",
  description: "Send a random shoti video",
  author: "BONUMMASTER MINGMING",
  //I LOVE U

  async execute(senderId, args, pageAccessToken) {
    try {
      const response = await axios.get('https://testapi2-919t.onrender.com/shoti');
      const { url: url, name, description } = response.data;

      await sendMessage(senderId, {
        text: `🌸 Username: ${name}\n🗯️ Description: ${description}\n🧛 Modder: BONUMMASTER MINGMING`
      }, pageAccessToken);

      await sendMessage(senderId, {
        attachment: {
          type: "video",
          payload: {
            url: url
          }
        }
      }, pageAccessToken);
    } catch (error) {
      console.error("Failed to fetch the Chilli video:", error);
      sendMessage(senderId, {
        text: `Failed to fetch the Chilli video. Error: ${error.message || "Unknown error"}`
      }, pageAccessToken);
    }
  }
};
