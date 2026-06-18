import youtubeRagChatbotImg from "@/public/youtube_rag_chatbot.png";
import busBookingDashboardImg from "@/public/bus_booking_dashboard.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { RiDatabase2Line, RiGitBranchLine } from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";

import React from "react";

export const profile = {
  avatar: "/icons8-v-64.png",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ramireddyvijitha@gmail.com",
  name: "Vijitha Ramreddy",
  title: "aspiring Machine Learning Engineer",
  experience: "a strong foundation in Python, SQL, Machine Learning, and NLP",
  likes: "building end-to-end ML models and Retrieval-Augmented Generation (RAG) systems",
  resumeLink: "/vijitha_resume.pdf",
  linkedInLink: "https://www.linkedin.com/in/vijitha-ramireddy",
  githubLink: "https://github.com/Vijitha-Ramreddy/",
  phone: "+91 9652861278",
  phoneUrl: "tel:+919652861278",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Machine Learning Trainee",
    location: "JSpiders, Hyderabad",
    description:
      "Undergoing structured training in Python, Machine Learning, Deep Learning, and Natural Language Processing. Practicing data preprocessing, feature engineering, EDA, and building ML projects from scratch.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2026 - Present",
  },
  {
    title: "Machine Learning Intern",
    location: "Cloud Technologies, Hyderabad",
    description:
      "Developed and evaluated Machine Learning models using Python and Scikit-learn for classification and regression. Performed data preprocessing, feature engineering, exploratory data analysis (EDA), and built ML pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
  {
    title: "B.Tech in Computer Science & Cyber Security",
    location: "Malla Reddy Engineering College, Hyderabad",
    description:
      "Graduated with a GPA of 8.01/10. Developed a solid foundation in computer architecture, security principles, software development, and algorithms.",
    icon: React.createElement(FaGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Intermediate Education",
    location: "Narayana Junior College, Hyderabad",
    description:
      "Completed Board of Intermediate Education with 974/1000 marks.",
    icon: React.createElement(FaGraduationCap),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "YouTube RAG-Based Document Chatbot",
    description:
      "Built an end-to-end YouTube Video Question Answering and Summarization System using Retrieval-Augmented Generation (RAG). Extracted video transcripts, performed text chunking, and stored vectors in ChromaDB.",
    tags: ["Python", "RAG", "LangChain", "LLMs", "ChromaDB", "Streamlit"],
    imageUrl: youtubeRagChatbotImg,
    url: "https://github.com/Vijitha-Ramreddy/You-tube-Rag-Project.git",
  },
  {
    title: "Bus Booking Using Mutliple Agents",
    description:
      "Built a machine learning-based recommendation system to suggest movies based on user preferences and similarity between movies. Implemented content-based filtering using cosine similarity on movie metadata such as genres and keywords. Processed movie datasets using Pandas and Scikit-learn to generate personalized recommendations.",
    tags: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity", "Machine Learning"],
    imageUrl: busBookingDashboardImg,
    url: "https://github.com/Vijitha-Ramreddy/Bus-Ticket-booking-system.git",
  },
] as const;

export const skillsData = [
  { name: "Python", icon: TbBrandPython },
  { name: "SQL", icon: RiDatabase2Line },
  { name: "Machine Learning", icon: GiBrain },
  { name: "Deep Learning", icon: GiBrain },
  { name: "Natural Language Processing", icon: GiBrain },
  { name: "LLMs & RAG", icon: GiBrain },
  { name: "LangChain", icon: GiBrain },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Jupyter Notebook", icon: SiJupyter },
  { name: "Google Colab", icon: SiGooglecolab },
  { name: "VS Code", icon: VscCode },
  { name: "Git & GitHub", icon: RiGitBranchLine },
] as const;
