export default function Roadmap() {
    const milestones = [
      { phase: "Phase 1", title: "Launch", description: "Initial token launch and game release." },
      { phase: "Phase 2", title: "Community Growth", description: "Expand our community and partnerships." },
      { phase: "Phase 3", title: "Feature Expansion", description: "Add new game modes and token utilities." },
      { phase: "Phase 4", title: "Gamification Initiatives", description: "Introduce decentralized whitelisting competitions, supply drop quizzes, and AI-generated riddles to enhance engagement." },
    ];
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">FlapySol Roadmap</h2>
        <div className="max-w-2xl mx-auto px-4 space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{milestone.phase}: {milestone.title}</h3>
                <p className="mt-1 text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  