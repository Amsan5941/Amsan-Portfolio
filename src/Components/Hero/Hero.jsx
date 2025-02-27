import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/amsan-picture.jpg";

const typingTexts = [
  "a programmer.",
  "a learner.",
  "an innovator.",
  "a problem solver.",
  "a full-stack developer.",
  "a database designer.",
  "a technical problem solver.",
  "an API architect.",
  "a software testing enthusiast."
];

const typingSpeed = 100; // Speed for typing characters
const deletingSpeed = 50; // Speed for deleting characters
const pauseBeforeDeleting = 1500; // Pause after typing
const pauseBeforeTyping = 500; // Pause before typing new text

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[index];

    if (!isDeleting && charIndex < currentText.length) {
      // Typing effect (adds one character at a time)
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } 
    else if (isDeleting && charIndex > 0) {
      // Deleting effect (removes one character at a time)
      const deletingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);

      return () => clearTimeout(deletingTimeout);
    } 
    else {
      // After typing, pause, then start deleting
      if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDeleting);
      } 
      // After deleting, switch to next text and start typing
      else {
        setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typingTexts.length);
          setCharIndex(0);
          setText(""); // Reset text before typing new one
        }, pauseBeforeTyping);
      }
    }
  }, [charIndex, isDeleting, index]);

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" className="hero-image" />
      <h1>
        <span>Hi! I am Amsan,</span> <span className="typing-text">{text}</span>
        <span className="cursor">|</span>
      </h1>
      <p>
        I love building user-friendly applications, solving problems with code, and exploring new technologies. 
        My journey in software development has been fueled by creativity, persistence, and a desire to learn.
      </p>

      <div className="hero-action">
        <a href="https://github.com/Amsan5941" target="_blank" rel="noopener noreferrer" className="hero-button github-btn">GitHub</a>
        <a href="https://drive.google.com/file/d/1GMBjvY3oBM4CQ1okIoMUh4nWvvMmjKzR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-button resume-btn">My Resume</a>
        <a href="https://www.linkedin.com/in/amsan-naheswaran-243407231/" target="_blank" rel="noopener noreferrer" className="hero-button linkedin-btn">LinkedIn</a>
      </div>
    </div>
  );
};

export default Hero;
