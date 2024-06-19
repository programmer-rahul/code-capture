import MonacoEditor from "@/lib/monoco-editor";

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
    <div className="content rounded-b-md opacity-90 h-60">
      <MonacoEditor />
    </div>
  );
}
