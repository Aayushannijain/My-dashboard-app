import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../store";

const AddWidget = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("primary");

  const categories = useSelector((state) =>
    state.widgets.categories.map((cat) => cat.name)
  );
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name && content && category) {
      dispatch(
        addWidget({
          category,
          widget: { id: Date.now(), name, content, color },
        })
      );
      setName("");
      setContent("");
    }
  };

  return (
    <div className="mb-4">
      <h4>Add Widget</h4>
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Widget Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
          className="form-control mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          className="form-control mb-2"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
        </select>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Widget
        </button>
      </div>
    </div>
  );
};

export default AddWidget;
