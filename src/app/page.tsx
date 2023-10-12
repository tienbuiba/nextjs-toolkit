import LogIn from "./log-in";
import TodoList from "./todo";

export default function Home() {

  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '30px' }}>
      <TodoList />
      <LogIn />
    </div>
  );
}