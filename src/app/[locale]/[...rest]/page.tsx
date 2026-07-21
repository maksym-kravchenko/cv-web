import { notFound } from 'next/navigation'

export default function CatchAllPage() {
  //This route just catches all other routes, that are not found

  notFound()
}
