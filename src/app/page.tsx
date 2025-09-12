import Page from './components/posts';
import CreatePostButton from './components/CreatePostsButton';
import { auth } from "./auth"
 

export default function Home() {
  return (
    <>
      <div className="text-center text-3xl mb-5">Welcome to PyroBlog</div>
      <CreatePostButton />
      <Page />
    </>
  );
} 
