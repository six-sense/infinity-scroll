import logo from './logo.svg';
import './App.css';
import Box from "./Component/Box";
import styled from 'styled-components';

const Layout = styled.div`
  width:100vw;
  height:100%;
  background:yellow;
  display:flex;
  justify-content:center;
  padding-top:33px;
`;

function App() {
  return (
      <Layout>
        <div>
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
          <Box />
          <Box />
        </div>
      </Layout>
  );
}

export default App;
