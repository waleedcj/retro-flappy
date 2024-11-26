import { usePersonalBest } from '../context/Personalbest';
import { FaHourglassHalf } from 'react-icons/fa'; // Import an icon for visual enhancement

export default function Scoreboard() {
  const { personalBest } = usePersonalBest();

  return (
    <div className="text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Scoreboard</h2>

      {/* Personal Best Section */}
      <div className="bg-slate-700 shadow-md rounded-xl p-4 md:p-6 max-w-sm mx-auto mb-8">
        <p className="text-lg md:text-2xl mb-2">Your Personal Best</p>
        <p className="text-2xl md:text-4xl font-bold text-purple-600">{personalBest} $FLAPS</p>
      </div>

      {/* Leaderboards Section */}
      <div className="bg-slate-700 shadow-md rounded-xl p-4 md:p-6 max-w-sm mx-auto">
        <p className="text-lg md:text-2xl mb-4">Leaderboards</p>
        <div className="flex flex-col items-center">
          <FaHourglassHalf className="text-5xl text-purple-600 mb-4" />
          <p className="text-xl md:text-2xl font-semibold text-purple-600">Coming Soon!</p>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            Stay tuned for global leaderboards and compete with players worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
