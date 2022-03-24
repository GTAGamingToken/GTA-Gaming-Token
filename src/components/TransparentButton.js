export default function TransparentButton({ children }){
  return (
    <button className="py-4 my-4 px-16 border-2 rounded border-gray-100 mx-2 hover:bg-gray-100 hover:text-black transition uppercase text-2xl font-bold">
      { children }
    </button>
  )
}