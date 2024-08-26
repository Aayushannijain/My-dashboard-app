import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Widget = ({ widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ category: widget.category, widgetId: widget.id }));
  };

  // Render the chart based on the type
  const renderChart = () => {
    if (!widget.chart) return null;

    switch (widget.chart.type) {
      case "doughnut":
        return <Doughnut data={widget.chart.data} />;
      case "bar":
        return <Bar data={widget.chart.data} />;
      case "pie":
        return <Pie data={widget.chart.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="col-md-9 col-lg-6 mb-2">
      <div className={`card widget-card ${widget.color}`}>
        <div className="card-header d-flex justify-content-between">
          <span>{widget.name}</span>
          <button
            type="button"
            className="close text-danger"
            aria-label="Close"
            onClick={handleRemove}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body">
          {widget.chart ? (
            <div className="chart-container">{renderChart()}</div>
          ) : (
            <div className="chart-placeholder">{widget.content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Widget;
