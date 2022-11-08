
export default function Header ({funcao }) {
  return (
    <div>
      <h1>Where in the world?</h1>
      <button onClick={() => funcao()}>🌙 Tema Dark</button>
    </div>
  )
  }