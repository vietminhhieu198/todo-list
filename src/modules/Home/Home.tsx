import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { pathArrayName } from "../../common/constants/routerPath";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-todo-list">
      <header>
        <h3>TodoList Menu</h3>
      </header>
      <div>
        {pathArrayName().map((item, index) => {
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
              onClick={() => navigate(item)}
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
