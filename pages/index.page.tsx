import About from '@/components/about';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import NavBar from '@/components/nav-bar';
import Tech from '@/components/tech';

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
		</main>
	);
}
