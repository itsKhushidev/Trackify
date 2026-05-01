// Dashboard.jsx
import "./dash.css";
import { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Dashboard() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Fitness" },
    { id: 2, name: "Study" },
    { id: 3, name: "Mind" },
    { id: 4, name: "Work" },
  ]);

  const [habits, setHabits] = useState([
    { id: 1, text: "Morning Run", streak: 5 },
    { id: 2, text: "Read Book", streak: 3 },
  ]);

  const [activeCategory, setActiveCategory] = useState(null);
  const [newHabit, setNewHabit] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const openModal = (cat) => {
    setActiveCategory(cat);
    setCategoryName(cat.name);
  };

  const closeModal = () => {
    setActiveCategory(null);
    setNewHabit("");
  };

  const addHabit = () => {
    if (!newHabit.trim()) return;
    setHabits([...habits, { id: Date.now(), text: newHabit, streak: 1 }]);
    setNewHabit("");
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  const updateCategory = () => {
    setCategories(
      categories.map((c) =>
        c.id === activeCategory.id ? { ...c, name: categoryName } : c
      )
    );
    closeModal();
  };

  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        data: [3, 5, 2, 6, 4, 7, 5],
        backgroundColor: "#4F46E5",
        borderRadius: 12,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className={`dashboard ${activeCategory ? "blur" : ""}`}>

      {/* LEFT */}
      <div className="profile card">
        <img src="https://picsum.photos/500/500" />
        <h3>Adarsh</h3>
        <button>Edit</button>
      </div>

      {/* MIDDLE */}
      <div className="middle">
        <div className="categories card">
          <h3>Categories</h3>

          <div className="grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="cat-box"
                onClick={() => openModal(cat)}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </div>

        <div className="chart card">
          <h3>Weekly Insight</h3>
          <Bar data={data} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="tasks card">
          <h3>All Habits</h3>

          {habits.map((h) => (
            <div className="task" key={h.id}>
              <span>{h.text}</span>
              <div>
                🔥 {h.streak}
                <button onClick={() => deleteHabit(h.id)}>✕</button>
              </div>
            </div>
          ))}
        </div>

        <div className="sleep card">
          <h3>Sleep</h3>
          <p>7h 20m</p>
          <div className="sleep-bar">
            <div className="fill"></div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeCategory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{activeCategory.name}</h3>

            <input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Rename category"
            />

            <div className="modal-row">
              <input
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Add habit"
              />
              <button onClick={addHabit}>Add</button>
            </div>

            <button className="save" onClick={updateCategory}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}