import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal  text-base-content p-10 w-11/12 mx-auto">
      <nav className="font-bold  text-[#E2B59A]">
        <h6 className="footer-title font-bold text-xl text-black">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="font-bold  text-[#E2B59A]">
        <h6 className="footer-title font-bold text-xl text-black">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="font-bold  text-[#E2B59A]">
        <h6 className="footer-title font-bold text-xl text-black">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
     
    </footer>
  );
};

export default Footer;
