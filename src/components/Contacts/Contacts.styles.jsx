import styled from "@emotion/styled/macro";

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: #1d1b26;
  text-decoration: none;
  color: white;
  display: inline-block;
  position: relative;
  padding: 15px 30px;
  border: 1px solid;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  margin: 10px 20px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    color: white;
    background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover {
    background: rgba(255, 255, 255, 0);
  }
  &:hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }
`;

export const BtnDelete = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 5px;
  border-color: transparent;
  border-radius: 5px;
  background-color: #c7cace;
  text-transform: uppercase;
  cursor: pointer;
  background-color: aqua;
`;

export const BtnText = styled.span`
  /* padding: 10px;
  color: black;
  cursor: pointer; */
`;

export const NumberText = styled.span`
  margin-right: 30px;
  margin-left: 10px;
`;
