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
  min-width: 190px;
  border-radius: 16px;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bgColor || "#007bff"};
  padding: 13px 15.5px;
  cursor: pointer;
  background-color: ${(props) => props.className ?? "#ffff"};
  border: none;
  align-items: center;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    color: #666;
  }
`
