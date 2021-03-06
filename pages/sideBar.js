import Footer from './footer';
import Link from 'next/Link';

export default function SideBar() {
  return (
    <div id="sidebar-container" className="crazy-border">
      <div className="crazy-border sidebar-header">

        <img src="profile.jpg" alt="picture of author" id="profile-pic"/>
        <div>Khuong Le</div>
        <div id="profile-email">khnghle@gmail.com</div>
      </div>

      <div className="crazy-border sidebar-link">
        <div>
          <Link href="/">Home</Link>
        </div>
        <hr className="solid" />
        <div>
          <Link href="/about">About</Link>
        </div>
        <hr className="solid" />

        <div>
          <Link
            href="/projects"
          >
            Projects
          </Link>
        </div>

        <hr className="solid" />
      </div>

      <Footer className="sidebar-footer" />
    </div>
  );
}
