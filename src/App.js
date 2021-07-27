import "./App.css";
import styled from "styled-components";
import InfinityScroll from "./Component/InfinityScroll";

const Layout = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 33px;
`;

function App() {
  return (
    <Layout>
      <div>
        <InfinityScroll />
      </div>
    </Layout>
  );
}

export default App;
