import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import ScrollProgress from '../components/ScrollProgress';
import SkillsSection from '../components/SkillsSection';
import WizardWorldSection from '../components/WizardWorldSection';
import MagicalExperience from '../components/MagicalExperience';

function Divider() {
  return <hr />;
}

export default function Home() {
  return (
    <>
      <MagicalExperience />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Divider />
        <AboutSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <EducationSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <WizardWorldSection />
        <Divider />
        <ServicesSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
