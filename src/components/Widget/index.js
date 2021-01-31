import styled from 'styled-components';

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.secondary};
background-color: #1C1814;
border-radius: 4px;
overflow: hidden;

h1, h2, h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}
p {
  margin: 0 0 20px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
button {
  width: 100%;
}
.inputName {
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  color: white;
  padding: 15px;
  outline: 0;
  border: 1px solid #801313;
  border-radius: 5px;
  background-color: transparent;
}
.buttonQuiz {
  margin-top: 25px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  color: white;
  outline: 0;
  background: #2E2E2E;
  padding: 10px;
}
`;

Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.primary};

* {
  margin: 0;
}
`;

Widget.Content = styled.header`
padding: 24px 32px 32px 32px;
& > *:first-child {
  margin-top: 0;
}
& > *:last-child {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
};
`;

export default Widget;
