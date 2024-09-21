import { GlobeAmericasIcon } from '@heroicons/react/24/solid'
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function AcmeLogo() {
  return (
    <Link href='/'>
      <div
        className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      >
        <GlobeAmericasIcon className="h-12 w-12 rotate-[15deg]" />
        <p className="text-[44px]">BillFlow</p>
      </div>
    </Link>  
  );
}
