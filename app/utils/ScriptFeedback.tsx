'use client'

import { useEffect, useState } from 'react';
import Script from 'next/script';

const FeedbackScript = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // The window object is only available in the browser, not during SSR.
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Script
      src="https://forms.app/static/embed.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (window.formsapp) {
          window.formsapp('65bc62fa7f28251ed0fe2533', 'sidetab', {
            button: {
              text: 'Feedback. Click here!',
              color: '#ff9e24'
            },
            align: {
              horizontal: 'right',
              vertical: 'middle'
            },
            width: '400px',
            height: '500px'
          });
        }
      }}
    />
  );
};

export default FeedbackScript;
