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
    <div className="preview border items-center p-2 flex flex-col w-full rounded-md">
      <div className="preview-box w-full border mt-40">
        <div className="frame w-96 mx-auto border-red-500 max-w-full border-2 p-2 rounded-sm">
          <div className="window border-emerald-600 border rounded-sm flex flex-col">
            <div className="flex border justify-between w-full p-2 items-center">
              <div className="window-buttons flex gap-2">
                <p className="w-4 h-4 rounded-full bg-orange-600"></p>
                <p className="w-4 h-4 rounded-full bg-orange-600"></p>
                <p className="w-4 h-4 rounded-full bg-orange-600"></p>
              </div>

              <div className="window-title">
                <p>index.js</p>
              </div>

              <div></div>
            </div>

            <div className="content border border-purple-600 p-2 h-full min-h-20">
              <p>{code}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
