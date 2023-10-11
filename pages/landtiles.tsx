import React from 'react';
import Image from 'next/image';  
import Link from 'next/link';
import { useRouter } from 'next/router'; 

const imageUrls = [
  'https://gateway.pinata.cloud/ipfs/QmUndB5xnuoX7BXEaydXvJnM23jKPPdWdiBjUba9W9jr8U',
  'https://gateway.pinata.cloud/ipfs/QmX7UmuXDLZJ1S51ip4LDMdqVue7zoZKfKzuLmGzGGQHEZ',
  'https://gateway.pinata.cloud/ipfs/Qmaw3R18YohXs1wMW61vYEsXdDnqvN2a2mH5Uph8p2bCie',
  'https://gateway.pinata.cloud/ipfs/Qmc3csLR4S6v5KAPFioTGtoZNk31kmAoGkQswq5WSmg5AT',
  'https://gateway.pinata.cloud/ipfs/QmU8bFTSUX89D6vEfqsMvmSqZB3rrvK3dF6C6waPLqP28r',
  'https://gateway.pinata.cloud/ipfs/QmNec94dUYbCss3AkRT2jmbcaQaeFLtasVpimzrzokgUTo',
  'https://gateway.pinata.cloud/ipfs/Qmf9yuWehjaeQfPK1UPvqm9kpyKzFb9qJbTfhY7jpaRGoB',
  'https://gateway.pinata.cloud/ipfs/QmVFR51CEgv2ARXJht4MyprKYmFnnn1m2Ebx4JcM6ixuxR',
  'https://gateway.pinata.cloud/ipfs/QmQYny5UaZ2bq4Y8vikpGp1NWxFLT3rApQKDqHTnKqUS8x',
  'https://gateway.pinata.cloud/ipfs/QmQnj2MYm7fTVxFxXVJfJUWhC5CaAdXMWMPZkzo4unKyW1',
  'https://gateway.pinata.cloud/ipfs/QmNntUmq1qUMSjhq4UnGrqwmiBWwkwfFoo4tkkzw7CyCZK',
  'https://gateway.pinata.cloud/ipfs/QmaXv3sQpFsJfkFJcKSCzN4gowfqfiERJ2VMCLKhtagWkX',
  'https://gateway.pinata.cloud/ipfs/QmdysrCv5Hf4hvreNhz1L3JjeDxKrkRgZd5aQvCSL8BDhq',
  'https://gateway.pinata.cloud/ipfs/QmYjPsDb1Hv9YaXdnur84e5DcJhcmWzimy5wzrLmHe6qwQ',
  'https://gateway.pinata.cloud/ipfs/QmYar2VmfZLezpppdX5jXnEorQhWHVabHwYgbAdsGk4ecv',
  'https://gateway.pinata.cloud/ipfs/QmUDNYuQqoJTsokXwRapcSkMX3w3m5QJG5tVQobcQe89tc'
];

const Home: React.FC = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="relative h-screen w-full">
      
      {/* HOME Button */}
      <button 
        className="absolute top-4 right-4 bg-blue-500 text-white px-5 py-2 rounded" 
        onClick={handleBack}
      >
        HOME
      </button>

      {/* Images Grid */}
      <div className="grid grid-rows-4 grid-flow-col gap-0 m-12">
        {imageUrls.map((url, index) => {
          const ipfsHash = url.split('/').pop();
          return (
            <Link href={`/users/${ipfsHash}`} key={index} passHref>
              <div className="block grid-item cursor-pointer w-100 h-50">
                <Image src={url} alt={`Image ${index + 1}`} width={100} height={50} className="object-cover" />
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default Home;