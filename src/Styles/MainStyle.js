import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 90px);
  box-shadow: rgb(92 200 225) 2px 2px 10px;
  border-radius: 10px;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
color: rgb(0 0 0 / 75%);
// color: black
  font-size: 1.5rem;
`;

export const Current = styled.div`
color: black;
font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px outset white;
  background-color: #1c1a1a;
  color: #00dce7;
  &:hover {
    background-color:rgb(72 112 114);
  }

  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan};`
    }
  }}

  ${({ operation }) => {
    return operation && ` color: black; background-color: #e75405; font-weight: bold; &:hover {background-color: rgb(241 128 67)}; `
  }
  }

  ${({ acdel }) => {
    return acdel && ` color: black; background-color: rgb(129 118 118); &:hover: `
  }
  }

  ${({ equal }) => equal && `border-bottom-right-radius: 10px;`
  }

  ${({ zero }) => zero && `border-bottom-left-radius: 10px`}

  `;