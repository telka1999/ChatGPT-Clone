import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";
import openai from "../config/openai.js";

// Add Chat | POST | Private

const createChat = async (req, res) => {
  try {
    const { userId, title } = req.body;
    const newChat = await Chat.create({
      user_id: userId,
      title,
    });
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: title }],
      model: "gpt-3.5-turbo",
    });
    const messages = await Message.create({
      user_id: userId,
      chat_id: newChat.id,
      message: newChat.title,
      answer: completion.choices[0].message.content,
    });
    res.status(200).json({
      chatId: newChat.id,
      messages,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Chats | GET | Private

const getChats = async (req, res) => {
  try {
    const chats = await Chat.findAll({ where: { user_id: req.params.userId } });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Chat | DELETE | Private

const deleteChat = async (req, res) => {
  const { id } = req.body;
  const deleteChat = await Chat.destroy({ where: { id } });
  const deleteMessages = await Message.destroy({ where: { chat_id: id } });
  if (deleteChat) {
    res.status(200).json({ deleteChat, deleteMessages });
  } else {
    res.status(404).json({ message: "Messages not found" });
  }
};

export { createChat, getChats, deleteChat };
