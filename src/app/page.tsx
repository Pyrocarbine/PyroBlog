import Page from './components/posts';
import CreatePostButton from './components/CreatePostsButton';
import { auth } from "./auth"
 

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="text-center text-3xl mb-5">{session?.user ? "Welcome back to PyroBlog, " + session.user.name
      : "Welcome to PyroBlog"
      }</div>
      <CreatePostButton text="Sign in to post new blogs"/>
      <Page />
    </>
  );
} 
