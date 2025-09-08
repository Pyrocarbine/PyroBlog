import { signIn } from "../auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit"  className="cursor-pointer border border-red-500 px-4 py-2 rounded hover:bg-red-50 transition" >Signin with Google</button>
    </form>
  )
} 