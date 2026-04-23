//import "./index.css";

import { useState } from "react";
import "./App.css";

import Card from "./Card";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Feature from "./feature";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

function App() {

  //let counter = 0;
  let [counter,KCounter] = useState(0);


  const setCounter = () => {
    
    KCounter(counter+1);
    //console.log(counter);
  };
    const setDCounter = () => {
    
    KCounter(counter-1);
    //console.log(counter);
  };
  return (


    <div className="app">
      <Navbar />
      <Hero />
      <Feature />
      <Benefits />
      <Testimonials />
      {/* <CTA /> */}
      <Footer />

      {/* <h1 class="khushi">Trackify</h1>
      <h1>counter: {counter}</h1>
      <button onClick={setCounter}>Increment</button>
      <br/>
      <button onClick={setDCounter}>Decrement</button> */}
      
    </div>


  );
}

export default App;






// export default function App() {
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 5);

//     const interval = setInterval(() => {
//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference <= 0) {
//         clearInterval(interval);
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const card = {
//     padding:"0",

//     background: "rgba(20,20,30,0.85)",
//     border: "1px solid rgba(255,255,255,0.08)",
//     borderRadius: "18px",
//     padding: "18px 22px",
//     minWidth: "80px",
//     textAlign: "center",
//     boxShadow: "0 8px 30px rgba(52, 51, 51, 0.6)",
//     backdropFilter: "blur(10px)",
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         minWidth: "100vw",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#f0b216",
//         color: "#e5e7eb",
//         fontFamily: "Inter, system-ui, sans-serif",
//         padding: "20px",
//       }}
//     >
//       {/* Main container */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "900px",
//           padding: "50px 30px",
//           borderRadius: "24px",
//           background: "linear-gradient(145deg, #12121a, #1a1a26)",
//           boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
//           textAlign: "center",
//           position: "relative",
//         }}
//       >
//         {/* subtle top glow */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "2px",
//             background: "linear-gradient(90deg,#7c3aed,#ec4899,#7c3aed)",
//           }}
//         />

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{
//             fontSize: "56px",
//             fontWeight: 800,
//             letterSpacing: "-1px",
//             marginBottom: "25px",
//             color: "#ffffff",
//           }}
//         >
//           Trackify
//         </motion.h1>

//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           style={{
//             color: "#9ca3af",
//             fontSize: "16px",
//             marginBottom: "35px",
//           }}
//         >
//           A cleaner way to build habits and stay consistent.
//         </motion.p>

//         {/* Countdown */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5 }}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "18px",
//             marginBottom: "40px",
//             flexWrap: "wrap",
//           }}
//         >
//           {["days", "hours", "minutes", "seconds"].map((unit) => (
//             <div key={unit} style={card}>
//               <div
//                 style={{
//                   fontSize: "28px",
//                   fontWeight: "700",
//                   color: "#fff",
//                 }}
//               >
//                 {timeLeft[unit] || "0"}
//               </div>
//               <div
//                 style={{
//                   fontSize: "11px",
//                   color: "#6b7280",
//                   marginTop: "4px",
//                   textTransform: "uppercase",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 {unit}
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Email input */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           style={{ display: "flex", justifyContent: "center" }}
//         >
//           <div
//             style={{
//               display: "flex",
//               width: "100%",
//               maxWidth: "420px",
//               borderRadius: "50px",
//               overflow: "hidden",
//               border: "1px solid rgba(255,255,255,0.1)",
//               background: "#111118",
//             }}
//           >
//             <input
//               type="email"
//               placeholder="Enter your email"
//               style={{
//                 flex: 1,
//                 padding: "14px 16px",
//                 background: "transparent",
//                 border: "none",
//                 outline: "none",
//                 color: "#fff",
//                 fontSize: "14px",
//               }}
//             />
//             <button
//               style={{
//                 padding: "0 20px",
//                 border: "none",
//                 cursor: "pointer",
//                 background: "#7c3aed",
//                 color: "white",
//                 fontWeight: "600",
//                 fontSize: "14px",
//               }}
//             >
//               Notify
//             </button>
//           </div>
//         </motion.div>

//         {/* Footer */}
//         <p
//           style={{
//             marginTop: "40px",
//             fontSize: "12px",
//             color: "#6b7280",
//           }}
//         >
//           © {new Date().getFullYear()} Trackify
//         </p>
//       </div>
//     </div>
//   );
// }
