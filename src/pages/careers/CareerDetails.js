import { useParams, useLoaderData } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className='career-details'>
      <h2>{ id }</h2>

    </div>
  )
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/careers/' + id)

  return res.json()
}