import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam excepturi ipsum deserunt consectetur odio eos officiis exercitationem, id, nesciunt distinctio similique atque sunt illo voluptatum consequatur earum cupiditate inventore!</p>

      <Outlet />
    </div>
  )
}
