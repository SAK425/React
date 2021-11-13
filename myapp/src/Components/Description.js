import Enhancer  from "../HOC/Enhancer";
const Description =({heading})=>{
return(
    <div>
        <h2>{heading}</h2>
        <div>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </div>
    </div>
)


}
export default Enhancer(Description);