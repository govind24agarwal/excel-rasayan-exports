import { sendMail } from "@/service/mail/mailServer.js";
import {createMailBody} from "@/service/mail/template.js"
import { NextResponse } from 'next/server';


export const POST = async (request: Request) => {

  const contactFormData = await request.json();
  const {name, email, mobileNumber} = contactFormData;
  const errorObj = {
    name: false,
    mobileNumber: false
  };
  if(!name){
    errorObj['name'] = true;
  }
  if(!email && !mobileNumber){
    errorObj['mobileNumber'] = true;
  }
  if( errorObj['name'] || errorObj['mobileNumber']) {
    return new Response(JSON.stringify({status: false, msg: errorObj}), { status: 400 });
  }


  const mailBody = createMailBody(contactFormData);
  if(!mailBody) return new Response(JSON.stringify({status: false}), { status: 400 });

  try {
    await sendMail(
      "Client Contact Details",
      "govindagarwal24@gmail.com",
      mailBody
    );
    return new NextResponse(JSON.stringify({status: true}), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({status: false}), { status: 500 });
  }
}