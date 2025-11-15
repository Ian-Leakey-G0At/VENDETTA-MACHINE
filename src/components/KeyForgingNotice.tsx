export default function KeyForgingNotice() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Your Key is Being Forged</h2>
      <p className="text-gray-300 mb-6">
        Your acquisition is confirmed. A secure, personal access key is now being dispatched to your
        email inbox. It should arrive within the next 60 seconds.
      </p>
      <p className="text-lg font-medium text-white">
        Check Your Inbox
      </p>
      <p className="text-sm text-gray-400 mt-2">
        You may now close this page.
      </p>
    </div>
  )
}
