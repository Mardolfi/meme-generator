import { useContext, useState } from "react";
import styled from "styled-components";
import { MemeContext } from "../context/MemeContext";
import logo from "../img/logo.png";

function MemeGenerator() {
  const {
    topText,
    bottomText,
    setTopText,
    setBottomText,
    meme,
    memeGenerator,
  } = useContext(MemeContext);

  const [inputTop, setInputTop] = useState();
  const [inputBottom, setInputBottom] = useState();

  return (
    <MemeContainer>
      <Header>
        <img src={logo} />
        <p>Random Meme Generator</p>
      </Header>
      <MemeContent>
        <MemeControl
          onSubmit={(e) => {
            e.preventDefault();
            memeGenerator();
            setTopText(inputTop);
            setBottomText(inputBottom);
          }}
        >
          <input
            type={"text"}
            placeholder={"Top Text"}
            onChange={(e) => setInputTop(e.target.value)}
          />
          <input
            type={"text"}
            placeholder={"Bottom Text"}
            onChange={(e) => setInputBottom(e.target.value)}
          />
          <button>Generate</button>
        </MemeControl>
        <Meme image={meme}>
          <h1>{topText}</h1>
          <h1>{bottomText}</h1>
        </Meme>
      </MemeContent>
    </MemeContainer>
  );
}

const MemeContent = styled.div`
  padding: 30px 50px;
`;

const MemeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #c5d4d4;
  padding: 20px 100px;
`;

const Meme = styled.div`
  height: 1000px;
  width: 600px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 250px;
  margin-top: 30px;

  h1:nth-child(1) {
    position: absolute;
    top: 20px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 2px 0 #000, 0 1px #000, 0 -1px #000, -1px 0 #000;
    font-size: 150%;
  }

  h1:nth-child(2) {
    position: absolute;
    bottom: 20px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 2px 0 #000, 0 1px #000, 0 -1px #000, -1px 0 #000;
    font-size: 150%;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 150px;
  padding: 0px 50px;
  background: #382748;
  color: #fff;
  font-size: 3rem;
  align-items: center;

  img {
    width: 100px;
  }
`;
const MemeControl = styled.form`
  display: flex;
  align-items: center;

  input {
    width: 500px;
    height: 50px;
  }

  button {
    width: 150px;
    height: 50px;
    border: none;
    background: #382748;
    color: white;
    font-size: 1.5rem;
  }
`;

export default MemeGenerator;
