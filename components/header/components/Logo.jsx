import Link from 'next/link';

export default function Logo () {
  return (
    <div className='logo__wrapper'>
      <Link href='/'>
        <a className='logo__link'>
          <img className='logo' src='/img/logo.png' alt='Логотип' />
        </a>
      </Link>
    </div>
  )
}
