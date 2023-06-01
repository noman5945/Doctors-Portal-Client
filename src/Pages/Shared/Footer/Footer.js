import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const address = "New York - 101010 Hudson";
  return (
    <section className=" bg-footer-cover bg-cover bg-no-repeat w-full bg-center-bottom h-64">
      <footer className="footer p-10 text-black">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <Link className="link link-hover">Flouride Treatement</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teeth Whitening</Link>
        </div>
        <div>
          <span className="footer-title">Our address</span>
          <Link className="link link-hover">{address}</Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
