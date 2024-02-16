import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
                     Welcome to Skillio, the premier job posting platform designed to connect talented individuals with exciting career opportunities. Our mission is to simplify the job search process for both employers and job seekers, fostering a seamless and efficient recruitment experience.

At Skillio, we understand the challenges of finding the right job or the perfect candidate. With a commitment to excellence, we have created a user-friendly and innovative platform that streamlines the recruitment process, making it easier for employers to find top-tier talent and for job seekers to discover their dream careers.

Our platform is built on the principles of transparency, accessibility, and efficiency. We believe that everyone deserves an equal opportunity to pursue their professional aspirations, and we strive to create a level playing field for both employers and job seekers.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
 Whether you are a small startup looking to expand your team or an individual seeking a new career path, Skillio is here to empower you.

What sets us apart is our dedication to user experience. Our intuitive interface and powerful search algorithms ensure that employers can quickly find the best candidates, while job seekers can easily navigate through a vast array of job listings to find the perfect match. We prioritize simplicity without compromising on the depth of information available, making the entire process straightforward and effective.

Skillio is more than just a job posting platform; it's a community of like-minded individuals and forward-thinking companies. We believe in the potential of every person and the positive impact of connecting the right talent with the right opportunities. Our commitment to fostering professional growth and development sets us apart as a trusted partner in the journey towards career success.

Thank you for choosing Skillio. Whether you are embarking on a new hiring journey or seeking the next step in your career, we are here to support you every step of the way. Join us and experience the future of job searching and recruiting.
        </p>
      </div>
    </div>
  );
};

export default About;
