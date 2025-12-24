const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,    
    pass: process.env.EMAIL_PASS,     
  },
});

// Styled HTML template function
function createHtmlContent(data) {
  return `
    <div style="
      font-family: Arial, sans-serif; 
      max-width: 600px; 
      margin: auto; 
      border: 1px solid #ddd; 
      border-radius: 8px; 
      padding: 20px; 
      background-color: #f9f9f9;">
      
      <h2 style="
        color: #2c3e50; 
        border-bottom: 2px solid #2980b9; 
        padding-bottom: 10px; 
        margin-bottom: 20px;">
        ${data.title}
      </h2>

      <p style="font-size: 16px; color: #34495e;">
        <strong>Name:</strong> <span style="color: #2c3e50;">${data.name}</span>
      </p>
      <p style="font-size: 16px; color: #34495e;">
        <strong>Email:</strong> <a href="mailto:${data.email}" style="color: #2980b9; text-decoration: none;">${data.email}</a>
      </p>
      ${data.phone ? `<p style="font-size: 16px; color: #34495e;">
        <strong>Phone:</strong> <span style="color: #2c3e50;">${data.phone}</span>
      </p>` : ''}
      ${data.product ? `<p style="font-size: 16px; color: #34495e;">
        <strong>Product:</strong> <span style="color: #2c3e50;">${data.product}</span>
      </p>` : ''}
      ${data.subject ? `<p style="font-size: 16px; color: #34495e;">
        <strong>Subject:</strong> <span style="color: #2c3e50;">${data.subject}</span>
      </p>` : ''}

      <div style="
        margin-top: 20px; 
        padding: 15px; 
        background-color: #ffffff; 
        border-radius: 5px; 
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <p style="font-size: 16px; line-height: 1.5; color: #555;">
          ${data.message.replace(/\n/g, '<br>')}
        </p>
      </div>

      <footer style="
        margin-top: 30px; 
        font-size: 12px; 
        color: #999; 
        text-align: center;">
        This message was sent from your company website enquiry form.
      </footer>
    </div>
  `;
}

// Enquiry endpoint
app.post("/send-enquiry", async (req, res) => {
  const { name, email, phone, message, product } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL_ENQUIRY,
    subject: `New Enquiry for ${product}`,
    html: createHtmlContent({
      title: "New Product Enquiry",
      name,
      email,
      phone,
      product,
      message,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Error sending enquiry:", error);
    res.status(500).json({ error: "Failed to send enquiry" });
  }
});

// Contact endpoint
app.post("/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL_CONTACT,
    subject: `Contact Form: ${subject || "No Subject"}`,
    html: createHtmlContent({
      title: "New Contact Message",
      name,
      email,
      phone,
      subject,
      message,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending contact message:", error);
    res.status(500).json({ error: "Failed to send contact message" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
