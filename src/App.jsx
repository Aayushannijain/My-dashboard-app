import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setSearchQuery } from "./store";
import { sampleCategories } from "./store/sampleData";
import WidgetCategory from "./components/WidgetCategory";
import SearchBar from "./components/SearchBAr";
import AddWidget from "./components/AddWidget";

const App = () => {
  const dispatch = useDispatch();
  const { categories, query } = useSelector((state) => state.widgets);

  useEffect(() => {
    dispatch(setCategories(sampleCategories));
  }, [dispatch]);

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(query.toLowerCase())
    ),
  }));

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 sidebar">
          <h1>Dashboard</h1>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                CNAPP Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CSPM Executive Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CWPP Dashboard
              </a>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
        {/* Main Content */}
        <div className="col-md-8 main-content">
          <div className="search-container">
            <SearchBar className="search-bar" />
          </div>

          <div className="row mt-4">
            {filteredCategories.map((category, idx) => (
              <WidgetCategory key={idx} category={category} />
            ))}
          </div>
        </div>
        <div className="col-md-2 right-sidebar">
          <AddWidget className="add-widget-form" />
        </div>
      </div>
    </div>
  );
};

export default App;
