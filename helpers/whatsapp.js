const handleWhatsAppClick = () => {
    const phoneNumber = "+2348184297165";
    const message = "Hello Opulence, I'm intrested in the links website";
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    window.open(whatsappUrl, "_blank");
  };
  
  export default handleWhatsAppClick;
  