// import React, { useState, useEffect } from "react";
// import "./Pages.css";

// function NumberGuessing() {
//   const [pNum, setpNum] = useState([]);
//   const [numberSelected, setNumberSelected] = useState(0);
//   const [generatedNumber, setGeneratedNumber] = useState(0);
//   const itemArr = [];

//   const forLop = (e) => {
//     // e.preventDefault();
//     for (let i = 1; i <= 15; i += 1) {
//       itemArr.push(i);
//     }
//     return itemArr;
//   };
//   const tt = forLop();
//   console.log(tt);
//   // console.log(numberSelected);
//   const generateRandomNumber = () => {
//     setGeneratedNumber((gen) => {
//       gen = Math.floor(Math.random() * 10);
//     });
//     // setGeneratedNumber(gner);
//   };
//   let sc = generateRandomNumber();
//   console.log(sc);
//   useEffect(() => {
//     {
//       setpNum(tt);
//     }
//     console.log("called");
//     return () => {
//       console.log(" out");
//     };
//   }, [...pNum]);

//   return (
//     <div className="guessing-container">
//       <div className="guessing-interface">
//         <h1>Guess The Number</h1>
//         <div className="number-display">
//           {pNum?.map((item, index) => (
//             <p
//               key={index}
//               alt={item}
//               className={`numbers${item}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setNumberSelected(e.currentTarget.textContent);
//                 return numberSelected;
//               }}
//             >
//               {item}
//             </p>
//           ))}
//         </div>
//         <div className="selected-number">{numberSelected}</div>
//       </div>
//     </div>
//   );
// }

// export default NumberGuessing;
