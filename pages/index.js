/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

// npm run dev

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
` */
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <Head>
        <title>Star Wars Quiz</title>
        <meta name="title" content="Star Wars Quiz" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starwars-quiz.souuzaaa.vercel.app/" />
        <meta property="og:title" content="Star Wars Quiz" />
        <meta property="og:description" content="Teste seu conhecimento sobre o universo star wars!!" />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://starwars-quiz.souuzaaa.vercel.app/" />
        <meta property="twitter:title" content="Star Wars Quiz" />
        <meta property="twitter:description" content="Teste seu conhecimento sobre o universo star wars!!" />
        <meta property="twitter:image" content={db.bg} />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();

                router.push(`/quiz?name=${name}`);
              }}
              >
                <p>{db.description}</p>
                <input
                  className="inputName"
                  placeholder="Diz ai seu nome"
                  onChange={function (infosDoEvento) {
                    setName(infosDoEvento.target.value);
                  }}
                />
                <button className="buttonQuiz" type="submit" disabled={name.length === 0}>
                  JOGAR
                  {' '}
                  {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/SoUuzaaa" />
      </QuizBackground>
    </>
  );
}
