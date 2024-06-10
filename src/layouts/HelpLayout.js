import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
  return (
    <div>
      <div className="help-layout">

        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium pariatur laboriosam incidunt sequi, accusamus blanditiis dignissimos neque in itaque delectus aspernatur et earum consequuntur adipisci repellat perspiciatis quisquam voluptatem.</p>

        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>

        <Outlet />

      </div>
    </div>
  )
}
