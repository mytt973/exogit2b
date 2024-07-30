import { Login } from "../../components";
import { getContactTab } from "../../model/Tab";

const Contact= ()=>{
return(<div><Login tab={getContactTab} onSup={()=>{}} area="true" ><textarea>give your message</textarea></Login>

</div>)
}
export default Contact;