import { useParams, useLoaderData } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: ${career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>Description: {career.description}
        <ul>
          <li>Requirements 1</li>
          <li>Requirements 2</li>
          <li>Requirements 3</li>
          <li>Requirements 4</li>
          <li>Requirements 5</li>
          <li>Requirements 6</li>
        </ul></p>
      </div>
    </div>
  )
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/careers/' + id)

  if (!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}