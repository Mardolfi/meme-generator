import { createContext, useState } from "react";

export const MemeContext = createContext();

export function MemeProvider({ children }) {
  const [meme, setMeme] = useState();
  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();

  function memeGenerator() {
    fetch(`https://api.imgflip.com/get_memes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMeme(data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url));
  }

  return (
    <MemeContext.Provider
      value={{
        meme,
        setMeme,
        topText,
        setTopText,
        bottomText,
        setBottomText,
        memeGenerator,
      }}
    >
      {children}
    </MemeContext.Provider>
  );
}
