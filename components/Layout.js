import Config from './config/Config';
// import Footer from './Footer';

export default function Layout({ story, children }) {
  return (
    <div>
      <Config blok={story.content} />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
