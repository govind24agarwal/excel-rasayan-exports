export const createMailBody = (data) => {
  if(!data?.name || (!data?.email && !data?.mobileNumber)) return null;
  const {name, email, mobileNumber, message} = data;

  return`
  Hello,
  
  There is a contact request on EXCEL RASAYAN EXPORT. Client contact details are mentioned below:
  
  Name: ${name ? name : "Not Provided"}
  Email Address: ${email ? email : "Not Provided"}
  Mobile Number: ${mobileNumber ? mobileNumber : "Not Provided"}
  Message: ${message ? message : "Not Provided"}
  `

}