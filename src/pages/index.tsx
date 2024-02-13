import { Inter } from "next/font/google";
import Head from "next/head";
import {useRef, useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showResult, setShowResult] = useState(false);
  const content = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{x: string | number, y: string | number}>({ x: 'calc(100% - 20px)', y: "calc(100% - 25px)" });

  const handleClick = () => {
    if (content && content.current) {
      const newX = Math.random() * content?.current?.clientWidth;
      const newY = Math.random() * content?.current?.clientHeight;
      setPosition({ x: newX, y: newY });
    }
  };
  const isNoClicked = position.x !== 'calc(100% - 20px)';
  const noButtonStyles = {
    position: isNoClicked ? 'absolute' : 'relative',
    ...(isNoClicked ? {top: position.y, left: position.x} : {}),
  }

  const onClickYes = () => {
    setShowResult(true)
  }

  const title = showResult ? 'I love you soooo much my little Princess!' : 'Will you be my Valentine?'

  return (
    <>
      <Head>
        <title>Валентинка</title>
        <meta name="description" content="Валентинка для найкращої в світі дівчини!" />
        <meta property="og:image" content="data:image/jpeg;base64,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" />
        {/* Other SEO and metadata */}
      </Head>
      <main
        className={`p-6 md:p-24 h-screen flex min-h-screen${inter.className} flex justify-center items-center`}
      >
        <div className="w-96">

          <h1 className="text-center mb-3 font-bold text-2xl text-pink-500">{title}</h1>
          <div className="relative flex flex-col items-center" ref={content}>
            <img width={320} height={320} src={showResult ? "./peach-goma-goma-peach.gif" : "./love-heart.gif"} className="mb-4"/>
            {!showResult &&
              <>
                <div className="flex justify-center">
                  <button onClick={onClickYes} className="bg-pink-500 rounded-2xl p-2 text-white mb-2">Yes my sweaty!</button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="border-2 border-pink-500 rounded-2xl p-2 bg-pink-300 text-white"
                    onClick={handleClick}
                    // @ts-ignore
                    style={noButtonStyles}
                  >
                    Nooooo
                  </button>
                </div>
              </>
            }
          </div>
        </div>
      </main>
    </>
  );
}


