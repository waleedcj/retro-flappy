import { useCallback, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { usePersonalBest } from '../context/Personalbest';

export default function Game() {
    const { personalBest, setPersonalBest } = usePersonalBest();
//   const [personalBest, setPersonalBest] = useState(() => {
//     const storedBest = localStorage.getItem("personalBest");
//     return storedBest ? parseInt(storedBest, 10) : 0;
//   });

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "assets/solgameV2.loader.js",
    dataUrl: "assets/solgameV2.data.unityweb",
    frameworkUrl: "assets/solgameV2.framework.js.unityweb",
    codeUrl: "assets/solgameV2.wasm.unityweb",
  });

  const handleGameOver = useCallback((event: any) => {
    const currentScore = event?.detail;
    if (currentScore > personalBest) {
      setPersonalBest(currentScore);
    }
  }, [personalBest, setPersonalBest]);

  useEffect(() => {
    window.addEventListener("GameOver", handleGameOver);
    return () => {
      window.removeEventListener("GameOver", handleGameOver);
    };
  }, [handleGameOver]);

  return (
    <div className="flex flex-col items-center px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{"FlapySol <-> $FLAPS"}</h2>
    <div className="w-full max-w-screen-md h-[600px] relative mx-auto md:max-w-screen-xl md:h-auto md:aspect-video">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 rounded-xl">
          <p className="text-xl">
            Loading Game... {Math.round(loadingProgression * 100)}%
          </p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: '100%',
          height: '100%',
          visibility: isLoaded ? 'visible' : 'hidden',
          borderRadius: '12px',
        }}
      />
    </div>
    {/* <p className="mt-4 text-xl">Your personal best is {personalBest} points.</p> */}
  </div>
  );
}

