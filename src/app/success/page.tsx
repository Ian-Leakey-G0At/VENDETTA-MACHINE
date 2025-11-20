import Link from 'next/link'
import KeyForgingNotice from '@/components/KeyForgingNotice'

type Props = {
  searchParams?: {
    product?: string
    order_id?: string
    amount?: string
  }
}

export default function SuccessPage({ searchParams }: Props) {
  const product = searchParams?.product || 'your art'
  const orderId = searchParams?.order_id
  const amount = searchParams?.amount

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center min-h-screen flex flex-col justify-center">
      <div className="glass-panel rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
          Acquisition Complete
        </h1>

        <p className="mb-8 text-lg text-[var(--color-text-secondary)]">
          Your purchase of <strong className="text-white">{product}</strong> was successful. KEEP AN EYE OUT FOR AN EMAIL😉
        </p>

        {(amount || orderId) && (
          <div className="mb-8 p-4 bg-black/20 rounded-xl border border-white/5 text-left inline-block w-full max-w-md">
            {amount && (
              <div className="flex justify-between mb-2">
                <span className="text-[var(--color-text-secondary)]">Amount:</span>
                <strong className="text-white">{amount}</strong>
              </div>
            )}
            {orderId && (
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Order ID:</span>
                <strong className="text-white font-mono text-sm">{orderId}</strong>
              </div>
            )}
          </div>
        )}

        {!orderId && (
          <p className="mb-6 text-[var(--color-text-secondary)]">If you provided an email at checkout, a receipt will arrive shortly.</p>
        )}

        <KeyForgingNotice />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href="/" className="glass-button w-full sm:w-auto text-center">
            Return to Gallery
          </Link>

          <Link href="/art" className="text-sm text-[var(--color-text-secondary)] hover:text-white underline transition-colors">
            Browse other artifacts
          </Link>
        </div>
      </div>
    </main>
  )
}
