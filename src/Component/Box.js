import React from "react";
import styled from "styled-components";
const BoxLayout = styled.div`
  background: #f8f9fa;
  width: 500px;
  height: auto;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 12px;
`;
const TextLayout = styled.div`
  width: 100%;
  height: ${(props) => props.ht}px;
  display: flex;
  justify-content: flex-start;
  align-items: ${(props) => props.ai};
  margin-bottom: ${(props) => props.mb}px;
  font-size: 18px;
`;
const TextBodyLayout = styled.div`
  width: 100%;
  height: auto;
  min-height: 63px;
  display: flex;
  justify-content: flex-start;
  align-items: ${(props) => props.ai};
  margin-bottom: ${(props) => props.mb}px;
  font-size: 18px;
`;
function Box({ id, email, body }) {
  return (
    <div>
      <BoxLayout>
        <TextLayout ht={21} mb={12} ai={"center"}>
          <div style={{ height: "21px", marginRight: "12px" }}>
            <b>Comment Id</b>
          </div>
          <div style={{ height: "21px" }}>{id}</div>
        </TextLayout>
        <TextLayout ht={21} mb={12} ai={"center"}>
          <div style={{ height: "21px", marginRight: "12px" }}>
            <b>Email</b>
          </div>
          <div style={{ height: "21px" }}>{email}</div>
        </TextLayout>
        <TextLayout ht={21} mb={2} ai={"center"}>
          <b>Comment</b>
        </TextLayout>
        <TextBodyLayout mb={0} ai={"flex-start"}>
          {body}
        </TextBodyLayout>
      </BoxLayout>
    </div>
  );
}
export default Box;
