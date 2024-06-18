export default function WindowContent() {
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
    <div className="content rounded-b-md opacity-90 py-3 px-4 h-full min-h-20">
      <p className="text-xl">{code}</p>
    </div>
  );
}
