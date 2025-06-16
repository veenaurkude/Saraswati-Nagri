import React from "react";
import styles from "./Map.module.css";
import keyPlan from "../../assets/key_plan.jpg";

const plots = [
  { id: 1, top: "89%", left: "21%" },
  { id: 2, top: "89%", left: "29%" },
  { id: 3, top: "89%", left: "34%" },
  // Add all other plots with their approximate top and left percentages
  { id: 51, top: "33%", left: "35%" },
];

const data = [
  {
    id: 1,
    size: "20*20",
    status: "booked",
  },
  {
    id: 2,
    size: "30*20",
    status: "available",
  },
  {
    id: 3,
    size: "40*20",
    status: "available",
  },
];

function handleClick(id) {
  const response = data.find((item) => item.id === id);
  alert(response?.status);
}

const Map = () => {
  return (
    <div className={styles.container}>
      <img src={keyPlan} alt="Plot Layout" className={styles.image} />
      {plots.map((plot) => {
        const plotData = data.find((item) => item.id === plot.id);
        const isBooked = plotData?.status === "booked";
        return (
          <button
            key={plot.id}
            className={styles.plotButton}
            style={{
              top: plot.top,
              left: plot.left,
              backgroundColor: isBooked ? "red" : "green",
            }}
            onClick={() => handleClick(plot.id)}
          >
            {plot.id}
          </button>
        );
      })}
    </div>
  );
};

export default Map;