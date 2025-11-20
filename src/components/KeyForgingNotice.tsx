export default function KeyForgingNotice() {
  return (
    <div className="glass-panel rounded-2xl p-8 my-8 text-left relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
      <h2 className="text-2xl font-bold mb-4 text-white tracking-tight flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Key Forging in Process
      </h2>
      <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
        Acquisition confirmed. The system is currently forging your unique, secure access key. It is being encrypted and dispatched to your inbox.
        <br />
        <span className="text-sm opacity-70 mt-2 block">Estimated arrival: &lt; 60 seconds.</span>
      </p>
      <div className="p-4 bg-black/30 rounded-xl border border-white/5">
        <p className="text-lg font-medium text-white mb-1">
          Check Your Inbox
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          You may now safely close this terminal.
        </p>
      </div>
    </div>
  )
}
