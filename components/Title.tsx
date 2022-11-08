export default function Title() {
  return (
    <div className="flex">
      <div className="flex-1 pl-3">
        <h1 className="font-bold text-4xl text-pink-main">
          Rapid Budgeting App
        </h1>
        <h2 className="italic text-2xl text-pink-light">
          Your finances at a glance
        </h2>
      </div>
      <div className="flex-1 self-end pl-10">
        <h3 className="font-bold text-2xl text-pink-main">
          How much tax are you paying?
        </h3>
      </div>
    </div>
  );
}
