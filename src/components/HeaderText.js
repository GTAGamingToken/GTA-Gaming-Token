export default function HeaderText({ children }){
  return (
    <h1 className="text-4xl md:text-7xl md:my-8 font-bold">
      { children }
    </h1>
  )
}