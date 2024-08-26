import Link from "next/link";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI&DS Notes!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore our collection of notes for various subjects and assignments.
        </p>
        <h5 className="text-3xl font-bold mb-2">Latest Materials</h5>
        <li >
          <Link href="./Assig1">Assignment for Database</Link>
        </li>
      </div>
    </>
  );
}
export default Home;