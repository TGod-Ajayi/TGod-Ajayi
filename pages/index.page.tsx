import About from '@/components/about';
import Blog from '@/components/blog';
import { StarsCanvas } from '@/components/canvas';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import NavBar from '@/components/nav-bar';
import Tech from '@/components/tech';
import Work from '@/components/work';

export default function Home() {
	return (
		<main className={`relative z-0 bg-primary`}>
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<NavBar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Work />
			<Blog />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</main>
	);
}
