import {
  connectDatabase,
  insertDocument,
} from "../../helpers/db-util";

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed" });
    return;
  }

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // Store it in database
    const newMessage = {
      email,
      name,
      message,
    };

     let result;

    try {
      result = await insertDocument(client, "contact", newMessage);
      newMessage._id = result.insertedId;
      res.status(201).json({ message: "Added Contact. ", contact: newMessage });

    } catch (error) {
      res.status(500).json({ message: "Inserting contact failed", error: error.message });
      return
    }


    // res
    //   .status(201)
    //   .json({ message: "Successfully Stored message", data: newMessage });
  }

  client.close();

}

export default handler;
