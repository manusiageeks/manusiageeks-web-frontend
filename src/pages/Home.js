import { ThemeProvider } from 'react-bootstrap';
import {
  Header,
  AboutUs,
  MediaSocial,
  Projects,
  Contributors,
  Footer,
} from '../sections';

function Home() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      {/* Header */}
      <Header />

      {/* About Us */}
      <AboutUs />

      {/* Media Social */}
      <MediaSocial />

      {/* Projects */}
      <Projects />

      {/* Contributors */}
      <Contributors />

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
