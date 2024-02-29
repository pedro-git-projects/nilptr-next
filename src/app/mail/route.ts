import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({
      error: "Method Not Allowed",
      allowedMethods: ["POST"],
    });
  }

  try {
    const data = await req.json();
    const { name, email, phone, option, message }: EmailFields = data;
    console.log(name, email, phone, option, message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PSWD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: option,
      text: `remetente: ${name}
      email: ${email}
      telefone: ${phone}
      opção: ${option}
      mensagem: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    return Response.json({ info });
    // return Response.json({ lol: "kkkkkk" });
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
};
