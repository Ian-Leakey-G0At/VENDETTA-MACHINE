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
    <main className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you — Purchase complete</h1>

      <p className="mb-6 text-lg">
        Your purchase of <strong>{product}</strong> was successful.
      </p>

      {amount && (
        <p className="mb-3">Amount: <strong>{amount}</strong></p>
      )}

      {orderId ? (
        <p className="mb-6">Order ID: <strong>{orderId}</strong></p>
      ) : (
        <p className="mb-6">If you provided an email at checkout, a receipt will arrive shortly.</p>
      )}

      <KeyForgingNotice />

      <div className="flex flex-col items-center gap-4">
        <Link href="/">
          <a className="inline-block bg-black text-white py-2 px-4 rounded">Back to gallery</a>
        </Link>

        <Link href="/art">
          <a className="text-sm underline">Browse other pieces</a>
        </Link>
      </div>
    </main>
  )
}
