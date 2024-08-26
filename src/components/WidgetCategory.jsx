import React from "react";
import Widget from "./Widget";

const WidgetCategory = ({ category }) => {
  return (
    <div className="col-12 mb-4">
      <h4 className="font-weight-bold">{category.name}</h4>
      <div className="row">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default WidgetCategory;
