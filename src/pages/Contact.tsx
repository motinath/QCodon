import { ContactHero } from '@/components/contact/ContactHero'
import { ContactChannels } from '@/components/contact/ContactChannels'
import { ContactForm } from '@/components/contact/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <ContactHero />
      <ContactChannels />
      <ContactForm />
    </div>
  )
}
