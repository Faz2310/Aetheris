import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link , useNavigate } from "react-router-dom";
import { Button } from "./components/button";
import Navbar from "./Navbar";
import { Card, CardContent } from "./components/card";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDX-Fe3SLRNVKIVoTe0zObC9YLRCpb2BPI",
  authDomain: "aetheris-bcb7b.firebaseapp.com",
  projectId: "aetheris-bcb7b",
  storageBucket: "aetheris-bcb7b.firebasestorage.app",
  messagingSenderId: "247416180145",
  appId: "G-F6632F7ZHG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase app initialized:", app.name);  // Should log "[DEFAULT]"
console.log("Firebase auth service:", auth.app.name);


const Home = () => {

   const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="app-background">
     <Navbar user={user} onLogout={handleLogout} />

      <section className="video-section" data-aos="fade-up">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <source src="/mainvideo.mp4" type="video/mp4" />
        </motion.video>

        <motion.div
          className="content"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>AI Travel Reinnovated</h2>
          <h2>Predict - Prevent - Protect</h2>
          <p>
            Learn How We Can Make Our Rides Safer With The Help of AI
          </p>
          <Link to="/services-page">
          <Button className="default">Explore Our Services</Button>
          </Link>
		  <Button
  className="default"
  onClick={() =>
    window.open(
      "https://forms.gle/ifZFq4RrDwx4MJvYA",
      "_blank"
    )
  }
>
  JOIN NOW
</Button>
        </motion.div>
      </section>

      <section className="section" data-aos="fade-up">
        <h3>Why Travel with AETHERIS®</h3>
        <div className="card-grid">
          <Card className="card" data-aos="zoom-in" data-aos-delay="100">
            <CardContent>
              <h4>Safer Solutions</h4>
              <p>Make your travel Safer with Aetheris now.</p>
            </CardContent>
          </Card>

          <Card className="card" data-aos="zoom-in" data-aos-delay="200">
            <CardContent>
              <h4>Access Anywhere</h4>
              <p>You can access Aetheris features from anywhere in the world.</p>
            </CardContent>
          </Card>

          <Card className="card" data-aos="zoom-in" data-aos-delay="300">
            <CardContent>
              <h4>Availability</h4>
              <p>You can access and use the App 24/7 anytime and anywhere.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h3>Our Store</h3>
        <p>Discover a wide variety of AI features to meet your needs—from short rides to cross-country rides all in one place.</p>
		<Card className="card" data-aos="zoom-in" data-aos-delay="300">
            <CardContent>
              <h3>SKOPIA</h3>
              <p>A One-of a Kind prototype  with features like Collision detection, Dynamic Lane Detection and Traffic Level Scoring.
				It uses High-Level Camera Sensing To Make Your Ride Easier and Safer.
			</p>
            </CardContent>
        </Card>
			
      </section>

      <section className="section" data-aos="fade-up">
        <h3>Membership Plans</h3>
        <p>Enjoy exclusive benefits, discounted rates, and personalized services with AETHERIS® memberships.</p>
		<Card className="card" data-aos="zoom-in" data-aos-delay="300">
            <CardContent>
              <h3>COMING SOON...</h3>
              <p>LOOK FORWARD TO IT
			</p>
            </CardContent>
        </Card>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} AETHERIS® All rights reserved.
      </footer>
    </div>
  );
};

