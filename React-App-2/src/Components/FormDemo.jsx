import {useForm} from 'react-hook-form'

function FormDemo(){
    const {
        register,//to register form fields
        handleSubmit,//to handle form submission
        formState:{ errors},//to handle validations
    }=useForm();
console.log("Form Demo Rendering");
    //form submit functiob
    const onFormSubmit=(obj)=>{
        console.log(obj);
    };
    return(
        <div>
            <h1 className='text-center text-5xl'>Form Demo</h1>
            <form className="max-w-md mx-auto mt-10 "onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="username">Username</label>
                     <input
            type="text"
            {...register("username", 
                {
              required: "Username required",
              validate: (v) => v.trim().length !== 0 || "Whitespace is not valid",
            })}
            id="username"
            className="border w-full p-3"
          />
                     {/*username validation error message */}
                        {errors.username?.type==="required" && <p className='text-red-600'>{errors.username.message}</p>}
                     {/*   {errors.username?.type==="minLength" && <p className='text-red-600'>User name should be of min length of 4 characters</p>}  */} 
                    {errors.username?.type==="validate" && <p className='text-red-600'>White space is not considered</p>}
                     
                    
                </div>
                <div className='mb-3'>
                <label htmlFor="email">email</label>
                <input type="email" {...register("email")} id="email" className="border w-full p-3" />
                </div>
                <button type="submit" className='bg-amber-300 block mx-auto'>Submit</button>
            </form>
        </div>
    )
}
export default FormDemo