import logoImg from '../assets/images/logo.png'

export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <img
        src={logoImg}
        alt="StudyPath AI"
        className="h-10 w-auto object-contain"
      />
    </a>
  )
}