const Services = () =>{


  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return(
  <div className="app-background">
     <Navbar user={user} onLogout={handleLogout} />
    <div className="services-page">
      <h1 align="center" data-aos="fade-in">Services</h1>
    <Card className="card" data-aos="fade-right" data-aos-delay="200">
            <CardContent>
              <h2>Highway Driving Assistance</h2>
              <p>Real-time detection of risky nearby vehicles helps prevent high-speed collisions.
                Especially useful for long-haul drivers, night-time journeys, or under low-visibility conditions.</p>
            </CardContent>
    </Card>

    <Card className="card" data-aos="fade-left" data-aos-delay="200">
            <CardContent>
              <h2>Fleet Management & Logistics</h2>
              <p>Logistics providers can install the system in their fleet vehicles to improve driver safety.
                Each driver gets personalized alerts, while the company maintains data privacy compliance (no tracking needed).</p>
            </CardContent>
    </Card>

    <Card className="card" data-aos="fade-right" data-aos-delay="200">
            <CardContent>
              <h2>Privacy-First Government & Military Transport</h2>
              <p>No location, speed, or identity is shared externally — ideal for VIP transport, defense vehicles, or sensitive personnel.
                Ensures internal safety protocols while respecting national data boundaries.</p>
            </CardContent>
    </Card>

    <Card className="card" data-aos="fade-left" data-aos-delay="200">
            <CardContent>
              <h2>Connected Car Ecosystems</h2>
              <p>Easily integratable with modern EVs, connected cars, or telematics systems.
                Provides AI-enhanced insights without heavy cloud dependency.</p>
            </CardContent>
    </Card>


    <h1 align="center" data-aos="fade-in">Advantages</h1>

    <Card className="card" data-aos="fade-right" data-aos-delay="200">
            <CardContent>
              <h2> Real-Time Collision Prevention</h2>
              <p>AI detects and evaluates risk faster than humans — every millisecond counts.
	                Alerts drivers before their instincts even kick in.</p>
            </CardContent>
    </Card>

    <Card className="card" data-aos="fade-left" data-aos-delay="200">
            <CardContent>
              <h2>Data Security with End-to-End Encryption</h2>
              <p>Every piece of user data — from behavior to alert logs — is encrypted like WhatsApp chats.
                Prevents hacking, sniffing, or unauthorized access.</p>
            </CardContent>
    </Card>

    <Card className="card" data-aos="fade-right" data-aos-delay="200">
            <CardContent>
              <h2>Plug-and-Play for Any Vehicle</h2>
              <p>Doesn’t require advanced hardware or expensive sensors.
                Can be implemented via a mobile app, dash module making easier to Use.</p>
            </CardContent>
    </Card>
    </div>

  </div>
  );
}

const About = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="app-background">
      {/* HEADER */}
      <Navbar user={user} onLogout={handleLogout} />
      {/* ABOUT COMPANY */}
      <section className="section" data-aos="fade-up">
        <h2 align="center">About AETHERIS®</h2>

        <Card className="card about-card" data-aos="zoom-in">
          <CardContent>
            <h3>Who We Are</h3>
            <p>
              AETHERIS® 
						Predicting danger. Protecting lives.
						Aetheris is an intelligent driving-assistant system designed to prevent accidents before they happen. Using advanced computer vision and predictive AI, Aetheris analyzes the road in real time—detecting lanes, tracking traffic, estimating vehicle speed, and forecasting collision points with high precision.
						We’re building the next generation of road-safety technology for everyday drivers.
            </p>
			<p>
			Our Mission
						To make roads safer by giving drivers the power of prediction.
						We believe that every driver deserves access to intelligent, affordable, and reliable safety technology—not just those who can afford high-end vehicles.
            </p>

            <p>
              We believe safety should be proactive, privacy-first, and
              accessible to everyone — from daily commuters to government fleets.
              Our technology works without heavy cloud dependency,
              ensuring speed, reliability, and data sovereignty.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CO-FOUNDERS */}
      <section className="section" data-aos="fade-up">
        <h2 align="center">Co-Founders</h2>

        <div className="card-grid">
          <Card className="card" data-aos="fade-right">
            <CardContent>
		  	  <h3>Co-Founder</h3>
              <h3>Syed Mikraam Rasheed</h3>
              <p>
                Visionary behind AETHERIS®, focused on AI innovation,
                safety systems, and developing the products at every level.
              </p>
            </CardContent>
          </Card>

          <Card className="card" data-aos="fade-left">
            <CardContent>
              <h3>Co-Founder & Fullstack Developer</h3>
              <p>
                Leads system architecture, AI models,
                and engineering execution with a focus on PR and Online Presence of the Company.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} AETHERIS® All rights reserved.
      </footer>
    </div>
  );
};

const ContactUs = () =>{

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return(

    <div className="app-background">
      <Navbar user={user} onLogout={handleLogout} />

    
   <div className="contact-page" data-aos="fade-up">
    
      <h1>FOLLOW US ON</h1>
      <div className="social-links">
        <a href="https://x.com/AETHERIS23711" target="_blank" rel="noopener noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61578772525591" target="_blank" rel="noopener noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
        </a>
        <a href="https://www.instagram.com/aetheris__._/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        </a>
        <a href="https://www.youtube.com/channel/UCjWBcg6ncAgFK9jZqJT2Y-A" target="_blank" rel="noopener noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
      </div>
      <p className="mail">GMAIL: dataisservixe@gmail.com</p>

      <Link to="/home">
        <Button className="default">Back to Home</Button>
      </Link>
    </div>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  
  return (
    <div className="auth-container">
      <h2>LOGIN</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="default">Login</Button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>REGISTER</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="default">Register</Button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path = "/contact-us" element={<ContactUs/>}/>
        <Route path = "/services-page" element={<Services/>} />
	  	<Route path = "/about" element={<About/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </Router>
  );
};

export default App;
