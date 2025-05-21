import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/InputText";

export default function Signup(){

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        navigate('/account-setting')
    }

    return (
        <div className="w-full h-full flex sm:items-center justify-center p-2 pt-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[400px]">
                <h1 className="text-2xl sm:justify-center font-semibold flex max-sm:flex-col sm:gap-2 mb-5">
                    <span>Create your</span>
                    <span>PopX Account</span>
                </h1>

                <Input placeholder="Enter Full Name" label="Full Name" required={true} />
                <Input placeholder="Enter Phone number" label="Phome number" required={true} type="tel" />
                <Input placeholder="Enter Email address" label="Email address" required={true} type="email" />
                <Input placeholder="Enter password" label="Password" required={true} type="password" />
                <Input placeholder="Enter Company name" label="Company name" required={true} />
                <div className="text-sm font-semibold opacity-80">
                    <h1>Are you an Agency ?</h1>
                    
                    <input id="isAgency-yes" type="radio" name="isAgency" required={true}  />
                    <label htmlFor="isAgency-yes" className="px-1">Yes</label>

                    <input id="isAgency-no" type="radio" name="isAgency" className="ml-4" required={true} />
                    <label htmlFor="isAgency-no" className="px-1">No</label>
                </div>

                <div className="flex mt-10">
                    <Button>Create Account</Button>
                </div>
            </form>
        </div>
    )
}