import PageShell from './_PageShell'
import { QcContact, QcInvestor } from '@/components/QuantumCodon'

export default function Contact() {
  return (
    <PageShell className="bg-[#fcf7f2] dark:bg-[#150f0a]">
      <QcInvestor />
      <QcContact />
    </PageShell>
  )
}