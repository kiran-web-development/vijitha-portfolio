# Vijitha Ramreddy | Personal Portfolio (Machine Learning Engineer)

This is a modern, premium personal portfolio website showcasing the skills, academic achievements, internships, and AI/ML projects of **Vijitha Ramreddy**, an aspiring Machine Learning Engineer.

## 🚀 Key Features

* **Dynamic Hero Section:** Fully interactive introduction introducing Vijitha's core focus areas.
* **Resume Integration:** Integrated download link for `vijitha_resume.pdf` served directly from the public assets folder.
* **AI/ML Project Spotlights:** Custom generated dashboard cards for projects including:
  * **YouTube RAG-Based Document Chatbot** (LangChain, ChromaDB, LLMs, Streamlit)
  * **Bus Booking Using Multiple Agents** (Pandas, Scikit-learn, Cosine Similarity)
* **Custom Skills Grid:** Displaying her technical capabilities in Python, SQL, Machine Learning, Deep Learning, NLP, LLMs/RAG, Pandas, NumPy, Scikit-learn, Jupyter Notebook, and Git.
* **Vertical Timeline:** Combined education and professional timeline illustrating Malla Reddy Engineering College B.Tech, Narayana College, Cloud Technologies internship, and JSpiders trainee program.
* **Functional Contact Form:** Responsive form built with React Hook Form, featuring robust client-side validation and Next.js Server Actions integration to dispatch emails via Nodemailer.

---

## 🛠️ Technology Stack

* **Framework:** Next.js 14 (App Router & Server Actions)
* **Programming Language:** TypeScript
* **Styling:** Tailwind CSS, PostCSS, Framer Motion (for smooth micro-animations and scroll effects)
* **Email & Feedback:** React Email & Nodemailer, React Hot Toast
* **Icons:** React Icons

---

## 💻 Local Setup & Development

### 1. Install Dependencies
Run the install command in the project directory:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory and add your SMTP credentials for the contact form:
```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password

# SMTP sender email
SENDER_EMAIL=your-sender-email@example.com

# Receive contact email
CONTACT_EMAIL=ramireddyvijitha@gmail.com

# Direct contact email shown on the UI
NEXT_PUBLIC_CONTACT_EMAIL=ramireddyvijitha@gmail.com
```

### 3. Run the Development Server
Start the Next.js local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal output) to view the live site.
