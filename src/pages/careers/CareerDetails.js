import { useParams, useLoaderData } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
      <p>Lorem ipsum dolor sit amet consectetur <br />
      adipisicing elit. A architecto ea reprehenderit <br />
      minus officia minima labore similique dolores aperiam <br />
      pariatur aliquid doloribus laboriosam error magnam <br />
      beatae, ducimus voluptatem facere illo.
      <ul>
        <li>aliquid</li>
        <li>aliquid</li>
        <li>aliquid</li>
        <li>aliquid</li>
      </ul></p>
      </div>
    </div>
  )
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/careers/' + id)

  return res.json()
}