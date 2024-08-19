export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <span>Partner panel © <b>aromatherapy</b>.shop - {currentYear}</span>
    </footer>
  )
}
