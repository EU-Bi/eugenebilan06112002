export const Header=({obj})=>{
  console.log(Object.values(obj))
  return(
    <header style={{background:`url("${Object.values(obj)[0]}") no-repeat`,width:'100%', height:'200px'}}>
    </header>
  )
}