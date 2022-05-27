import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllPathArrayName } from "../../common/constants/routerPath";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSpecificPage = (pagePath: string) => {
    navigate(pagePath);
  };

  return (
    <div className="bg-todo-list">
      <header>
        <h3>TodoList Menu</h3>
      </header>
      <div>
        {getAllPathArrayName().map((item, index) => {
          return (
            <Button
              style={{
                display: "flex",
                margin: "auto",
                minWidth: "30rem",
                marginBottom: "1rem",
              }}
              variant="contained"
              key={index}
              onClick={() => handleClickSpecificPage(item)}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
