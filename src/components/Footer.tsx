export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <span>Partner panel © Aromatherapy Shop - {currentYear}</span>
    </footer>
  )
}
