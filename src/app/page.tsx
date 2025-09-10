import Page from './components/posts';
import CreatePostButton from './components/CreatePostsButton';
import { auth } from "./auth"
 

export default function Home() {
  return (
    <>
      <div className="text-center text-3xl">Aaron&apos;s Blogger</div>
      <div className="text-center text-base pt-3 pb-3"> Welcome to my blogs</div>
      <CreatePostButton />
      <Page />
    </>
  );
} 
