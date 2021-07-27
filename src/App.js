import logo from "./logo.svg";
import "./App.css";
import Box from "./Component/Box";
import styled from "styled-components";
import { getComments } from "./Utils/api";
import { useState, useEffect } from "react";

const Layout = styled.div`
  width: 100vw;
  height: 100%;
  background: yellow;
  display: flex;
  justify-content: center;
  padding-top: 33px;
`;

function App() {
  let firstPage = 1;
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(firstPage);

  const loadComments = async (page) => {
    try {
      const temp = await getComments(page, 10);
      const asdf = comments.concat(temp);
      setComments(asdf);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log(page);
    loadComments(page);
    console.log("comments", comments);
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <Layout>
      <button onClick={handleClick}>click</button>
      <div>
        {comments.map((comment) => {
          return (
            <Box
              key={comment.id}
              id={comment.id}
              email={comment.email}
              body={comment.body}
            />
          );
        })}
        {/* <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box /> */}
      </div>
    </Layout>
  );
}

export default App;
