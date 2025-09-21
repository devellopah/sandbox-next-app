import Link from "next/link";

export default async function About() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  // throw new Error('This is a test error to demonstrate the error UI');

  return (
    <div>
      <h1>About</h1>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
