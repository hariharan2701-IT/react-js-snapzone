const Cart = require("../models/Cart");  // Ensure you have this import
const nodemailer = require("nodemailer");

// Setup transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "ur mail@gmail.com",
    pass: process.env.GMAIL_PASS || "lzsq egmq cbtx gfvzs", // Use an App Password, NOT your real password
  },
});

exports.sendEmail = async (req, res) => {
  try {
    const { userId, name, email, address } = req.body;
    const cartItems = await Cart.find({ userId });

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // Format cart items for email
    const itemsList = cartItems
      .map((item, index) => `${index + 1}. ${item.frameData.size} - ₹${item.frameData.price}`)
      .join("\n");

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your Order Confirmation",
      text: `Hello ${name},\n\nYour order has been placed successfully.\n\nAddress: ${address}\n\nItems:\n${itemsList}\n\nThank you for shopping with us!`,
    };

    await transporter.sendMail(mailOptions);
    await Cart.deleteMany({ userId }); // Clear cart after order

    res.status(200).json({ message: "Order placed and confirmation email sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.saveFrame = async (req, res) => {
  try {
    const { userId, frameData } = req.body;
    const cartItem = new Cart({ userId, frameData });
    await cartItem.save();
    res.status(201).json({ message: "Frame added to cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


// Get all frames by user ID
exports.getFrames = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await Cart.find({ userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete frame
exports.deleteFrame = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);  // Delete from Cart collection
    res.json({ message: "Frame deleted from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

