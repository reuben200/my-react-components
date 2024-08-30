import React from 'react';
import Logo from './assets/images/logo.jpg' //Import your logo here
import Socials from './Socials';            //Import your component of all your social media handles.
import Subscribe from './Subscribe';        //Import your Newsletter Subscription component here.




const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="p-12 text-white bg-gray-800 z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 md:text-left">
          <div className='flex flex-col items-center justify-center'>
            <img 
                    src={Logo} 
                    alt="Logo" 
                    className="w-32 mx-auto rounded-full "
                />
            <h2 className="mb-2 text-lg lg:text-2xl font-serif uppercase">MY ORGANIZATION NAME.</h2>
            <p className="lg:text-lg italic">A summary or tagline or something else or even quote here. <small className='text-red-400'>In case of quote</small></p>
          </div>
          <div className='flex flex-col justify-center text-center'>
          <img 
              src="https://images.unsplash.com/photo-1488381297039-d6ee94af777e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJpYmxlfGVufDB8fDB8fHww" 
              alt="Office" 
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h2 className="mb-2 text-2xl font-serif">Office Hours</h2>
            <span className="">
              <p className="lg:text-lg text-blue-300 italic"><span className="text-red-400">Monday - Thursday:</span> 8:00 AM - 5:00 PM</p>
              <p className="lg:text-lg text-blue-300 italic"><span className="text-red-400">Friday:</span>: 8:00 AM - 4:00 PM</p>
              
              <p className="lg:text-lg text-blue-300 italic"><span className="text-red-400">Saturday:</span>: As Needed</p>
              
            </span>
          </div>

         <div className='flex flex-col items-center justify-center'>
            <Subscribe />
         </div>
        </div>
        <Socials />
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} MY ORGANIZATION NAME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
