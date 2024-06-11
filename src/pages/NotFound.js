import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eos magnam magni placeat et suscipit vel eaque, dolorem tempora recusandae animi, nemo repellat doloremque, earum aliquid eum cum impedit ipsa?</p>

      <p>Got to the <Link to="/">Homepage</Link></p>
    </div>
  )
}
