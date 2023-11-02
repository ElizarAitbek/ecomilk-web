import styled from "styled-components"

export const Button = ({ children, onClick, background, color }) => {
  return (
    <StyledButton onClick={onClick} className={background} color={color}>
      {children}
    </StyledButton>
  )
}

export const StyledButton = styled.button`
  display: flex;
  height: 55px;
  border-radius: 16px;
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.color ?? "#ffff"};
  padding: 13px 15.5px;
  cursor: pointer;
  background-color: ${(props) => props.className ?? "#ffff"};
  border: none;
  align-items: center;
`
