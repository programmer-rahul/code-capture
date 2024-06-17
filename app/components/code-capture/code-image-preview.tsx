import WindowButtons from "./preview/window-buttons";

export default function CodeImagePreview() {
  const code = `function Numbers() {
        const [number, setNumber] = useNow(0);
        
        setTimeout(
          () => setNumber(number++),
          1000
        );
      
        return <div>The number is {number}</div>
      }
      `;

  return (
    <div className="preview items-center py-3 px-4 flex flex-col w-full rounded-md bg-[#191919]">
      <div className="preview-box w-full mt-40">
        {/* frame  */}
        <div className="frame w-[30rem] mx-auto  max-w-full bg-gradient-to-tr to-purple-600 from-orange-400 p-10 rounded-md">
          <div className="window flex flex-col">
            <div className="window-header rounded-t-md bg-[#353742] flex justify-between w-full py-3 px-4 items-center">
              <WindowButtons />

              <div className="window-title">
                <p>index.js</p>
              </div>
              <div className="w-16" />
            </div>

            <div className="content rounded-b-md bg-[#282a36] py-3 px-4 h-full min-h-20">
              <p className="text-xl">{code}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
