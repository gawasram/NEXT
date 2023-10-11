import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ImageViewer: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const imageUrl = `https://gateway.pinata.cloud/ipfs/${id}`;

  return (
    <div>
      <Image src={imageUrl} alt={`Image ${id}`} width={600} height={300} />
    </div>
  );
};

export default ImageViewer;
