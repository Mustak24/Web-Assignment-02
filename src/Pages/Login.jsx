import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import InputText from "../Components/Input/InputText";

export default function Login({}){

    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
        navigate('/account-setting');
    }

    return (
        <div className="w-full h-full flex sm:items-center justify-center p-2 pt-5">
            <form onSubmit={handleForm} className="flex flex-col gap-4">
                <div>
                    <h1 className="text-2xl sm:text-center font-semibold flex max-sm:flex-col sm:gap-2">
                        <span>Signin to your</span>
                        <span>PopX account</span>
                    </h1>
                    
                    <p className="text-sm opacity-60 sm:text-center max-w-[350px] font-semibold mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione eum facilis.</p>
                </div>

                <InputText placeholder="Enter email address" label="Emain Address" required={true} type="email" />
                <InputText placeholder="Enter password" label="Password" required={true} type="password" />

                <div className="flex">
                    <Button>Login</Button>
                </div>
            </form>
        </div>
    )
}