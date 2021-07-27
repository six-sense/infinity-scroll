import React, { useEffect, useState } from "react";
import Box from "./Box";
import { getComments } from "../Utils/api";

function InfinityScroll() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

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
    loadComments(page);
  }, [page]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {comments.map((item, key) => (
        <Box key={item.id} id={item.id} email={item.email} body={item.body} />
      ))}
    </>
  );
}

export default InfinityScroll;
