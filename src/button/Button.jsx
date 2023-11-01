import styled from "styled-components"

export const Button = ({ children, callUs, isDone }) => {
  return (
    <StyledButton onClick={callUs} className={isDone ? isDone : "#4267A4"}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  height: 55px;
  border-radius: 16px;
  font-size: 24px;
  font-weight: 800;
  color: #ffff;
  padding: 13px 15.5px;
  cursor: pointer;
  background-color: ${(props) => props.className};
  border: none;
`
